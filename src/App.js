import React, { useState } from 'react';

const App = props => {

  const [ state, setState ] = useState({
    image: '',
    audio: '',
    partying: false,
  });

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
    audio.load()
    audio.addEventListener("load", () => {
      audio.play();
    }, true);
    audio.src = state.audio;
    audio.autoplay = true;
  }

  return (
    <div className="flex justify-center">
      {
        !state.partying ?
        <form className="p-10 mt-20 max-w-xl border-solid border-4 border-gray-500 rounded-lg">
          <h1 className="text-2xl mb-5">Picture Party</h1>
          <div>
            <label htmlFor="image">Image: </label>
            <input id="image" type="file" onChange={(event) => setImage(event)}/>
          </div>
          {
            state.image !== '' ?
            <img src={state.image} alt="party pic" className="my-5" />
            : null
          }
          <div>
            <label htmlFor="audio">Audio: </label>
            <input id="audio" type="file" onChange={(event) => setAudio(event)}/>
          </div>
          {
            state.audio !== '' ?
            <audio controls className="my-5">
              <source src={state.audio} type="audio/ogg"/>
              <source src={state.audio} type="audio/mpeg"/>
              Your browser does not support the audio tag.
            </audio>
            : null
          }
          <button type="submit" onClick={() => startParty()} className="bg-green-500 text-white rounded-full py-3 px-6 mt-5 w-full">Start Party</button>
        </form>
        :
        <div className="w-full h-screen" style={{ backgroundImage:`url(${state.image})` }}>
          Partying
        </div>
      }
    </div>
  );

}

export default App;
