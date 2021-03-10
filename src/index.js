
exports.min = function min (array) {
  return !array || !(array.length)? 0: array.reduce((old, curr)=> old<curr?old:curr);
}

exports.max = function max (array) {
  return !array || !(array.length)? 0: array.reduce((old, curr)=> old>curr?old:curr);
}

exports.avg = function avg (array) {
  return !array || !(array.length)? 0: (array.reduce((old, curr)=> old+curr))/array.length;
}
