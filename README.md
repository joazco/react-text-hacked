# react-text-hacked

Reactjs Hacked Text Effect

[Code inspirate by](https://codepen.io/Hyperplexed/pen/rNrJgrd)

## Installation

```sh
npm i react-text-hacked
```

## React

### Declaration

```typescript
/// <reference types="react" />
type TextHackedEffectComponentProps = {
  defaultText: string;
  timeOut?: number; // default value is 50
  autoStart?: boolean; // default value is false
  startOnHover?: boolean; // default value is false
  startAfterTimer?: number; // default value is false
};
declare const TextHackedEffectComponent: React.FC<TextHackedEffectComponentProps>;
export default TextHackedEffectComponent;
```

### Usages

```typescript
import { useEffect, useState } from 'react';
import './App.css';
import TextHackedEffectComponent from 'react-text-hacked';

function App() {
  const [text, setText] = useState<string>('Lorem');

  useEffect(() => {
    setTimeout(() => {
      setText('Ipsum');
    }, 2000);
    setTimeout(() => {
      setText('dolor sit amet');
    }, 4000);
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
```

### Screen

![Screen example 2](screen2.png)
![Screen example](screen.png)
