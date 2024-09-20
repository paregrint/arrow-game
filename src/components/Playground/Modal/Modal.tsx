import { useAppDispatch } from "../../../hooks"
import { resetStore } from "../../../store/slices/slices"
import { ResultMessage } from "../ResultMessage/ResultMessage"

interface IModalProps {
	setIsShowModal: (item: boolean) => void
	isSuccessEndGame: boolean
}

export const Modal = (props: IModalProps) => {
    const dispatch = useAppDispatch()

    const {setIsShowModal, isSuccessEndGame} = props
    const handleClose = () => {
        setIsShowModal(false)
        dispatch(resetStore())
    }
    
	return <div>
        <h3>Modal</h3>
        <ResultMessage isSuccessEndGame={isSuccessEndGame}/>
        <button onClick={handleClose}>Start again</button>
    </div>
}