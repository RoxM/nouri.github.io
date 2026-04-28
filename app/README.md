# NOURI — App UI Kit

Recreación hi-fi de la app móvil NOURI, construida sobre `colors_and_type.css`
y el lenguaje visual definido en el `README.md` raíz.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Demo click-through con todas las pantallas |
| `ios-frame.jsx` | Frame de dispositivo iOS (starter) |
| `primitives.jsx` | Tokens (`N`) + `Icon`, `Eyebrow`, `Button`, `Chip`, `Card`, `Ring`, `TabBar` |
| `HomeScreen.jsx` | "Hoy" — dashboard con check-in, fase del ciclo y artículo destacado |
| `CheckInScreen.jsx` | Registro diario — ánimo + síntomas + nota |
| `TrackScreen.jsx` | Historial semanal + patrón detectado |
| `LearnScreen.jsx` | Biblioteca de contenido — hero editorial + tarjetas |
| `CommunityScreen.jsx` | Feed de la comunidad — posts de otras mujeres |

## Notas

- No se nos compartió código fuente ni Figma de NOURI. Las pantallas son una
  **propuesta** construida a partir de la paleta del logo y la misión de la
  marca. Léelas como punto de partida visual, no como especificación final.
- Todos los textos están en español (LATAM neutro) y siguen el tono del
  README: directo, cálido, específico. "Tú" siempre, nunca "usted".
- Sin emoji en ninguna pantalla — consistente con la guía de iconografía.
- El kit usa Lucide-style inline SVGs a 1.5px. Si NOURI adopta un set
  custom, reemplaza `Icon` en `primitives.jsx`.
