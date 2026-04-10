import CardBackgroundSvg from './CardBackgroundSvg'

import problem01Svg from '../../../public/assets/card-bg/01.svg?raw'
import problem02Svg from '../../../public/assets/card-bg/02.svg?raw'
import problem03Svg from '../../../public/assets/card-bg/03.svg?raw'
import problem04Svg from '../../../public/assets/card-bg/04.svg?raw'
import problem05Svg from '../../../public/assets/card-bg/05.svg?raw'

export function ProblemBackground01() {
  return <CardBackgroundSvg svgMarkup={problem01Svg} />
}

export function ProblemBackground02() {
  return <CardBackgroundSvg svgMarkup={problem02Svg} />
}

export function ProblemBackground03() {
  return <CardBackgroundSvg svgMarkup={problem03Svg} />
}

export function ProblemBackground04() {
  return <CardBackgroundSvg svgMarkup={problem04Svg} />
}

export function ProblemBackground05() {
  return <CardBackgroundSvg svgMarkup={problem05Svg} />
}

export const problemCardBackgroundComponents = [
  ProblemBackground01,
  ProblemBackground02,
  ProblemBackground03,
  ProblemBackground04,
  ProblemBackground05,
]
