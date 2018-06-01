import React, { Component } from 'react';
import moment from 'moment';

export class PickupDropoff extends Component {
  formatDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);
     return {
        date: moment(dateTime).format('ddd, MMMM Do'),
        time: moment(dateTime).format('h:mm a'),
     };
  }

  render() {
    const { city, state } = this.props;
    const startDateTime = this.formatDateTime(this.props.startDateTime);
    const endDateTime = this.formatDateTime(this.props.endDateTime);

    return (
    <div>
      <div className="placeName">
        {city}, {state}
      </div>
      <div className="dateTime">
        <strong>Start</strong>: {startDateTime.date} - {startDateTime.time}
      </div>
      <div className="dateTime">
        <strong>End</strong>: {endDateTime.date} - {endDateTime.time}
      </div>
    </div>
    );
  }
}
