// TrackScreen — history of entries, chart-ish

function TrackScreen() {
  // mock weekly dots — each day has 0-3 symptom indicators
  const week = [
    { d: 'L', n: 12, mood: 3, symptoms: 2 },
    { d: 'M', n: 13, mood: 4, symptoms: 1 },
    { d: 'M', n: 14, mood: 4, symptoms: 2, today: true },
    { d: 'J', n: 15, mood: null, symptoms: null },
    { d: 'V', n: 16, mood: null, symptoms: null },
    { d: 'S', n: 17, mood: null, symptoms: null },
    { d: 'D', n: 18, mood: null, symptoms: null },
  ];
  const barColor = (m) => m === null ? N.paper3 : [null, '#D9777A', '#C88A2E', N.violet, N.teal, N.purple][m];
  return (
    <div style={{ padding: '60px 16px 120px', background: N.paper, minHeight: '100%' }}>
      <div style={{ marginBottom: 20 }}>
        <Eyebrow>Registro · abril 2026</Eyebrow>
        <h1 style={{ fontFamily: N.serif, fontSize: 30, fontWeight: 400, letterSpacing: '-.02em', lineHeight: 1.05, margin: '4px 0 0' }}>
          Lo que tu cuerpo te está contando.
        </h1>
      </div>

      {/* Week view */}
      <Card style={{ padding: 18, marginBottom: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <Eyebrow>Esta semana</Eyebrow>
          <div style={{ fontSize: 12, color: N.ink500 }}>12 – 18 abr</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 6, height: 110 }}>
          {week.map((w, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: '100%',
                height: w.mood ? `${20 + w.mood * 18}px` : 12,
                background: barColor(w.mood),
                borderRadius: 8,
                opacity: w.today ? 1 : (w.mood ? 0.85 : 1),
                border: w.today ? `2px solid ${N.navy}` : 'none',
              }}/>
              <div style={{ fontSize: 10, color: N.ink500, fontFamily: N.sans }}>{w.d}</div>
              <div style={{
                fontFamily: N.mono, fontSize: 12,
                fontWeight: w.today ? 600 : 400,
                color: w.today ? N.purple : N.ink,
              }}>{w.n}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Pattern detected */}
      <Card dark style={{ marginBottom: 14, background: N.purple900, border: `1px solid ${N.purple700}` }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <Icon name="sparkle" size={22} stroke={N.lavender}/>
          <div style={{ flex: 1 }}>
            <Eyebrow color={N.lavender}>Un patrón</Eyebrow>
            <div style={{ fontFamily: N.serif, fontSize: 18, color: '#F7F3EB', lineHeight: 1.25, marginTop: 4 }}>
              Tus sofocos aparecen con más frecuencia los días que dormiste menos de 6 horas.
            </div>
            <div style={{ fontSize: 12, color: '#D6C7FD', opacity: .8, marginTop: 10 }}>Basado en 21 días de registro</div>
          </div>
        </div>
      </Card>

      {/* Recent entries */}
      <Eyebrow style={{ margin: '10px 0 10px 4px' }}>Registros recientes</Eyebrow>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          { d: 'Hoy', sub: 'Bien · Sofocos, insomnio', color: N.teal },
          { d: 'Ayer', sub: 'Bien · Ansiedad', color: N.violet },
          { d: 'Lun 12 abr', sub: 'Regular · Niebla mental, fatiga', color: N.warning },
        ].map((e, i) => (
          <Card key={i} style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 4, height: 34, background: e.color, borderRadius: 2 }}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: N.ink }}>{e.d}</div>
              <div style={{ fontSize: 12, color: N.ink500 }}>{e.sub}</div>
            </div>
            <Icon name="chevron" size={16} stroke={N.ink300}/>
          </Card>
        ))}
      </div>
    </div>
  );
}

window.TrackScreen = TrackScreen;
