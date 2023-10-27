import React from 'react';

const Filter = ({ filter, onFilterChange }) => (
  <input
    type="text"
    placeholder="Search contacts"
    value={filter}
    onChange={onFilterChange}
  />
);

export default Filter;
