const { useState: useColState } = React;

function CollectionsPage() {
  const [query, setQuery] = useColState('');

  const artworks = [
    { id:1,  title:'Nature morte aux fleurs et fruits',         author:'Anonyme',                             date:'Vers 1870',         inv:'RF MO PHO 2017 8 1', img:'assets/col1.jpg',               medium:'Huile sur toile' },
    { id:2,  title:'La Liseuse',                                author:'Charles Nègre (1820 – 1880)',         date:'Avant 1852',        inv:'RF MO PHO 2017 8 2', img:'assets/col2.jpg',               medium:'Épreuve sur papier albuminé' },
    { id:3,  title:'Portrait de jeune homme au verre de vin',   author:'Charles Nègre (1820 – 1880)',         date:'Avant 1852',        inv:'RF MO PHO 2017 8 3', img:'assets/exh-card1.jpg',          medium:'Épreuve sur papier albuminé' },
    { id:4,  title:'Bouquet de roses et tulipes',               author:'Anonyme',                             date:'Vers 1870',         inv:'RF MO PHO 2017 8 4', img:'assets/home-round.jpg',         medium:'Épreuve sur papier albuminé' },
    { id:5,  title:'Paysage de montagne',                       author:'Hermann-Paul (1864 – 1940)',          date:'Entre 1897 et 1898',inv:'RF MO PHO 2017 8 5', img:'assets/exhibitions-detail.jpg', medium:'Huile sur toile' },
    { id:6,  title:'Vue de la baie de Naples',                  author:'Alphonse Gosset (1835 – 1914)',       date:'Entre 1902 et 1908',inv:'RF MO PHO 2017 8 6', img:'assets/story1.jpg',             medium:'Aquarelle sur papier' },
  ];

  const filtered = query.trim()
    ? artworks.filter(a =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.author.toLowerCase().includes(query.toLowerCase())
      )
    : artworks;

  // Scatter star positions
  const starPos = [
    {top:24,left:'6%'},{top:14,left:'13%'},{top:50,left:'4%'},
    {top:62,left:'10%'},{top:20,left:'82%'},{top:38,left:'89%'},
    {top:55,left:'84%'},{top:70,left:'91%'},
  ];

  return (
    <div style={{ background: C.collectionsBg, minHeight: '100vh', paddingTop: 100 }}>
      {/* Header */}
      <div style={{ textAlign: 'center', padding: '40px 8% 24px', position: 'relative' }}>
        {starPos.map((p, i) => (
          <div key={i} style={{ position: 'absolute', top: p.top, left: p.left, opacity: 0.45 }}>
            <StarOrnament size={i % 2 === 0 ? 16 : 22} color={C.brownDark} />
          </div>
        ))}
        <h1 className="display-heading" style={{ fontSize: 'clamp(38px, 5.5vw, 78px)', color: C.brownDark, letterSpacing: '0.06em', marginBottom: 36 }}>
          COLLECTIONS
        </h1>

        {/* Search */}
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', gap: 14, alignItems: 'flex-end' }}>
          <div style={{ flex: 1, borderBottom: `1.5px solid ${C.brownDark}`, display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 8 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="8.5" cy="8.5" r="6" stroke={C.brownDark} strokeWidth="1.4" />
              <line x1="13" y1="13" x2="18.5" y2="18.5" stroke={C.brownDark} strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by artist, subject, object, access number..."
              style={{
                flex: 1, background: 'none', border: 'none', outline: 'none',
                fontFamily: 'Roboto', fontWeight: 300, fontSize: 16,
                color: C.brownDark,
              }}
            />
          </div>
          <button style={{
            background: '#000', color: '#fff', border: 'none', borderRadius: 30,
            padding: '11px 30px', fontFamily: 'Roboto', fontSize: 16,
            cursor: 'pointer', whiteSpace: 'nowrap',
          }}>Search</button>
        </div>
        <div style={{ maxWidth: 720, margin: '10px auto 0', textAlign: 'left' }}>
          <button style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'Roboto', fontSize: 14, color: C.brownDark,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="6" cy="6" r="4.5" stroke={C.brownDark} strokeWidth="1.2" />
              <line x1="9.5" y1="9.5" x2="14" y2="14" stroke={C.brownDark} strokeWidth="1.2" strokeLinecap="round" />
              <line x1="8" y1="6" x2="12" y2="6" stroke={C.brownDark} strokeWidth="1.2" />
            </svg>
            Advanced search
          </button>
        </div>
      </div>

      {/* Table */}
      <div style={{ padding: '20px 8% 80px' }}>
        {/* Header row */}
        <div style={{
          display: 'grid', gridTemplateColumns: '180px 1fr 150px 170px',
          gap: 24, padding: '10px 16px 14px',
          borderBottom: `1px solid rgba(95,46,19,0.3)`,
        }}>
          {['', 'Title, author, description', 'Date', 'Inventory N°'].map((h, i) => (
            <span key={i} style={{ fontFamily: 'Roboto', fontSize: 14, color: C.brownDark, opacity: 0.55 }}>{h}</span>
          ))}
        </div>

        {/* Artwork rows */}
        {filtered.length === 0 && (
          <div style={{ padding: '48px 16px', textAlign: 'center', fontFamily: 'Roboto', fontWeight: 300, fontSize: 17, color: C.brownDark, opacity: 0.6 }}>
            No results for "{query}"
          </div>
        )}
        {filtered.map(item => (
          <div key={item.id} style={{
            display: 'grid', gridTemplateColumns: '180px 1fr 150px 170px',
            gap: 24, padding: '26px 16px',
            borderBottom: `1px solid rgba(95,46,19,0.14)`,
            cursor: 'pointer', transition: 'background 0.2s', borderRadius: 4,
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(95,46,19,0.07)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{ width: 160, height: 115, overflow: 'hidden' }}>
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'Marcellus, serif', fontSize: 19, color: C.brownDark, marginBottom: 7 }}>{item.title}</div>
              <div style={{ fontFamily: 'Roboto', fontWeight: 300, fontSize: 14, color: C.brownDark, marginBottom: 8 }}>{item.author}</div>
              <div style={{ fontFamily: 'Roboto', fontWeight: 300, fontSize: 13, color: C.brownDark, opacity: 0.6, lineHeight: 1.55 }}>{item.medium}</div>
            </div>
            <div style={{ fontFamily: 'Roboto', fontWeight: 300, fontSize: 15, color: C.brownDark, paddingTop: 2 }}>{item.date}</div>
            <div style={{ fontFamily: 'Roboto', fontWeight: 300, fontSize: 13, color: C.brownDark, paddingTop: 2 }}>{item.inv}</div>
          </div>
        ))}

        {/* Pagination */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginTop: 48 }}>
          <button style={{ background: 'none', border: 'none', fontSize: 22, color: C.brownDark, cursor: 'pointer' }}>‹</button>
          <div style={{ position: 'relative' }}>
            <div style={{ width: 44, height: 30, background: 'rgba(214,185,150,0.6)', borderRadius: 2, position: 'absolute', top: 0, left: 0 }} />
            <span style={{ fontFamily: 'Roboto', fontWeight: 300, fontSize: 22, color: C.brownDark, position: 'relative' }}>
              <strong style={{ fontWeight: 400 }}>1</strong>
              <span style={{ padding: '0 6px', opacity: 0.5 }}>/</span>
              35
            </span>
          </div>
          <button style={{ background: 'none', border: 'none', fontSize: 22, color: C.brownDark, cursor: 'pointer' }}>›</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { CollectionsPage });
