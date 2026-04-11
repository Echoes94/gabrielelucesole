

## Ottimizzazione UI - Sezione Roadmap "La Tua Mappa di Trasformazione"

### Analisi dei problemi attuali

La sezione usa una griglia piatta di card (3 colonne desktop, 2 tablet) dove tutte le card hanno lo stesso peso visivo. L'unica differenziazione sono i livelli "Maestria" in amber. I problemi estetici principali:

1. **Card troppo uniformi** - Manca gerarchia tra LV0 (gratuito/entry point) e i livelli successivi
2. **Badge LV poco distintivi** - Il numero del livello si perde tra gli altri elementi
3. **Micro-dettagli generici** - Bullet points con pallini da 1px, bordi sottili, icone Lock/Unlock poco espressive
4. **Progress bar statica** - Non trasmette energia, sembra un placeholder
5. **Mancano micro-interazioni** - Solo hover translate-y, nessun effetto sul focus visivo
6. **Card Maestria** - La differenziazione amber è buona ma il trattamento è troppo simile alle card normali

### Piano di intervento

**Step 1 - Ridisegnare il "Level Badge"**
- Sostituire il cerchio piatto con un badge numerico bold e prominente con glow effect
- Aggiungere un bordo luminoso pulsante per LV0 (il punto di ingresso attivo)
- Usare un gradient interno che va da cyan scuro a cyan chiaro per i livelli sbloccati

**Step 2 - Differenziare visivamente le card per stato**
- LV0 (unlocked + entry): bordo cyan più marcato, subtle glow esterno, leggero gradient radiale di sfondo
- Livelli locked: effetto vetro sfumato, opacità leggermente ridotta, icona lucchetto con animazione shake on hover
- Card Maestria: gradient più ricco con particelle decorative (pseudo-elementi CSS), bordo amber con glow

**Step 3 - Migliorare la tipografia interna**
- Titolo del livello ("Fondamenta", "Cura"): font-display più grande, letter-spacing negativo per impatto
- Subtitle: rimuovere il colore cyan piatto, usare un gradient text più sofisticato
- Sezione "Cosa succede/faremo:" → rendere il label più discreto e i bullet points con icone Lucide piccole (ChevronRight) invece dei pallini

**Step 4 - Rinnovare la sezione bonus/badge in fondo a ogni card**
- Separare visualmente time, skill e achievement con chip/tag stilizzati
- Skill: chip con bordo emerald e icona piccola
- Achievement: chip con bordo amber e micro-icona trofeo
- Time: tag discreto con icona orologio integrata

**Step 5 - Progress bar interattiva**
- Aggiungere segmenti visibili (uno per livello) con label sotto
- Animazione gradient che scorre da sinistra a destra con `background-size` animato
- Glow pulse sul segmento attivo

**Step 6 - Hover e transizioni premium**
- Card hover: leggero scale(1.02), border-color transition verso cyan, ombra esterna con glow
- Card Maestria hover: glow amber che si espande
- Stagger animation migliorata: blur-in + scale con timing più morbido

### File coinvolti

| File | Modifica |
|------|----------|
| `src/pages/MetodoEFO.tsx` | Ristrutturazione JSX delle card roadmap (linee 618-736) |
| `src/index.css` | Eventuali nuove utility CSS (glow keyframes, gradient utilities) |

### Note tecniche
- Nessuna libreria aggiuntiva necessaria: tutto con Tailwind + CSS custom
- Le animazioni useranno CSS puro dove possibile (no framer-motion aggiuntivo) per mantenere le performance ottimizzate
- Responsive: le card manterranno la griglia attuale ma con breakpoint migliorati

