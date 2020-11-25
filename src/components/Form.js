import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = (props) => {
    return (
        <div className="p-10 rounded-lg bg-white shadow-2xl">
            <h1 className="text-4xl mb-5 font-bold">Picture Party</h1>
            <Input name="image" type="file" onchange={props.events.find((event) => event.name === 'setImage')}/>
            <Input name="audio" type="file" onchange={props.events.find((event) => event.name === 'setAudio')}/>
            <Button text="Start Party" onclick={props.events.find((event) => event.name === 'startParty')}/>
        </div>
    );
};

export default Form;