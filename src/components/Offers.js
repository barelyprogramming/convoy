import React, { Component } from 'react';
import { Offer } from './Offer';
import { offersStore } from '../offers.store';
import { observer } from 'mobx-react';

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
    const formattedOffers = offers.map( offer => {
      return (
        <Offer
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
}
