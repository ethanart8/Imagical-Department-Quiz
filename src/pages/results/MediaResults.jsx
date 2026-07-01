import FigmaScale from '../../components/FigmaScale';
import ResultsCommon from '../../components/results/ResultsCommon';
import ResultsHero from '../../components/results/ResultsHero';
import clipboardImg from '../../assets/results/media/clipboard.png';
import moneyImg from '../../assets/results/media/money.png';

export default function MediaResults() {
  return (
    <FigmaScale height={10155}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <ResultsCommon />

        <img
          src={clipboardImg}
          alt=""
          style={{ position: 'absolute', left: -171.17, top: 2157.54, width: 805, height: 993, objectFit: 'cover' }}
        />

        <img
          src={moneyImg}
          alt=""
          style={{ position: 'absolute', left: 839.06, top: 379.58, width: 585.08, height: 691.427, objectFit: 'cover' }}
        />

        <ResultsHero
          title="MEDIA"
          description="You'd be a perfect fit among our media planners! One of our most technical departments, media is all about finances, numbers and planning ahead. This department is a “Type A” person's personal heaven!"
        />
      </div>
    </FigmaScale>
  );
}
