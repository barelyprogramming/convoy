import React, { Component } from 'react';
import { offersStore } from './offers.store';
import { observer } from 'mobx-react';
import Select from 'react-select';
import { FIELD_ORDER } from './constants';
import { Table } from 'react-bootstrap';
import moment from 'moment';
import { DateTimeTable } from './DateTimeTable';

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
    const offers = offersStore.offers.map( offer => {
      return (
        <tr>
          <td>{offer.origin.city}, {offer.origin.state}</td>
          <td>
            <DateTimeTable
              startDateTime={offer.origin.pickup.start}
              endDateTime={offer.origin.pickup.end}
            />
          </td>
          <td>{offer.destination.city}, {offer.destination.state}</td>
          <td>
            <DateTimeTable
              startDateTime={offer.destination.dropoff.start}
              endDateTime={offer.destination.dropoff.end}
            />
          </td>
          <td>{offer.miles}</td>
          <td>{offer.offer}</td>
        </tr>
      )
    })

    const selectOptions = FIELD_ORDER.map( field => {
      return {
        value: field,
        label: field
      }
    });

    const selectedOption = {
      value: offersStore.sortBy,
      label: offersStore.sortBy
    }

    return (
      <div>
        <Select
          name="form-field-name"
          value={selectedOption}
          onChange={this.handleChange}
          options={selectOptions}
        />
        <Table striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th>Origin</th>
              <th>Pick Up</th>
              <th>Destination</th>
              <th>Drop Off</th>
              <th>Miles</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {offers}
          </tbody>
        </Table>
      </div>
    );
  }

  //define proptypes here
}

export default App;
