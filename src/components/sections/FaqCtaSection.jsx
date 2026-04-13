import { useTranslation } from 'react-i18next'
import Button from '../Button'
import HeroNavLink from '../HeroNavLink'
import useInViewport from '../../hooks/useInViewport'
import useSectionReveal from '../../hooks/useSectionReveal'
import { useRef } from 'react'
import useViewportVideo from '../../hooks/useViewportVideo'

const clientLogos = [
  { name: '3IPunt', src: '/assets/logos-clientes/3IPunt.png' },
  { name: 'ARQ', src: '/assets/logos-clientes/ARQ.png' },
  { name: 'Delvy', src: '/assets/logos-clientes/Delvy.png' },
  { name: 'Grupo Lamadrid', src: '/assets/logos-clientes/Grupo%20Lamadrid.png' },
  { name: 'HOk Capital', src: '/assets/logos-clientes/HOk%20Capital.png' },
  { name: 'NexusClips', src: '/assets/logos-clientes/NexusClips.png' },
  { name: 'RSM', src: '/assets/logos-clientes/RSM.png' },
  { name: 'S4Gaming', src: '/assets/logos-clientes/S4-gaming.png' },
  { name: 'Top Cable', src: '/assets/logos-clientes/top%20cable.png' },
  { name: 'dilobonito', src: '/assets/logos-clientes/dilobonito.png' },
]

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
  const videoRef = useRef(null)
  const isSectionInViewport = useInViewport(sectionRef, { threshold: 0.15 })

  useSectionReveal(sectionRef)
  useViewportVideo(videoRef)

  return (
    <section className="faq-cta-section" ref={sectionRef}>
      <div className="">
        <div className="faq-cta-card" data-reveal style={{ '--reveal-delay': '60ms' }}>
          <div className="faq-cta-media" aria-hidden="true">
            <video
              ref={videoRef}
              className="faq-cta-video"
              loop
              muted
              playsInline
              preload="metadata"
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
            <div className="hero-trust faq-cta-trust mt-8" aria-label="Clientes">
              <div className="faq-cta-logo-row">
                <div className={`hero-logo-track ${isSectionInViewport ? 'is-motion-active' : ''}`}>
                  {[...clientLogos, ...clientLogos].map((logo, index) => (
                    <span
                      key={`${logo.name}-${index}`}
                      className="hero-logo-item"
                      aria-hidden={index >= clientLogos.length}
                    >
                      <img src={logo.src} alt={index < clientLogos.length ? logo.name : ''} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
