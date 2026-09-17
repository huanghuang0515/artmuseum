const { useState, useEffect } = React;

function Navbar({ currentPage, setPage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['HOME', 'VISIT', 'EVENTS', 'COLLECTIONS', 'EXHIBITIONS', 'CONTACT'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 60px',
      background: scrolled ? 'rgba(36,14,2,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled
        ? '1px solid rgba(255,233,208,0.1)'
        : '1px solid rgba(255,255,255,0.18)',
      transition: 'all 0.35s ease',
    }}>
      {/* Logo */}
      <button onClick={() => setPage('HOME')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}>
        <div style={{ lineHeight: 1.1 }}>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: 15, color: '#fff', letterSpacing: '0.1em' }}>QALISSO ✦</div>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: 15, color: '#fff', letterSpacing: '0.2em', marginTop: 1 }}>MUSEUM</div>
        </div>
      </button>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: 38, alignItems: 'center' }}>
        {links.map(link => (
          <button
            key={link}
            className={`nav-link${currentPage === link ? ' active' : ''}`}
            onClick={() => setPage(link)}
            style={{ opacity: currentPage === link ? 1 : 0.72 }}
          >{link}</button>
        ))}
      </div>

      {/* Tickets */}
      <button
        onClick={() => setPage('TICKETS')}
        style={{
          background: currentPage === 'TICKETS' ? 'rgba(255,255,255,0.18)' : 'transparent',
          border: '1.5px solid rgba(255,255,255,0.65)',
          borderRadius: 40, padding: '7px 22px', cursor: 'pointer',
          fontFamily: 'Roboto, sans-serif', fontSize: 14, color: '#fff',
          letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: 7,
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
        onMouseLeave={e => e.currentTarget.style.background = currentPage === 'TICKETS' ? 'rgba(255,255,255,0.18)' : 'transparent'}
      >
        <span style={{ color: 'rgb(41,91,55)', fontSize: 16 }}>🎟</span>
        Tickets
      </button>
    </nav>
  );
}

Object.assign(window, { Navbar });
