import FigmaScale from '../../components/FigmaScale';
import ResultsCommon from '../../components/results/ResultsCommon';
import ResultsHero from '../../components/results/ResultsHero';
import microphoneImg from '../../assets/results/pr/microphone.png';
import prImage1 from '../../assets/results/pr/pr-image.png';

export default function PrResults() {
  return (
    <FigmaScale height={10155}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <ResultsCommon />

        <img
          src={microphoneImg}
          alt=""
          style={{ position: 'absolute', left: 570.55, top: 219.77, width: 1093, height: 1002, objectFit: 'cover' }}
        />

        <img
          src={prImage1}
          alt=""
          style={{ position: 'absolute', left: -75.78, top: 2024.93, width: 595.26, height: 647.592, objectFit: 'cover' }}
        />

        <ResultsHero
          title="PUBLIC RELATION"
          deptBlockLeft={120}
          deptBlockWidth={1344}
          description="You'd be a perfect fit among our PR specialists! Are you up to date with the hottest trends, companies and celebrities? Public Relations is in charge of ideating partnerships and marketing activations for our campaign."
        />
      </div>
    </FigmaScale>
  );
}
