// CommunityScreen — peer space

function CommunityScreen() {
  const posts = [
    {
      name: 'Marcela', age: 49, tag: 'Perimenopausia',
      time: 'hace 2 h',
      body: 'Llevaba dos años pensando que me estaba volviendo loca. Resulta que tenía 47. Gracias por existir.',
      likes: 124, replies: 23, av: N.lavender, tone: 'purple',
    },
    {
      name: 'Lucía', age: 52, tag: 'Menopausia',
      time: 'hace 5 h',
      body: '¿Alguien más sintió que volvió a dormir bien después de los 50? Llevaba tres años sin descansar.',
      likes: 78, replies: 41, av: N.mint, tone: 'teal',
    },
    {
      name: 'Sofía', age: 46, tag: 'Perimenopausia',
      time: 'ayer',
      body: 'Mi médico me dijo "todavía eres joven para eso". Fui a otra doctora. Segunda opinión, siempre.',
      likes: 302, replies: 67, av: '#E5E0F1', tone: 'purple',
    },
  ];
  return (
    <div style={{ padding: '60px 16px 120px', background: N.paper, minHeight: '100%' }}>
      <div style={{ marginBottom: 16 }}>
        <Eyebrow>Comunidad · 12 430 mujeres</Eyebrow>
        <h1 style={{ fontFamily: N.serif, fontSize: 34, fontWeight: 400, letterSpacing: '-.02em', lineHeight: 1.05, margin: '4px 0 0' }}>
          Aquí <em>nadie</em> te va a decir que exageras.
        </h1>
      </div>

      {/* Compose */}
      <Card style={{ marginBottom: 16, padding: 14, display: 'flex', gap: 12, alignItems: 'center' }}>
        <div style={{ width: 36, height: 36, borderRadius: 999, background: N.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: N.serif, fontSize: 16, color: N.purple900, flexShrink: 0 }}>A</div>
        <div style={{ flex: 1, fontSize: 14, color: N.ink500, fontFamily: N.sans }}>Comparte algo con la comunidad…</div>
        <Button kind="primary" size="sm" icon="plus">Publicar</Button>
      </Card>

      <Eyebrow style={{ marginBottom: 10 }}>De otras mujeres como tú</Eyebrow>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {posts.map((p, i) => (
          <Card key={i} style={{ padding: 16 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 999, background: p.av, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: N.serif, fontSize: 16, color: N.purple900 }}>{p.name[0]}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{p.name}, {p.age}</div>
                <div style={{ fontSize: 12, color: N.ink500 }}>{p.time}</div>
              </div>
              <Chip tone={p.tone}>{p.tag}</Chip>
            </div>
            <div style={{ fontFamily: N.serif, fontSize: 18, lineHeight: 1.3, color: N.ink, margin: '4px 0 14px' }}>
              "{p.body}"
            </div>
            <div style={{ display: 'flex', gap: 20, color: N.ink500, fontSize: 13 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Icon name="heart" size={16}/> {p.likes}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Icon name="message" size={16}/> {p.replies}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

window.CommunityScreen = CommunityScreen;
