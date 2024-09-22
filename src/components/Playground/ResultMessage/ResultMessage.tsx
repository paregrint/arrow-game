import { TypographyText } from '../../UI/TypographyText/TypographyText'
import styles from './ResultMessage.module.css'

interface IResultMessageProps {
	isSuccessEndGame: boolean
}

export const ResultMessage = (props: IResultMessageProps) => {
	const { isSuccessEndGame } = props

	return (
		<div className={styles.wrapper}>
			{isSuccessEndGame ? (<TypographyText>You won!</TypographyText>) : (
			<TypographyText>{`You have lost(((`}</TypographyText>)}
		</div>
	)
}
