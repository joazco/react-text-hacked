import { useCallback, useEffect, useMemo, useState } from 'react';

export const defaultAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
type TextHackedEffectComponentProps = {
  defaultText: string;
  timeOut?: number;
  autoStart?: boolean;
  startOnHover?: boolean;
  startAfterTimer?: number;
  alphabet?: string;
};
const TextHackedEffectComponent: React.FC<TextHackedEffectComponentProps> = ({
  defaultText,
  timeOut = 50,
  startOnHover = false,
  autoStart = false,
  startAfterTimer,
  alphabet = defaultAlphabet,
}) => {
  const [textHackedEffectComponentIteration, setTextHackedEffectComponentIteration] = useState<number>();
  const [text, setText] = useState<string>('');
  const [start, setStart] = useState<boolean>(autoStart);

  const textLength = useMemo(() => text.length - 1, [text]);

  const generateRandomText = useCallback((size: number) => {
    let randomText = '';

    for (let i = 0; i < size; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      randomText += alphabet[randomIndex];
    }

    return randomText;
  }, []);

  useEffect(() => {
    if (!start) return;
    setTextHackedEffectComponentIteration(1 / 3);
  }, [start]);

  useEffect(() => {
    if (textHackedEffectComponentIteration === undefined) {
      return;
    }
    setTimeout(() => {
      if (textHackedEffectComponentIteration >= textLength) {
        setTextHackedEffectComponentIteration(textLength);
        setText(defaultText);
        return;
      }
      const futurText = text
        .split('')
        .map((_letter, index) => {
          if (index < textHackedEffectComponentIteration) {
            return defaultText[index];
          }

          return alphabet[Math.floor(Math.random() * alphabet.length)];
        })
        .join('');
      setText(futurText);
      setTextHackedEffectComponentIteration(textHackedEffectComponentIteration + 1 / 3);
    }, timeOut);
  }, [textHackedEffectComponentIteration, textLength]);

  useEffect(() => {
    setTextHackedEffectComponentIteration(1 / 3);
    setText(generateRandomText(defaultText.length));
  }, [defaultText]);

  useEffect(() => {
    if (!autoStart && !startOnHover && startAfterTimer) {
      setTimeout(() => setStart(true), startAfterTimer);
    }
  }, []);

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
