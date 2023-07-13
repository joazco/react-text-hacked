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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var TextHackedEffectComponent = function (_a) {
    var defaultText = _a.defaultText, _b = _a.timeOut, timeOut = _b === void 0 ? 50 : _b, _c = _a.startOnHover, startOnHover = _c === void 0 ? false : _c, _d = _a.autoStart, autoStart = _d === void 0 ? false : _d, startAfterTimer = _a.startAfterTimer;
    var letters = (0, react_1.useMemo)(function () { return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; }, []);
    var _e = (0, react_1.useState)(0), _ = _e[0], setTextHackedEffectComponentIteration = _e[1];
    var _f = (0, react_1.useState)(''), text = _f[0], setText = _f[1];
    var _g = (0, react_1.useState)(autoStart), start = _g[0], setStart = _g[1];
    var generateRandomText = (0, react_1.useCallback)(function (size) {
        var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
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
        setTextHackedEffectComponentIteration(function (TextHackedEffectComponentIteration) {
            TextHackedEffectComponentIteration += 1 / 3;
            setTimeout(function () {
                if (TextHackedEffectComponentIteration >= text.length - 1) {
                    TextHackedEffectComponentIteration = text.length;
                    setText(defaultText);
                    return;
                }
                var futurText = text
                    .split('')
                    .map(function (_letter, index) {
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
    (0, react_1.useEffect)(function () {
        setTextHackedEffectComponentIteration(0);
        setText(generateRandomText(defaultText.length));
    }, [defaultText]);
    (0, react_1.useEffect)(function () {
        if (!autoStart && !startOnHover && startAfterTimer) {
            setTimeout(function () { return setStart(true); }, startAfterTimer);
        }
    }, [autoStart, startOnHover, startAfterTimer]);
    if (!start) {
        return ((0, jsx_runtime_1.jsx)("span", __assign({ style: { textTransform: 'uppercase' }, onMouseEnter: function () { return startOnHover && setStart(true); }, onTouchStart: function () { return startOnHover && setStart(true); } }, { children: defaultText })));
    }
    return (0, jsx_runtime_1.jsx)("span", __assign({ style: { textTransform: 'uppercase' } }, { children: text }));
};
exports.default = TextHackedEffectComponent;
