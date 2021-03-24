/**
 * Use this function to limit which properties should be checked for falsiness.
 * @param {Object} obj The Object we want to evaluate.
 * @param  {...Array<string>} keys The Object's keys we want to evaluate.
 */
exports.basicValidator = (obj, ...keys) => {
  let invalidTrigger = false;
  keys.forEach(key => {
    if (!obj[key]) {
      invalidTrigger = true;
    }
  });

  return invalidTrigger;
};

/**
 * Use this function to check ALL properties of an object for their falsiness.
 * @param {*} obj
 */
exports.basicAllValidator = obj => {
  let invalidTrigger = false;
  Object.keys(obj).forEach(key => {
    if (!obj[key]) {
      invalidTrigger = true;
    }
  });
  return invalidTrigger;
};
