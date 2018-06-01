import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';

import { Offer } from './Offer';
import { offersStore } from '../stores/OffersStore';

require('./Offers.css');

@observer
export class Offers extends Component {
  handleLoadPrev() {
    offersStore.fetchPreviousOffers();
  }

  handleLoadNext() {
    offersStore.fetchNextOffers();
  }

  render() {
    const { offers } = this.props;
    const formattedOffers = offers.map((offer, index) => {
      return (
        <Offer
          key={index}
          origin={offer.origin}
          destination={offer.destination}
          miles={offer.miles}
          offer={offer.offer}
        />
      )
    });

    return (
      <div className="offers">
        <div className="row">
          <div className="col-3 heading">
            Pick Up
          </div>
          <div className="col-2 heading">
          </div>
          <div className="col-3 heading">
            Drop Off
          </div>
          <div className="col-2 heading">
            Distance
          </div>
          <div className="col-2 heading">
            Payout
          </div>
        </div>
        { formattedOffers }
        <div className="offerNavigation">
          <button className="loadPrev" onClick={this.handleLoadPrev.bind(this)} disabled={offersStore.offset === 0}>
            Prev
          </button>
          <button className="loadNext" onClick={this.handleLoadNext.bind(this)}>
            Next
          </button>
        </div>
      </div>
    );
  }

  static propTypes = {
    offers: PropTypes.observableArray.isRequired,
  };
}
