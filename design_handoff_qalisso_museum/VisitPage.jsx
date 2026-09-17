function VisitPage() {
  const hours = [
    { label: 'Monday',             time: '9 a.m. – 6 p.m.' },
    { label: 'Wednesday – Sunday', time: '9 a.m. – 6 p.m.' },
    { label: 'Friday (late)',       time: '9 a.m. – 9:45 p.m.' },
    { label: 'Tuesday',            time: 'CLOSED', closed: true },
  ];
  const tickets = [
    { label: 'General admission',          price: '€17' },
    { label: 'Tickets purchased online',   price: '€17' },
    { label: 'Reduced admission',          price: '€13' },
    { label: 'Under 18 (EU nationals)',    price: 'Free' },
    { label: 'Under 26 (EU nationals)',    price: 'Free' },
  ];

  return (
    <div style={{ background: C.visitBg }}>
      {/* Hero — building photo + intro text */}
      <section style={{ display: 'flex', minHeight: '88vh' }}>
        <div style={{ flex: '0 0 45%', overflow: 'hidden' }}>
          <img src="assets/visit-building.png" alt="Museum" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ flex: 1, padding: '130px 7% 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="display-heading" style={{ fontSize: 'clamp(40px, 5.5vw, 88px)', color: C.brownDark, marginBottom: 30 }}>CULTURE</h2>
          <p style={{ fontFamily: 'Roboto', fontWeight: 300, fontSize: 17, lineHeight: 1.88, color: C.brownDark, textAlign: 'justify', marginBottom: 32 }}>
            Weddings, birthdays, hen-dos are all back on the agenda at last — meaning we can finally slip back into look-at-me going-out pieces. Sequins and feathers are making a stealth return to shopping baskets, while the thigh-flashing mini reigns supreme. If you're after something a tad less, well, naked, look to Christopher Esber for playful reveal-and-conceal cutouts — or stay covered up but still stylish.
          </p>
          <button className="arrow-link">
            Plan your visit <ArrowRight />
          </button>
        </div>
      </section>

      {/* Hours & Admission */}
      <section style={{ padding: '80px 8%' }}>
        <div style={{ background: '#fff', padding: '60px 64px', borderRadius: 3, boxShadow: '0 4px 40px rgba(0,0,0,0.06)' }}>
          {/* Heading */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 52 }}>
            <StarOrnament size={32} color={C.brownDark} />
            <h2 className="display-heading" style={{ fontSize: 'clamp(28px, 4vw, 66px)', color: C.brownDark }}>HOURS &amp; ADMISSION</h2>
            <StarOrnament size={32} color={C.brownDark} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
            {/* Hours */}
            <div>
              <h3 style={{ fontFamily: 'Marcellus, serif', fontSize: 22, color: C.brownDark, marginBottom: 20 }}>Opening Hours</h3>
              {hours.map((h, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '15px 0', borderBottom: `1px solid rgba(95,46,19,0.1)`,
                }}>
                  <span style={{ fontFamily: 'Roboto', fontWeight: h.closed ? 700 : 300, fontSize: 15, color: C.brownDark }}>{h.label}</span>
                  <span style={{ fontFamily: 'Roboto', fontSize: 15, color: h.closed ? '#c0392b' : C.brownDark, fontWeight: h.closed ? 600 : 400 }}>{h.time}</span>
                </div>
              ))}
            </div>
            {/* Admission */}
            <div>
              <h3 style={{ fontFamily: 'Marcellus, serif', fontSize: 22, color: C.brownDark, marginBottom: 20 }}>Admission</h3>
              {tickets.map((t, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '15px 0', borderBottom: `1px solid rgba(95,46,19,0.1)`,
                }}>
                  <span style={{ fontFamily: 'Roboto', fontWeight: 300, fontSize: 15, color: C.brownDark }}>{t.label}</span>
                  <span style={{ fontFamily: 'Roboto', fontSize: 15, color: C.brownDark }}>{t.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tradition section */}
      <section style={{ padding: '60px 8% 80px' }}>
        <h2 className="display-heading" style={{ fontSize: 'clamp(40px,5vw,86px)', color: C.brownDark, marginBottom: 24 }}>Tradition</h2>
        <div style={{ height: 2, background: 'rgba(255,255,255,0.55)', marginBottom: 36 }} />
        <p style={{ fontFamily: 'Roboto', fontWeight: 300, fontSize: 18, lineHeight: 1.88, color: C.brownDark, maxWidth: 840, textAlign: 'justify', marginBottom: 52 }}>
          Weddings, birthdays, hen-dos are all back on the agenda at last — meaning we can finally slip back into look-at-me going-out pieces. Sequins and feathers are making a stealth return to shopping baskets, while the thigh-flashing mini reigns supreme thanks to Prada's thigh-grazing satin number. If you're after something a tad less, well, naked, look to Christopher Esber for playful reveal-and-conceal cutouts.
        </p>

        {/* Two photos side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 28 }}>
          <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
            <img src="assets/visit-photo1.jpg" alt="Museum visit" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
              onMouseEnter={e => e.target.style.transform='scale(1.04)'}
              onMouseLeave={e => e.target.style.transform='scale(1)'} />
          </div>
          <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
            <img src="assets/visit-photo2.jpg" alt="Museum visit" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
              onMouseEnter={e => e.target.style.transform='scale(1.04)'}
              onMouseLeave={e => e.target.style.transform='scale(1)'} />
          </div>
        </div>

        {/* Large interior photo */}
        <div style={{ width: '100%', aspectRatio: '21/9', overflow: 'hidden' }}>
          <img src="assets/visit-interior.jpg" alt="Museum interior" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { VisitPage });
