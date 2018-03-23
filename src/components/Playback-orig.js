import React from 'react'
import { createSelector } from 'reselect'
import { Map, fromJS, List } from 'immutable'

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

let booksJS = {
  storeListings: [
    {storeId: 'amazon', price: 7.95},
    {storeId: 'barnesnoble', price: 7.95},
    {storeId: 'biblio', price: 4.99},
    {storeId: 'bookdepository', price: 11.88},
  ]
}

let exampleState = {
  shop: {
    taxPercent: 8,
    items: [
      { name: 'apple', value: 1.20 },
      { name: 'orange', value: 0.95 },
    ]
  }
}

// example
const shopItemsSelector = state => state.shop.items
const taxPercentSelector = state => state.shop.taxPercent

const subtotalSelector = createSelector(
  shopItemsSelector,
  items => items.reduce((acc, item) => acc + item.value, 0)
)

const taxSelector = createSelector(
  subtotalSelector,
  taxPercentSelector,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
)

const totalSelector = createSelector(
  subtotalSelector,
  taxSelector,
  (subtotal, tax) => ({ total: subtotal + tax })
)


// book
const averagePrice = book.get('storeListings').reduce(
	(acc, listing) => (acc + listing.get('price')), 0
) / book.get('storeListings').count();

const indexOfListingToUpdate = book.get('storeListings').findIndex(listing =>
	listing.get('storeId') === 'biblio'
)

const findIndexerFromJS = (storeId, listings) => {
	for (let [index, listing] of listings.entries()) {
		if (listing.storeId === storeId) {
      		return { listing, index };
    	}
  	}
}

console.log('findIndexerFromJS',
	findIndexerFromJS(
		'bookdepository',
		booksJS.storeListings
	)
)

let booksMap = fromJS({
  storeListings: [
    {storeId: 'amazon', price: 7.95},
    {storeId: 'barnesnoble', price: 7.95},
    {storeId: 'biblio', price: 4.99},
    {storeId: 'bookdepository', price: 11.88},
  ]
})


const findIndexFromMap = (storeId, listings) => {
	const indexFound = listings.findIndex(listing =>
		listing.get('storeId') === storeId
	)

	const listing = listings.get(indexFound).toJS()

	return { indexFound, listing }
}

const finder = booksMap.get('storeListings').find(listing => listing.get('storeId') === 'bookdepository')

console.log('finder', finder.toJS())

console.log('findIndexFromMap',
	findIndexFromMap(
		'bookdepository',
		booksMap.get('storeListings')
	)
)

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


// TODO: 	flowjs
// TODO: 	unit test with jest

// TODO: 	move ADSR props to envelope {} and merge properly with state
// 			create unique reducer for envelope / filter / etc
//			add filter/delay/env from native
//			clone ADSREnvelope if it already exists
// 			use volume to turn osc sound on/off




// if the mapStateToProps argument supplied to connect
// returns a function instead of an object, it will be
// used to create an individual mapStateToProps function
// for each instance of the container.
const makeMapStateToProps = (initialState, { oscId }) => {

	const getOscillator = makeGetOscillatorById(oscId);

	const mapStateToProps = state => ({
		oscillator: getOscillator(state)
	})
	return mapStateToProps

	// returns a function, not an object, each
	// instance needs a unique oscId and to be memoized
	return (state) => ({
		oscillator: getOscillator(state),
	});
}
