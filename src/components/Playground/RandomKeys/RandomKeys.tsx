import { useAppSelector } from '../../../hooks'
import { TypographyHeader } from '../../UI/TypographyHeader/TypographyHeader'
import { RandomArrows } from './RandomArrows'
import styles from './RandomKeys.module.css'
import { WelcomeText } from './WelcomeText'

interface IRandomKeysProps {
	isTimerActive: boolean
}

export const RandomKeys = (props: IRandomKeysProps) => {
	const state = useAppSelector(state => state.playground)
    const {isTimerActive} = props
	return (
		<div className={styles.arrows}>
			<TypographyHeader>Random Keys</TypographyHeader>
			{state.steps.length === 0 ? (
				<WelcomeText isTimerActive={isTimerActive} />
			) : (
				<RandomArrows />
			)}
		</div>
	)
}
