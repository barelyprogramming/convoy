import React, { Component } from 'react';
import { offersStore } from './offers.store';
import { observer } from 'mobx-react';
import { FIELD_ORDER } from './constants';
import { Offers } from './components/Offers';
import { Sort } from './components/Sort';

@observer
class App extends Component {
  componentWillMount() {
    offersStore.fetchOffersBy();
  }

  sortBy(parameter) {
    switch(parameter) {
      case 'origin':
        offersStore.fetchOffersBy('origin');
        break;
      case 'destination':
        offersStore.fetchOffersBy('destination');
        break;
      case 'miles':
        offersStore.fetchOffersBy('miles');
        break;
      case 'price':
        offersStore.fetchOffersBy('price');
        break;
      case 'dropOffDate':
        offersStore.fetchOffersBy('dropOffDate');
        break;
      case 'pickUpDate':
        offersStore.fetchOffersBy('pickUpDate');
        break;
      default:
        offersStore.sortBy('pickUpDate');
        break;
    }
  }

  handleChange(selectedOption) {
    offersStore.updateSortBy(selectedOption.value);
  }

  render() {
    return (
      <div className="root">
        <div className="row">
          <div className="col-2">
            <Sort fields={FIELD_ORDER} />
          </div>
          <div className="col-10">
            <Offers offers={offersStore.offers}/>
          </div>
        </div>
      </div>
    );
  }

  //define proptypes here
}

export default App;
