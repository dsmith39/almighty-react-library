var $fUHUP$react = require("react");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $7be4ff376573ca5d$exports = {};

$parcel$export($7be4ff376573ca5d$exports, "Button", () => $72051543a8425821$export$2e2bcd8739ae039);

/**
 * @function Button
 * @param {string} label the text for the button
 * @example
 * <Button label="Button Text" />
 */ var $72051543a8425821$var$Button = function(props) {
    return(/*#__PURE__*/ ($parcel$interopDefault($fUHUP$react)).createElement("button", null, props.label));
};
var $72051543a8425821$export$2e2bcd8739ae039 = $72051543a8425821$var$Button;






$parcel$exportWildcard(module.exports, $7be4ff376573ca5d$exports);


//# sourceMappingURL=component.js.map
