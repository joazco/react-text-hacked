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
  timeOut?: number;
};
declare const TextHackedEffectComponent: React.FC<TextHackedEffectComponentProps>;
export default TextHackedEffectComponent;
```

### Usages

```typescript
import './App.css';
import TextHackedEffectComponent from 'react-text-hacked';

function App() {
  return (
    <div className="App">
      <TextHackedEffectComponent defaultText="Hello world" />
    </div>
  );
}

export default App;
```

### Screen

![Screen example 2](screen2.png)
![Screen example](screen.png)
