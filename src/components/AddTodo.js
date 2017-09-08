import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ addTodo }) => (

	<form onSubmit={(event) => {
		
		event.preventDefault()

		const userInput = event.target.userInput.value

		addTodo(userInput)

		event.target.userInput.value = ''
	}}>
		
		<input type="text" name="userInput"/>
		<button type="submit">Add</button>

	</form>
);

const mapDispatchToProps = (dispatch) => ({
	addTodo: (text) => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(AddTodo)