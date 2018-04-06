import React from 'react';
import PropTypes from 'prop-types';

import './Search.css';

function Search({ searchValue, onChange }) {
  return (
    <input value={searchValue} onChange={onChange} />
  );
}

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Search;
