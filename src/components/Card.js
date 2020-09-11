import React from 'react';
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div>
            "{props.quote.quote}"
            <br />
            -{props.quote.author}
        </div>
    )
}

Card.propTypes = {
    //quote: PropTypes.object.isRequired

    // quote: PropTypes.oneOfType([
    //     PropTypes.object,
    //     PropTypes.string
    // ]).isRequired,

    quote: function(props, propName, componentName) {
        if (!props.quote.author) {
            return new Error(
                'Invalid prop `' + propName + '` doesn\'t have an author' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    },
}

export default Card;
