import { useTransitionNavigate } from '../context/TransitionContext';
import FigmaScale from '../components/FigmaScale';
import logoSmall from '../assets/shared/logo-small.png';
import paperImg from '../assets/intro/paper.png';
import clampImg from '../assets/intro/clamp.png';
import stickerImg from '../assets/intro/sticker.png';
import paperclipImg from '../assets/intro/paperclip.png';

export default function IntroPage() {
  const navigate = useTransitionNavigate();

  return (
    <FigmaScale height={3384.8369140625}>
      <div style={{ position: 'relative', width: '100%', height: '100%', background: '#1e1e1e' }}>
        {/* Logo */}
        <img
          src={logoSmall}
          alt="imagical"
          onClick={() => navigate('/')}
          style={{
            position: 'absolute',
            left: 92.95,
            top: 92.95,
            width: 274.97,
            height: 87.405,
            objectFit: 'cover',
            cursor: 'pointer',
          }}
        />

        {/* paper image */}
        <div style={{ position: 'absolute', left: 1070.16, top: 462.47, width: 627, height: 665 }}>
          <img src={paperImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* clamp image (rotated, cropped) */}
        <div
          style={{
            position: 'absolute',
            left: 728.09,
            top: 248,
            width: 580.923,
            height: 574.345,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ transform: 'rotate(-49.25deg)' }}>
            <div style={{ position: 'relative', width: 378.151, height: 440.994, overflow: 'hidden' }}>
              <img
                src={clampImg}
                alt=""
                style={{
                  position: 'absolute',
                  left: '-27.7%',
                  top: '-16.63%',
                  width: '155.4%',
                  height: '133.26%',
                }}
              />
            </div>
          </div>
        </div>

        {/* sticker image (rotated) */}
        <div
          style={{
            position: 'absolute',
            left: -154.91,
            top: 2091.32,
            width: 975.244,
            height: 785.09,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ transform: 'rotate(20.4deg)', width: 846, height: 523 }}>
            <img src={stickerImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* paperclip image (rotated) */}
        <div
          style={{
            position: 'absolute',
            left: 751.33,
            top: 2559.93,
            width: 1379.957,
            height: 1330.095,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ transform: 'rotate(-51.46deg)', width: 807.506, height: 1121.024 }}>
            <img src={paperclipImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* hero title */}
        <div style={{ position: 'absolute', left: '50%', top: 1230.59, transform: 'translateX(-50%)' }}>
          <div
            style={{
              background: '#43dad6',
              display: 'flex',
              alignItems: 'center',
              height: 191.704,
              padding: '11.618px 58.092px',
              width: 662.251,
            }}
          >
            <p
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: 139.421,
                color: '#0e5757',
                whiteSpace: 'nowrap',
                margin: 0,
              }}
            >
              WHAT'S
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 192,
              width: 1365,
              marginTop: 28.41,
            }}
          >
            <div style={{ background: '#fff', display: 'flex', alignItems: 'center', padding: '11.618px 58.092px' }}>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 139.421,
                  color: '#0e5757',
                  whiteSpace: 'nowrap',
                  margin: 0,
                }}
              >
                YOUR
              </p>
            </div>
            <div style={{ background: '#fff', display: 'flex', alignItems: 'center', padding: '11.618px 58.092px' }}>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 139.421,
                  color: '#0e5757',
                  whiteSpace: 'nowrap',
                  margin: 0,
                }}
              >
                IMAGICAL
              </p>
            </div>
          </div>

          <div
            style={{
              background: '#0e5757',
              display: 'flex',
              alignItems: 'center',
              height: 191.704,
              padding: '11.618px 58.092px',
              width: 1150.225,
              marginTop: 28.41,
              marginLeft: 214.775,
            }}
          >
            <p
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: 139.421,
                color: '#43dad6',
                whiteSpace: 'nowrap',
                margin: 0,
              }}
            >
              DEPARTMENT?
            </p>
          </div>
        </div>

        {/* intro button */}
        <button
          type="button"
          onClick={() => navigate('/question/1')}
          style={{
            position: 'absolute',
            left: 515.08,
            top: 1928.66,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 7.746,
            padding: '19.364px 77.456px',
            border: '3.873px solid #fff',
            borderRadius: 387.281,
            background: 'transparent',
            color: '#fff',
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: 46.474,
            whiteSpace: 'nowrap',
            cursor: 'pointer',
          }}
        >
          <span>Find out Now</span>
          <span>--&gt;</span>
        </button>
      </div>
    </FigmaScale>
  );
}
