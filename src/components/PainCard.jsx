import PropTypes from 'prop-types'

function PainCard({ copy, tone, background, revealDelay, stackIndex }) {
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
      <span className="pain-dot" />
      <p>{copy}</p>
    </article>
  )
}

PainCard.propTypes = {
  background: PropTypes.string,
  copy: PropTypes.string.isRequired,
  revealDelay: PropTypes.string.isRequired,
  stackIndex: PropTypes.number.isRequired,
  tone: PropTypes.string.isRequired,
}

PainCard.defaultProps = {
  background: undefined,
}

export default PainCard
