import CardBackgroundSvg from './CardBackgroundSvg'

import useCase01Svg from '../../../public/assets/card-bg/use-01.svg?raw'
import useCase02Svg from '../../../public/assets/card-bg/use-02.svg?raw'
import useCase03Svg from '../../../public/assets/card-bg/use-03.svg?raw'
import useCase04Svg from '../../../public/assets/card-bg/use-04.svg?raw'
import useCase05Svg from '../../../public/assets/card-bg/use-05.svg?raw'

export function UseCaseBackground01() {
  return <CardBackgroundSvg svgMarkup={useCase01Svg} />
}

export function UseCaseBackground02() {
  return <CardBackgroundSvg svgMarkup={useCase02Svg} />
}

export function UseCaseBackground03() {
  return <CardBackgroundSvg svgMarkup={useCase03Svg} />
}

export function UseCaseBackground04() {
  return <CardBackgroundSvg svgMarkup={useCase04Svg} />
}

export function UseCaseBackground05() {
  return <CardBackgroundSvg svgMarkup={useCase05Svg} />
}

export const useCaseCardBackgroundComponents = [
  UseCaseBackground01,
  UseCaseBackground02,
  UseCaseBackground03,
  UseCaseBackground04,
  UseCaseBackground05,
]
