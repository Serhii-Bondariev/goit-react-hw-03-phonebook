import React, { Component } from 'react';
import styles from './Filter.module.css';

class Filter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;

    return (
      <div className={styles['filter-wrapper']}>
        <input
          className={styles['filter-input']}
          type="text"
          placeholder="Search contacts"
          value={filter}
          onChange={onFilterChange}
        />
      </div>
    );
  }
}

export default Filter;
