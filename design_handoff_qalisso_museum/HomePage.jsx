const { useEffect, useRef, useState } = React;

function HomePage({ setPage }) {
  const heroRef = useRef(null);

  const stories = [
    { title: 'The First Night',        img: 'assets/story1.jpg',          desc: 'Sequins and feathers are making a stealth return to shopping baskets, while the thigh-flashing mini reigns supreme.' },
    { title: 'The Family Relationship',img: 'assets/exh-card1.jpg',       desc: 'If you\'re after something a tad less, well, naked, look to cutouts for playful reveal-and-conceal pieces.' },
    { title: 'Flowers Keeping Well',   img: 'assets/col2.jpg',            desc: 'Sequins and feathers are making a stealth return to shopping baskets, while the mini reigns supreme.' },
  ];

  const colImages = [
    'assets/col1.jpg', 'assets/col2.jpg', 'assets/exh-card1.jpg',
    'assets/story1.jpg', 'assets/exhibitions-detail.jpg', 'assets/home-round.jpg',
  ];

  return (
    <div>
      {/* ─── HERO ─── */}
      <section ref={heroRef} style={{
        position: 'relative', width: '100%', minHeight: '100vh',
        background: C.brownHero, overflow: 'hidden',
        display: 'flex', alignItems: 'center',
      }}>
        {/* Top white line */}
        <div style={{ position: 'absolute', top: 88, left: '8%', right: '8%', height: 2, background: 'rgba(255,255,255,0.35)' }} />

        {/* Glass orb removed */}

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 2, width: '100%',
          padding: '130px 8% 100px',
          display: 'flex', alignItems: 'center', gap: '5%',
        }}>
          {/* Left */}
          <div style={{ flex: '0 0 52%' }}>
            <h1 className="display-heading" style={{ fontSize: 'clamp(68px, 9.5vw, 152px)', color: '#fff', marginBottom: 0 }}>QALISSO</h1>
            {/* Ornament row */}
            <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
              <div style={{ flex: 1, height: 1.5, background: 'rgba(255,255,255,0.38)' }} />
              <div style={{ margin: '0 18px' }}><StarOrnament size={34} color="#fff" /></div>
              <div style={{ flex: 1, height: 1.5, background: 'rgba(255,255,255,0.38)' }} />
            </div>
            <h1 className="display-heading" style={{ fontSize: 'clamp(68px, 9.5vw, 152px)', color: '#fff', letterSpacing: '0.1em', marginBottom: 36 }}>MUSEUM</h1>
            <p style={{ fontFamily: 'Roboto', fontWeight: 700, fontSize: 17, color: '#fff', marginBottom: 10, maxWidth: 480 }}>
              We can finally slip back into look-at-me going-out pieces. Sequins and feathers.
            </p>
            <p style={{ fontFamily: 'Roboto', fontWeight: 300, fontSize: 16, color: 'rgba(255,255,255,0.82)', lineHeight: 1.85, maxWidth: 480 }}>
              Weddings, birthdays, hen-dos are all back on the agenda at last — meaning we can slip back into look-at-me going-out pieces. Sequins and feathers are making a stealth return to shopping baskets.
            </p>
          </div>

          {/* Right — circular painting */}
          <div style={{ flex: '0 0 43%', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 'clamp(260px, 32vw, 500px)', aspectRatio: '1',
              borderRadius: '50% 50% 0 50%', overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(0,0,0,0.28)',
            }}>
              <img src="assets/home-round.jpg" alt="Featured artwork" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 10, zIndex: 2 }}>
          {[0,1,2].map(i => (
            <div key={i} style={{
              width: i === 0 ? 28 : 9, height: 9, borderRadius: 5,
              background: i === 0 ? '#fff' : 'rgba(255,255,255,0.38)', transition: 'all 0.3s',
            }} />
          ))}
        </div>

        {/* Chevrons */}
        <button style={{ position:'absolute', left:28, top:'50%', transform:'translateY(-50%)', background:'none', border:'none', color:'rgba(255,255,255,0.7)', fontSize:32, cursor:'pointer', zIndex:2 }}>‹</button>
        <button style={{ position:'absolute', right:28, top:'50%', transform:'translateY(-50%)', background:'none', border:'none', color:'rgba(255,255,255,0.7)', fontSize:32, cursor:'pointer', zIndex:2 }}>›</button>
      </section>

      {/* ─── CULTURE ─── */}
      <section style={{ background: C.cultureSection, padding: '100px 8%', display: 'flex', gap: '6%', alignItems: 'center' }}>
        <div style={{ flex: '0 0 42%' }}>
          <div style={{ borderRadius: '50% 50% 0 50%', overflow: 'hidden', maxHeight: 680 }}>
            <img src="assets/culture.jpg" alt="Culture" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h2 className="display-heading" style={{ fontSize: 'clamp(44px, 6vw, 96px)', color: C.brownDark, marginBottom: 28 }}>CULTURE</h2>
          <p style={{ fontFamily:'Roboto', fontWeight:300, fontSize:18, lineHeight:1.88, color:C.brownDark, textAlign:'justify', maxWidth:560, marginBottom:36 }}>
            Weddings, birthdays, hen-dos are all back on the agenda at last — meaning we can finally slip back into look-at-me going-out pieces. Sequins and feathers are making a stealth return to shopping baskets, while the thigh-flashing mini reigns supreme thanks to Prada's thigh-grazing satin number. If you're after something a tad less, well, naked, look to Christopher Esber for playful reveal-and-conceal cutouts.
          </p>
          <button className="arrow-link" onClick={() => setPage && setPage('EXHIBITIONS')}>
            Read more <ArrowRight />
          </button>
        </div>
      </section>

      {/* ─── STORIES ─── */}
      <section style={{ background: C.storiesSection, padding: '80px 8%' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:20, marginBottom:60 }}>
          <StarOrnament size={30} color={C.brownDark} />
          <h2 className="display-heading" style={{ fontSize:'clamp(36px,5vw,80px)', color:C.brownDark }}>Story Description</h2>
          <StarOrnament size={30} color={C.brownDark} />
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:40 }}>
          {stories.map((s, i) => (
            <div key={i} className="card-lift">
              <div style={{ aspectRatio:'3/4', overflow:'hidden', marginBottom:22 }}>
                <img src={s.img} alt={s.title} className="exh-img" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              </div>
              <h3 style={{ fontFamily:'Marcellus,serif', fontSize:22, color:C.brownDark, marginBottom:10 }}>{s.title}</h3>
              <p style={{ fontFamily:'Roboto', fontWeight:300, fontSize:15, lineHeight:1.75, color:C.brownDark, marginBottom:16 }}>{s.desc}</p>
              <button className="arrow-link"><ArrowRight /></button>
            </div>
          ))}
        </div>
      </section>

      {/* ─── COLLECTIONS PREVIEW ─── */}
      <section style={{ background: C.collectionsSection, padding:'80px 8%' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:24, marginBottom:36 }}>
          <StarOrnament size={34} color="#fff" />
          <h2 className="display-heading" style={{ fontSize:'clamp(36px,5vw,80px)', color:'#fff' }}>COLLECTIONS</h2>
          <StarOrnament size={34} color="#fff" />
        </div>
        <div style={{ height:1.5, background:'rgba(255,255,255,0.28)', marginBottom:40 }} />
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginBottom:52 }}>
          {colImages.map((img, i) => (
            <div key={i} className="exh-card" style={{ aspectRatio: i < 3 ? '4/3' : '4/3.5' }}>
              <img src={img} alt="Collection" className="exh-img" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
            </div>
          ))}
        </div>
        <div style={{ display:'flex', justifyContent:'center' }}>
          <button
            onClick={() => setPage && setPage('COLLECTIONS')}
            style={{
              background:'#fff', color:'#000', border:'none', borderRadius:40,
              padding:'12px 44px', fontFamily:'Roboto', fontSize:18, cursor:'pointer',
              transition:'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform='scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
          >Explore</button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage });
