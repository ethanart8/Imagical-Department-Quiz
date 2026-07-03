import FigmaScale from '../../components/FigmaScale';
import ResultsCommon from '../../components/results/ResultsCommon';
import ResultsHero from '../../components/results/ResultsHero';
import resultsBackground from '../../assets/shared/Results Background (new).png';
import chessPieceImg from '../../assets/results/strategy/chess-piece.png';
import stickerImg from '../../assets/results/strategy/sticker.png';

export default function StrategyResults() {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <img src={resultsBackground} alt="" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <FigmaScale height={10155}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <ResultsCommon />

          <div
            style={{
              position: 'absolute',
              left: -247.86,
              top: 1062.54,
              width: 698.387,
              height: 1131.833,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ transform: 'rotate(16.44deg)' }}>
              <div style={{ position: 'relative', width: 416.245, height: 1057.262, opacity: 0.75, overflow: 'hidden' }}>
                <img src={chessPieceImg} alt="" style={{ position: 'absolute', left: '-100%', top: '-9.06%', width: '300%', height: '118.11%' }} />
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              left: 824.91,
              top: 284.1,
              width: 970.028,
              height: 769.497,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ transform: 'rotate(-18.96deg)', width: 846, height: 523 }}>
              <img src={stickerImg} alt="Hello I'm part of the Strategy Department" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          <ResultsHero
            title="STRATEGY"
            description="You'd be a perfect fit among our strategists! Responsible for laying out the groundwork for our entire campaign, our strategy department conducts research, surveys, and so much more to develop the heart of our marketing."
          />
        </div>
      </FigmaScale>
    </div>
  );
}
