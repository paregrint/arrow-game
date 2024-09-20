interface IResultMessageProps {
	isSuccessEndGame: boolean
}

export const ResultMessage = (props: IResultMessageProps) => {
	const { isSuccessEndGame } = props

    return <div>
        {isSuccessEndGame ? (<span>You won!</span>) : (<span>{`You have lost(((`}</span>)}
    </div>
}
