
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    case 'DELETE_TODO':
      const delState = state.filter( (todo) => {
      	return todo.id !== action.id
      })

      return delState

    default:
      return state
  }
}

export default todos

// const initialState = {
// 	todos: []
// };

// const todos = (state = initialState, action) => {

// 	if (action.type === action.ADD_TODO) {
		
// 		return {
// 			...state,
// 			todos: [...state.todos, {text: action.text, id: action.id}]
// 		}
// 	}
// 	else if (action.type === action.DELETE_TODO) {

// 		return Object.assign({}, state, {
            
//         });
// 	}
// 	return state;

// };