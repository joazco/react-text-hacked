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
var TextHackedEffectComponentIteration = 0;
var TextHackedEffectComponent = function (_a) {
    var defaultText = _a.defaultText, _b = _a.timeOut, timeOut = _b === void 0 ? 50 : _b;
    var letters = (0, react_1.useMemo)(function () { return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; }, []);
    var _c = (0, react_1.useState)(defaultText), text = _c[0], setText = _c[1];
    (0, react_1.useEffect)(function () {
        TextHackedEffectComponentIteration += 1 / 3;
        if (TextHackedEffectComponentIteration === text.length) {
            TextHackedEffectComponentIteration = 0;
        }
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
    }, [text]);
    (0, react_1.useEffect)(function () {
        TextHackedEffectComponentIteration = 0;
        setText(defaultText);
    }, [defaultText]);
    return (0, jsx_runtime_1.jsx)("span", __assign({ style: { textTransform: 'uppercase' } }, { children: text }));
};
exports.default = TextHackedEffectComponent;
