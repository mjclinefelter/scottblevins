$(document).ready(function() {
  $(".filter-button").click(function() {
      $(".filter-button").removeClass("active-tab");
      $(this).addClass("active-tab");


    var filterVal = $(this).attr("id");
    console.log(filterVal)

    if(filterVal == 'filter-all') {
      $('.filter').fadeIn('slow').removeClass('hidden');
    } else {
      $('.filter').each(function() {
        if(!$(this).hasClass(filterVal)) {
          $(this).fadeOut('normal').addClass('hidden');
        } else {
          $(this).fadeIn('slow').removeClass('hidden');
        }
      });
    }

    return false;
  });
});

var s = skrollr.init();
