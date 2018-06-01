import React, { Component } from 'react';
import { FIELD_ORDER, FIELD_SORT_ORDER } from '../constants';
import { observer } from 'mobx-react';
import { offersStore } from '../offers.store';

@observer
export class Sort extends Component {
  handleSortOptionChange(e) {
    offersStore.updateSortBy(e.target.value);
  }

  handleSortOrderChange(e) {
    offersStore.sortByOrder(e.target.value);
  }

  render() {
    const sortOptions = FIELD_ORDER.map(field => {
      console.log(offersStore.sortBy === field.value);
      return (
          <div className="form-check" key={field.value}>
            <input className="form-check-input"
                   type="radio"
                   name="sortOptions"
                   id={field.value}
                   value={field.value}
                   checked={offersStore.sortBy === field.value}
                   onChange={this.handleSortOptionChange.bind(this)}/>
            <label className="form-check-label">
              { field.label }
            </label>
          </div>
        );
    });

    const sortOrder = FIELD_SORT_ORDER.map(field => {
      return (
          <div className="form-check" key={field.value}>
            <input className="form-check-input"
                   type="radio"
                   name="sortOrder"
                   id={field.value}
                   value={field.value}
                   checked={offersStore.sortOrder === field.value}
                   onChange={this.handleSortOrderChange.bind(this)}/>
            <label className="form-check-label">
              { field.label }
            </label>
          </div>
        );
    });

    return (
      <div className="sort">
        <div className="sortOptions">
          <h3>Sort By: </h3>
          { sortOptions }
        </div>
        <div className="sortOrder">
          <h3>Sort Order: </h3>
          { sortOrder }
        </div>
      </div>
    )
  }
}
