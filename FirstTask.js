// Solution
function objKeys(obj, thisContext, isDefaultStyles) {
  var keys = Object.keys(obj), i, key;
  for (i=0; i<keys.length; i++) {
    key = keys[i];
    if (isDefaultStyles) {
      thisContext[key] = obj[key].canvas;
    } else {
      thisContext[key] = obj[key];
    }
  }
}


ctx.prototype.__applyStyleState = function (styleState) {
  objKeys(styleState, this, false);
};
ctx.prototype.__setDefaultStyles = function () {
  objKeys(STYLES, this, true);
};
ctx.prototype.__getStyleState = function () {
  var styleState = {};
  objKeys(STYLES, styleState, true);
  return styleState;
};

