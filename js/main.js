// "use strict";

// var DITBOC = DITBOC || {};

ditboc.breadcrumb = (function (ditboc)
{
	var stickyat = 100,
		selected = 0,
		$navigation = $('.stickynav'),
		navigationheight = $navigation.height(),
		$elements = $('.stickyelm'),
		scrollpos;

	// set first
	//$navigation.children().eq(selected).addclass('selected');

	function position()
	{
		scrollpos = $(top.window).scrolltop();

		if (scrollpos > (stickyat - navigationheight) )
		{
			$navigation.addclass('sticky');
		}
		else
		{
			$navigation.removeclass('sticky');
		}

		selectbyposition();
	}

	function selectbyposition()
	{
		$elements
			.each(function()
			{
				var that = $(this);

				if ( that.inview() )
				{
					that.addclass('inview');
				}
				else
				{
					that.removeclass('inview');
				}
			})

			// remove old active state
			.removeclass('active')

			// set active on current element
			.filter('.inview:first').addclass('active');

		// animate active nav item
		setactivenav( $elements.index($elements.filter('.inview:first')) );
	}

	function setactivenav(index)
	{
		// var $current = $navigation.children().eq(index+1),
		// 	$toggler = $navigation.children().first();

		// $toggler.css({
		// 	width: $current.outerwidth(),
		// 	left: function() {
		// 		$current
		// 		return '20px';
		// 	}
		// });
	}

	return {
		init: function()
		{
			$(top.window).scroll(function ()
			{
				position();
			});
		}
	};
})(ditboc);

ditboc.start = function ()
{
	ditboc.breadcrumb.init();
};

// domready
$(function()
{
	if ( !document.addeventlistener )
		ditboc.start();
	else
		document.addeventlistener('deviceready', ditboc.start(), false);
});


// plugins
(function ($) {
	$.fn.inview = function () {
		var element = this;
		var rect = $(element).get(0).getboundingclientrect();

		return rect.bottom >= 0 && rect.top <= $(window).height();
	};
})(jquery);