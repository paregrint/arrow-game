import { Typography, TypographyProps } from '@mui/material'
import styles from './TypographyHeader.module.css'

interface ITypographyHeaderProps extends TypographyProps {}

export const TypographyHeader = (props: ITypographyHeaderProps) => {
	const { children, className } = props

	return (
		<Typography
			variant='h3'
			{...props}
			className={`${styles.text} ${className}`}
		>
			{children}
		</Typography>
	)
}
