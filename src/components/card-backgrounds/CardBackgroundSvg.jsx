import PropTypes from 'prop-types'

function CardBackgroundSvg({ className, svgMarkup }) {
  return (
    <span
      aria-hidden="true"
      className={className}
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  )
}

CardBackgroundSvg.propTypes = {
  className: PropTypes.string,
  svgMarkup: PropTypes.string.isRequired,
}

CardBackgroundSvg.defaultProps = {
  className: 'card-background-svg',
}

export default CardBackgroundSvg
