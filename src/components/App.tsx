import { setName } from '../store/actions'
import './App.css'
import { Playground } from './Playground/Playground'

import { useDispatch } from 'react-redux'

function App() {

	// const changeName = () => {
	// 	dispatch(setName({ name: 'aboba' }))
	// }
	// console.log(name)

	return (
		<div>
			<Playground/>
		</div>
	)
}

export default App
