
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

$(window).on('activate.bs.scrollspy', function(e) {
  var $hash, $node;
  $hash = $("a[href^='#']", e.target).attr("href").replace(/^#/, '');
  $node = $('#' + $hash);
  if ($node.length) {
    $node.attr('id', '');
  }
  document.location.hash = $hash;
  if ($node.length) {
    return $node.attr('id', $hash);
  }
});