import { useAppSelector } from "../../../hooks"

export const Score = () => {
    const state = useAppSelector(state => state.playground)

    return (
			<div>
                <h3>Score</h3>
				<span>Successful {state.totalSuccessful}</span>
                <br/>
				<span>Unsuccessful {state.totalUnsuccessful}</span>
			</div>
		)
}