// import update from 'immutability-helper';

const frequency = (state = [], action) => {
    switch (action.type) {
        case 'START_SOUND':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'STOP_SOUND':
            return update(state, {
                [action.id]: {
                    completed: {
                        $set: !state[action.id].completed
                    }
                }
            })
        default:
            return state
    }
}

export default frequency
