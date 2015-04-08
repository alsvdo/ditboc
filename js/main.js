"use strict";

var DITBOC = DITBOC || {};

DITBOC.Breadcrumb = (function (DITBOC)
{
	var stickyAt = 100,
		selected = 0,
		$navigation = $('.stickyNav'),
		$elements = $('.stickyElm');

	// Set first
	$navigation.children().eq(selected).addClass('selected');

	function position()
	{
		var scrollPos = $(top.window).scrollTop();

		if (scrollPos > stickyAt)
		{
			$navigation.addClass('sticky');
		}
		else
		{
			$navigation.removeClass('sticky');
		}

		//selectByPos();
	}

	function selectByPos()
	{
		$elements.each(function()
		{
			var that = $(this);

			if ( that.inView() )
			{ 
				// Quick check - is top or bottom of section in viewport
				var sectionDockBottomPos = scrollPos + sectionTopMinHeight + sectionBarHeight
					thatOffsetTop = that.offset().top,
					thatHeight = that.height();

				if (thatOffsetTop < sectionDockBottomPos && thatOffsetTop + thatHeight > sectionDockBottomPos)
				{
					// Is bottom of sectiondock between top and bottom of this section
					var relTab = arrTabs.filter("[href$='##" + that.attr("id") + "']").eq(0);
					if (relTab.length)
					{
						selectTab(relTab);
						sectionSelected = true;
					}

					return false;
				}
			}
		});

		if (!sectionSelected)
		{
			if (scrollPos > firstSectionOffsetTop)
			{
				// If we have scrolled past all sections
				objTabSelector.hide();
			}
			else
			{
				selectTab(arrTabs.eq(0));
			}
		}
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