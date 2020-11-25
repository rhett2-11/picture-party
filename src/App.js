import React, { useState } from 'react';
import Form from './components/Form';
import Image from './components/Image';

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
    <div className="h-screen from-blue-500 to-purple-500 bg-gradient-to-r w-full block">
      <div className="h-full flex justify-center items-center">
        {
          !state.partying ?
          <Form events={[setImage, setAudio, startParty]}/>
          :
          <Image src={state.image}/>
        }
      </div>
    </div>
  );

}

export default App;
