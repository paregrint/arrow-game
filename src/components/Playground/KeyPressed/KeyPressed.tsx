import { useCallback, useEffect } from "react"
import { MAP_ARROW_CODES } from "../constants"
import { useAppDispatch } from "../../../hooks"
import { setEnteredValue } from "../../../store/slices/slices"
import { useKeyPressedElement } from "./hooks"
import styles from './RandomKeys.module.css'
import { TypographyHeader } from "../../UI/TypographyHeader/TypographyHeader"


interface IKeyPressedProps {
	isTimerActive: boolean
}

export const KeyPressed = (props: IKeyPressedProps) => {
    const {isTimerActive} = props
    const dispatch = useAppDispatch()
    const keyPressedElement = useKeyPressedElement()
    const handleKeyDown = useCallback(
			(e: KeyboardEvent) => {
				if (MAP_ARROW_CODES.hasOwnProperty(e.key) && isTimerActive) {
					console.log(e.key)
					dispatch(setEnteredValue(e.key))
				}
			},
			[dispatch, isTimerActive]
		)

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => {window.removeEventListener('keydown', handleKeyDown)}
        // При размонтировании компоненты 
    })
  
    return (
			<div className={styles.container}>
				<TypographyHeader>Key pressed</TypographyHeader>
				<span className={`${styles.arrow} ${styles.icon}`}>{keyPressedElement}</span>
			</div>
		)
}
