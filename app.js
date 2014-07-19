
$(window).load(function() {

	var infiniteRotator = {
		init: function() 
		{
			var initialFadeIn = 1000;

			var itemInterval = 10000;

			var fadeTime = 1000;

			var numberOfItems = $('.rotating-item').length;

			var currentItem = 0;

			$('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

			var infiniteLoop = setInterval(function() {
				$('.rotating-item').eq(currentItem).fadeOut(fadeTime);

				if(currentItem === numberOfItems -1){
					currentItem = 0;
				}
				else {
					currentItem++;
				}
				$('.rotating-item').eq(currentItem).fadeIn(fadeTime);
			}, itemInterval);
		}
	};
	infiniteRotator.init();
});

