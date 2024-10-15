"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaQuery = void 0;
var react_1 = require("react");
var useMediaQuery = function (query) {
    var _a = (0, react_1.useState)(false), matches = _a[0], setMatches = _a[1];
    (0, react_1.useEffect)(function () {
        var media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        var listener = function () { return setMatches(media.matches); };
        window.addEventListener("resize", listener);
        return function () { return window.removeEventListener("resize", listener); };
    }, [matches, query]);
    return matches;
};
exports.useMediaQuery = useMediaQuery;
