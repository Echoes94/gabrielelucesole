

# Ottimizzazione UI: 🗺️ La Tua Mappa di Trasformazione

## Problema attuale
La griglia 3-colonne piatta non comunica progressione. Tutti i livelli sono visibili simultaneamente, creando un "muro" di card che non guida l'occhio attraverso un percorso narrativo.

## Soluzione: Card Carousel con Progressione Visiva

### Architettura del componente

Un carousel navigabile con una card in focus alla volta, indicatore di progresso visivo e navigazione fluida.

```text
┌─────────────────────────────────────────────┐
│  🗺️ La Tua Mappa di Trasformazione         │
│                                             │
│  ● ● ◉ ○ ○ ○ ○   (dot indicators)         │
│  ← LV 2 - Cura ─────────────────────── →   │
│  ┌─────────────────────────────────────┐    │
│  │ 1D - TRASFORMA IL TUO PASSATO      │    │
│  │ [🔒]  LV 2          Settimane 2-4  │    │
│  │                                     │    │
│  │ Cura                               │    │
│  │ Training Bambino Interiore          │    │
│  │                                     │    │
│  │ • Tecniche di reparenting           │    │
│  │ • Integrazione archetipi            │    │
│  │ • Training guidato bambino int.     │    │
│  │                                     │    │
│  │ ─────────────────────────────────   │    │
│  │ 🎁 Past Authoring + Pratiche...     │    │
│  │ ⏱️ 15 min/giorno                    │    │
│  │ 💪 Integrazione Archetipi           │    │
│  │ 🎖️ Cura del Bambino Interiore       │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ◄ prev    LV 2 di 7    next ►              │
│                                             │
│  [═══════░░░░░░░░░░░░░] Progress bar        │
└─────────────────────────────────────────────┘
```

### Dettagli implementativi

1. **Nuovo componente `RoadmapCarousel`** (estrarre dalla sezione inline in MetodoEFO.tsx)
   - Usa il componente `Carousel` di shadcn/ui già presente nel progetto (`src/components/ui/carousel.tsx` basato su Embla)
   - State: `currentIndex` per tracciare la slide attiva
   - Unifica `roadmapLevels` + `maestriaLevels` in un unico array per il carousel

2. **Design della singola card (full-width nel viewport del carousel)**
   - Card centrata, max-width ~600px, con padding generoso
   - Dimension badge in alto (cyan per standard, amber per maestria)
   - Livello + icona lock/unlock + settimana in riga
   - Titolo e sottotitolo prominenti
   - Lista contenuti con bullet cyan/amber
   - Footer con badge, tempo, skill, achievement
   - Bordo e glow differenziato: cyan per LV 0-4, amber per LV 5-6

3. **Navigazione**
   - Frecce sx/dx ai lati della card (desktop) e swipe gesture (mobile, nativo Embla)
   - Dot indicators sopra la card che mostrano il livello corrente
   - Label "LV X di 7" sotto la card
   - Transizione slide con ease-out fluido

4. **Barra di progresso**
   - Sotto il carousel, progress bar che si riempie in base alla slide attiva (0/7 → 7/7)
   - Gradiente da cyan ad amber man mano che si avanza
   - Testo descrittivo sotto ("Livello 0 → Inizia il Viaggio" che cambia per ogni slide)

5. **Testo finale invariato**
   - "Non è un corso... È una quest di trasformazione esistenziale." resta sotto il carousel

### File da modificare
- **`src/pages/MetodoEFO.tsx`**: Sostituire la griglia (righe 633-710) con il nuovo componente carousel. La progress bar statica (righe 712-727) viene integrata nel carousel stesso.
- **Nessun nuovo file**: il componente carousel può essere inline o estratto in `src/components/RoadmapCarousel.tsx` per pulizia.

### Performance
- Embla Carousel è già nel bundle (dipendenza esistente). Nessun peso aggiuntivo.
- Renderizza solo le slide visibili + adiacenti, riducendo il DOM rispetto alla griglia attuale (7 card → ~3 nel DOM visibile).

