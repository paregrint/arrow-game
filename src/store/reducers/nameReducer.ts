const initialState = {
	name: 'Jack',
}

export const nameReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case 'ADD_NAME':
			return {
				...state,
				...action.payload,
			} 
		case 'ADD_AGE':
			return 1
		default:
			return state
	}
}
