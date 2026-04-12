import { useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PainCard from '../PainCard'

const painCardBackgrounds = [
  '/assets/card-bg/01.svg',
  '/assets/card-bg/02.svg',
  '/assets/card-bg/03.svg',
  '/assets/card-bg/04.svg',
  '/assets/card-bg/05.svg',
]

const painCardLogos = [
  '/assets/isotipo-red.svg',
  '/assets/isotipo-blue.svg',
  '/assets/isotipo-magenta.svg',
  '/assets/isotipo-yellow.svg',
  '/assets/isotipo-violet.svg',
]

const painCardRotations = [-6, 6, -7, -2, 8]

function getCardOffset(offsets, index) {
  const fallback = { x: '0vw', y: '56vh', rotate: 0, scale: 1 }
  const normalizedIndex = Number.isFinite(index) ? index : 0
  return offsets[normalizedIndex % offsets.length] ?? fallback
}

function splitProblemText(titleNode) {
  const words = titleNode.textContent?.trim().split(/\s+/).filter(Boolean) ?? []
  titleNode.innerHTML = words
    .map((word) => `<span class="problem-title-word">${word}</span>`)
    .join(' ')

  return titleNode.querySelectorAll('.problem-title-word')
}

function ProblemSection({ painPoints }) {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const headerRef = useRef(null)
  const stackRef = useRef(null)

  const problemTitle = t('problem.title')

  useLayoutEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const header = headerRef.current
    const stack = stackRef.current

    if (!section || !title || !header || !stack) {
      return undefined
    }

    const cards = gsap.utils.toArray('.problem-section-new .pain-card')
    if (cards.length === 0) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    gsap.registerPlugin(ScrollTrigger)

    const originalTitle = title.textContent ?? ''
    const ctx = gsap.context(() => {
      const splitWords = splitProblemText(title)

      gsap.set(stack, { autoAlpha: 0 })

      if (prefersReducedMotion) {
        gsap.set(splitWords, { color: '#fff' })
        gsap.set(header, { autoAlpha: 1, yPercent: 0 })
        gsap.set(stack, { autoAlpha: 1 })
        gsap.set(cards, {
          xPercent: -50,
          yPercent: -50,
          x: 0,
          y: 0,
          rotate: (index) => painCardRotations[index % painCardRotations.length],
          scale: 1,
        })
        return
      }

      gsap.set(splitWords, {
        color: 'rgba(255, 255, 255, 0.16)',
        willChange: 'color',
      })

      gsap.to(splitWords, {
        color: '#fff',
        stagger: 0.1,
        scrollTrigger: {
          trigger: title,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      })

      const cardOffsets = [
        { x: '-26vw', y: '30vh', rotate: -18, scale: 0.92 },
        { x: '24vw', y: '32vh', rotate: 16, scale: 0.94 },
        { x: '-18vw', y: '44vh', rotate: -14, scale: 0.96 },
        { x: '18vw', y: '46vh', rotate: 10, scale: 0.98 },
        { x: '0vw', y: '56vh', rotate: 8, scale: 1 },
      ]

      cards.forEach((card, index) => {
        const offset = getCardOffset(cardOffsets, index)

        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,
          x: offset.x,
          y: offset.y,
          rotate: offset.rotate,
          scale: offset.scale,
          transformOrigin: '50% 50%',
          willChange: 'transform',
        })
      })

      const timeline = gsap.timeline({
        defaults: {
          ease: 'power2.out',
        },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${window.innerHeight * (cards.length + 4)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })

      timeline.to({}, { duration: 2 })

      timeline.to(
        header,
        {
          yPercent: -24,
          autoAlpha: 0,
          duration: 0.9,
        },
        '+=0.1',
      )

      timeline.to(
        stack,
        {
          autoAlpha: 1,
          duration: 0.2,
        },
        '<',
      )

      cards.forEach((card, index) => {
        timeline.to(
          card,
          {
            x: 0,
            y: 0,
            rotate: painCardRotations[index % painCardRotations.length],
            scale: 1,
            duration: 0.8,
          },
          index === 0 ? '>-0.1' : '>-0.05',
        )
      })
    }, section)

    return () => {
      ctx.revert()
      title.textContent = originalTitle
    }
  }, [painPoints, problemTitle])

  return (
    <section className="problem-section-new" id="casos" ref={sectionRef}>
      <div className="page-shell">
        <div className="problem-shell-new">
          <div
            ref={headerRef}
            className="problem-header-shell-new"
          >
            <div className="section-header section-header--center problem-section-header-new">
              <h2
                ref={titleRef}
                className="type-title-bigger-size type-title-light text-center problem-title-new problem-text-animate"
              >
                {problemTitle}
              </h2>
            </div>
          </div>

          <div ref={stackRef} className="pain-stack pain-stack-new">
            {painPoints.map((item, index) => (
              <PainCard
                key={item.title}
                copy={item.copy ?? item.title}
                tone={item.tone}
                background={item.background ?? painCardBackgrounds[index % painCardBackgrounds.length]}
                logoSrc={item.logoSrc ?? painCardLogos[index % painCardLogos.length]}
                revealDelay={`${120 + index * 70}ms`}
                stackIndex={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

ProblemSection.propTypes = {
  painPoints: PropTypes.arrayOf(
    PropTypes.shape({
      background: PropTypes.string,
      copy: PropTypes.string,
      logoSrc: PropTypes.string,
      title: PropTypes.string.isRequired,
      tone: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default ProblemSection
