import PropTypes from 'prop-types'

function PainCard({ BackgroundComponent, copy, tone, background, logoSrc, revealDelay, stackIndex }) {
  return (
    <article
      className={`pain-card pain-card--${tone}`}
      data-reveal
      style={{
        '--reveal-delay': revealDelay,
        '--pain-background-image': background ? `url("${background}")` : 'none',
        '--pain-z-index': stackIndex,
      }}
    >
      {BackgroundComponent ? <BackgroundComponent /> : null}
      {/* <span className="pain-dot" /> */}
      <img className="ticker-logo spin-loop h-12 w-12 mb-12" src={logoSrc} alt="" />
      <p>{copy}</p>
    </article>
  )
}

PainCard.propTypes = {
  BackgroundComponent: PropTypes.elementType,
  background: PropTypes.string,
  copy: PropTypes.string.isRequired,
  logoSrc: PropTypes.string,
  revealDelay: PropTypes.string.isRequired,
  stackIndex: PropTypes.number.isRequired,
  tone: PropTypes.string.isRequired,
}

PainCard.defaultProps = {
  BackgroundComponent: undefined,
  background: undefined,
  logoSrc: '/assets/isotipo-red.svg',
}

export default PainCard
