export const addTodo = (text) => {

	return {
		type: 'ADD_TODO',
		text,
		id: Math.random()
	}
}
export const deleteTodo = (id) => {

	return{
		type: 'DELETE_TODO',
		id
	}
}
