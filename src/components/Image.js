import React from 'react';

const Image = (props) => {
    return (
        <div>
            <img src={props.src} className="m-5" />
        </div>
    );
};

export default Image;