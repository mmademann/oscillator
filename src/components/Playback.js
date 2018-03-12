import React from 'react'

class Playback extends React.Component {

	startPlayback = event => {
		const { oscId, togglePlayback } = this.props;

		togglePlayback(true, oscId)
	};

	stopPlayback = event => {
		const { oscId, togglePlayback } = this.props;

		togglePlayback(
			false,
			oscId
		)
	};

	render() {
		const { playback } = this.props;
		const styleProp = (val) => {
			return (val) ? '#f2f2f2' : '#ffffff'
		}

		return (
		    <div className="control-row">
		        Oscillator
		        <button
		        	style={{ backgroundColor: styleProp(playback) }}
		        	onClick={ this.startPlayback }>
		        	Play
		        </button>
		        <button
		        	style={{ backgroundColor: styleProp(!playback) }}
		        	onClick={ this.stopPlayback }>
		        	Stop
		        </button>
		    </div>
		)
	}
}

export default Playback
