$(window).on('scroll',function(){
   if(window_width > 980){
        helpers.checkScrollForParallax();
   }

   helpers.checkScrollForTransparentNavbar();

});

helpers = {
  checkScrollForTransparentNavbar: debounce(function() {
        	if($(document).scrollTop() > 960 ) {
                if(transparent) {
                    transparent = false;
                    $('nav[role="navigation"]').removeClass('navbar-transparent');
                }
            } else {
                if( !transparent ) {
                    transparent = true;
                    $('nav[role="navigation"]').addClass('navbar-transparent');
                }
            }
    }, 17),
};

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
}
