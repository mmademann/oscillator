const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // state as a key/value obj instead of an array
      // const stateObject = {
      //   ...state,
      //   [action.id]:
      //   {
      //     id: action.id,
      //     text: action.text,
      //     completed: false
      //   }
      // }
      // console.log(stateObject);
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
