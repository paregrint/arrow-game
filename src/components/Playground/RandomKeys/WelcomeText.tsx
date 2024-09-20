interface IWelcomeTextProps {
    isTimerActive: boolean
}

export const WelcomeText = (props: IWelcomeTextProps) => {
    const {isTimerActive} = props
	return <div>
        {isTimerActive ? <span>Loading...</span> : <span>Click play</span>}
        </div>
    
}