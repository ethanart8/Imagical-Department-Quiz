import { createContext, useCallback, useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoSmall from '../assets/shared/logo-small.png';

const OVERLAY_FADE_MS = 350;
const OVERLAY_FADE_TO_RESULTS = 600;
const QUESTION_FADE_MS = 200;
const LOGO_FADE_MS = 400;
// 8 alternate iterations × 100ms = 800ms, 4 full pulses ending at opacity 1
const LOGO_PULSE_ANIM = 'logoPulse 600ms ease-in-out 4 alternate';
const LOGO_PULSE_DURATION = 2000;

const TransitionCtx = createContext(null);

function LogoDisplay() {
  const [loaded, setLoaded] = useState(false);
  const [pulsing, setPulsing] = useState(false);

  return (
    <img
      src={logoSmall}
      alt="imagical"
      onLoad={() => setLoaded(true)}
      onTransitionEnd={(e) => {
        if (e.propertyName === 'opacity') setPulsing(true);
      }}
      style={{
        width: '50vw',
        opacity: loaded ? 1 : 0,
        transition: pulsing ? 'none' : `opacity ${LOGO_FADE_MS}ms ease`,
        animation: pulsing ? LOGO_PULSE_ANIM : 'none',
      }}
    />
  );
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

export function TransitionProvider({ children }) {
  const navigate = useNavigate();
  const busyRef = useRef(false);

  // Full-page overlay (non-question transitions + results)
  const [overlayPhase, setOverlayPhase] = useState('idle'); // 'idle' | 'covering' | 'logo'

  // Questions-section-only fade
  const [questionsOut, setQuestionsOut] = useState(false);

  // Tracks current page's progress so the next page can start its bar from there
  const registeredProgressRef = useRef(0);
  const prevQuestionProgressRef = useRef(0);

  const registerQuestionProgress = useCallback((percent) => {
    registeredProgressRef.current = percent;
  }, []);

  const transitionNavigate = useCallback(async (path) => {
    if (busyRef.current) return;
    busyRef.current = true;

    const fromQuestion = window.location.hash.startsWith('#/question/');
    const toQuestion = path.startsWith('/question/');
    const toResults = path.startsWith('/results');

    if (fromQuestion && toQuestion) {
      // Fade questions only; progress bar animates independently in QuestionsPage
      setQuestionsOut(true);
      await sleep(QUESTION_FADE_MS);
      prevQuestionProgressRef.current = registeredProgressRef.current;
      navigate(path);
      await sleep(30);
      setQuestionsOut(false);
      await sleep(QUESTION_FADE_MS + 50);
    } else if (toResults) {
      // Full overlay → logo pulses → results page fades in
      setOverlayPhase('covering');
      await sleep(OVERLAY_FADE_TO_RESULTS);
      setOverlayPhase('logo');
      await sleep(LOGO_FADE_MS + LOGO_PULSE_DURATION);
      navigate(path);
      window.scrollTo(0, 0);
      await sleep(50);
      setOverlayPhase('idle');
      await sleep(OVERLAY_FADE_MS);
    } else {
      // Standard full-page fade
      setOverlayPhase('covering');
      await sleep(OVERLAY_FADE_MS);
      navigate(path);
      window.scrollTo(0, 0);
      await sleep(50);
      setOverlayPhase('idle');
      await sleep(OVERLAY_FADE_MS);
    }

    busyRef.current = false;
  }, [navigate]);

  const overlayVisible = overlayPhase !== 'idle';
  const logoVisible = overlayPhase === 'logo';

  return (
    <TransitionCtx.Provider value={{
      transitionNavigate,
      questionsOut,
      prevQuestionProgressRef,
      registerQuestionProgress,
    }}>
      {children}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: '#1e1e1e',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: overlayVisible ? 1 : 0,
          pointerEvents: overlayVisible ? 'all' : 'none',
          transition: `opacity ${OVERLAY_FADE_MS}ms ease`,
        }}
      >
        {logoVisible && <LogoDisplay />}
      </div>
    </TransitionCtx.Provider>
  );
}

export function useTransitionNavigate() {
  return useContext(TransitionCtx).transitionNavigate;
}

export function useQuestionTransition() {
  const { questionsOut, prevQuestionProgressRef, registerQuestionProgress } = useContext(TransitionCtx);
  return { questionsOut, prevQuestionProgressRef, registerQuestionProgress };
}
