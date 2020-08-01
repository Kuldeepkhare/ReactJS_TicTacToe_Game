import React from 'react';

/**
 * This component renders each square of game
 * @param props
 * @returns {*}
 * @constructor
 */
export const SquareComponent = (props) => {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}