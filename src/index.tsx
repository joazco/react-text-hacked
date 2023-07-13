import { useCallback, useEffect, useMemo, useState } from 'react';

// let TextHackedEffectComponentIteration = 0;
type TextHackedEffectComponentProps = {
  defaultText: string;
  timeOut?: number;
  autoStart?: boolean;
  startOnHover?: boolean;
  startAfterTimer?: number;
};
const TextHackedEffectComponent: React.FC<TextHackedEffectComponentProps> = ({
  defaultText,
  timeOut = 50,
  startOnHover = false,
  autoStart = false,
  startAfterTimer,
}) => {
  const letters = useMemo(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', []);
  const [_, setTextHackedEffectComponentIteration] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [start, setStart] = useState<boolean>(autoStart);

  const generateRandomText = useCallback((size: number) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomText = '';

    for (let i = 0; i < size; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      randomText += alphabet[randomIndex];
    }

    return randomText;
  }, []);

  useEffect(() => {
    if (!start) return;
    setTextHackedEffectComponentIteration((TextHackedEffectComponentIteration) => {
      TextHackedEffectComponentIteration += 1 / 3;

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
      return TextHackedEffectComponentIteration;
    });
  }, [text, start]);

  useEffect(() => {
    setTextHackedEffectComponentIteration(0);
    setText(generateRandomText(defaultText.length));
  }, [defaultText]);

  useEffect(() => {
    if (!autoStart && !startOnHover && startAfterTimer) {
      setTimeout(() => setStart(true), startAfterTimer);
    }
  }, [autoStart, startOnHover, startAfterTimer]);

  if (!start) {
    return (
      <span
        style={{ textTransform: 'uppercase' }}
        onMouseEnter={() => startOnHover && setStart(true)}
        onTouchStart={() => startOnHover && setStart(true)}
      >
        {defaultText}
      </span>
    );
  }

  return <span style={{ textTransform: 'uppercase' }}>{text}</span>;
};

export default TextHackedEffectComponent;
