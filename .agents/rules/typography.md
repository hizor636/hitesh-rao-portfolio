# Typography Rule: Hitesh Rao M Portfolio

Apply this rule whenever you create or edit fonts, text styles, headings, buttons, forms or any copy styling in this project (`index.html`, `styles.css`, `script.js`).

## Goal
Keep one consistent typographic system across the whole site. Change fonts only by editing the tokens below, never by adding one-off font declarations.

## Fonts (exact, do not substitute)
| Role | Family | Weights | Use for |
|---|---|---|---|
| Sans (default) | `Inter Tight` | 400, 500, 600 | body copy, nav, buttons, forms, headings |
| Mono | `JetBrains Mono` | 400, 500 | small metadata: dates, project indexes (00-1), clock, counts |
| Serif accent | `Instrument Serif` (italic only) | 400 italic | the logo surname, the hero highlight word, the Info statement |

Load them once in `<head>`, with preconnect, using `display=swap`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@1&display=swap" rel="stylesheet">
```

Do not add more families or weights. If a new look is needed, ask the user first.

## Tokens (define in `:root` in `styles.css`)
```css
:root{
  --sans:'Inter Tight',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'JetBrains Mono',ui-monospace,Menlo,monospace;
  --serif:'Instrument Serif',Georgia,serif;
}
body{font:400 1rem/1.6 var(--sans);-webkit-font-smoothing:antialiased}
```
Always reference `var(--sans)`, `var(--mono)` and `var(--serif)`. Never hard-code a font name outside `:root`.

## Type scale (fluid, use `clamp`)
| Element | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| `h1` (hero) | `clamp(2.1rem, 7vw, 5.6rem)` | 500 | 1.05 | -0.03em |
| `h2` (section) | `clamp(2.2rem, 6vw, 4.5rem)` | 500 | 1.05 | -0.03em |
| `h3` | `1.5rem` | 500 | 1.05 | -0.03em |
| `h4` | `1rem` | 500 | 1.2 | normal |
| Body | `1rem` | 400 | 1.6 | normal |
| Lead / prose | `1.1rem` to `1.4rem` | 400 | 1.6 | normal |
| Metadata (mono) | `0.75rem` | 400 | 1.4 | 0.03em |
| Buttons | `1rem` | 500 | 1 | normal |

## Rules
1. **Headings:** sans, weight 500, tight tracking as above. Use `text-wrap: balance` on `h1`. Keep one `h1` per page and do not skip heading levels.
2. **Serif accent:** italic Instrument Serif only, and only for the three places listed above. It must never be used for body text or small sizes (below 1.25rem).
3. **Mono:** only for short metadata. No paragraphs in mono.
4. **Line length:** body paragraphs max `60ch`.
5. **Case:** use sentence case. Avoid ALL CAPS labels; if one is unavoidable, add `letter-spacing: .06em`.
6. **Units:** use `rem` for font sizes so user zoom and browser font settings work. Never use `px` for text.
7. **Weights:** never faux-bold. Use only the weights loaded above.
8. **Contrast:** text must keep at least 4.5:1 contrast. Muted text is `rgba(236,235,230,.66)` on `#0b0b0c`; do not make it lighter-opacity.
9. **Forms:** inputs, selects and textareas must use `font: inherit` and at least `1rem` so iOS does not zoom on focus.
10. **Fallbacks:** every stack must end in a generic family (as in the tokens) so text is readable before the fonts load.
11. **Reduced motion:** do not animate font-size, weight or letter-spacing.
12. **Performance:** keep `display=swap`. If self-hosting, use `woff2` only, with `font-display: swap` and `preload` for the sans regular file.
