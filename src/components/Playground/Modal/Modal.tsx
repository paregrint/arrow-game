import { useAppDispatch } from '../../../hooks'
import { resetStore } from '../../../store/slices/slices'
import { Button } from '../../UI/Button/Button'
import { ResultMessage } from '../ResultMessage/ResultMessage'
import MaterialModal from '@mui/material/Modal'
import styles from './Modal.module.css'

interface IModalProps {
	setIsShowModal: (item: boolean) => void
	isSuccessEndGame: boolean
}

export const Modal = (props: IModalProps) => {
	const dispatch = useAppDispatch()

	const { setIsShowModal, isSuccessEndGame } = props
	const handleClose = () => {
		setIsShowModal(false)
		dispatch(resetStore())
	}

	return (
		<MaterialModal open onClose={handleClose} className={styles.wrapper}>
			<div
				className={`${styles.container} ${
					isSuccessEndGame ? styles.modalSuccess : styles.modalUnsuccess
				}`}
			>
				<ResultMessage isSuccessEndGame={isSuccessEndGame} />
				<Button onClick={handleClose}>Start again</Button>
			</div>
		</MaterialModal>
	)
}
