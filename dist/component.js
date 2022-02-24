var $6GE3z$react = require("react");
var $6GE3z$styledcomponents = require("styled-components");

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
var $1da5ab642cae1a1d$exports = {};

$parcel$export($1da5ab642cae1a1d$exports, "Button", () => $346168496900c6b0$exports.default);
var $346168496900c6b0$exports = {};

$parcel$export($346168496900c6b0$exports, "default", () => $346168496900c6b0$export$2e2bcd8739ae039, (v) => $346168496900c6b0$export$2e2bcd8739ae039 = v);


var $346168496900c6b0$var$__makeTemplateObject = undefined && undefined.__makeTemplateObject || function(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
};
var $346168496900c6b0$var$StyledButton = ($parcel$interopDefault($6GE3z$styledcomponents)).button($346168496900c6b0$var$templateObject_1 || ($346168496900c6b0$var$templateObject_1 = $346168496900c6b0$var$__makeTemplateObject([
    "\n  color: ",
    ";\n"
], [
    "\n  color: ",
    ";\n"
])), function(props) {
    return props.color || "black";
});
/**
 * @function Button
 * @param {string} label the text for the button
 * @example
 * <Button label="Button Text" />
 */ var $346168496900c6b0$var$Button = function(props) {
    return(/*#__PURE__*/ ($parcel$interopDefault($6GE3z$react)).createElement($346168496900c6b0$var$StyledButton, {
        color: props.color
    }, props.label));
};
var $346168496900c6b0$export$2e2bcd8739ae039 = $346168496900c6b0$var$Button;
var $346168496900c6b0$var$templateObject_1;






$parcel$exportWildcard(module.exports, $1da5ab642cae1a1d$exports);


//# sourceMappingURL=component.js.map
