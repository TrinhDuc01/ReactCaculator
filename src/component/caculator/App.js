import { useState } from 'react';
import '../../App.css';
import Button from './Button';
import Display from './Display';

import displayButton from '../../data';

function App() {
  const [caculation, setCaculation] = useState('')

  const handleButton = (key) => {
    setCaculation((prev) => prev + key)
  }

  const handleCaculate = () => {
    try{
      function evil(fn) {
        return new Function('return ' + fn)();
      }
      setCaculation(evil(caculation))
    }
    catch(err){
      setCaculation("Lỗi cú pháp")
    }
  }
  // console.log(caculation)
  return (
    <div className="App">
      <Display caculation={caculation} />
      <button className='buttonAC' style={{background:'rgb(231, 231, 231)',color:'black'}} onClick={()=>setCaculation('')}>AC</button>
      {displayButton.map((element) => (
        <Button key={element.key}
          element={element}
          handleButton={handleButton}
        />
      ))}

      <button className='buttonEqual' onClick={handleCaculate}>=</button>

    </div>
  );
}

export default App;
