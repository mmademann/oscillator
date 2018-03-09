import update from 'immutability-helper';

const oscillatorsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_OSCILLATOR':
            return [
                ...state,
                {
                    id: action.id,
                    waveform: 'sine',
                    playback: false,
                    frequency: 196,
                    tune: 100,
                    gain: 0
                }
            ]
        case 'TOGGLE_PLAYBACK':
            return update(state, {
              [action.id]: {
                playback: {
                  $set: action.playback
                }
              }
            })
        case 'UPDATE_WAVEFORM':
            return update(state, {
              [action.id]: {
                waveform: {
                  $set: action.waveform
                }
              }
            })
        case 'UPDATE_FREQUENCY':
        	return update(state, {
        	  [action.id]: {
        	    frequency: {
        	      $set: action.frequency
        	    }
        	  }
        	})
        case 'UPDATE_TUNE':
        	return update(state, {
        	  [action.id]: {
        	    tune: {
        	      $set: action.tune
        	    }
        	  }
        	})
       	case 'UPDATE_GAIN':
       		return update(state, {
       		  [action.id]: {
       		    gain: {
       		      $set: action.gain
       		    }
       		  }
       		})
        default:
            return state
    }
}

export default oscillatorsReducer
