import update from 'immutability-helper';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return update(state, {
        [action.id]: {
          completed: {
            $set: !state[action.id].completed
          }
        }
      })
      // // previous return statement using .map
      // return state.map((todo, index) =>
      //   (todo.id === action.id)
      //     ? {...todo, completed: !todo.completed}
      //     : todo
      // )
    default:
      return state
  }
}

export default todos

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
