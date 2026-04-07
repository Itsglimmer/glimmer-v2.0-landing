# Hero Ticker Frames

Estos son los puntos actuales de la secuencia del hero y del ticker en `HeroSection.jsx`.

## Inicio del ticker

- `HERO_TICKER_START_FRAME = 340`
- El ticker empieza a mostrarse visualmente en `frame-0341`

## Aparición de cada palabra

Con `HERO_TICKER_FRAME_STEP = 66` y 5 palabras:

- `Competitors`: `frameIndex 340` => `frame-0341`
- `Regulation`: `frameIndex 406` => `frame-0407`
- `Technology`: `frameIndex 472` => `frame-0473`
- `Risks`: `frameIndex 538` => `frame-0539`
- `Opportunities`: `frameIndex 604` => `frame-0605`

## Última palabra del ticker

- La última palabra (`Opportunities`) aparece en `frameIndex 604`
- Visualmente corresponde a `frame-0605`

## Scroll normal del layout

Con la lógica actual:

- El hero sigue en `position: sticky` durante todo su tramo
- La secuencia sigue avanzando hasta el último frame real
- El layout vuelve a su flujo normal al terminar el hero en `frameIndex 625`
- Visualmente eso corresponde a `frame-0626`

## Nota

Esto es documentación del proyecto, no RAG. En este caso corresponde guardarlo como una nota técnica en `docs/`.
