import React from 'react';
import PropTypes from "prop-types";

const Button = ({ name }) => <button>{name}</button>;

Button.propTypes = {
    /** Name button inner element */
    name: PropTypes.string
}

Button.defaultProps = {
    name: "Click"
}

export default Button;
