import { useEffect, useState } from 'react';
import './App.css';
import TextHackedEffectComponent from 'react-text-hacked';

function App() {
  const [text, setText] = useState<string>('Lorem');

  useEffect(() => {
    setTimeout(() => {
      setText('Ipsum');
    }, 3000);
    setTimeout(() => {
      setText('dolor sit amet');
    }, 5000);
  }, []);

  return (
    <div className="App">
      <div>
        <TextHackedEffectComponent defaultText={'Hover me'} startOnHover />
      </div>
      <div>
        <TextHackedEffectComponent defaultText={'Start after 2s'} startAfterTimer={2000} />
      </div>
      <div>
        <TextHackedEffectComponent defaultText={text} autoStart />
      </div>
    </div>
  );
}

export default App;
