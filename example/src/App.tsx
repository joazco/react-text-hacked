import { useEffect, useState } from 'react';
import './App.css';
import TextHackedEffectComponent from 'react-text-hacked';

function App() {
  const [text, setText] = useState<string>('Lorem');

  useEffect(() => {
    setTimeout(() => {
      setText('Ipsum');
    }, 4000);
    setTimeout(() => {
      setText('dolor sit amet');
    }, 7000);
  }, []);
  return (
    <div className="App">
      <TextHackedEffectComponent defaultText={text} />
    </div>
  );
}

export default App;
