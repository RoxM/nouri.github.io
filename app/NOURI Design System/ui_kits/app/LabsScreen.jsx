// LabsScreen — upload metabolic / hormonal lab analyses
// Three states: empty, uploading, ready (with extracted markers).

function LabsScreen({ onClose }) {
  const [step, setStep] = React.useState('intro'); // intro | uploading | ready
  const [files, setFiles] = React.useState([]);

  const fakeUpload = (name, kind) => {
    setFiles(f => [...f, { name, kind, progress: 0 }]);
    setStep('uploading');
    let p = 0;
    const t = setInterval(() => {
      p += 8 + Math.random() * 14;
      setFiles(f => f.map(x => x.name === name ? { ...x, progress: Math.min(100, p) } : x));
      if (p >= 100) { clearInterval(t); setTimeout(() => setStep('ready'), 400); }
    }, 180);
  };

  return (
    <div style={{ padding: '60px 16px 60px', background: N.paper, minHeight: '100%', fontFamily: N.sans, color: N.ink }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', padding: 6, cursor: 'pointer', color: N.ink }}>
          <Icon name="close" size={22}/>
        </button>
        <div style={{ fontSize: 13, color: N.ink500 }}>Análisis · privado</div>
        <div style={{ width: 34 }}/>
      </div>

      <Eyebrow>Subir análisis médicos</Eyebrow>
      <h1 style={{ fontFamily: N.serif, fontSize: 30, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-.02em', margin: '6px 0 8px', textWrap: 'balance' }}>
        Tus números, leídos en el contexto de tu <em style={{color: N.purple}}>transición</em>.
      </h1>
      <div style={{ fontSize: 14, color: N.ink500, lineHeight: 1.5, marginBottom: 22, textWrap: 'pretty' }}>
        Sube tus análisis hormonales o metabólicos. Nuestra IA conecta los puntos entre lo que sientes y lo que dicen tus exámenes — en menos de dos minutos.
      </div>

      {step !== 'ready' && (
        <React.Fragment>
          {/* Drop zone */}
          <div style={{
            border: `1.5px dashed ${N.borderStrong}`, borderRadius: 20,
            background: N.paper2, padding: '28px 20px', textAlign: 'center',
            marginBottom: 14,
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: 999, background: N.purple50,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 12px', color: N.purple,
            }}>
              <Icon name="upload" size={26}/>
            </div>
            <div style={{ fontFamily: N.serif, fontSize: 20, lineHeight: 1.2, color: N.ink, marginBottom: 4 }}>
              Arrastra tu PDF o foto aquí
            </div>
            <div style={{ fontSize: 13, color: N.ink500, marginBottom: 14 }}>
              PDF, JPG o PNG · hasta 20 MB
            </div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
              <Button kind="primary" size="sm" icon="file" onClick={() => fakeUpload('Perfil hormonal · abr 2026.pdf', 'pdf')}>
                Elegir archivo
              </Button>
              <Button kind="secondary" size="sm" icon="camera" onClick={() => fakeUpload('Análisis metabólico.jpg', 'img')}>
                Tomar foto
              </Button>
            </div>
          </div>

          {/* What we read */}
          <Eyebrow style={{ marginBottom: 10 }}>Qué leemos</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
            {[
              ['flask', 'Hormonales', 'FSH, LH, estradiol, progesterona, AMH, TSH'],
              ['pulse', 'Metabólicos', 'Glucosa, insulina, HOMA-IR, perfil lipídico'],
              ['heart', 'Otros', 'Vitamina D, B12, ferritina, hemograma'],
            ].map(([ic, t, sub]) => (
              <Card key={t} style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: N.teal50, color: N.teal700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={ic} size={20}/>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: N.ink }}>{t}</div>
                  <div style={{ fontSize: 12, color: N.ink500, marginTop: 2 }}>{sub}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* Privacy */}
          <Card style={{ padding: 14, background: N.paper2, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <Icon name="info" size={18} stroke={N.ink500}/>
            <div style={{ fontSize: 12, color: N.ink700, lineHeight: 1.5 }}>
              Tus análisis se cifran en tu dispositivo antes de subirse. Solo tú los ves. <span style={{ color: N.purple, fontWeight: 500 }}>Cómo protegemos tus datos →</span>
            </div>
          </Card>
        </React.Fragment>
      )}

      {/* Uploading state */}
      {step === 'uploading' && files.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <Eyebrow style={{ marginBottom: 10 }}>Procesando</Eyebrow>
          {files.map(f => (
            <Card key={f.name} style={{ padding: 14, marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: N.purple50, color: N.purple,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={f.kind === 'pdf' ? 'file' : 'camera'} size={18}/>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: N.ink, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</div>
                  <div style={{ fontFamily: N.mono, fontSize: 11, color: N.ink500, marginTop: 2 }}>
                    {f.progress < 100 ? `${Math.round(f.progress)}% · leyendo valores…` : 'Listo · conectando con tus síntomas'}
                  </div>
                </div>
              </div>
              <div style={{ height: 4, background: N.paper3, borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${f.progress}%`, background: N.purple, transition: 'width 180ms linear' }}/>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Ready state — show extracted markers */}
      {step === 'ready' && (
        <React.Fragment>
          <Card dark style={{ marginBottom: 14, background: N.purple900, border: `1px solid ${N.purple700}` }}>
            <Eyebrow color={N.lavender}>Lo que vemos</Eyebrow>
            <div style={{ fontFamily: N.serif, fontSize: 22, color: '#F7F3EB', lineHeight: 1.2, marginTop: 6, textWrap: 'balance' }}>
              Tu estradiol bajó <em style={{ color: N.lavender }}>32%</em> respecto a tu último análisis. Esto se conecta con la niebla mental y el sueño fragmentado que registraste esta semana.
            </div>
            <div style={{ fontSize: 12, color: '#D6C7FD', opacity: .85, marginTop: 12 }}>
              No es un diagnóstico. Es información para tu próxima consulta.
            </div>
          </Card>

          <Eyebrow style={{ marginBottom: 10 }}>Marcadores leídos</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
            {[
              { name: 'Estradiol', val: '38', unit: 'pg/mL', flag: 'low', delta: '−32%' },
              { name: 'FSH', val: '24.6', unit: 'mUI/mL', flag: 'high', delta: '+18%' },
              { name: 'TSH', val: '2.1', unit: 'µUI/mL', flag: 'ok', delta: '—' },
              { name: 'HOMA-IR', val: '2.8', unit: '', flag: 'watch', delta: '+0.4' },
              { name: 'Vit. D', val: '22', unit: 'ng/mL', flag: 'low', delta: '—' },
              { name: 'Ferritina', val: '64', unit: 'ng/mL', flag: 'ok', delta: '—' },
            ].map(m => {
              const tone = {
                low:   { bg: '#F3D6D4', fg: '#6f241f', dot: '#B4433D', label: 'Baja' },
                high:  { bg: '#F4E6CB', fg: '#7a521b', dot: '#C88A2E', label: 'Alta' },
                watch: { bg: N.paper3, fg: N.ink700, dot: N.violet, label: 'Vigilar' },
                ok:    { bg: '#D6EDE2', fg: '#1d5a46', dot: N.success, label: 'En rango' },
              }[m.flag];
              return (
                <Card key={m.name} style={{ padding: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <div style={{ fontSize: 12, color: N.ink500, fontWeight: 500 }}>{m.name}</div>
                    <div style={{ width: 6, height: 6, borderRadius: 999, background: tone.dot }}/>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <div style={{ fontFamily: N.serif, fontSize: 24, color: N.ink, lineHeight: 1 }}>{m.val}</div>
                    <div style={{ fontFamily: N.mono, fontSize: 10, color: N.ink500 }}>{m.unit}</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                    <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 999, background: tone.bg, color: tone.fg, fontWeight: 600, letterSpacing: '.04em' }}>{tone.label}</span>
                    <span style={{ fontFamily: N.mono, fontSize: 10, color: N.ink500 }}>{m.delta}</span>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card style={{ padding: 16, background: N.teal50, border: `1px solid ${N.teal100}` }}>
            <Eyebrow color={N.teal700}>Próximo paso</Eyebrow>
            <div style={{ fontFamily: N.serif, fontSize: 18, color: N.ink, lineHeight: 1.3, marginTop: 4 }}>
              Te sugerimos consultar con un endocrinólogo especializado en climaterio.
            </div>
            <div style={{ fontSize: 13, color: N.ink700, marginTop: 6 }}>
              Preparamos las preguntas que vale la pena hacer.
            </div>
            <div style={{ marginTop: 12 }}>
              <Button kind="primary" size="sm">Ver guía para tu consulta</Button>
            </div>
          </Card>
        </React.Fragment>
      )}
    </div>
  );
}

window.LabsScreen = LabsScreen;
