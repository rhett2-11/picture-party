import React from 'react';

const Input = (props) => {
    return (
        <div className="my-2">
            <label htmlFor={props.name}>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}: </label>
            <input id={props.name} type={props.type} onChange={(event) => props.onchange(event)}/>
        </div>
    );
};

export default Input;