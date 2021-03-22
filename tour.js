$(function () {
  $.ajax({
    url: 'data.json',
    success: function (data) {
      var tagList = '',
        tagimgSrc,
        tagContent,
        tagName,
        tagContact,
        tagFar,
        tagName;
      data.tour.forEach(function (value, key) {
        tagId = value.tag;
        tagimgSrc = value.imgs;
        tagName = value.name;
        tagContact = value.contact;
        tagFar = value.farfrom;
        tagContent = value.contents;

        tagList +=
          '<div class="information_map hideme" id="' +
          tagId +
          '"><div class="information_map_wrap"><section class="slider"><div class="regular">';
        tagList +=
          '<img src="' +
          tagimgSrc[0] +
          '" /> <img src="' +
          tagimgSrc[1] +
          '" /> <img src="' +
          tagimgSrc[2] +
          '" /> <img src="' +
          tagimgSrc[3] +
          ' " /></section>';

        tagList +=
          '<ul class="ttl_info"><li><h3>' +
          tagName +
          '</h3> <p>' +
          tagContact +
          '</p></li><li>' +
          tagFar +
          '</li></ul></div>';
        tagList += '<div class="ttlinfo">' + tagContent + '</div></div>';
      });
      $('.information').html(tagList);
      $('.regular').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    },
  });
  var idName, idName2, idName3, idName4, scrollObjects, scrollWindow;
  $(document).on('click', '.map_info a', function (e) {
    e.preventDefault();
    idName = $(this).attr('href');
    idName2 = $('.information').find(`#${idName}`);
    idName3 = idName2.offset().top;
    idName4 = idName2.height();
    console.log(idName4);

    $('html').animate(
      {
        scrollTop: idName3 - ($(window).height() / 2 - idName4 / 2),
      },
      400
    );
  });
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > $(window).height()) {
      $('.scroll_top_el').fadeIn();
    } else {
      $('.scroll_top_el').fadeOut();
    }

    $('.hideme').each(function (i) {
      scrollObjects = $(this).offset().top + $(this).height() / 2;
      scrollWindow = $(window).scrollTop() + $(window).height();
      console.log(scrollObjects);
      console.log(scrollWindow);
      if (scrollWindow > scrollObjects) {
        $(this).animate({ opacity: 1 }, 500);
      }
    });
  });
  $(document).on('click', '.scroll_top_el', function (e) {
    e.preventDefault();
    $('html').animate({ scrollTop: 0 }, 400);
  });
});
