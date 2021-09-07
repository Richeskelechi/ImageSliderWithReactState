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
  return (
    <div className="App">
      <button onClick={HandleVisible}>{visible ? "Hide Slider" : "Show Slider"}</button>
      {visible ? <Slider /> : null}
      <Header title={"Hello"} title2={"Hello World"} />
      <Counter />
    </div>
  );
}

export default App;
