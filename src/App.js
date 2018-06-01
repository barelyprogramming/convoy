import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { offersStore } from './stores/OffersStore';
import { Offers } from './components/Offers';
import { Sort } from './components/Sort';

@observer
class App extends Component {
  componentWillMount() {
    offersStore.fetchOffersBy();
  }

  handleChange(selectedOption) {
    offersStore.updateSortBy(selectedOption.value);
  }

  render() {
    return (
      <div className="root">
        <div className="row">
          <div className="col-2">
            <Sort />
          </div>
          <div className="col-10">
            <Offers offers={offersStore.offers}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
