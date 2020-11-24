import React, { useState } from 'react';
import Form from './components/Form';

const App = props => {

  const [ state, setState ] = useState({
    image: '',
    audio: '',
    partying: false,
  });

  console.log('state 👉', state);

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
    <div className="flex justify-center">
      {
        !state.partying ?
        <Form events={[setImage, setAudio, startParty]}/>
        :
        <div className="w-full h-screen" style={{ backgroundImage:`url(${state.image})` }}>
          Partying
        </div>
      }
    </div>
  );

}

export default App;
