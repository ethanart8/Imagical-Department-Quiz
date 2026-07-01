import { useTransitionNavigate } from '../../context/TransitionContext';
import logoSmall from '../../assets/shared/logo-small.png';
import logoLarge from '../../assets/shared/logo-large.svg';
import resultsBackground from '../../assets/shared/results-background.png';
import directorVideo from '../../assets/shared/director-video.jpg';
import clampImg from '../../assets/shared/clamp.png';
import arrowImg from '../../assets/shared/arrow.png';
import directorArrowImg from '../../assets/shared/director-arrow.png';
import paperclipsImg from '../../assets/shared/paperclips.png';
import smallPaperImg from '../../assets/shared/small-paper.png';
import fullLine from '../../assets/shared/full-line.svg';

const italicText = {
  fontFamily: "'Averia Serif Libre', serif",
  fontStyle: 'italic',
  fontWeight: 300,
  fontSize: 54.219,
  color: '#fff',
  margin: 0,
  whiteSpace: 'nowrap',
};

const SCHEDULE_ROWS = [
  { event: 'Info Session #1', date: '9/3 @ 7-9pm', dark: false },
  { event: 'Info Session #2 + Work Shop', date: '9/4 @ 7-9pm', dark: false },
  { event: 'Application Deadline', date: '9/6 @ 3pm', dark: true },
  { event: 'Individual Interviews*', date: '9/10', dark: false },
  { event: 'Meet & Greet*', date: '9/11 @ 7-9pm', dark: false },
  { event: 'Group Interviews*', date: '9/13', dark: false },
];

const dashedLineStyle = (color) => ({
  flex: '1 0 0',
  height: 1.93641,
  minWidth: 1,
  backgroundImage: `repeating-linear-gradient(to right, ${color} 0, ${color} 19.36px, transparent 19.36px, transparent 38.72px)`,
});

const COMPATIBILITY_ROWS = [
  { label: 'Strategy Department', percent: '90%', underline: false, path: '/results/strategy' },
  { label: 'Media Department', percent: '83%', underline: true, path: '/results/media' },
  { label: 'Design Department', percent: '75%', underline: true, path: '/results/design' },
  { label: 'Public Relations Department', percent: '71%', underline: true, path: '/results/pr' },
  { label: 'Creative Department', percent: '68%', underline: true, path: '/results/creative' },
];

function ScheduleRow({ event, date, dark }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 30.982, width: '100%' }}>
      <p style={{ ...italicText, color: dark ? '#1e1e1e' : '#fff' }}>{event}</p>
      <div style={dashedLineStyle(dark ? '#1e1e1e' : '#fff')} />
      <p style={{ ...italicText, color: dark ? '#1e1e1e' : '#fff' }}>{date}</p>
    </div>
  );
}

function CompatibilityRow({ label, percent, underline, path, onNavigate }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 30.982, width: '100%' }}>
      <p
        onClick={() => onNavigate(path)}
        style={{ ...italicText, textDecoration: underline ? 'underline' : 'none', cursor: 'pointer' }}
      >
        {label}
      </p>
      <div style={dashedLineStyle('#fff')} />
      <p style={italicText}>{percent}</p>
    </div>
  );
}

export default function ResultsCommon() {
  const navigate = useTransitionNavigate();

  return (
    <>
      {/* page background */}
      <img
        src={resultsBackground}
        alt=""
        style={{ position: 'absolute', left: 0, top: 0, width: 1556.87, height: 10155, objectFit: 'cover' }}
      />

      {/* logo top-left */}
      <img
        src={logoSmall}
        alt="imagical"
        onClick={() => navigate('/')}
        style={{ position: 'absolute', left: 92.95, top: 92.95, width: 274.97, height: 87.405, objectFit: 'cover', cursor: 'pointer', zIndex: 1 }}
      />

      {/* clamp accent */}
      <div
        style={{
          position: 'absolute',
          left: 1039.72,
          top: 3991.79,
          width: 580.838,
          height: 575.571,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <div style={{ transform: 'rotate(48.4deg)' }}>
          <div style={{ position: 'relative', width: 378.151, height: 440.994, overflow: 'hidden'}}>
            <img
              src={clampImg}
              alt=""
              style={{ position: 'absolute', left: '-27.7%', top: '-16.63%', width: '155.4%', height: '133.26%' }}
            />
          </div>
        </div>
      </div>

      {/* top arrow accent */}
      <img
        src={arrowImg}
        alt=""
        style={{ position: 'absolute', left: 665.96, top: 2174.58, width: 142.6, height: 487.961, objectFit: 'cover' }}
      />
      {/* bottom arrow accent */}
      <img
        src={arrowImg}
        alt=""
        style={{ position: 'absolute', left: 666.03, top: 6155.99, width: 142.6, height: 487.961, objectFit: 'cover' }}
      />

      {/* director arrow accent */}
      <img
        src={directorArrowImg}
        alt=""
        style={{ position: 'absolute', left: -135.91, top: 4931.35, width: 798.04, height: 961.969, objectFit: 'cover', zIndex: 1 }}
      />

      {/* paper clips accent */}
      <div
        style={{
          position: 'absolute',
          left: -272.1,
          top: 9206,
          width: 768.441,
          height: 631.981,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ transform: 'rotate(75.94deg)', width: 483.41, height: 671.096 }}>
          <img src={paperclipsImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* small paper accent */}
      <img
        src={smallPaperImg}
        alt=""
        style={{ position: 'absolute', left: 1244.07, top: 6987.96, width: 374.85, height: 397.568, objectFit: 'cover' }}
      />

      {/* mid section: director video + coffee chat */}
      <div style={{ position: 'absolute', left: 251.8, top: 4298.98, width: 1053.405, height: 1599.471, borderRadius: 77.456, overflow: 'hidden' }}>
        <img src={directorVideo} alt="director" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ position: 'absolute', left: 93.01, top: 4159.56, display: 'flex', alignItems: 'center', gap: 14.523, height: 95.852 }}>
        <div style={{ background: '#fff', display: 'flex', alignItems: 'center', padding: '5.809px 29.046px' }}>
          <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 600, fontSize: 69.711, color: '#0e5757', whiteSpace: 'nowrap' }}>Meet</p>
        </div>
        <div style={{ background: '#43dad6', display: 'flex', alignItems: 'center', padding: '5.809px 29.046px' }}>
          <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 600, fontSize: 69.711, color: '#0e5757', whiteSpace: 'nowrap' }}>the</p>
        </div>
        <div style={{ background: '#0e5757', display: 'flex', alignItems: 'center', padding: '5.809px 29.046px' }}>
          <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 600, fontSize: 69.711, color: '#43dad6', whiteSpace: 'nowrap' }}>Director:</p>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 782.37,
          top: 5941.05,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 7.746,
          padding: '19.364px 116.184px',
          border: '7.746px solid #fff',
          borderRadius: 387.281,
          color: '#fff',
          fontFamily: 'Inter',
          fontWeight: 400,
          fontSize: 61.965,
          whiteSpace: 'nowrap',
        }}
      >
        <span>Coffee Chat</span>
        <span>--&gt;</span>
      </div>

      {/* bottom: schedule, apply, compatibility, sign off */}
      <div style={{ position: 'absolute', left: 0.07, top: 7420.63, width: 1556.87, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 193.641 }}>
        {/* schedule */}
        <div style={{ position: 'relative', width: '100%' }}>
          <div style={{ position: 'absolute', left: 0, top: 300, width: '100%', height: 85.202, background: '#34bcbc' }} />
          <div style={{ position: 'relative', marginLeft: 92.95, width: 1370.975, display: 'flex', flexDirection: 'column', gap: 46.474 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <p style={italicText}>EVENT</p>
              <p style={italicText}>DATE</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 29.046, width: '100%' }}>
              {SCHEDULE_ROWS.map((row) => (
                <ScheduleRow key={row.event} {...row} />
              ))}
            </div>
            <p style={italicText}>* = Invite Only</p>
          </div>
        </div>

        {/* apply now */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 7.746,
            padding: '19.364px 116.184px',
            background: '#43dad6',
            borderRadius: 387.281,
            color: '#0e5757',
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: 61.965,
            whiteSpace: 'nowrap',
          }}
        >
          <span>APPLY NOW</span>
          <span>--&gt;</span>
        </div>

        {/* compatibility */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 46.474, alignItems: 'center', width: 1370.975 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <p style={italicText}>CLICK TO VIEW</p>
            <p style={{ ...italicText, textTransform: 'uppercase' }}>Compatibility*</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 29.046, width: '100%' }}>
            {COMPATIBILITY_ROWS.map((row) => (
              <CompatibilityRow key={row.label} {...row} onNavigate={navigate} />
            ))}
          </div>
        </div>
      </div>

      {/* sign-off */}
      <div style={{ position: 'absolute', left: 93.01, top: 9721.08, width: 1370.975, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 57 }}>
        <div style={{ textAlign: 'right', width: '100%' }}>
          <p style={{ ...italicText, whiteSpace: 'normal' }}>* = This quiz isn't definitive.</p>
          <p style={{ ...italicText, whiteSpace: 'normal' }}>Apply to what speaks to you, this quiz is for fun lmao </p>
        </div>
        <img src={fullLine} alt="" style={{ display: 'block', width: 1370.975, height: 3.87281 }} />
        <img src={logoLarge} alt="imagical" style={{ width: 402.772, height: 127.803 }} />
      </div>
    </>
  );
}
