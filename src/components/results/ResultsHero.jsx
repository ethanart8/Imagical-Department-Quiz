export default function ResultsHero({ title, description, deptBlockLeft = 313.7, deptBlockWidth = 1150.225 }) {
  return (
    <>
      <div style={{ position: 'absolute', left: 92.95, top: 1023.12, display: 'flex', alignItems: 'center', gap: 14.523, height: 95.852 }}>
        <div style={{ background: '#fff', display: 'flex', alignItems: 'center', padding: '5.809px 29.046px' }}>
          <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 600, fontSize: 69.711, color: '#0e5757', whiteSpace: 'nowrap' }}>YOUR</p>
        </div>
        <div style={{ background: '#fff', display: 'flex', alignItems: 'center', padding: '5.809px 29.046px' }}>
          <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 600, fontSize: 69.711, color: '#0e5757', whiteSpace: 'nowrap' }}>RESULTS:</p>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: deptBlockLeft,
          top: 1158.66,
          width: deptBlockWidth,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 30.982,
        }}
      >
        <div style={{ background: '#43dad6', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '11.618px 58.092px', width: 'fit-content' }}>
          <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 600, fontSize: 139.421, color: '#0e5757', textAlign: 'right', whiteSpace: 'nowrap' }}>
            {title}
          </p>
        </div>
        <div style={{ background: '#0e5757', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '11.618px 58.092px', width: 'fit-content' }}>
          <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 600, fontSize: 139.421, color: '#43dad6', textAlign: 'right', whiteSpace: 'nowrap' }}>DEPARTMENT</p>
        </div>
      </div>

      <p
        style={{
          position: 'absolute',
          left: 391.15,
          top: 1615.66,
          width: 1072.769,
          margin: 0,
          fontFamily: 'Inter',
          fontWeight: 300,
          fontSize: 54.219,
          lineHeight: 1.15,
          color: '#fff',
        }}
      >
        {description}
      </p>
    </>
  );
}
