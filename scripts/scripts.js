$("#menu-button").click(function() {
  $("header").slideToggle();
});
$(window).scroll(function() {
  if ($(this).scrollTop() > 325) {
    $("header").slideUp();
  } else {
    $("header").slideDown();
  }
});
