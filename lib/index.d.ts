/// <reference types="react" />
type TextHackedEffectComponentProps = {
    defaultText: string;
    timeOut?: number;
    autoStart?: boolean;
    startOnHover?: boolean;
    startAfterTimer?: number;
};
declare const TextHackedEffectComponent: React.FC<TextHackedEffectComponentProps>;
export default TextHackedEffectComponent;
