export const OFFER_FIELDS = {
  pickUpDate: 'pickUpDate',
  dropOffDate: 'dropOffDate',
  price: 'price',
  miles: 'miles',
  origin: 'origin',
  destination: 'destination'
}

export const SORT_FIELDS = {
  ascending: 'asc',
  descending: 'desc'
}

export const FIELD_ORDER = [
  {label: 'Origin', value: OFFER_FIELDS.origin },
  {label: 'Destination', value: OFFER_FIELDS.destination },
  {label: 'Pick Up Date', value: OFFER_FIELDS.pickUpDate },
  {label: 'Drop Off Date', value: OFFER_FIELDS.dropOffDate },
  {label: 'Payout', value: OFFER_FIELDS.price },
  {label: 'Distance', value: OFFER_FIELDS.miles },
]

export const FIELD_SORT_ORDER = [
  {label: 'ascending', value: 'asc'},
  {label: 'descending', value: 'desc'}
]

export const URLS = {
  fetchOffersUrl: `https://convoy-frontend-homework-api.herokuapp.com/offers`
}
