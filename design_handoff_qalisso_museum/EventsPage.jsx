const { useState: useEvtState } = React;

function EventsPage() {
  const [dateFilter, setDateFilter] = useEvtState('ALL');
  const [nightOnly, setNightOnly] = useEvtState(false);

  const events = [
    {
      category: 'GUIDED TOUR',
      title: 'My First Qalisso',
      schedule: 'Every Sunday at 11 a.m.',
      audience: 'Family',
      age: '4+',
      night: false,
      desc: 'Enjoy a child- and family-oriented exploration of the Qalisso and learn the secrets behind its most famous artworks, including the Venus de Milo, the Mona Lisa, Egyptian antiquities, and major French paintings.',
    },
    {
      category: 'GUIDED TOUR',
      title: 'Welcome to the Qalisso',
      schedule: 'Monday, Friday, Saturday and Sunday at 11 a.m.',
      audience: 'Adult',
      age: '16+',
      night: false,
      desc: 'Enjoy a child- and family-oriented exploration of the Qalisso and learn the secrets behind its most famous artworks, including the Venus de Milo, the Mona Lisa, Egyptian antiquities.',
    },
    {
      category: 'NIGHT VISIT',
      title: 'Another Qalisso',
      schedule: 'Every Friday and Saturday at 10:30 p.m.',
      audience: 'Adult',
      age: '18+',
      night: true,
      desc: 'Enjoy a visit away from the crowds and discover the lesser-known treasures and stunning settings of another Qalisso.',
    },
  ];

  const filtered = nightOnly ? events.filter(e => e.night) : events;
  const brown = '#431C07';

  return (
    <div style={{ background: C.eventsBg }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: '82vh', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(assets/event-hero.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.55) 100%)' }} />
        <div style={{ position: 'absolute', top: 88, left: '8%', right: '8%', height: 2, background: 'rgba(255,255,255,0.3)' }} />
        <div style={{ position: 'absolute', bottom: 72, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: '#fff' }}>
          <h1 className="display-heading" style={{ fontSize: 'clamp(52px, 7vw, 110px)', letterSpacing: '0.07em' }}>EVENTS</h1>
        </div>
      </section>

      {/* Filter bar */}
      <div style={{ background: C.eventsBg, padding: '32px 8%', borderBottom: `1px solid rgba(67,28,7,0.22)` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          {/* Date */}
          <button style={{ display:'flex', alignItems:'center', gap:8, background:'none', border:'none', cursor:'pointer', fontFamily:'Roboto', fontSize:16, color:brown, letterSpacing:'0.04em' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="1" y="3.5" width="16" height="13.5" rx="1" stroke={brown} strokeWidth="1.3"/>
              <line x1="1" y1="7.5" x2="17" y2="7.5" stroke={brown} strokeWidth="1.3"/>
              <line x1="5" y1="1" x2="5" y2="5" stroke={brown} strokeWidth="1.3" strokeLinecap="round"/>
              <line x1="13" y1="1" x2="13" y2="5" stroke={brown} strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            ALL DATES
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke={brown} strokeWidth="1.4" strokeLinecap="round"/></svg>
          </button>

          {/* Night toggle */}
          <button
            onClick={() => setNightOnly(v => !v)}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: nightOnly ? brown : 'none',
              border: `1.5px solid ${brown}`, borderRadius: 28,
              padding: '7px 18px', cursor: 'pointer',
              fontFamily: 'Roboto', fontSize: 14,
              color: nightOnly ? '#fff' : brown,
              transition: 'all 0.22s',
            }}>
            🌙 Night Opening
          </button>

          {/* Type filters */}
          <div style={{ display: 'flex', gap: 28 }}>
            {['Type', 'Public', 'Age'].map(f => (
              <button key={f} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Roboto', fontSize: 15, color: brown,
                display: 'flex', alignItems: 'center', gap: 5,
              }}>
                {f}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke={brown} strokeWidth="1.4" strokeLinecap="round"/></svg>
              </button>
            ))}
          </div>

          {/* Separator lines */}
          <div style={{ height: 32, width: 1, background: `rgba(67,28,7,0.3)` }} />
          <div style={{ height: 32, width: 1, background: `rgba(67,28,7,0.3)` }} />
        </div>
      </div>

      {/* Event list */}
      <section style={{ padding: '56px 8% 100px' }}>
        {filtered.map((ev, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '1fr 240px 160px 48px',
            gap: 36, padding: '44px 0',
            borderBottom: `1px solid rgba(67,28,7,0.2)`,
            alignItems: 'start', cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <div>
              <div style={{ fontFamily:'Roboto', fontSize:11, letterSpacing:'0.1em', color:brown, opacity:0.62, marginBottom:8, textTransform:'uppercase' }}>
                {ev.category}
              </div>
              <h3 className="display-heading" style={{ fontSize: 'clamp(22px,2.4vw,32px)', color: brown, marginBottom: 14 }}>{ev.title}</h3>
              <p style={{ fontFamily:'Roboto', fontWeight:300, fontSize:15, color:brown, lineHeight:1.75, maxWidth:600 }}>{ev.desc}</p>
            </div>
            <div>
              <div style={{ fontFamily:'Roboto', fontSize:11, opacity:0.55, marginBottom:7, color:brown, letterSpacing:'0.07em', textTransform:'uppercase' }}>Schedule</div>
              <div style={{ fontFamily:'Roboto', fontWeight:300, fontSize:14, color:brown, lineHeight:1.65 }}>{ev.schedule}</div>
            </div>
            <div>
              <div style={{ fontFamily:'Roboto', fontSize:11, opacity:0.55, marginBottom:7, color:brown, letterSpacing:'0.07em', textTransform:'uppercase' }}>Audience</div>
              <div style={{ fontFamily:'Roboto', fontWeight:300, fontSize:14, color:brown }}>{ev.audience}</div>
              <div style={{ fontFamily:'Roboto', fontSize:12, color:brown, opacity:0.6, marginTop:4 }}>Age {ev.age}</div>
            </div>
            <div style={{ paddingTop: 8 }}>
              <ArrowRight color={brown} length={36} />
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div style={{ textAlign:'center', padding:'64px 0', fontFamily:'Roboto', fontWeight:300, fontSize:18, color:brown, opacity:0.6 }}>
            No night events currently scheduled.
          </div>
        )}
      </section>
    </div>
  );
}

Object.assign(window, { EventsPage });
