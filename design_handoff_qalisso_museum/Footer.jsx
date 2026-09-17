function Footer({ setPage }) {
  const links = ['HOME', 'VISIT', 'EVENTS', 'COLLECTIONS', 'EXHIBITIONS', 'CONTACT'];
  const socials = [
    { label: 'f', title: 'Facebook' },
    { label: '◎', title: 'Instagram' },
    { label: '𝕏', title: 'Twitter' },
    { label: '▶', title: 'YouTube' },
  ];

  return (
    <footer style={{ background: C.footer, color: '#fff', padding: '64px 8% 36px' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80,
        paddingBottom: 40, marginBottom: 32,
        borderBottom: '1px solid rgba(255,255,255,0.12)',
      }}>
        {/* Left */}
        <div>
          <div style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600, fontSize: 15, letterSpacing: '0.07em', marginBottom: 18 }}>
            QALISSO MUSEUM
          </div>
          <div style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 300, fontSize: 14, lineHeight: 2.1, opacity: 0.78 }}>
            <div>+33 1 44 23 08 55</div>
            <div>qalissomuseum@qaliss.com</div>
            <div style={{ marginTop: 6 }}>102 terrasse Boieldieu, Tour W</div>
            <div>12ème étage, 92800 Puteaux</div>
          </div>
          <div style={{ marginTop: 24, height: 110, overflow: 'hidden', borderRadius: 3 }}>
            <img src="assets/footer-map.jpg" alt="Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {/* Nav links */}
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', paddingTop: 4 }}>
            {links.map(l => (
              <button key={l} onClick={() => setPage(l)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Roboto, sans-serif', fontSize: 14,
                color: '#fff', opacity: 0.75, letterSpacing: '0.06em',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.75'}>
                {l}
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 14, marginTop: 40 }}>
            {socials.map(s => (
              <a key={s.title} href="#" title={s.title} style={{
                width: 50, height: 50, borderRadius: '50%',
                border: '0.5px solid rgba(255,255,255,0.45)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', textDecoration: 'none',
                fontFamily: 'Roboto, sans-serif', fontSize: 17,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
          {['Legal Notice', 'Privacy Policy', 'Cookies', 'Credits', 'Copyright'].map(l => (
            <a key={l} href="#" style={{
              fontFamily: 'Roboto, sans-serif', fontWeight: 300, fontSize: 13,
              color: 'rgba(255,255,255,0.52)', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.52)'}>{l}</a>
          ))}
        </div>
        <div style={{ fontFamily: 'Cinzel, serif', fontSize: 14, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.12em' }}>
          QALISSO ✦ MUSEUM
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
