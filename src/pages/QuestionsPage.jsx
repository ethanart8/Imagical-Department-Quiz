import { useEffect, useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import { QUESTION_PAGES, computeWinningDepartment } from '../data/quizData';
import { useTransitionNavigate, useQuestionTransition } from '../context/TransitionContext';
import logoSmall from '../assets/shared/logo-small.png';
import radioButton from '../assets/shared/radio-button.svg';

const QUESTION_FADE_MS = 200;
const BAR_ANIM_MS = 500;

// Converts a value from the original 3384.84-unit design space to a vh string.
const v = (n) => `${(n / 3384.84 * 100).toFixed(3)}vh`;

export default function QuestionsPage({ pageIndex }) {
  const navigate = useTransitionNavigate();
  const { answers, selectAnswer } = useQuiz();
  const page = QUESTION_PAGES[pageIndex];

  const { questionsOut, prevQuestionProgressRef, registerQuestionProgress } = useQuestionTransition();

  const [barWidth, setBarWidth] = useState(() => prevQuestionProgressRef.current);

  useEffect(() => {
    registerQuestionProgress(page.progressPercent);
    const t = setTimeout(() => setBarWidth(page.progressPercent), 30);
    return () => clearTimeout(t);
  }, []);

  const handleBack = () => {
    if (pageIndex === 0) {
      navigate('/');
    } else {
      navigate(`/question/${pageIndex}`);
    }
  };

  const handleNext = () => {
    if (pageIndex === QUESTION_PAGES.length - 1) {
      const winner = computeWinningDepartment(answers);
      navigate(`/results/${winner}`);
    } else {
      navigate(`/question/${pageIndex + 2}`);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', background: '#1e1e1e' }}>
      <img
        src={logoSmall}
        alt="imagical"
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          left: v(92.95),
          top: v(92.95),
          width: v(274.97),
          height: v(87.405),
          objectFit: 'cover',
          cursor: 'pointer',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: v(550),
          left: '50%',
          transform: 'translateX(-50%)',
          width: v(1328.374),
          display: 'flex',
          flexDirection: 'column',
          gap: v(116.184),
          alignItems: 'center',
        }}
      >
        {/* Progress bar — not faded, animates independently */}
        <div style={{ position: 'relative', width: '100%', height: v(46.474) }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              border: `${v(3.873)} solid #0e5757`,
              borderRadius: v(387.281),
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: v(46.474),
              width: `${barWidth}%`,
              background: '#43dad6',
              borderRadius: v(387.281),
              transition: `width ${BAR_ANIM_MS}ms ease`,
            }}
          />
        </div>

        {/* Questions + buttons — fade in/out on page transitions */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: v(116.184),
            width: '100%',
            opacity: questionsOut ? 0 : 1,
            transition: `opacity ${QUESTION_FADE_MS}ms ease`,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: v(116.184), width: '100%' }}>
            {page.questions.map((question) => (
              <div key={question.number} style={{ display: 'flex', flexDirection: 'column', gap: v(27.11) }}>
                <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 500, fontSize: v(61.965), color: '#fff' }}>
                  {question.number}. {question.text}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: v(15.491), width: '100%' }}>
                  {question.choices.map((choice, choiceIndex) => {
                    const selected = answers[question.number] === choiceIndex;
                    return (
                      <div
                        key={choiceIndex}
                        onClick={() => selectAnswer(question.number, choiceIndex)}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: v(35.04), cursor: 'pointer' }}
                      >
                        <div
                          style={{
                            position: 'relative',
                            width: v(38.728),
                            height: v(38.728),
                            marginTop: v(15.49),
                            flexShrink: 0,
                          }}
                        >
                          <img src={radioButton} alt="" style={{ width: '100%', height: '100%' }} />
                          {selected && (
                            <div
                              style={{
                                position: 'absolute',
                                top: '25%',
                                left: '25%',
                                width: '50%',
                                height: '50%',
                                borderRadius: '50%',
                                background: '#43dad6',
                              }}
                            />
                          )}
                        </div>
                        <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 300, fontSize: v(54.219), color: '#fff' }}>
                          {choice}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Back / Next buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <button
              type="button"
              onClick={handleBack}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: v(7.746),
                padding: `${v(19.364)} ${v(77.456)}`,
                border: `${v(3.873)} solid #fff`,
                borderRadius: v(387.281),
                background: 'transparent',
                color: '#fff',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: v(46.474),
                whiteSpace: 'nowrap',
                cursor: 'pointer',
              }}
            >
              <span style={{ display: 'inline-block', transform: 'scaleY(-1) rotate(180deg)' }}>--&gt;</span>
              <span>Back</span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: v(7.746),
                padding: `${v(19.364)} ${v(77.456)}`,
                border: `${v(3.873)} solid #fff`,
                borderRadius: v(387.281),
                background: 'transparent',
                color: '#fff',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: v(46.474),
                whiteSpace: 'nowrap',
                cursor: 'pointer',
              }}
            >
              <span>Next</span>
              <span>--&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
