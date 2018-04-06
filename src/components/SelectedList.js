import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

import './SelectedList.css';

function renderText({ id, text }) {
  return (
    <Text key={id} children={text} />
  );
}

function filterText(searchValue) {
  return ({ text }) => text.toLowerCase().includes(searchValue.toLowerCase());
}

function SelectedList({ searchValue, list }) {
  return (
    <ul className="SelectedList">
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
    text: PropTypes.string.isRequired,
  })).isRequired,
}

export default SelectedList;
