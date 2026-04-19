import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import useInViewport from '../../hooks/useInViewport'
import useSectionReveal from '../../hooks/useSectionReveal'
import useViewportVideo from '../../hooks/useViewportVideo'
import Button from '../Button'

function splitOpportunityText(titleNode, lines) {
  titleNode.innerHTML = lines
    .map((line) => `<span class="opportunity-line-fragment">${line}</span>`)
    .join(' ')

  return titleNode.querySelectorAll('.opportunity-line-fragment')
}

function OpportunitySection({ opportunityLines, onDemoRequest }) {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const linesShellRef = useRef(null)
  const linesRef = useRef(null)

  useSectionReveal(sectionRef, [opportunityLines])
  useViewportVideo(videoRef)
  const isSectionInViewport = useInViewport(sectionRef, { threshold: 0.15 })

  useLayoutEffect(() => {
    const section = sectionRef.current
    const shell = linesShellRef.current
    const title = linesRef.current

    if (!section || !shell || !title) {
      return undefined
    }

    gsap.registerPlugin(ScrollTrigger)
    const originalTitle = title.textContent ?? ''

    const ctx = gsap.context(() => {
      const splitPhrases = splitOpportunityText(title, opportunityLines)
      let activeIndex = -1

      const setActivePhrase = (progress) => {
        const normalizedProgress = Math.min(Math.max(progress, 0), 0.999999)
        const nextIndex = Math.min(
          splitPhrases.length - 1,
          Math.floor(normalizedProgress * splitPhrases.length),
        )

        if (nextIndex === activeIndex) {
          return
        }

        activeIndex = nextIndex

        gsap.to(splitPhrases, {
          color: 'rgba(255, 255, 255, 0.16)',
          duration: 0.2,
          overwrite: 'auto',
        })

        gsap.to(splitPhrases[activeIndex], {
          color: '#fff',
          duration: 0.2,
          overwrite: 'auto',
        })
      }

      gsap.set(splitPhrases, {
        color: 'rgba(255, 255, 255, 0.16)',
        willChange: 'color',
      })

      setActivePhrase(0)

      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: ({ progress }) => {
          setActivePhrase(progress)
        },
        onLeaveBack: () => {
          setActivePhrase(0)
        },
      })
    }, shell)

    return () => {
      ctx.revert()
      title.textContent = originalTitle
    }
  }, [opportunityLines, t])

  return (
    <section className="opportunity-section" ref={sectionRef}>
      <div className="opportunity-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="opportunity-video"
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/assets/video/opportunity-section.mp4" type="video/mp4" />
        </video>
        <div className="opportunity-media-wash" />
      </div>

      <div className="page-shell opportunity-shell">
        <div className="opportunity-meta" data-reveal style={{ '--reveal-delay': '40ms' }}>
          <img
            className={`ticker-logo spin-loop h-12 w-12 mb-8 ${isSectionInViewport ? 'is-motion-active' : ''}`}
            src="/assets/logos/isotipo.svg"
            alt=""
          />
          <span className="type-subheadline-size opacity-40">{t('opportunity.eyebrow')}</span>
          <p>{t('opportunity.lead')}</p>
        </div>

        <div className="opportunity-lines-shell" ref={linesShellRef}>
          <div className="opportunity-lines">
            <p
              ref={linesRef}
              className="opportunity-line-text text type-title-big-size type-title-light"
            >
              {opportunityLines.join(' ')}
            </p>
          </div>
          
        </div>
        <Button radius="full" background="white" className="w-fit" onClick={onDemoRequest}>
            {t('nav.cta')}
          </Button>
      </div>      
    </section>
  )
}

OpportunitySection.propTypes = {
  opportunityLines: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDemoRequest: PropTypes.func.isRequired,
}

export default OpportunitySection
