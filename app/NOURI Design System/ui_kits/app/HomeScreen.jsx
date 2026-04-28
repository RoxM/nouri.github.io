// HomeScreen — "Hoy" · the main dashboard
// Shows today's check-in state, cycle phase, a tile grid, and today's recommendation.

function HomeScreen({ onOpenCheckIn, onOpenArticle, onOpenLabs }) {
  return (
    <div style={{ padding: '60px 16px 120px', fontFamily: N.sans, color: N.ink, background: N.paper, minHeight: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <Eyebrow>Sábado · 18 abr</Eyebrow>
          <h1 style={{ fontFamily: N.serif, fontSize: 30, fontWeight: 400, lineHeight: 1.05, letterSpacing: '-.02em', margin: '4px 0 0' }}>
            Buenos días, <em style={{ color: N.purple }}>Ana</em>.
          </h1>
        </div>
        <div style={{ width: 40, height: 40, borderRadius: 999, background: N.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: N.serif, fontSize: 18, color: N.purple900 }}>A</div>
      </div>

      {/* Today's check-in — primary, no phase indicator */}
      <Card dark style={{ marginBottom: 14, padding: 22 }}>
        <Eyebrow color="#D6C7FD">Check-in de hoy</Eyebrow>
        <div style={{ fontFamily: N.serif, fontSize: 28, color: '#F7F3EB', lineHeight: 1.15, letterSpacing: '-.01em', marginTop: 6 }}>
          ¿Cómo te sientes hoy?
        </div>
        <div style={{ fontSize: 13, color: '#D6C7FD', opacity: .8, marginTop: 6 }}>3 min. Solo para ti.</div>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <Button kind="primary" size="sm" onClick={onOpenCheckIn}>Empezar check-in</Button>
          <Button kind="ghost" size="sm" onClick={onOpenLabs} icon="upload" style={{color:'#D6C7FD'}}>Subir análisis</Button>
        </div>
      </Card>

      {/* Tile grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
        <Card style={{ padding: 16 }}>
          <Icon name="moon" size={20} stroke={N.purple}/>
          <div style={{ fontSize: 12, color: N.ink500, marginTop: 10 }}>Sueño anoche</div>
          <div style={{ fontFamily: N.serif, fontSize: 26, color: N.ink, lineHeight: 1 }}>5h 42m</div>
          <div style={{ fontSize: 12, color: '#B4433D', marginTop: 4 }}>−1h 15m vs. promedio</div>
        </Card>
        <Card style={{ padding: 16 }}>
          <Icon name="thermo" size={20} stroke={N.teal}/>
          <div style={{ fontSize: 12, color: N.ink500, marginTop: 10 }}>Sofocos esta semana</div>
          <div style={{ fontFamily: N.serif, fontSize: 26, color: N.ink, lineHeight: 1 }}>7</div>
          <div style={{ fontSize: 12, color: N.ink500, marginTop: 4 }}>Dur. promedio 3 min</div>
        </Card>
      </div>

      {/* Today's read */}
      <Eyebrow style={{ margin: '18px 0 10px 4px' }}>Hoy te recomendamos leer</Eyebrow>
      <Card onClick={onOpenArticle} style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ height: 120, background: `linear-gradient(135deg, ${N.navy} 0%, ${N.purple900} 45%, ${N.purple} 100%)`,
          position: 'relative', display: 'flex', alignItems: 'flex-end', padding: 16 }}>
          <Eyebrow color="#D6C7FD">SOFOCOS · 6 MIN</Eyebrow>
        </div>
        <div style={{ padding: '14px 18px 16px' }}>
          <div style={{ fontFamily: N.serif, fontSize: 20, lineHeight: 1.2, color: N.ink }}>
            Por qué tu termostato se volvió loco
          </div>
          <div style={{ fontSize: 13, color: N.ink500, marginTop: 4 }}>
            La caída de estrógenos afecta el hipotálamo. Esto explica por qué tu cuerpo sobrerreacciona.
          </div>
        </div>
      </Card>
    </div>
  );
}

window.HomeScreen = HomeScreen;
