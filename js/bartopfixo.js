$(window).scroll(function() {
  if( $(this).scrollTop() > 110 ) {
    $(".bartop").addClass("bartop-fixo");
  } else {
    $(".bartop-fixo").removeClass("bartop-fixo");
    $(".bartop-fixo").addClass("bartop");
  }
});