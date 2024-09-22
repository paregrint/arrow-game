import { Chip, Stack } from "@mui/material"
import { useAppSelector } from "../../../hooks"
import { TypographyHeader } from "../../UI/TypographyHeader/TypographyHeader"
import styles from './Score.module.css'

export const Score = () => {
    const state = useAppSelector(state => state.playground)

    return (
			<div>
				<TypographyHeader>Score</TypographyHeader>
				<Stack direction='row' spacing={1}>
					<Chip
						className={styles.success}
						label={`Successful ${state.totalSuccessful}`}
						variant='outlined'
					/>
					<Chip
						className={styles.unsuccess}
						label={`Unsuccessful ${state.totalUnsuccessful}`}
						variant='outlined'
					/>
				</Stack>
			</div>
		)
}