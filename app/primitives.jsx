// NOURI — shared primitives used across screens
// Tokens mirror colors_and_type.css so the kit can live in isolation.

const N = {
  navy: '#1E1D2B', paper: '#FBF7F1', paper2: '#F4EEE3', paper3: '#EAE2D3',
  border: '#E3DCCC', ink: '#1E1D2B', ink700: '#3A3948', ink500: '#6B6A7C', ink300: '#A3A1B2',
  purple: '#7B39D2', purple50: '#F6EFFE', purple100: '#EADCFE', purple700: '#5B28A3', purple900: '#3A1B66',
  teal: '#07B5B5', teal50: '#EAF8F8', teal100: '#CDEFEF', teal700: '#067E7E',
  lavender: '#D6C7FD', mint: '#B6E8E9', violet: '#8677C3',
  serif: "'Instrument Serif', Georgia, serif",
  sans: "'Geist', -apple-system, system-ui, sans-serif",
  mono: "'Geist Mono', ui-monospace, Menlo, monospace",
};

// ── Icon (inline Lucide-style strokes, 1.5px) ──────────────────
function Icon({ name, size = 20, stroke = 'currentColor' }) {
  const paths = {
    heart: <><path d="M12 21s-8-4.5-8-11.5a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3C22 16.5 14 21 14 21z" transform="translate(-1 0)"/></>,
    pulse: <><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
    clock: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
    bell: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></>,
    message: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>,
    user: <><circle cx="12" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    book: <><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></>,
    home: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    chevron: <><path d="M9 18l6-6-6-6"/></>,
    chevronDown: <><path d="M6 9l6 6 6-6"/></>,
    moon: <><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></>,
    thermo: <><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></>,
    brain: <><path d="M12 5a3 3 0 0 0-5.8-1A3 3 0 0 0 3 8c0 1.5 1 2 1 3a3 3 0 0 0 3 3h0a3 3 0 0 0 3 3v4"/><path d="M12 5a3 3 0 0 1 5.8-1A3 3 0 0 1 21 8c0 1.5-1 2-1 3a3 3 0 0 1-3 3h0a3 3 0 0 1-3 3v4"/></>,
    search: <><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
    sparkle: <><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/></>,
    info: <><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></>,
    trend: <><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></>,
    close: <><path d="M18 6L6 18M6 6l12 12"/></>,
    check: <><path d="M20 6L9 17l-5-5"/></>,
    upload: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>,
    flask: <><path d="M9 2v6.5L3 19a2 2 0 0 0 1.7 3h14.6A2 2 0 0 0 21 19l-6-10.5V2"/><path d="M8 2h8M7 16h10"/></>,
    camera: <><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></>,
    trash: <><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></>,
    sparkle2: <><path d="M12 3v18M3 12h18"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

// ── Eyebrow ────────────────────────────────────────────────────
function Eyebrow({ children, color = N.ink500, style = {} }) {
  return <div style={{
    fontFamily: N.sans, fontSize: 11, fontWeight: 500, letterSpacing: '.14em',
    textTransform: 'uppercase', color, ...style,
  }}>{children}</div>;
}

// ── Button ────────────────────────────────────────────────────
function Button({ children, kind = 'primary', size = 'md', onClick, icon, style = {} }) {
  const sizes = { md: { fz: 15, pad: '12px 22px' }, sm: { fz: 13, pad: '8px 14px' } };
  const s = sizes[size];
  const kinds = {
    primary:   { bg: N.purple, fg: '#fff', bd: N.purple },
    secondary: { bg: N.paper, fg: N.ink, bd: N.border },
    dark:      { bg: N.navy, fg: '#F7F3EB', bd: N.navy },
    ghost:     { bg: 'transparent', fg: N.purple, bd: 'transparent' },
  };
  const k = kinds[kind];
  return (
    <button onClick={onClick} style={{
      fontFamily: N.sans, fontWeight: 500, fontSize: s.fz, padding: s.pad,
      borderRadius: 999, border: `1px solid ${k.bd}`, background: k.bg, color: k.fg,
      cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
      transition: 'all 140ms cubic-bezier(.22,.61,.36,1)',
      ...style,
    }}>
      {icon && <Icon name={icon} size={16}/>}
      {children}
    </button>
  );
}

// ── Chip ───────────────────────────────────────────────────────
function Chip({ children, tone = 'default', active = false }) {
  const tones = {
    default: { bg: N.paper, fg: N.ink700, bd: N.border },
    purple:  { bg: N.purple50, fg: N.purple700, bd: 'transparent' },
    teal:    { bg: N.teal100, fg: N.teal700, bd: 'transparent' },
    lav:     { bg: N.lavender, fg: N.purple900, bd: 'transparent' },
  };
  const t = active ? { bg: N.purple, fg: '#fff', bd: N.purple } : tones[tone];
  return <span style={{
    fontFamily: N.sans, fontSize: 13, padding: '7px 14px', borderRadius: 999,
    border: `1px solid ${t.bd}`, background: t.bg, color: t.fg, cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap',
  }}>{children}</span>;
}

// ── Card ───────────────────────────────────────────────────────
function Card({ children, dark = false, style = {}, onClick }) {
  return <div onClick={onClick} style={{
    background: dark ? N.navy : N.paper2,
    color: dark ? '#F7F3EB' : N.ink,
    border: `1px solid ${dark ? '#2A2939' : N.border}`,
    borderRadius: 20, padding: 18,
    boxShadow: '0 2px 6px -2px rgba(30,29,43,.08), 0 1px 2px rgba(30,29,43,.04)',
    cursor: onClick ? 'pointer' : 'default',
    ...style,
  }}>{children}</div>;
}

// ── Progress ring ──────────────────────────────────────────────
function Ring({ value = 0.4, size = 120, stroke = 8, children, color = N.teal, track = N.paper3 }) {
  const r = size/2 - stroke/2;
  const circ = 2 * Math.PI * r;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={track} strokeWidth={stroke}/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
          strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ * (1 - value)}/>
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center' }}>{children}</div>
    </div>
  );
}

// ── Bottom tab bar (mobile nav) ────────────────────────────────
function TabBar({ active = 'home', onChange }) {
  const tabs = [
    { id: 'home', icon: 'home', label: 'Hoy' },
    { id: 'track', icon: 'pulse', label: 'Registro' },
    { id: 'learn', icon: 'book', label: 'Aprende' },
    { id: 'comm', icon: 'users', label: 'Comunidad' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 24, left: 16, right: 16, zIndex: 10,
      background: 'rgba(30,29,43,.82)', backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      borderRadius: 999, padding: 8, display: 'flex', justifyContent: 'space-around',
      boxShadow: '0 24px 48px -16px rgba(30,29,43,.35), 0 8px 16px -8px rgba(30,29,43,.15)',
      border: '0.5px solid rgba(255,255,255,0.06)',
    }}>
      {tabs.map(t => {
        const on = active === t.id;
        return (
          <button key={t.id} onClick={() => onChange?.(t.id)} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            padding: '8px 0', border: 'none', background: 'transparent',
            color: on ? '#fff' : 'rgba(247,243,235,.55)', cursor: 'pointer',
            fontFamily: N.sans, fontSize: 10, fontWeight: on ? 600 : 500, letterSpacing: '.04em',
          }}>
            <Icon name={t.icon} size={22}/>
            <span>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, { N, Icon, Eyebrow, Button, Chip, Card, Ring, TabBar });
