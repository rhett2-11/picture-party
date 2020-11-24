import React from 'react';

const Button = (props) => {
    return (
        <div>
          <button onClick={() => props.onclick()} className="bg-green-500 text-white rounded-full py-3 px-6 mt-5 w-full">{props.text}</button>
        </div>
    );
};

export default Button;