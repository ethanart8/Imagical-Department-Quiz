import { HashRouter, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import { TransitionProvider } from './context/TransitionContext';
import IntroPage from './pages/IntroPage';
import QuestionsPage from './pages/QuestionsPage';
import StrategyResults from './pages/results/StrategyResults';
import CreativeResults from './pages/results/CreativeResults';
import MediaResults from './pages/results/MediaResults';
import PrResults from './pages/results/PrResults';
import DesignResults from './pages/results/DesignResults';

export default function App() {
  return (
    <QuizProvider>
      <HashRouter>
        <TransitionProvider>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/question/1" element={<QuestionsPage key="q1" pageIndex={0} />} />
            <Route path="/question/2" element={<QuestionsPage key="q2" pageIndex={1} />} />
            <Route path="/question/3" element={<QuestionsPage key="q3" pageIndex={2} />} />
            <Route path="/results/strategy" element={<StrategyResults />} />
            <Route path="/results/creative" element={<CreativeResults />} />
            <Route path="/results/media" element={<MediaResults />} />
            <Route path="/results/pr" element={<PrResults />} />
            <Route path="/results/design" element={<DesignResults />} />
          </Routes>
        </TransitionProvider>
      </HashRouter>
    </QuizProvider>
  );
}
