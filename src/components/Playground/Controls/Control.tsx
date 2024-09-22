import { Button } from "../../UI/Button/Button"
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import styles from './Control.module.css'

interface IControlProps {
	isTimerActive: boolean
	// setisTimerAction: (item: boolean) => void
	setisTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const Controls = (props: IControlProps) => {
    const {isTimerActive, setisTimerActive} = props
    return (
			<div>
				<Button
					endIcon={<PlayArrowIcon fontSize='large' className={styles.icon} />}
					onClick={() => setisTimerActive(true)}
					disabled={isTimerActive}
					className={styles.button}
				>
					Play
				</Button>
				<Button
					endIcon={<PauseIcon className={styles.icon}/>}
					onClick={() => setisTimerActive(false)}
					className={styles.button}
					disabled={!isTimerActive}
				>
					Pause
				</Button>
			</div>
		)
}