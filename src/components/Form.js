import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = (props) => {
    return (
        <div className="p-10 mt-20 border-solid border-4 border-gray-500 rounded-lg">
            <h1 className="text-4xl mb-5">Picture Party</h1>
            <Input name="image" type="file" onchange={props.events.find((event) => event.name === 'setImage')}/>
            <Input name="audio" type="file" onchange={props.events.find((event) => event.name === 'setAudio')}/>
            <Button text="Start Party" onclick={props.events.find((event) => event.name === 'startParty')}/>
        </div>
    );
};

export default Form;