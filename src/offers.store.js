import { action, observable, runInAction, autorun, reaction } from 'mobx';
import { OFFER_FIELDS, FIELD_SORT_ORDER, URLS } from './constants';

class OffersStore {
  @observable offers = [];
  @observable state = 'pending';
  @observable sortBy = OFFER_FIELDS.pickUpDate;
  @observable sortOrder = FIELD_SORT_ORDER.descending;

  @action
  async fetchOffersBy(sort=this.sortBy, order=this.sortOrder) {
    this.offers = [];
    this.state = 'pending';
    this.sortBy = sort;
    this.sortOrder = order;
    const fetchOffersUrl = `${URLS.fetchOffersUrl}?sort=${this.sortBy}&order=${this.sortOrder}`;
    console.log(fetchOffersUrl);

    try {
      const offersPromise = await fetch(fetchOffersUrl);
      const offersJSON = await offersPromise.json();
      runInAction(() => {
        console.log(offersJSON);
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
}

export const offersStore = new OffersStore();

reaction(
  () => offersStore.sortBy,
  (sortBy) => offersStore.fetchOffersBy(sortBy)
)

autorun(() => {
  console.log(offersStore.sortBy);
  console.log(offersStore.offers[0]);
});
