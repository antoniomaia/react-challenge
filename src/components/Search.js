import React from 'react';
import PropTypes from 'prop-types';

import './Search.css';

function Search({ searchValue, onChange }) {
  return (
    <div className="inputHeader">
      <input value={searchValue} onChange={onChange} />
    </div>
  );
}

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Search;
