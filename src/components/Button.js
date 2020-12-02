import React from 'react';

const Button = (props) => {
    return (
        <div>
          <button onClick={() => props.onclick()} className="bg-purple-500 shadow-lg transition-all hover:bg-purple-700 text-white rounded-full py-3 px-6 mt-5 w-full font-black">{props.text}</button>
        </div>
    );
};

export default Button;