import { useEffect, useRef, useState } from 'react'
import useInViewport from '../../hooks/useInViewport'

function FaqMiddleSection() {
  const sectionRef = useRef(null)
  const isInViewport = useInViewport(sectionRef, { threshold: 0.8 })
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false)

  useEffect(() => {
    if (isInViewport) {
      setHasEnteredViewport(true)
    }
  }, [isInViewport])

  return (
    <section className="faq-middle-section" ref={sectionRef}>
      <div
        className={`faq-middle-section__line ${hasEnteredViewport ? 'is-visible' : ''}`}
        aria-hidden="true"
      />
    </section>
  )
}

export default FaqMiddleSection
