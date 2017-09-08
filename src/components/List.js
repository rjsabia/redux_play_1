import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'

const List = ({todos, deleteTodo}) => (

	<ul>
		{todos.map((todo, index) => (

			<li key={index}>

				{todo.id} --- {todo.text}

				<button onClick={() => deleteTodo(todo.id)}>Delete</button>

			</li>
		))}
	</ul>
);

const mapStateToProps = (state) => {
	console.log(state)
	return{
		todos: state
	}
}

const mapDispatchToProp = (dispatch) => ({
	deleteTodo: (id) => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProp)(List)