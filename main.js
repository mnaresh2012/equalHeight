/*!
* NAME OF THE FILE (main.js)
* This file contains the code for the equalHeight.
* 
* @project   equalHeight
* @date      02-06-2015 
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
