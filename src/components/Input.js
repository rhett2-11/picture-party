import React from 'react';

const Input = (props) => {

    return (
        <div className="my-2 block">
            {/* label display names automatically get converted from camelCase to Regular Case */}
            <label htmlFor={props.name} className="font-semibold text-gray-700">{props.name.charAt(0).toUpperCase() + props.name.replace(/([A-Z])/g, ' $1').slice(1)}: </label>
            <input id={props.name} type={props.type} className="w-full" min={props.min} max={props.max} value={props.value} onChange={(event) => props.onchange(event)}/>
        </div>
    );
};

export default Input;