
$(window).load(function() {
	
	var infiniteRotator = {
		init: function() 
		{
			var initialFadeIn = 1000;

			var itemInterval = 5000;

			var fadeTime = 500;

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

	/*$(function(){
    var images = ['.project-index', '.newsfeed', '.forum', '.org-profile'],
         imgIx = 0;

    (function nextImage(){
        $(images[imgIx++] || images[imgIx = 0, imgIx++]).hide().delay(100).fadeIn(1000).delay(5000).fadeOut(500, nextImage);
    })();
	});*/ 
});

