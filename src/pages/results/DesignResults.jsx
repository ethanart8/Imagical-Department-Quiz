import FigmaScale from '../../components/FigmaScale';
import ResultsCommon from '../../components/results/ResultsCommon';
import ResultsHero from '../../components/results/ResultsHero';
import resultsBackground from '../../assets/shared/Results Background (new).png';
import pencilImg from '../../assets/results/design/pencil.png';
import designImage1 from '../../assets/results/design/design-image.png';

export default function DesignResults() {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <img src={resultsBackground} alt="" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <FigmaScale height={10155}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <ResultsCommon />

          <img src={pencilImg} alt="" style={{ position: 'absolute', left: -25.16, top: -304.57, width: 1991, height: 1440, objectFit: 'cover' }} />
          <img src={designImage1} alt="" style={{ position: 'absolute', left: -152.96, top: 1827.42, width: 677.14, height: 981.793, objectFit: 'cover' }} />

          <ResultsHero
            title="DESIGN"
            description="You'd be a perfect fit among our designers! Those with a eye for detail and imagination to bring all of our department's work to life will find themselves right at home among our talented designers."
          />
        </div>
      </FigmaScale>
    </div>
  );
}
