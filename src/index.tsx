import { useEffect, useMemo, useState } from 'react';

let TextHackedEffectComponentIteration = 0;
type TextHackedEffectComponentProps = {
  defaultText: string;
  timeOut?: number;
};
const TextHackedEffectComponent: React.FC<TextHackedEffectComponentProps> = ({ defaultText, timeOut = 50 }) => {
  const letters = useMemo(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', []);
  const [text, setText] = useState<string>(defaultText);
  useEffect(() => {
    TextHackedEffectComponentIteration += 1 / 3;
    if (TextHackedEffectComponentIteration === text.length) {
      TextHackedEffectComponentIteration = 0;
    }
    setTimeout(() => {
      if (TextHackedEffectComponentIteration >= text.length - 1) {
        TextHackedEffectComponentIteration = text.length;
        setText(defaultText);
        return;
      }
      const futurText = text
        .split('')
        .map((_letter, index) => {
          if (index < TextHackedEffectComponentIteration) {
            return text[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');
      setText(futurText);
    }, timeOut);
  }, [text]);

  useEffect(() => {
    TextHackedEffectComponentIteration = 0;
    setText(defaultText);
  }, [defaultText]);

  return <span style={{ textTransform: 'uppercase' }}>{text}</span>;
};

export default TextHackedEffectComponent;
