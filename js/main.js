"use strict";

var DITBOC = DITBOC || {};

DITBOC.Panel = (function (DITBOC)
{
	var test = 111;

	return {
		init: function()
		{
			// Do something
		}
	};
})(DITBOC);

DITBOC.start = function ()
{
	DITBOC.Panel.init();
};

// Domready
$(function()
{
	if ( !document.addEventListener )
		DITBOC.start();
	else
		document.addEventListener('deviceready', DITBOC.start(), false);
});