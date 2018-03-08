const playback = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SOUND':
            return action.value;
        default:
            return state
    }
}

export default playback
