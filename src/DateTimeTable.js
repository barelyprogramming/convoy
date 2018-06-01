import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import moment from 'moment';

export class DateTimeTable extends Component {
  formatDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);
     return {
        date: moment(dateTime).format('MMMM Do YYYY'),
        time: moment(dateTime).format('h:mm a'),
     };
  }

  render() {
    const { startDateTime, endDateTime } = this.props;
    const formattedStartDateTime = this.formatDateTime(startDateTime);
    const formattedEndDateTime = this.formatDateTime(endDateTime);

    return (
      <Table striped bordered condensed hover>
        <tbody>
          <tr>
            <td>
              <strong>Start</strong>
            </td>
            <td>
              <div>
                <div><strong>Date: </strong>{formattedStartDateTime.date}</div>
                <div><strong>Time: </strong>{formattedStartDateTime.time}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <strong>End</strong>
            </td>
            <td>
              <div>
                <div><strong>Date: </strong>{formattedEndDateTime.date}</div>
                <div><strong>Time: </strong>{formattedEndDateTime.time}</div>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }
}
