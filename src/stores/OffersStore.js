import { action, observable, runInAction, reaction } from 'mobx';
import { OFFER_FIELDS, SORT_FIELDS, URLS } from '../constants';

class OffersStore {
  @observable offers = [];
  @observable state = 'pending';
  @observable sortBy = OFFER_FIELDS.pickUpDate;
  @observable sortOrder = SORT_FIELDS.descending;
  @observable limit = 10;
  @observable offset = 0;

  @action
  async fetchOffersBy(sort=this.sortBy, order=this.sortOrder, limit=this.limit, offset=this.offset) {
    this.offers = [];
    this.state = 'pending';
    this.sortBy = sort;
    this.sortOrder = order;
    this.limit = limit;
    this.offset = offset;
    const fetchOffersUrl = `${URLS.fetchOffersUrl}?sort=${this.sortBy}&order=${this.sortOrder}&limit=${this.limit}&offset=${this.offset}`;

    console.log(fetchOffersUrl);

    try {
      const offersPromise = await fetch(fetchOffersUrl);
      const offersJSON = await offersPromise.json();
      runInAction(() => {
        this.state = 'completed';
        this.offers = offersJSON;
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  @action
  updateSortBy(parameter) {
    this.sortBy = parameter;
  }

  @action
  fetchNextOffers() {
    this.offset = this.offset + this.limit;
  }

  @action
  fetchPreviousOffers() {
    if(this.offset > 0) {
      this.offset = this.offset - this.limit;
    }
  }

  @action
  sortByOrder(order) {
    this.sortOrder = order;
  }
}

export const offersStore = new OffersStore();

// fetch offers when sortOrder updates
reaction(
  () => offersStore.sortOrder,
  (sortOrder) => offersStore.fetchOffersBy(offersStore.sortBy, sortOrder, offersStore.limit, offersStore.offset)
)

// fetch offers when offset is updated (clicking next or prev)
reaction(
  () => offersStore.offset,
  (offset) => offersStore.fetchOffersBy(offersStore.sortBy, offersStore.sortOrder, offersStore.limit, offset)
)

// fetch offers when sortBy option is updated
reaction(
  () => offersStore.sortBy,
  (sortBy) => offersStore.fetchOffersBy(sortBy)
)
