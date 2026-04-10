import { useRef } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import PainCard from '../PainCard'
import { problemCardBackgroundComponents } from '../card-backgrounds/problemBackgrounds'
import SectionHeader from './SectionHeader'
import useSectionReveal from '../../hooks/useSectionReveal'

const painCardLogos = [
  '/assets/isotipo-red.svg',
  '/assets/isotipo-blue.svg',
  '/assets/isotipo-magenta.svg',
  '/assets/isotipo-yellow.svg',
  '/assets/isotipo-violet.svg',
]

function ProblemSection({ painPoints }) {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  useSectionReveal(sectionRef, [painPoints])

  return (
    <section className="problem-section" id="casos" ref={sectionRef}>
      <div className="page-shell">
        <div className="problem-shell">
          <div
            className="problem-header-shell"
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

          <div className="pain-stack">
            {painPoints.map((item, index) => (
              <PainCard
                key={item.title}
                BackgroundComponent={problemCardBackgroundComponents[index % problemCardBackgroundComponents.length]}
                copy={item.copy ?? item.title}
                tone={item.tone}
                background={item.background}
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
