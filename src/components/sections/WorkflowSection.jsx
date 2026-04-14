import { useRef } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import useSectionReveal from '../../hooks/useSectionReveal'
import useViewportVideo from '../../hooks/useViewportVideo'

const workflowMedia = [
  { image: '/glimmer/deteccion.png', imageSide: 'right' },
  { image: '/glimmer/interpretacion.png', imageSide: 'left' },
  { image: '/glimmer/activacion.png', imageSide: 'right' },
]

function WorkflowCard({ item, delay }) {
  const content = (
    <>
      <div className="workflow-copy">
        <p className="workflow-title">
          {item.id} - {item.title}
        </p>
        <p className="workflow-description">{item.description}</p>
        {item.highlight ? <p className="workflow-description mt-[16px]"><strong>{item.highlight}</strong></p> : null}
      </div>
      <ul className="workflow-list">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </>
  )

  const media = (
    <div className="workflow-media">
      <img src={item.image} alt={item.title} />
    </div>
  )

  return (
    <article className="workflow-card" data-reveal style={{ '--reveal-delay': delay }}>
      {item.imageSide === 'left' ? (
        <>
          {media}
          <div className="workflow-panel">{content}</div>
        </>
      ) : (
        <>
          <div className="workflow-panel">{content}</div>
          {media}
        </>
      )}
    </article>
  )
}

WorkflowCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    highlight: PropTypes.string,
    bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    imageSide: PropTypes.string.isRequired,
  }).isRequired,
  delay: PropTypes.string.isRequired,
}

function WorkflowSection({ workflowItems }) {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const workflow = workflowItems.map((item, index) => ({
    ...item,
    ...workflowMedia[index],
  }))

  useSectionReveal(sectionRef, [workflowItems])
  useViewportVideo(videoRef)

  return (
    <section className="workflow-section" id="producto" ref={sectionRef}>
      <div className="workflow-light" />
      <div className="workflow-video-wrap" data-reveal style={{ '--reveal-delay': '0ms' }}>
        <video
          ref={videoRef}
          className="workflow-video"
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/assets/video/how-it-works.webm" type="video/webm" />
        </video>
      </div>

      <div className="page-shell">
        <div data-reveal style={{ '--reveal-delay': '40ms' }}>
          <div className="section-header section-header--center">
            <span className="type-subheadline-size type-subheadline-gray">
              {t('workflow.eyebrow')}
            </span>
            <h2 className="type-title-big-size type-title-light">{t('workflow.title')}</h2>
            <p className="type-description-size max-w-[655px] text-[#d3d8e2]">
              {t('workflow.description')}
            </p>
          </div>
        </div>

        <div className="workflow-stack">
          {workflow.map((item, index) => (
            <WorkflowCard item={item} key={item.id} delay={`${120 + index * 90}ms`} />
          ))}
        </div>
      </div>
    </section>
  )
}

WorkflowSection.propTypes = {
  workflowItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      highlight: PropTypes.string,
      bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
}

export default WorkflowSection
