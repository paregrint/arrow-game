import { Typography, TypographyProps } from '@mui/material'
import styles from './TypographyText.module.css'

interface ITypographyTextProps extends TypographyProps {}

export const TypographyText = (props: ITypographyTextProps) => {
	const { children, className } = props

	return (
		<Typography
			{...props}
			className={`${styles.text} ${className}`}
		>
			{children}
		</Typography>
	)
}
