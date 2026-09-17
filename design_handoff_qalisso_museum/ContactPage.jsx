const { useState: useContactState } = React;

function ContactPage() {
  const [form, setForm] = useContactState({ name: '', email: '', message: '' });
  const [sent, setSent] = useContactState(false);
  const [errors, setErrors] = useContactState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Please enter your name.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.message.trim()) e.message = 'Please enter a message.';
    return e;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSent(true);
  };

  const field = (key, placeholder, multiline) => {
    const Tag = multiline ? 'textarea' : 'input';
    return (
      <div style={{ marginBottom: 36 }}>
        <Tag
          className="mu-input"
          type={key === 'email' ? 'email' : 'text'}
          placeholder={placeholder}
          value={form[key]}
          rows={multiline ? 5 : undefined}
          onChange={e => { setForm({ ...form, [key]: e.target.value }); setErrors({ ...errors, [key]: '' }); }}
        />
        {errors[key] && <div style={{ fontFamily: 'Roboto', fontSize: 13, color: '#c0392b', marginTop: 5 }}>{errors[key]}</div>}
      </div>
    );
  };

  return (
    <div style={{ background: C.contactBg, minHeight: '100vh', paddingTop: 100 }}>
      <div style={{ padding: '60px 8% 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '10%', alignItems: 'start' }}>
          {/* Left — info */}
          <div>
            <h1 className="display-heading" style={{ fontSize: 'clamp(44px, 5vw, 78px)', color: C.brownDark, marginBottom: 48 }}>Contact</h1>
            <div style={{ fontFamily: 'Roboto', lineHeight: 2.15, color: C.brownDark }}>
              <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 14, letterSpacing: '0.04em' }}>QALISSO MUSEUM</div>
              <div style={{ fontWeight: 300, fontSize: 15 }}>+33 1 44 23 08 55</div>
              <div style={{ fontWeight: 300, fontSize: 15 }}>qalissomuseum@qaliss.com</div>
              <div style={{ fontWeight: 300, fontSize: 15, marginTop: 10 }}>102 terrasse Boieldieu,</div>
              <div style={{ fontWeight: 300, fontSize: 15 }}>Tour W – 12ème étage,</div>
              <div style={{ fontWeight: 300, fontSize: 15 }}>92800 Puteaux</div>
            </div>
            <div style={{ marginTop: 30, height: 170, overflow: 'hidden', borderRadius: 3, boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}>
              <img src="assets/footer-map.jpg" alt="Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div style={{ paddingTop: 40, textAlign: 'center' }}>
                <div style={{ marginBottom: 20 }}><StarOrnament size={48} color={C.brownDark} /></div>
                <h2 className="display-heading" style={{ fontSize: 36, color: C.brownDark, marginBottom: 16 }}>Thank you!</h2>
                <p style={{ fontFamily: 'Roboto', fontWeight: 300, fontSize: 18, color: C.brownDark, lineHeight: 1.75 }}>
                  Your message has been sent.<br />We'll get back to you shortly.
                </p>
                <button
                  style={{ marginTop: 32, background: 'none', border: `1.5px solid ${C.brownDark}`, borderRadius: 40, padding: '10px 32px', fontFamily: 'Roboto', fontSize: 15, color: C.brownDark, cursor: 'pointer' }}
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                >Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {field('name',    'Enter your name')}
                {field('email',   'Enter a valid email address')}
                {field('message', 'Enter your message', true)}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="submit" style={{
                    background: C.brownDark, color: '#fff', border: 'none',
                    borderRadius: 40, padding: '13px 48px',
                    fontFamily: 'Roboto', fontSize: 18,
                    letterSpacing: '0.05em', cursor: 'pointer',
                    transition: 'background 0.22s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#3D1A08'}
                  onMouseLeave={e => e.currentTarget.style.background = C.brownDark}
                  >Send</button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom info row */}
        <div style={{
          marginTop: 80, paddingTop: 32,
          borderTop: `1px solid rgba(95,46,19,0.2)`,
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
          fontFamily: 'Roboto', fontWeight: 300, fontSize: 15, color: C.brownDark,
        }}>
          <span>Qalisso Museum</span>
          <span>+33 1 44 23 08 55</span>
          <span>qalissomuseum@qaliss.com</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ContactPage });
