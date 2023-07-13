import { useEffect, useMemo, useState } from 'react';

let iteration = 0;
type TextHackedEffectComponentProps = {
  defaultText: string;
  timeOut?: number;
};
const TextHackedEffectComponent: React.FC<TextHackedEffectComponentProps> = ({ defaultText, timeOut = 50 }) => {
  const letters = useMemo(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', []);
  const [text, setText] = useState<string>(defaultText);
  useEffect(() => {
    iteration += 1 / 3;
    setTimeout(() => {
      if (iteration >= text.length - 1) {
        setText(defaultText);
        return;
      }
      const futurText = text
        .split('')
        .map((_letter, index) => {
          if (index < iteration) {
            return text[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');
      setText(futurText);
    }, timeOut);
  }, [text, timeOut]);

  return <span style={{ textTransform: 'uppercase' }}>{text}</span>;
};

export default TextHackedEffectComponent;
