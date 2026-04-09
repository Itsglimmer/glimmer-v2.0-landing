import { useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import SectionHeader from './SectionHeader'
import useSectionReveal from '../../hooks/useSectionReveal'

function TestimonialCard({ item, delay }) {
  return (
    <article className="testimonial-card" data-reveal style={{ '--reveal-delay': delay }}>
      <img className="testimonial-quote" src="/assets/quote.svg" alt="" />
      <div className="testimonial-body">
        <p>{item.quote}</p>
        <span>{item.role}</span>
      </div>
    </article>
  )
}

TestimonialCard.propTypes = {
  item: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  delay: PropTypes.string.isRequired,
}

function TestimonialsSection({ testimonials }) {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const [scrollDirection, setScrollDirection] = useState(0)

  useSectionReveal(sectionRef, [testimonials])

  useEffect(() => {
    let frameId = 0
    let lastScrollY = window.scrollY

    const updateDirection = () => {
      frameId = 0

      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY

      if (Math.abs(delta) >= 2) {
        setScrollDirection(delta > 0 ? 1 : -1)
        lastScrollY = currentScrollY
      }
    }

    const requestUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateDirection)
      }
    }

    window.addEventListener('scroll', requestUpdate, { passive: true })

    return () => {
      window.removeEventListener('scroll', requestUpdate)

      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  const columns = useMemo(
    () =>
      testimonials.reduce(
        (accumulator, item, index) => {
          accumulator[index % 3].push({ item, index })
          return accumulator
        },
        [[], [], []],
      ),
    [testimonials],
  )

  return (
    <section
      className="testimonials-section"
      ref={sectionRef}
      style={{ '--testimonial-scroll-direction': scrollDirection }}
    >
      <div className="page-shell">
        <div data-reveal style={{ '--reveal-delay': '40ms' }}>
          <SectionHeader
            eyebrow={t('testimonials.eyebrow')}
            title={t('testimonials.title')}
            centered
          />
        </div>

        <div className="testimonials-columns">
          {columns.map((column, columnIndex) => (
            <div
              className={`testimonials-column testimonials-column--${['left', 'center', 'right'][columnIndex]}`}
              key={`testimonial-column-${columnIndex}`}
            >
              {column.map(({ item, index }) => (
                <TestimonialCard item={item} key={item.quote} delay={`${120 + index * 70}ms`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

TestimonialsSection.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default TestimonialsSection
