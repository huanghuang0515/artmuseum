function ExhibitionsPage({ setPage }) {
  const cards = [
    { title: 'FROM AFAR',          sub: 'Travelling Materials and Objects',                    date: '22 September 2021 – 4 July 2022',      img: 'assets/exh-card1.jpg' },
    { title: "L'OISEAU BLEU",      sub: 'The African Story of the Kings of Napata',            date: '28 April – 25 July 2022',              img: 'assets/exhibitions-detail.jpg' },
    { title: 'YVES SAINT LAURENT', sub: 'Edited by Mouna Mekouar and Stephan Janson',          date: '29 January – 19 September 2022',       img: 'assets/col2.jpg' },
  ];

  const details = [
    {
      title: 'An Immersive Exhibition', date: '7 MARCH 2022', img: 'assets/story1.jpg',
      desc: "Her smile is the most famous on the planet: much spoken of, stolen, copied and reinterpreted, the Mona Lisa is an icon that has fascinated the world for nearly four centuries. Beyond fake mysteries and clichés, what does this portrait truly reveal? Find out at the Palais de la Bourse in Marseille.",
    },
    {
      title: 'Delacroix and Nature', date: '7 FEBRUARY 2022', img: 'assets/exhibitions-detail.jpg',
      desc: "The 'Delacroix and Nature' exhibition invites you into the painter's last apartment and studio for a discovery of his ties to nature. Within the intimate setting of the museum and its charming garden, escape to a peaceful haven of nature at the heart of Paris.",
    },
  ];

  return (
    <div style={{ background: C.exhibitionsBg }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: '85vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(assets/exhibitions-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,0,0,0) 25%, rgba(0,0,0,0.86))' }} />
        {/* Top white line */}
        <div style={{ position: 'absolute', top: 88, left: '8%', right: '8%', height: 2, background: 'rgba(255,255,255,0.3)' }} />
        <div style={{ position: 'absolute', bottom: 80, left: '8%', color: '#fff' }}>
          <BadgeCurrent />
          <h1 className="display-heading" style={{ fontSize: 'clamp(32px, 4.5vw, 66px)', marginBottom: 10 }}>GIORGIO VASARI</h1>
          <p style={{ fontFamily: 'Marcellus, serif', fontSize: 19, opacity: 0.88, marginBottom: 8 }}>
            The Book of Drawings. The Fate of a Legendary Collection
          </p>
          <p style={{ fontFamily: 'Roboto', fontWeight: 300, fontSize: 15, opacity: 0.75 }}>31 March – 18 July 2022</p>
        </div>
      </section>

      {/* 3 Cards */}
      <section style={{ padding: '80px 8%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 36 }}>
          {cards.map((ex, i) => (
            <div key={i} className="card-lift">
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '2/2.8', marginBottom: 22 }}>
                <img src={ex.img} alt={ex.title} className="exh-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 16, left: 16 }}><BadgeCurrent /></div>
              </div>
              <h3 className="display-heading" style={{ fontSize: 20, color: C.brownDark, marginBottom: 7, letterSpacing: '0.06em' }}>{ex.title}</h3>
              <p style={{ fontFamily: 'Roboto', fontWeight: 300, fontSize: 14, color: C.brownDark, marginBottom: 6, lineHeight: 1.5 }}>{ex.sub}</p>
              <p style={{ fontFamily: 'Roboto', fontWeight: 300, fontSize: 13, color: C.brownDark, opacity: 0.65 }}>{ex.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider + label */}
      <div style={{ padding: '0 8% 60px', display: 'flex', alignItems: 'center', gap: 24 }}>
        <span style={{ fontFamily: 'Marcellus, serif', fontSize: 17, color: C.brownDark, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>THE QALISSO MUSEUM</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(95,46,19,0.35)' }} />
      </div>

      {/* 2 Detailed exhibitions */}
      <section style={{ padding: '0 8% 100px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72 }}>
        {details.map((d, i) => (
          <div key={i} className="card-lift">
            <div style={{ aspectRatio: '3/2', overflow: 'hidden', marginBottom: 30 }}>
              <img src={d.img} alt={d.title} className="exh-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 style={{ fontFamily: 'Marcellus, serif', fontSize: 30, color: C.brownDark, marginBottom: 14 }}>{d.title}</h3>
            <p style={{ fontFamily: 'Roboto', fontWeight: 300, fontSize: 16, lineHeight: 1.8, color: C.brownDark, marginBottom: 20 }}>{d.desc}</p>
            <p style={{ fontFamily: 'Roboto', fontSize: 13, color: C.brownDark, opacity: 0.65, letterSpacing: '0.05em' }}>{d.date}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

Object.assign(window, { ExhibitionsPage });
