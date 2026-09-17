const { useState: useTicketState } = React;

function TicketsPage({ setPage }) {
  const ticketTypes = [
    { id: 'general',  name: 'General Admission',         price: 17, desc: 'Full access to permanent collections and current exhibitions.', popular: false },
    { id: 'reduced',  name: 'Reduced Admission',         price: 13, desc: 'Students, seniors 65+, and groups of 10 or more.',              popular: false },
    { id: 'family',   name: 'Family Pass',               price: 38, desc: 'Two adults and up to three children under 18.',                  popular: true  },
    { id: 'night',    name: 'Night Opening',             price: 20, desc: 'Friday evenings — galleries open until 9:45 p.m.',              popular: false },
    { id: 'guided',   name: 'Guided Tour',               price: 28, desc: 'Includes admission + 90-minute expert-led tour.',                popular: false },
    { id: 'youth',    name: 'Under 26 (EU)',             price: 0,  desc: 'Complimentary admission. ID required at entry.',                 popular: false },
  ];

  const [selected, setSelected] = useTicketState({});
  const [date, setDate]         = useTicketState('2026-05-12');
  const [time, setTime]         = useTicketState('11:00');
  const [step, setStep]         = useTicketState(1);

  const updateQty = (id, delta) => {
    setSelected(prev => {
      const next = { ...prev, [id]: Math.max(0, (prev[id] || 0) + delta) };
      if (next[id] === 0) delete next[id];
      return next;
    });
  };

  const items = ticketTypes.filter(t => selected[t.id] > 0);
  const total = items.reduce((s, t) => s + t.price * selected[t.id], 0);
  const count = items.reduce((s, t) => s + selected[t.id], 0);
  const slots = ['09:00','10:00','11:00','12:30','14:00','15:30','17:00','19:30'];

  return (
    <div style={{ background: '#EFD7BB', minHeight: '100vh', paddingTop: 100 }}>
      <div style={{ padding: '60px 8% 100px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:16, marginBottom:18 }}>
            <StarOrnament size={26} color={C.brownDark} />
            <span style={{ fontFamily:'Roboto', fontSize:13, color:C.brownDark, letterSpacing:'0.18em' }}>BOOK YOUR VISIT</span>
            <StarOrnament size={26} color={C.brownDark} />
          </div>
          <h1 className="display-heading" style={{ fontSize: 'clamp(46px,6vw,92px)', color: C.brownDark, marginBottom: 14 }}>Tickets</h1>
          <p style={{ fontFamily:'Roboto', fontWeight:300, fontSize:16, color:C.brownDark, opacity:0.75, maxWidth:560, margin:'0 auto', lineHeight:1.7 }}>
            Reserve admission to QALISSO Museum. Online tickets guarantee entry without queuing at the door.
          </p>
        </div>

        {/* Stepper */}
        <div style={{ display:'flex', justifyContent:'center', gap:0, marginBottom:48 }}>
          {[
            { n:1, l:'Select tickets' },
            { n:2, l:'Date & time' },
            { n:3, l:'Checkout' },
          ].map((s, i, arr) => (
            <React.Fragment key={s.n}>
              <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                <div style={{
                  width:32, height:32, borderRadius:'50%',
                  background: step >= s.n ? C.brownDark : 'rgba(95,46,19,0.18)',
                  color: step >= s.n ? '#fff' : C.brownDark,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontFamily:'Roboto', fontSize:14, fontWeight:500,
                  transition:'all 0.25s',
                }}>{s.n}</div>
                <span style={{ fontFamily:'Roboto', fontSize:14, color:C.brownDark, opacity: step >= s.n ? 1 : 0.55 }}>{s.l}</span>
              </div>
              {i < arr.length - 1 && (
                <div style={{ width:80, height:1, background:'rgba(95,46,19,0.25)', margin:'16px 22px 0' }} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:48, alignItems:'start' }}>
          {/* LEFT — main content per step */}
          <div>
            {step === 1 && (
              <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                {ticketTypes.map(t => (
                  <div key={t.id} style={{
                    background:'#fff', padding:'22px 28px', borderRadius:6,
                    display:'grid', gridTemplateColumns:'1fr auto auto', gap:24, alignItems:'center',
                    boxShadow: selected[t.id] ? '0 4px 22px rgba(95,46,19,0.18)' : '0 2px 10px rgba(0,0,0,0.04)',
                    border: selected[t.id] ? `1.5px solid ${C.brownDark}` : '1.5px solid transparent',
                    transition: 'all 0.25s', position: 'relative',
                  }}>
                    {t.popular && (
                      <div style={{
                        position:'absolute', top:-10, left:24,
                        background:'#295B37', color:'#fff', padding:'3px 12px',
                        borderRadius:20, fontFamily:'Roboto', fontSize:11, letterSpacing:'0.08em',
                      }}>POPULAR</div>
                    )}
                    <div>
                      <div style={{ fontFamily:'Marcellus,serif', fontSize:20, color:C.brownDark, marginBottom:5 }}>{t.name}</div>
                      <div style={{ fontFamily:'Roboto', fontWeight:300, fontSize:13, color:C.brownDark, opacity:0.7, lineHeight:1.55 }}>{t.desc}</div>
                    </div>
                    <div style={{ fontFamily:'Marcellus,serif', fontSize:24, color:C.brownDark, minWidth:70, textAlign:'right' }}>
                      {t.price === 0 ? 'Free' : `€${t.price}`}
                    </div>
                    <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                      <button onClick={() => updateQty(t.id, -1)} style={qtyBtn(selected[t.id] > 0)}>−</button>
                      <div style={{ minWidth:24, textAlign:'center', fontFamily:'Roboto', fontSize:16, color:C.brownDark }}>
                        {selected[t.id] || 0}
                      </div>
                      <button onClick={() => updateQty(t.id, 1)} style={qtyBtn(true)}>+</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {step === 2 && (
              <div style={{ background:'#fff', padding:'40px', borderRadius:6, boxShadow:'0 2px 10px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontFamily:'Marcellus,serif', fontSize:24, color:C.brownDark, marginBottom:6 }}>Choose your visit date</h3>
                <p style={{ fontFamily:'Roboto', fontWeight:300, fontSize:14, color:C.brownDark, opacity:0.7, marginBottom:28 }}>
                  Closed Tuesdays. Last entry 30 minutes before closing.
                </p>
                <div style={{ marginBottom:32 }}>
                  <label style={{ fontFamily:'Roboto', fontSize:13, color:C.brownDark, letterSpacing:'0.06em', display:'block', marginBottom:10 }}>DATE</label>
                  <input type="date" value={date} onChange={e => setDate(e.target.value)} style={{
                    width:'100%', padding:'14px 16px', borderRadius:4,
                    border:`1.5px solid rgba(95,46,19,0.3)`, fontFamily:'Roboto', fontSize:16,
                    color:C.brownDark, background:'#FAF4EC', outline:'none',
                  }} />
                </div>
                <label style={{ fontFamily:'Roboto', fontSize:13, color:C.brownDark, letterSpacing:'0.06em', display:'block', marginBottom:10 }}>TIME SLOT</label>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10 }}>
                  {slots.map(s => (
                    <button key={s} onClick={() => setTime(s)} style={{
                      padding:'12px 0', borderRadius:4, cursor:'pointer',
                      background: time === s ? C.brownDark : '#FAF4EC',
                      color: time === s ? '#fff' : C.brownDark,
                      border:`1.5px solid ${time === s ? C.brownDark : 'rgba(95,46,19,0.25)'}`,
                      fontFamily:'Roboto', fontSize:15, transition:'all 0.2s',
                    }}>{s}</button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div style={{ background:'#fff', padding:'40px', borderRadius:6, boxShadow:'0 2px 10px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontFamily:'Marcellus,serif', fontSize:24, color:C.brownDark, marginBottom:24 }}>Your details</h3>
                {[
                  { ph:'Full name' }, { ph:'Email address' }, { ph:'Phone (optional)' },
                ].map((f,i) => (
                  <input key={i} className="mu-input" placeholder={f.ph} style={{ marginBottom:24 }} />
                ))}
                <div style={{ paddingTop:18, borderTop:'1px solid rgba(95,46,19,0.15)' }}>
                  <h4 style={{ fontFamily:'Marcellus,serif', fontSize:18, color:C.brownDark, marginBottom:18 }}>Payment</h4>
                  <input className="mu-input" placeholder="Card number" style={{ marginBottom:16 }} />
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                    <input className="mu-input" placeholder="MM / YY" />
                    <input className="mu-input" placeholder="CVC" />
                  </div>
                </div>
              </div>
            )}

            {/* Step nav */}
            <div style={{ display:'flex', justifyContent:'space-between', marginTop:32 }}>
              {step > 1 ? (
                <button onClick={() => setStep(step-1)} style={navBtnGhost}>‹ Back</button>
              ) : (
                <button onClick={() => setPage && setPage('HOME')} style={navBtnGhost}>‹ Cancel</button>
              )}
              {step < 3 ? (
                <button
                  onClick={() => count > 0 && setStep(step+1)}
                  disabled={count === 0}
                  style={{ ...navBtnPrimary, opacity: count === 0 ? 0.4 : 1, cursor: count === 0 ? 'not-allowed' : 'pointer' }}
                >Continue ›</button>
              ) : (
                <button onClick={() => alert('Booking confirmed! Confirmation sent to your email.')} style={navBtnPrimary}>
                  Confirm & Pay €{total}
                </button>
              )}
            </div>
          </div>

          {/* RIGHT — order summary */}
          <div style={{ position:'sticky', top:120 }}>
            <div style={{ background:'#fff', padding:'32px', borderRadius:6, boxShadow:'0 4px 24px rgba(0,0,0,0.06)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:22 }}>
                <span style={{ color:'#295B37', fontSize:18 }}>🎟</span>
                <h3 style={{ fontFamily:'Marcellus,serif', fontSize:20, color:C.brownDark }}>Order Summary</h3>
              </div>

              {items.length === 0 ? (
                <p style={{ fontFamily:'Roboto', fontWeight:300, fontSize:14, color:C.brownDark, opacity:0.6, lineHeight:1.7 }}>
                  No tickets selected yet. Choose ticket types from the list to begin.
                </p>
              ) : (
                <>
                  {items.map(t => (
                    <div key={t.id} style={{ display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom:'1px solid rgba(95,46,19,0.1)' }}>
                      <div>
                        <div style={{ fontFamily:'Roboto', fontSize:14, color:C.brownDark }}>{t.name}</div>
                        <div style={{ fontFamily:'Roboto', fontSize:12, color:C.brownDark, opacity:0.55 }}>× {selected[t.id]}</div>
                      </div>
                      <div style={{ fontFamily:'Roboto', fontSize:14, color:C.brownDark }}>€{t.price * selected[t.id]}</div>
                    </div>
                  ))}
                  {step >= 2 && (
                    <div style={{ padding:'14px 0', borderBottom:'1px solid rgba(95,46,19,0.1)', fontFamily:'Roboto', fontSize:13, color:C.brownDark }}>
                      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5 }}>
                        <span style={{ opacity:0.6 }}>Date</span><span>{date}</span>
                      </div>
                      <div style={{ display:'flex', justifyContent:'space-between' }}>
                        <span style={{ opacity:0.6 }}>Time</span><span>{time}</span>
                      </div>
                    </div>
                  )}
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', paddingTop:18 }}>
                    <span style={{ fontFamily:'Roboto', fontSize:14, color:C.brownDark, opacity:0.7 }}>Total ({count})</span>
                    <span style={{ fontFamily:'Marcellus,serif', fontSize:32, color:C.brownDark }}>€{total}</span>
                  </div>
                </>
              )}
            </div>

            <div style={{ marginTop:18, padding:'18px 22px', background:'rgba(95,46,19,0.06)', borderRadius:6, fontFamily:'Roboto', fontWeight:300, fontSize:13, color:C.brownDark, lineHeight:1.7 }}>
              <strong style={{ fontWeight:500 }}>✓ Free cancellation</strong> up to 24 hours before your visit.<br />
              <strong style={{ fontWeight:500 }}>✓ Mobile tickets</strong> — show your e-ticket at the entrance.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const qtyBtn = (active) => ({
  width:32, height:32, borderRadius:'50%', cursor:'pointer',
  border: `1.5px solid ${active ? C.brownDark : 'rgba(95,46,19,0.25)'}`,
  background: active ? C.brownDark : 'transparent',
  color: active ? '#fff' : C.brownDark,
  fontSize:18, lineHeight:1, display:'flex', alignItems:'center', justifyContent:'center',
  transition:'all 0.2s',
});

const navBtnGhost = {
  background:'none', border:`1.5px solid ${C.brownDark}`, borderRadius:40,
  padding:'12px 32px', fontFamily:'Roboto', fontSize:15, color:C.brownDark, cursor:'pointer',
};
const navBtnPrimary = {
  background:C.brownDark, color:'#fff', border:'none', borderRadius:40,
  padding:'13px 36px', fontFamily:'Roboto', fontSize:15, letterSpacing:'0.04em', cursor:'pointer',
};

Object.assign(window, { TicketsPage });
