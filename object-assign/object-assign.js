/* Polyfill service v3.18.1
 * For detailed credits and licence information see https://github.com/financial-times/polyfill-service.
 * 
 * UA detected: chrome/58.0.0
 * Features requested: Object.assign
 * 
 * - Object.assign, License: CC0 */

(function(undefined) {

// Object.assign
Object.assign = function assign(target, source) { // eslint-disable-line no-unused-vars
	for (var index = 1, key, src; index < arguments.length; ++index) {
		src = arguments[index];

		for (key in src) {
			if (Object.prototype.hasOwnProperty.call(src, key)) {
				target[key] = src[key];
			}
		}
	}

	return target;
};
})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});