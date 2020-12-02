import React, { useState } from 'react';
import 'animate.css/animate.css';
import Form from './components/Form';
import SettingsPanel from './components/SettingsPanel';
import Image from './components/Image';

const App = props => {

  const [ state, setState ] = useState({
    image: '',
    audio: '',
    partying: false,
    settings: {
      numberOfImages: '1',
      animation: '',
    }
  });

  console.log('state 👉', state);

  const setNumberOfImages = (event) => {
    event.persist()
    setState(prevState => {
      return { ...prevState, settings: { ...prevState.settings, numberOfImages: parseInt(event.target.value) }}
    });
  }

  const setAnimation = (option) => {
    setState(prevState => {
      return { ...prevState, settings: { ...prevState.settings, animation: option.value }}
    });
  }

  const setImage = (event) => {
    event.persist()
    setState(prevState => {
      return { ...prevState, image: URL.createObjectURL(event.target.files[0])}
    });
  }

  const setAudio = (event) => {
    event.persist()
    setState(prevState => {
      return { ...prevState, audio: URL.createObjectURL(event.target.files[0])}
    });
  }

  const startParty = () => {
    setState(prevState => {
      return { ...prevState, partying: true}
    });
    const audio = document.createElement("audio");
    audio.src = state.audio;
    audio.autoplay = true;
  }

  return (
    <div className="h-screen from-blue-500 to-purple-500 bg-gradient-to-r w-full block">
      <div className="h-full flex justify-center items-center flex-wrap">
        {
          !state.partying ?
          <Form events={[setImage, setAudio, startParty]}/>
          :
          <>
          <SettingsPanel settings={state.settings} events={[setNumberOfImages, setAnimation]} />
          {Array(state.settings.numberOfImages).fill(<Image src={state.image} settings={state.settings} />)}
          </>
        }
      </div>
    </div>
  );

}

export default App;
