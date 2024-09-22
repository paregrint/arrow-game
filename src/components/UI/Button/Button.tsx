import ButtonMaterial from '@mui/material/Button'
import { ButtonProps } from '@mui/material/Button'
import styles from './Button.module.css'

interface IButtonProps extends ButtonProps {}

export const Button = (props: IButtonProps) => {
	const { children, className } = props

	return (
		<ButtonMaterial
			variant='contained'
			size='small'
			{...props}
			className={`${styles.button} ${className}`}
		>
			{children}
		</ButtonMaterial>
	)
}
