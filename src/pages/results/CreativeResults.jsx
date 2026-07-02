import FigmaScale from '../../components/FigmaScale';
import ResultsCommon from '../../components/results/ResultsCommon';
import ResultsHero from '../../components/results/ResultsHero';
import resultsBackground from '../../assets/shared/Results Background (new).png';
import lightbulbImg from '../../assets/results/creative/lightbulb.png';
import cumpledPaperImg from '../../assets/results/creative/cumpled-paper.png';

export default function CreativeResults() {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <img src={resultsBackground} alt="" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <FigmaScale height={10155}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <ResultsCommon />

          <img src={lightbulbImg} alt="" style={{ position: 'absolute', left: 747.11, top: 131.99, width: 808, height: 938, objectFit: 'cover' }} />
          <img src={cumpledPaperImg} alt="" style={{ position: 'absolute', left: -236.57, top: 1502.78, width: 694, height: 893, objectFit: 'cover' }} />

          <ResultsHero
            title="CREATIVE"
            description="You'd be a perfect fit among our creatives! Constantly ideating the wacky, out of the box ideas that breath life into our campaigns, our creative department looks for candid individuals ready to spit ball the most wild ideas at any time! "
          />
        </div>
      </FigmaScale>
    </div>
  );
}
