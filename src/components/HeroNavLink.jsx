import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

function HeroNavLink({
  href,
  children,
  className = '',
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  ...rest
}) {
  const [cycle, setCycle] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isResetting, setIsResetting] = useState(false)

  useEffect(() => {
    if (!isResetting) {
      return
    }

    let frameId = 0
    frameId = window.requestAnimationFrame(() => {
      setIsResetting(false)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [isResetting])

  const advanceTrack = () => {
    if (!isActive && !isAnimating) {
      setIsAnimating(true)
      setIsActive(true)
    }
  }

  const handleMouseEnter = (event) => {
    advanceTrack()
    onMouseEnter?.(event)
  }

  const handleFocus = (event) => {
    advanceTrack()
    onFocus?.(event)
  }

  const handleDeactivate = () => {
    setIsActive(false)
  }

  const handleMouseLeave = (event) => {
    handleDeactivate()
    onMouseLeave?.(event)
  }

  const handleBlur = (event) => {
    handleDeactivate()
    onBlur?.(event)
  }

  const classes = ['ui-nav-link', className].filter(Boolean).join(' ')

  return (
    <a
      className={classes}
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
    >
      <span className="ui-nav-link__sizer" aria-hidden="true">
        {children}
      </span>
      <span className="ui-nav-link__text-window">
        <span
          className="ui-nav-link__text-track"
          onTransitionEnd={(event) => {
            if (event.propertyName !== 'transform' || !isAnimating) {
              return
            }

            setIsAnimating(false)
            setIsResetting(true)
            setCycle((current) => current + 1)
          }}
          style={{
            transform: isAnimating ? 'translateY(-50%)' : 'translateY(0)',
            transition: isResetting ? 'none' : undefined,
          }}
        >
          <span className="ui-nav-link__text-line" key={cycle}>
            {children}
          </span>
          <span className="ui-nav-link__text-line" aria-hidden="true" key={cycle + 1}>
            {children}
          </span>
        </span>
      </span>
    </a>
  )
}

HeroNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
}

export default HeroNavLink
