import { useRef } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import PainCard from '../PainCard'
import useSectionReveal from '../../hooks/useSectionReveal'

const painCardBackgrounds = [
  '/assets/card-bg/01.svg',
  '/assets/card-bg/02.svg',
  '/assets/card-bg/03.svg',
  '/assets/card-bg/04.svg',
  '/assets/card-bg/05.svg',
]

function ProblemSection({ painPoints }) {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  useSectionReveal(sectionRef, [painPoints])

  return (
    <section className="problem-section" id="casos" ref={sectionRef}>
      <div className="page-shell problem-shell">
        <div data-reveal style={{ '--reveal-delay': '40ms' }}>
          <div className="section-header section-header--center w-full">
            <span className="section-eyebrow">{t('problem.eyebrow')}</span>
            <h2 className="section-title">{t('problem.title')}</h2>
          </div>
        </div>

        <div className="pain-stack">
          {painPoints.map((item, index) => (
            <PainCard
              key={item.title}
              copy={item.copy ?? item.title}
              tone={item.tone}
              background={item.background ?? painCardBackgrounds[index % painCardBackgrounds.length]}
              revealDelay={`${120 + index * 70}ms`}
              stackIndex={index + 1}
            />
          ))}
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
      title: PropTypes.string.isRequired,
      tone: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default ProblemSection
