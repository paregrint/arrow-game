
interface IControlProps {
	isTimerActive: boolean
	// setisTimerAction: (item: boolean) => void
	setisTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const Controls = (props: IControlProps) => {
    const {isTimerActive, setisTimerActive} = props
    return (
			<div>
				<button onClick={() => setisTimerActive(true)} disabled={isTimerActive}>Play</button>
				<button onClick={() => setisTimerActive(false)} disabled={!isTimerActive}>Pause</button>
			</div>
		)
}