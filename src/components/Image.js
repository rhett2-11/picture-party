import React from 'react';

const Image = (props) => {

    const style = {
        minWidth: '5%'
    }

    return (
        <div className={`m-5 flex-1 d-flex justify-center items-center animate__animated animate__infinite animate__${props.settings.animation}`} style={style}>
            <img src={props.src} className="rounded-lg" alt="this is it" />
        </div>
    );
};

export default Image;