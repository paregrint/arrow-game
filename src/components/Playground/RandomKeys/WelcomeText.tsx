import { TypographyText } from "../../UI/TypographyText/TypographyText"
import loader from './img/loader.svg'
import styles from './WelcomeText.module.css'
import stylesCommon from './RandomKeys.module.css'
interface IWelcomeTextProps {
    isTimerActive: boolean
}

export const WelcomeText = (props: IWelcomeTextProps) => {
    const {isTimerActive} = props
	return (
		<TypographyText>
			{isTimerActive ? (
				<span className={`${stylesCommon.icon} ${stylesCommon.iconDefault}`}>
					<img src={loader} className={styles.loader} />
				</span>
			) : (
				<span>Click play</span>
			)}
		</TypographyText>
	)
    
}