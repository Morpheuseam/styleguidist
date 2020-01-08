import React from 'react';
import PropTypes from "prop-types";

const List = ({ items, title }) => (
    <div>
        <p>{title}</p>
        <ul>
            {items.map((res, i) => <li key={i}>{res.name}</li>)}
        </ul>
    </div>
);

List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    title: PropTypes.string.isRequired
}

export default List;
