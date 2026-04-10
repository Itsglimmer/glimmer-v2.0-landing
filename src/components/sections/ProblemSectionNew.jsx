import { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import SectionHeader from './SectionHeader'
import useSectionReveal from '../../hooks/useSectionReveal'

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

const painCardRotations = ['-6deg', '6deg', '-7deg', '-2deg', '8deg']

function ProblemSectionNew({ painPoints }) {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const [motionState, setMotionState] = useState({
    releaseOffset: 0,
    stackProgress: 0,
  })

  useSectionReveal(sectionRef, [painPoints])

  useEffect(() => {
    let frameId = 0

    const updateMotion = () => {
      frameId = 0

      const section = sectionRef.current

      if (!section) {
        return
      }

      const viewportHeight = window.innerHeight || 1
      const scrollableDistance = Math.max(section.offsetHeight - viewportHeight, 1)
      const releaseDistance = Math.max(viewportHeight * 0.4, 240)
      const stackDistance = Math.max(scrollableDistance - releaseDistance, 1)
      const { top } = section.getBoundingClientRect()
      const traveled = Math.min(Math.max(-top, 0), scrollableDistance)
      const nextStackProgress = (traveled / stackDistance) * painPoints.length
      const nextReleaseOffset = Math.max(0, Math.min(traveled - stackDistance, releaseDistance))

      setMotionState((current) => {
        if (
          Math.abs(current.stackProgress - nextStackProgress) < 0.01 &&
          Math.abs(current.releaseOffset - nextReleaseOffset) < 0.5
        ) {
          return current
        }

        return {
          releaseOffset: nextReleaseOffset,
          stackProgress: nextStackProgress,
        }
      })
    }

    const requestUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateMotion)
      }
    }

    updateMotion()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)

      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [painPoints])

  return (
    <section
      className="problem-new-section"
      id="casos-new"
      ref={sectionRef}
      style={{
        '--problem-new-scroll-span': `${Math.max(260, painPoints.length * 56 + 120)}vh`,
      }}
    >
      <div className="page-shell">
        <div className="problem-new-shell">
          <div
            className="problem-new-track"
            style={{ '--problem-new-release-offset': `${motionState.releaseOffset}px` }}
          >
            <div
              className="problem-new-text"
              data-reveal
              style={{ '--reveal-delay': '40ms' }}
            >
              <SectionHeader
                eyebrow={t('problem.eyebrow')}
                title={t('problem.title')}
                centered
                theme="light"
              />
            </div>

            <div className="problem-new-cards">
              {painPoints.map((item, index) => {
                const localProgress = Math.max(0, Math.min(1, motionState.stackProgress - index))
                const initialOffset = index * 168
                const stackedOffset = index * 18
                const translateY =
                  initialOffset + (stackedOffset - initialOffset) * localProgress

                return (
                  <article
                    className={`problem-new-card problem-new-card--${item.tone}`}
                    data-reveal
                    key={item.title}
                    style={{
                      '--problem-new-card-background': `url("${
                        item.background ?? painCardBackgrounds[index % painCardBackgrounds.length]
                      }")`,
                      '--problem-new-card-rotate':
                        painCardRotations[index % painCardRotations.length],
                      '--problem-new-card-translate-y': `${translateY}px`,
                      '--problem-new-card-z': index + 1,
                      '--reveal-delay': `${120 + index * 70}ms`,
                    }}
                  >
                    <img
                      className="ticker-logo spin-loop h-12 w-12 mb-12"
                      src={item.logoSrc ?? painCardLogos[index % painCardLogos.length]}
                      alt=""
                    />
                    <p>{item.copy ?? item.title}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ProblemSectionNew.propTypes = {
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

export default ProblemSectionNew
