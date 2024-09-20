import { useAppSelector } from "../../../hooks"
import { IPlaygroundStepsState } from "../../../store/types"
import { MAP_ARROW_CODES } from "../constants"
import { IMapArrowCodes } from "../types"
import styles from './RandomKeys.module.css'

export const RandomArrows = () => {
    const state = useAppSelector(state => state.playground)
    
    const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
			if (element.success && element.success !== null) {
				return styles.iconSuccess
			}
			if (!element.success && element.success !== null) {
				return styles.iconUnsuccess
			}
			return styles.iconDefault
		}
    return (
			<div>
				{state.steps.map(element => (
					<span
						key={element.step}
						className={`${styles.arrow} ${getStylesRandomKeys(element)}`}
					>
						{MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
					</span>
				))}
			</div>
		)
}