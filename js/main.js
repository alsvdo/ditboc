"use strict";

var DITBOC = DITBOC || {};

DITBOC.Breadcrumb = (function (DITBOC)
{
	var stickyAt = 100,
		selected = 0,
		$navigation = $('.stickyNav'),
		navigationHeight = $navigation.height(),
		$elements = $('.stickyElm'),
		scrollPos;

	// Set first
	//$navigation.children().eq(selected).addClass('selected');

	function position()
	{
		scrollPos = $(top.window).scrollTop();

		if (scrollPos > (stickyAt - navigationHeight) )
		{
			$navigation.addClass('sticky');
		}
		else
		{
			$navigation.removeClass('sticky');
		}

		selectByPosition();
	}

	function selectByPosition()
	{
		$elements
			.each(function()
			{
				var that = $(this);

				if ( that.inView() )
				{
					that.addClass('inView');
				}
				else
				{
					that.removeClass('inView');
				}
			})

			// Remove old active state
			.removeClass('active')

			// Set active on current element
			.filter('.inView:first').addClass('active');

		// Animate active nav item
		setActiveNav( $elements.index($elements.filter('.inView:first')) );
	}

	function setActiveNav(index)
	{
		// var $current = $navigation.children().eq(index+1),
		// 	$toggler = $navigation.children().first();

		// $toggler.css({
		// 	width: $current.outerWidth(),
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
})(DITBOC);

DITBOC.start = function ()
{
	DITBOC.Breadcrumb.init();
};

// Domready
$(function()
{
	if ( !document.addEventListener )
		DITBOC.start();
	else
		document.addEventListener('deviceready', DITBOC.start(), false);
});


// Plugins
(function ($) {
	$.fn.inView = function () {
		var element = this;
		var rect = $(element).get(0).getBoundingClientRect();

		return rect.bottom >= 0 && rect.top <= $(window).height();
	};
})(jQuery);