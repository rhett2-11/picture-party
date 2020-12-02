import React from 'react';
import Input from './Input';
import Select from 'react-select';
import animations from '../localData/animateCss.js';

const SettingsPanel = (props) => {

    return (
        <div className="absolute left-0 h-full p-10 rounded-r-lg bg-white shadow-2xl z-10">
            <span className="absolute right-10 top-7">x</span>
            <Input name="numberOfImages" type="Range" onchange={props.events.find((event) => event.name === 'setNumberOfImages')} value={props.settings.numberOfImages} min="1" max="100" />
            <Select
                placeholder="Select Animation..."
                options={animations}
                onChange={props.events.find((event) => event.name === 'setAnimation')}
            />
        </div>
    );
};

export default SettingsPanel;