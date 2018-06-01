export const OFFER_FIELDS = {
  pickUpDate: 'pickUpDate',
  dropOffDate: 'dropOffDate',
  price: 'price',
  miles: 'miles',
  origin: 'origin',
  destination: 'destination'
}

export const FIELD_ORDER = [
  OFFER_FIELDS.pickUpDate,
  OFFER_FIELDS.dropOffDate,
  OFFER_FIELDS.price,
  OFFER_FIELDS.miles,
  OFFER_FIELDS.origin,
  OFFER_FIELDS.destination
]

export const FIELD_SORT_ORDER = {
  ascending: 'asc',
  descending: 'desc'
}

export const URLS = {
  fetchOffersUrl: `https://convoy-frontend-homework-api.herokuapp.com/offers`
}
