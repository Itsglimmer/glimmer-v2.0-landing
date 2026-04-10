import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import useSectionReveal from '../../hooks/useSectionReveal'

const getOpportunityScrollSpan = (lineCount) => `${Math.max(lineCount * 55, 220)}vh`

const getOpportunityLineProgress = (scrollProgress, lineIndex, lineCount) => {
  if (lineCount <= 0) {
    return { opacity: 0, translateY: 56 }
  }

  const segmentSize = 1 / lineCount
  const segmentStart = lineIndex * segmentSize
  const localProgress = Math.min(
    Math.max((scrollProgress - segmentStart) / Math.max(segmentSize, 0.0001), 0),
    1,
  )

  let opacity = 0
  let translateY = 56

  if (localProgress >= 0.12 && localProgress < 0.32) {
    const revealProgress = (localProgress - 0.12) / 0.2
    opacity = revealProgress
    translateY = Math.round((1 - revealProgress) * 56)
  } else if (localProgress >= 0.32 && localProgress < 0.68) {
    opacity = 1
    translateY = 0
  } else if (localProgress >= 0.68 && localProgress < 0.9) {
    const exitProgress = (localProgress - 0.68) / 0.22
    opacity = 1 - exitProgress
    translateY = Math.round(exitProgress * -40)
  }

  return { opacity, translateY }
}

const getActiveOpportunityLine = (scrollProgress, opportunityLines) => {
  if (opportunityLines.length === 0) {
    return null
  }

  return opportunityLines.reduce((active, line, index) => {
    const state = getOpportunityLineProgress(scrollProgress, index, opportunityLines.length)

    if (!active || state.opacity > active.state.opacity) {
      return {
        index,
        line,
        state,
      }
    }

    return active
  }, null)
}

function OpportunitySection({ opportunityLines }) {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const progressRef = useRef(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useSectionReveal(sectionRef, [opportunityLines])

  useEffect(() => {
    let animationFrameId = 0

    const updateOpportunityProgress = () => {
      const section = sectionRef.current
      if (!section) {
        return
      }

      const rect = section.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1
      const scrollableDistance = Math.max(rect.height - viewportHeight, 1)
      const nextProgress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1)

      if (progressRef.current !== nextProgress) {
        progressRef.current = nextProgress
        setScrollProgress(nextProgress)
      }
    }

    const requestUpdate = () => {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = window.requestAnimationFrame(updateOpportunityProgress)
    }

    requestUpdate()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  const activeLine = getActiveOpportunityLine(scrollProgress, opportunityLines)

  return (
    <section
      className="opportunity-section"
      ref={sectionRef}
      style={{ '--opportunity-scroll-span': getOpportunityScrollSpan(opportunityLines.length) }}
    >
      <div className="opportunity-sticky">
        <div className="opportunity-media" aria-hidden="true">
          <video
            className="opportunity-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/oportunity-section.mp4" type="video/mp4" />
          </video>
          <div className="opportunity-media-wash" />
        </div>

        <div className="page-shell opportunity-shell">
          <div className="opportunity-meta" data-reveal style={{ '--reveal-delay': '40ms' }}>
            <span className="section-eyebrow">{t('opportunity.eyebrow')}</span>
            <p>{t('opportunity.lead')}</p>
            <img className="ticker-logo spin-loop h-12 w-12" src="/assets/isotipo.svg" alt="" />
          </div>

          <div className="opportunity-lines">
            {activeLine ? (
              <div
                className="opportunity-line-stage"
                style={{
                  '--line-opacity': activeLine.state.opacity,
                  '--line-translate-y': `${activeLine.state.translateY}px`,
                }}
              >
                <div className="opportunity-line-stage__viewport">
                  <span className="opportunity-line-mask">
                    <span
                      key={activeLine.index}
                      className={`opportunity-line-text ${activeLine.index === 0 ? 'opportunity-line-text--lead' : ''}`}
                    >
                      {activeLine.line}
                    </span>
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

OpportunitySection.propTypes = {
  opportunityLines: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default OpportunitySection
