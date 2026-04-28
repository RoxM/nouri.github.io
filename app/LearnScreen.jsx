// LearnScreen — content library, editorial feel

function LearnScreen() {
  const cats = ['Todo', 'Perimenopausia', 'Menopausia', 'Sueño', 'Hormonas', 'Sexualidad', 'Mente'];
  const [cat, setCat] = React.useState('Todo');
  const articles = [
    { eyebrow: 'SOFOCOS · 6 MIN', title: 'Por qué tu termostato se volvió loco', color1: N.navy, color2: N.purple },
    { eyebrow: 'HORMONAS · 9 MIN', title: 'Estrógenos, progesterona y tú: una guía sin rodeos', color1: N.purple900, color2: N.teal },
    { eyebrow: 'MENTE · 5 MIN', title: 'La niebla mental no es pérdida de memoria', color1: N.teal700, color2: N.mint },
    { eyebrow: 'SUEÑO · 7 MIN', title: 'Cuando tu cuerpo te despierta a las 3 a.m.', color1: '#3A1B66', color2: N.violet },
  ];
  return (
    <div style={{ padding: '60px 16px 120px', background: N.paper, minHeight: '100%' }}>
      <div style={{ marginBottom: 16 }}>
        <Eyebrow>Aprende</Eyebrow>
        <h1 style={{ fontFamily: N.serif, fontSize: 34, fontWeight: 400, letterSpacing: '-.02em', lineHeight: 1.05, margin: '4px 0 0' }}>
          Información, <em>no</em> consejos.
        </h1>
      </div>

      {/* Search */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, background: N.paper2,
        border: `1px solid ${N.border}`, borderRadius: 14, padding: '10px 14px', marginBottom: 14,
      }}>
        <Icon name="search" size={18} stroke={N.ink500}/>
        <input placeholder="Busca un síntoma, pregunta, hormona…"
          style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none',
            fontFamily: N.sans, fontSize: 15, color: N.ink }}/>
      </div>

      {/* Category scroll */}
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', marginBottom: 18, paddingBottom: 4 }}>
        {cats.map(c => (
          <span key={c} onClick={() => setCat(c)}>
            <Chip active={cat === c}>{c}</Chip>
          </span>
        ))}
      </div>

      {/* Featured article — full-bleed */}
      <Card style={{ padding: 0, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ height: 180, background: `linear-gradient(135deg, ${N.navy} 0%, ${N.purple900} 40%, ${N.purple} 80%, ${N.teal} 110%)`,
          position: 'relative', padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <Eyebrow color="#D6C7FD">GUÍA COMPLETA · 22 MIN</Eyebrow>
          <div style={{ fontFamily: N.serif, fontSize: 26, color: '#F7F3EB', lineHeight: 1.1, letterSpacing: '-.01em', marginTop: 6, maxWidth: 300 }}>
            Todo lo que nadie te dijo sobre la perimenopausia
          </div>
        </div>
      </Card>

      {/* Articles list */}
      <Eyebrow style={{ marginBottom: 10 }}>Para tu fase</Eyebrow>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {articles.map((a, i) => (
          <Card key={i} style={{ padding: 0, display: 'flex', overflow: 'hidden', height: 110 }}>
            <div style={{ width: 110, flexShrink: 0, background: `linear-gradient(135deg, ${a.color1}, ${a.color2})` }}/>
            <div style={{ padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
              <Eyebrow>{a.eyebrow}</Eyebrow>
              <div style={{ fontFamily: N.serif, fontSize: 17, lineHeight: 1.2, marginTop: 4, color: N.ink }}>{a.title}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

window.LearnScreen = LearnScreen;
