import React, { useState } from 'react'
import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import Slider from './components/Slider';

function App() {
  let [visible, setVisible] = useState(true);
  const HandleVisible = () => {
    setVisible(!visible);
  }
  let buttonText = visible ? "Show Counter" : "Show Slider";

  return (
    <div className="App">
      <button onClick={HandleVisible}>{buttonText}</button>
      <div className={visible ? "visible" : "hidden"}><Slider /></div>
      {/* Note: I dom't want the page to Unmount whenever the state changes, that is why i am using the css styles to show and
      hide the elements depending on the classNames. */}
      <div className={visible ? "hidden" : "visible"}><Counter /></div>
      <Header title={"Hello"} title2={"Hello World"} />
    </div>
  );
}

export default App;
