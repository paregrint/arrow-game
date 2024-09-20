
interface NameProps {
	name: string
}

export const setName = (name: NameProps) => {
	return { type: 'ADD_NAME', payload: name }
}
export const setAge = (age: number) => {
	return { type: 'ADD_AGE', payload: age }
}
