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

let book = fromJS({
  title: 'Harry Potter & The Goblet of Fire',
  isbn: '0439139600',
  series: 'Harry Potter',
  author: {
    firstName: 'J.K.',
    lastName: 'Rowling'
  },
  genres: [
    'Crime',
    'Fiction',
    'Adventure',
  ],
  storeListings: [
    {storeId: 'amazon', price: 7.95},
    {storeId: 'barnesnoble', price: 7.95},
    {storeId: 'biblio', price: 4.99},
    {storeId: 'bookdepository', price: 11.88},
  ]
});

const averagePrice = book.get('storeListings').reduce(
	(total, value) => (total + value.get('price')), 0
) / book.get('storeListings').count();

const indexOfListingToUpdate = book.get('storeListings').findIndex(listing =>
	listing.get('storeId') === 'biblio'
);

book = book.setIn(['storeListings', indexOfListingToUpdate, 'price'], 6.80);

book = book.update('storeListings', storeListings =>
	storeListings.map((listing, i) =>
		listing.update(
    		'price',
    		price => price * 0.9
    	)
  	)
)

const averageDiscountPrice = book.get('storeListings').reduce(
	(total, value) => total + value.get('price'), 0
) / book.get('storeListings').count();

console.log('indexOfListingToUpdate',indexOfListingToUpdate)
console.log('averagePrice',averagePrice)
console.log('discounted book',book)
console.log('averageDiscountPrice',averageDiscountPrice)
