import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setCurrentStep, setSteps, setUnsuccess } from '../../store/slices/slices'
import { Controls } from './Controls/Control'
import { END_GAME_CONDITIONS, INTERVAL_TIME } from './constants'
import { KeyPressed } from './KeyPressed/KeyPressed'
import { RandomKeys } from './RandomKeys/RandomKeys'
import { Score } from './Score/Score'
import { Modal } from './Modal/Modal'
import { Description } from './Description/Description'
import styles from './Playground.module.css'


export const Playground = () => {
	const state = useAppSelector(state => state.playground)
	const dispatch = useAppDispatch()

    const refreshIntervalId = useRef<ReturnType<typeof setInterval>| null>(null)

    const [isTimerActive, setisTimerActive] = useState(false)
	const [isShowModal, setIsShowModal] = useState(false)
	const [isSuccessEndGame, setIsSuccessEndGame] = useState(false)

    useEffect(()=>{
        if(isTimerActive){
					refreshIntervalId.current = setInterval(() => {
						dispatch(setUnsuccess())
                        dispatch(setSteps())
						dispatch(setCurrentStep())
					}, INTERVAL_TIME)
				}
           
        return () => {
            clearInterval(refreshIntervalId.current as number)
        }}
        ,[isTimerActive, dispatch])
	useEffect(() => {
		const isSuccessful = state.totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT
		const isUnsuccessful = state.totalUnsuccessful === END_GAME_CONDITIONS.UNSUCCESS_COUNT

		isSuccessful && setIsSuccessEndGame(true)
		isUnsuccessful && setIsSuccessEndGame(false)

		if (isSuccessful || isUnsuccessful){
			setIsShowModal(true)
			setisTimerActive(false)
		}
	}, [state.totalSuccessful, state.totalUnsuccessful])
	return (
		<div className={styles.container}>
			<div className={styles.column}>
				<RandomKeys isTimerActive={isTimerActive} />
				<KeyPressed isTimerActive={isTimerActive} />
				<Score />
			</div>
			<div className={styles.column}>
				<Description />
				<Controls
					isTimerActive={isTimerActive}
					setisTimerActive={setisTimerActive}
				/>
			</div>
			{isShowModal && (
				<Modal
					setIsShowModal={setIsShowModal}
					isSuccessEndGame={isSuccessEndGame}
				/>
			)}
		</div>
	)
}
