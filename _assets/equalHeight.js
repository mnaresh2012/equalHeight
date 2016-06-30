/*!
* NAME OF THE FILE (equalHeight.js)
* Logic for the equalHeight
* 
* @project   equalHeight
* @date      030-06-2016
* @author    mr.naresh kumar <mnaresh2010@aol.com>
* @license  MIT
*
*/

'use strict'
;(function ($) {
	$.fn.equalHeight = function () {
		var tallest = 0,
		elements = this;
		elements.each(function (index, elem) {
			var maxHeight = $(elem).outerHeight();
			if (maxHeight >= tallest) {
				tallest = maxHeight;
			}
		});
		elements.height(tallest);
		return this;
	}
}(jQuery));

