import { useTransitionNavigate } from '../context/TransitionContext';
import logoSmall from '../assets/shared/logo-small.png';
import paperImg from '../assets/intro/paper.png';
import clampImg from '../assets/intro/clamp.png';
import stickerImg from '../assets/intro/sticker.png';
import paperclipImg from '../assets/intro/paperclip.png';

// Converts a value from the original 3384.84-unit design space to a vh string.
// All sizing uses vh so everything scales proportionally with viewport height.
const v = (n) => `${(n / 3384.84 * 100).toFixed(3)}vh`;

export default function IntroPage() {
  const navigate = useTransitionNavigate();

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', background: '#1e1e1e' }}>

      {/* Logo */}
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
          zIndex: 1,
        }}
      />

      {/* Paper — right edge */}
      <div style={{ position: 'absolute', right: v(-140.29), top: v(462.47), width: v(627), height: v(665) }}>
        <img src={paperImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Clamp — upper right */}
      <div
        style={{
          position: 'absolute',
          right: v(247.857),
          top: v(248),
          width: v(580.923),
          height: v(574.345),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ transform: 'rotate(-49.25deg)' }}>
          <div style={{ position: 'relative', width: v(378.151), height: v(440.994), overflow: 'hidden' }}>
            <img
              src={clampImg}
              alt=""
              style={{ position: 'absolute', left: '-27.7%', top: '-16.63%', width: '155.4%', height: '133.26%' }}
            />
          </div>
        </div>
      </div>

      {/* Sticker — left edge */}
      <div
        style={{
          position: 'absolute',
          left: v(-154.91),
          top: v(2091.32),
          width: v(975.244),
          height: v(785.09),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ transform: 'rotate(20.4deg)', width: v(846), height: v(523) }}>
          <img src={stickerImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* Paperclip — right edge, lower */}
      <div
        style={{
          position: 'absolute',
          right: v(-574.417),
          top: v(2559.93),
          width: v(1379.957),
          height: v(1330.095),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ transform: 'rotate(-51.46deg)', width: v(807.506), height: v(1121.024) }}>
          <img src={paperclipImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* Hero title — always centered */}
      <div style={{ position: 'absolute', top: v(1230.59), left: '50%', transform: 'translateX(-50%)' }}>
        <div
          style={{
            background: '#43dad6',
            display: 'flex',
            alignItems: 'center',
            height: v(191.704),
            padding: `${v(11.618)} ${v(58.092)}`,
            width: v(662.251),
          }}
        >
          <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: v(139.421), color: '#0e5757', whiteSpace: 'nowrap', margin: 0 }}>
            WHAT'S
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: v(192),
            width: v(1365),
            marginTop: v(28.41),
          }}
        >
          <div style={{ background: '#fff', display: 'flex', alignItems: 'center', padding: `${v(11.618)} ${v(58.092)}` }}>
            <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: v(139.421), color: '#0e5757', whiteSpace: 'nowrap', margin: 0 }}>
              YOUR
            </p>
          </div>
          <div style={{ background: '#fff', display: 'flex', alignItems: 'center', padding: `${v(11.618)} ${v(58.092)}` }}>
            <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: v(139.421), color: '#0e5757', whiteSpace: 'nowrap', margin: 0 }}>
              IMAGICAL
            </p>
          </div>
        </div>

        <div
          style={{
            background: '#0e5757',
            display: 'flex',
            alignItems: 'center',
            height: v(191.704),
            padding: `${v(11.618)} ${v(58.092)}`,
            width: v(1150.225),
            marginTop: v(28.41),
            marginLeft: 'auto',
          }}
        >
          <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: v(139.421), color: '#43dad6', whiteSpace: 'nowrap', margin: 0 }}>
            DEPARTMENT?
          </p>
        </div>
      </div>

      {/* Intro button — always centered */}
      <button
        type="button"
        onClick={() => navigate('/question/1')}
        style={{
          position: 'absolute',
          top: v(1928.66),
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
        <span>Find out Now</span>
        <span>--&gt;</span>
      </button>

    </div>
  );
}
