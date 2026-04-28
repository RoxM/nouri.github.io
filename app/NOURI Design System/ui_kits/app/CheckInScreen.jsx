// CheckInScreen — register today's symptoms

function CheckInScreen({ onClose, onSave }) {
  const [mood, setMood] = React.useState(3);
  const [selected, setSelected] = React.useState(new Set(['sofocos']));
  const [note, setNote] = React.useState('');
  const toggle = (s) => {
    const n = new Set(selected);
    n.has(s) ? n.delete(s) : n.add(s);
    setSelected(n);
  };
  const symptoms = [
    'Sofocos', 'Sudoración nocturna', 'Insomnio', 'Ansiedad',
    'Niebla mental', 'Dolor articular', 'Cambios de humor', 'Fatiga',
    'Sequedad', 'Palpitaciones', 'Cefalea', 'Sensibilidad mamaria',
  ];
  const moods = ['Muy mal', 'Mal', 'Regular', 'Bien', 'Muy bien'];
  return (
    <div style={{ padding: '60px 16px 120px', fontFamily: N.sans, color: N.ink, background: N.paper, minHeight: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', padding: 6, cursor: 'pointer', color: N.ink }}>
          <Icon name="close" size={22}/>
        </button>
        <div style={{ fontSize: 13, color: N.ink500 }}>Día 14 · folicular</div>
        <div style={{ width: 34 }}/>
      </div>

      <Eyebrow>Check-in · paso 1 de 3</Eyebrow>
      <h1 style={{ fontFamily: N.serif, fontSize: 30, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-.02em', margin: '6px 0 18px' }}>
        ¿Cómo te sientes hoy?
      </h1>

      {/* Mood scale */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginBottom: 30 }}>
        {moods.map((m, i) => (
          <button key={i} onClick={() => setMood(i)} style={{
            flex: 1, border: 'none', cursor: 'pointer', borderRadius: 14,
            padding: '14px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            background: mood === i ? N.purple : N.paper2,
            color: mood === i ? '#fff' : N.ink700,
            fontFamily: N.sans, fontSize: 11, fontWeight: 500,
            transition: 'all 140ms',
          }}>
            <div style={{ fontFamily: N.serif, fontSize: 22, lineHeight: 1 }}>{i + 1}</div>
            <div style={{ lineHeight: 1.1, textAlign: 'center' }}>{m}</div>
          </button>
        ))}
      </div>

      <Eyebrow style={{ marginBottom: 10 }}>¿Qué estás notando?</Eyebrow>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 30 }}>
        {symptoms.map(s => {
          const k = s.toLowerCase().split(' ')[0];
          return (
            <span key={s} onClick={() => toggle(k)}>
              <Chip active={selected.has(k)}>{s}</Chip>
            </span>
          );
        })}
      </div>

      <Eyebrow style={{ marginBottom: 10 }}>¿Algo más?</Eyebrow>
      <textarea value={note} onChange={e => setNote(e.target.value)}
        placeholder="Un detalle tuyo, no un expediente médico."
        style={{
          width: '100%', minHeight: 90, padding: '12px 14px', border: `1px solid ${N.border}`,
          borderRadius: 14, background: N.paper2, color: N.ink, fontFamily: N.sans, fontSize: 15,
          lineHeight: 1.5, outline: 'none', resize: 'none', boxSizing: 'border-box',
        }}/>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 24 }}>
        <Button kind="primary" onClick={onSave}>Guardar registro</Button>
      </div>
    </div>
  );
}

window.CheckInScreen = CheckInScreen;
