/// <reference types="react" />
export declare const defaultAlphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
type TextHackedEffectComponentProps = {
    defaultText: string;
    timeOut?: number;
    autoStart?: boolean;
    startOnHover?: boolean;
    startAfterTimer?: number;
    alphabet?: string;
};
declare const TextHackedEffectComponent: React.FC<TextHackedEffectComponentProps>;
export default TextHackedEffectComponent;
