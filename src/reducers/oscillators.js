// import update from 'immutability-helper';

const oscillators = (state = [], action) => {
  switch (action.type) {
    case 'ADD_OSCILLATOR':
      return [
        ...state,
        {
          id: action.id,
          frequency: action.frequency
        }
      ]
    default:
      return state
  }
}

export default oscillators
