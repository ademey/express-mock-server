'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isProvider = exports.isProvider = function isProvider(provider) {
  if (typeof provider === 'function') {
    return true;
  }
  return false;
};

var warnProvider = exports.warnProvider = function warnProvider(provider) {
  if (!isProvider(provider)) {
    throw new Error('Provider must be a function. Recieved: ' + provider);
  }
  return true;
};

/**
 * Create a whole number between the `min` and `max` values
 * @param {number} min - Lowest number
 * @param {number} max - Highest number
 * @return {number}
 * @todo Can't recall if this would include the min & max
 */
var randomRange = exports.randomRange = function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Create a whole number between the `min` and `max` values. Very similar to randomRange(),
 * though this will return `min` if it is the only argument. This is mostly used to extract
 * the if/else logic from providers.
 *
 * Most providers have a signature of `fn(min :number, [max] :number)`. where given
 * one value they always return that number. But providing 2 values, `min` & `max`,
 * will generate random a value between that range.
 * @param {number} min - Lowest number
 * @param {number} max - Highest number
 * @return {number}
 */
var makeNumber = exports.makeNumber = function makeNumber(min, max) {
  return !max ? min : randomRange(min, max);
};

/**
 * Pick a random item from an array.
 * @param {array} arr - Array to pick a value from
 * @return {any} Single value from array
 */
var getRandom = exports.getRandom = function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
//# sourceMappingURL=util.js.map