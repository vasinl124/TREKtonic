$('a[href^="#"]').on('click', function(event) {

	// You could easily calculate this dynamically if you prefer
    var fromTop = -1;


    var target = $( $(this).attr('href') );

    if( target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - fromTop
        }, 500);
    }

});

