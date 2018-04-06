import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

import './SelectedList.css';

function renderText({ id, name }) {
  return (
    <Text key={id} children={name} />
  );
}

function filterText(searchValue) {
  return ({ name }) => name.toLowerCase().includes(searchValue.toLowerCase());
}

function SelectedList({ searchValue, list }) {
  return (
    <ul>
      {list
        .filter(filterText(searchValue))
        .map(renderText)}
    </ul>
  );
}

SelectedList.propTypes = {
  searchValue: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
}

export default SelectedList;
