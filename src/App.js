import logo from './logo.svg';
import './App.css';
import UseState from './Components/trafficԼight';
import { useState } from 'react';

function App() {
  const colors = ['red', 'yellow', 'green']
  const [lit, setLit] = useState('red')
  return (
    <div className="App">
      {colors.map((color) => {
        return <UseState color={color} lit={lit} setLit={setLit} />
      })}
    </div>
  )
}

export default App;
