"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAlphabet = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
exports.defaultAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var TextHackedEffectComponent = function (_a) {
    var defaultText = _a.defaultText, _b = _a.timeOut, timeOut = _b === void 0 ? 50 : _b, _c = _a.startOnHover, startOnHover = _c === void 0 ? false : _c, _d = _a.autoStart, autoStart = _d === void 0 ? false : _d, startAfterTimer = _a.startAfterTimer, _e = _a.alphabet, alphabet = _e === void 0 ? exports.defaultAlphabet : _e;
    var _f = (0, react_1.useState)(), textHackedEffectComponentIteration = _f[0], setTextHackedEffectComponentIteration = _f[1];
    var _g = (0, react_1.useState)(''), text = _g[0], setText = _g[1];
    var _h = (0, react_1.useState)(autoStart), start = _h[0], setStart = _h[1];
    var textLength = (0, react_1.useMemo)(function () { return text.length - 1; }, [text]);
    var generateRandomText = (0, react_1.useCallback)(function (size) {
        var randomText = '';
        for (var i = 0; i < size; i++) {
            var randomIndex = Math.floor(Math.random() * alphabet.length);
            randomText += alphabet[randomIndex];
        }
        return randomText;
    }, []);
    (0, react_1.useEffect)(function () {
        if (!start)
            return;
        setTextHackedEffectComponentIteration(1 / 3);
    }, [start]);
    (0, react_1.useEffect)(function () {
        if (textHackedEffectComponentIteration === undefined) {
            return;
        }
        setTimeout(function () {
            if (textHackedEffectComponentIteration >= textLength) {
                setTextHackedEffectComponentIteration(textLength);
                setText(defaultText);
                return;
            }
            var futurText = text
                .split('')
                .map(function (_letter, index) {
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
    (0, react_1.useEffect)(function () {
        setTextHackedEffectComponentIteration(1 / 3);
        setText(generateRandomText(defaultText.length));
    }, [defaultText]);
    (0, react_1.useEffect)(function () {
        if (!autoStart && !startOnHover && startAfterTimer) {
            setTimeout(function () { return setStart(true); }, startAfterTimer);
        }
    }, []);
    if (!start) {
        return ((0, jsx_runtime_1.jsx)("span", __assign({ style: { textTransform: 'uppercase' }, onMouseEnter: function () { return startOnHover && setStart(true); }, onTouchStart: function () { return startOnHover && setStart(true); } }, { children: defaultText })));
    }
    return (0, jsx_runtime_1.jsx)("span", __assign({ style: { textTransform: 'uppercase' } }, { children: text }));
};
exports.default = TextHackedEffectComponent;
