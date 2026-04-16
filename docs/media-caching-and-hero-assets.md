# Media Caching And Hero Assets

Este documento resume los ajustes aplicados al hero, a la secuencia de frames, a los videos estáticos y a los assets relacionados para reducir tráfico repetido y mejorar la carga visual inicial.

## Objetivos

- reducir el peso total de la secuencia del hero
- mantener `313` frames en desktop
- evitar redescargas repetidas de frames y videos
- evitar pantalla negra en mobile mientras el video del hero todavía no está listo
- dejar documentados los headers y la forma de validarlos

## Estado actual

### Frames del hero

Archivo de referencia:

- [src/lib/heroFrames.js](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/src/lib/heroFrames.js)

Valores actuales:

- total de frames: `313`
- carpeta activa: `/assets/video-frames/small-f12-s1200-q45`
- patrón de nombre: `frame-0001.webp` a `frame-0313.webp`

Implementación actual:

```js
export const HERO_FRAME_COUNT = 313

export const getHeroFrameSrc = (index) =>
  `/assets/video-frames/small-f12-s1200-q45/frame-${String(index + 1).padStart(4, '0')}.webp`
```

## Cómo se generó la secuencia reducida

La versión actual mantiene `313` frames pero con menor peso por frame que la versión previa.

El ajuste importante fue:

- mantener el mismo conteo final de frames
- bajar resolución
- bajar calidad WebP
- mantener compresión alta

Comando de referencia:

```bash
/opt/homebrew/opt/ffmpeg-full/bin/ffmpeg \
  -i "public/assets/video/video-glimmer-extended.mp4" \
  -vf "fps=12,scale=1200:-1" \
  -frames:v 313 \
  -c:v libwebp \
  -quality 45 \
  -compression_level 5 \
  -f image2 \
  public/assets/video-frames/small-f12-s1200-q45/frame-%04d.webp
```

Qué hace cada parte:

- `fps=12`: conserva el ritmo visual que produce `313` frames
- `scale=1200:-1`: reduce el ancho sin deformar la relación de aspecto
- `-frames:v 313`: fuerza el conteo exacto
- `-c:v libwebp`: codifica cada frame como WebP
- `-quality 45`: reduce peso con pérdida
- `-compression_level 5`: mejora compresión

## Estrategia de carga del hero

Archivo principal:

- [src/components/sections/HeroSection.jsx](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/src/components/sections/HeroSection.jsx)

### Desktop

En desktop el hero usa `canvas` y secuencia de frames.

Comportamiento esperado:

- los primeros frames del rango visible se cargan al inicio
- el resto se van cargando conforme el scroll los necesita
- una vez descargados, el navegador los reutiliza desde cache

### Mobile

En mobile el hero usa video:

- [public/assets/video/final-video-hero-limmer.mp4](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/public/assets/video/final-video-hero-limmer.mp4)

Y ahora también usa una imagen fallback:

- [public/assets/video/final-video-hero-limmer.png](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/public/assets/video/final-video-hero-limmer.png)

## Fallback visual del hero mobile

Se agregó un fallback específico para mobile para evitar pantalla negra mientras el video todavía no tiene datos suficientes para pintarse.

Archivos modificados:

- [src/components/sections/HeroSection.jsx](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/src/components/sections/HeroSection.jsx)
- [src/index.css](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/src/index.css)

Comportamiento:

1. en mobile, el hero monta primero la imagen PNG
2. el video se renderiza con opacidad `0`
3. cuando el video entra en `loadeddata` o `canplay`, se marca como listo
4. el video hace fade-in
5. la imagen fallback se desvanece

Esto no cambia el comportamiento de desktop.

## Cache HTTP aplicado

Archivo:

- [public/_headers](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/public/_headers)

Configuración actual:

```txt
/assets/video-frames/*
  Cache-Control: public, max-age=31536000, immutable

/assets/video/*
  Cache-Control: public, max-age=31536000, immutable
```

### Qué significa

- `public`: permite cache en navegador y caches intermedios
- `max-age=31536000`: el asset puede reutilizarse durante 1 año
- `immutable`: el navegador no debería revalidarlo mientras la URL no cambie

## Efecto esperado del cache

### Frames

Después de la primera descarga:

- no deberían reaparecer como descargas completas
- deberían salir como `memory cache` o `disk cache`

### Videos

Los videos pueden aparecer con estado `206` y eso es normal.

En video, `206 Partial Content` suele indicar que el navegador usa peticiones por rango (`Range requests`).

Lo importante es que el tamaño indique:

- `memory cache`
- `disk cache`

y no un tamaño real transferido desde red.

## Assets de video bajo cache largo

Carpeta actual:

- [public/assets/video](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/public/assets/video)

Assets relevantes:

- `final-video-hero-limmer.mp4`
- `final-video-hero-limmer.png`
- `how-it-works.webm`
- `opportunity-section.mp4`

Los headers de `/assets/video/*` cubren los videos del hero y de otras secciones.

## Validación en DevTools

### Comportamiento bueno

En `Network`:

- frames como `200 (memory cache)`
- frames como `200 (disk cache)`
- videos como `206 (disk cache)`

### Comportamiento aceptable pero no ideal

- `304` en assets pequeños como favicon, logos o documento HTML

Eso significa revalidación ligera, no redescarga completa.

### Qué mirar

Columnas útiles:

- `Status`
- `Size`
- `Time`

La columna crítica es `Size`.

Señales de reutilización local:

- `(memory cache)`
- `(disk cache)`

Señal de revalidación:

- `304`

Señal de descarga real:

- tamaño en `kB` o `MB`

## Cómo hacer una prueba limpia

1. abrir DevTools
2. ir a `Application`
3. abrir `Clear storage`
4. pulsar `Clear site data`
5. volver a `Network`
6. dejar `Disable cache` apagado
7. recargar
8. comprobar primera descarga real de un frame alto, por ejemplo `frame-0313.webp`
9. repetir scroll y comprobar que luego pase a `memory cache` o `disk cache`

## Reubicación de logos SVG

También se movieron los SVG de branding que estaban en la raíz de `public/assets` a:

- [public/assets/logos](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/public/assets/logos)

Se actualizaron sus referencias en componentes y estilos para evitar rutas rotas.

Se excluyó favicon de este movimiento.

## Ajuste del marquee de logos del hero

Se reforzó el loop del track de logos del hero para que no dependa de un porcentaje fijo.

Archivos afectados:

- [src/components/sections/HeroSection.jsx](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/src/components/sections/HeroSection.jsx)
- [src/index.css](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/src/index.css)

Antes:

- usaba `3` copias fijas
- animaba con `translateX(-33.333333%)`

Ahora:

- mide el ancho real de un set
- calcula cuántas repeticiones necesita según el viewport
- anima exactamente el ancho de un set

Objetivo:

- evitar huecos o cortes visibles en desktop y mobile

## Notas de mantenimiento

### Si cambian los frames o videos

Con `immutable`, la URL debe cambiar si cambia el contenido.

Buenas opciones:

- cambiar el nombre de la carpeta
- cambiar el nombre del archivo
- usar una versión en la ruta

Ejemplos:

```txt
/assets/video-frames/small-f12-s1200-q45-v2/frame-0001.webp
/assets/video/final-video-hero-limmer-v2.mp4
```

### Si quieres extender cache agresivo a otros assets

Todavía pueden verse `304` en:

- logos
- favicons
- documento HTML
- bundles principales

Eso no rompe nada, pero si se quiere afinar más, se pueden definir headers adicionales por carpeta.

## Referencias rápidas

- [src/lib/heroFrames.js](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/src/lib/heroFrames.js)
- [src/components/sections/HeroSection.jsx](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/src/components/sections/HeroSection.jsx)
- [src/index.css](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/src/index.css)
- [public/_headers](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/public/_headers)
- [public/assets/video](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/public/assets/video)
- [public/assets/video-frames/small-f12-s1200-q45](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/public/assets/video-frames/small-f12-s1200-q45)
- [public/assets/logos](/Users/davidrivadeneyra/Documents/Code/glimmer%202.0/public/assets/logos)
