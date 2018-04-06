import React from 'react'
import PropTypes from 'prop-types';

const Text = ({ children }) => <li><p>{children}</p></li>

Text.propTypes = {
   children: PropTypes.string
}

export default Text
