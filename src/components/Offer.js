import React, { Component } from 'react';
import { PickupDropoff } from './PickupDropoff';
import PropTypes from 'prop-types';

require('./Offer.css');

export class Offer extends Component {

  render() {
    const { origin, destination, miles, offer } = this.props;
    return (
      <div className="offer">
        <div className="row">
          <div className="col-3">
            <PickupDropoff
              city={origin.city}
              state={origin.state}
              startDateTime={origin.pickup.start}
              endDateTime={origin.pickup.end}
            />
          </div>
          <div className="col-2">
                <i className="fa fa-arrow-right fa-2x"></i>
          </div>
          <div className="col-3">
            <PickupDropoff
              city={destination.city}
              state={destination.state}
              startDateTime={destination.dropoff.start}
              endDateTime={destination.dropoff.end}
            />
          </div>
          <div className="col-2">
            {miles} miles
          </div>
          <div className="col-2">
            <button className="offerPrice">
              $ {offer}
            </button>
          </div>
        </div>
      </div>
    );
  }

  static propTypes = {
    origin: PropTypes.object.isRequired,
    destination: PropTypes.object.isRequired,
    miles: PropTypes.number.isRequired,
    offer: PropTypes.number.isRequired,
  };
}
