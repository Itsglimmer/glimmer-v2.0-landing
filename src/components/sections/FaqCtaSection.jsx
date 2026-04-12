import { useTranslation } from 'react-i18next'
import Button from '../Button'
import HeroNavLink from '../HeroNavLink'
import useSectionReveal from '../../hooks/useSectionReveal'
import { useRef } from 'react'

const footerLinks = [
  { href: 'https://www.linkedin.com', label: 'Linkedin' },
  { href: '/aviso-legal', label: 'Aviso legal' },
  { href: '/privacidad-y-politica-de-cookies', label: 'Privacidad y política de cookies' },
  { href: '/politica-de-privacidad', label: 'Política de privacidad' },
  { href: '/terminos-y-condiciones', label: 'Términos y condiciones' },
]

function FaqCtaSection() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  useSectionReveal(sectionRef)

  return (
    <section className="faq-cta-section" ref={sectionRef}>
      <div className="">
        <div className="faq-cta-card" data-reveal style={{ '--reveal-delay': '60ms' }}>
          <div className="faq-cta-media" aria-hidden="true">
            <video
              className="faq-cta-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/assets/video/video-glimmer-extended.webm" type="video/webm" />
            </video>
            <div className="faq-cta-media-wash" />
          </div>

          <div className="faq-cta-content">
            <h2 className="faq-cta-title type-title-big-size type-title-light text-center">{t('faqCta.title')}</h2>
            <p className="faq-cta-description text-center">{t('faqCta.description')}</p>
            <Button href="mailto:hola@glimmer.ai" radius="full" background="white">
              {t('nav.cta')}
            </Button>
            <div className="faq-cta-links" aria-label="Enlaces legales y redes">
              {footerLinks.map((link) => (
                <HeroNavLink
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {link.label}
                </HeroNavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqCtaSection
