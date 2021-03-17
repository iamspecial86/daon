$(function () {
  //include
  $('header').load('inc.html header h2, header nav');
  $('footer').load('inc.html footer .foot_top, footer .foot_bottom');

  $('.nav_menu-item')
    .eq(3)
    .hover(
      function () {
        $(this).find('.nav_submenu').stop().slideDown();
      },
      function () {
        $(this).find('.nav_submenu').stop().slideUp();
      }
    );

  $('.regular').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});
