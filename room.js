$(function () {
  //include
  $.ajax({
    url: 'data.json',
    success: function (data) {
      var type,
        imgSrc,
        roomnum,
        tagSrc,
        tagList = '';

      data.gallery.forEach(function (value, key) {
        type = value.roomtype;
        imgSrc = value.imgSrc;
        roomnum = value.roomnumber;
        tagSrc = value.tag;
        tagList = '<li><span>' + type + '동 ' + roomnum + '호' + '</span>';
        tagList +=
          '<img src="' +
          imgSrc +
          '"/>' +
          '<a href="' +
          tagSrc +
          '"><i class="fas fa-search"></i></a></li>';
        $('.rooms').append(tagList);
      });
      var idTag,
        titleName,
        infoImg,
        infoEng,
        infoKor,
        amenitiesImg,
        checkinEng,
        checkoutEng,
        checkinfoEng,
        checkinKor,
        checkoutKor,
        checkinfoKor,
        notice,
        popupList = '';

      data.roominfo.forEach(function (value, key) {
        idTag = value.idTag;
        titleName = value.name;
        infoImg = value.imgs;
        infoEng = value.infoEng;
        infoKor = value.infoKor;
        amenitiesImg = value.amenitiesImg;
        checkinEng = value.checkinEng;
        checkoutEng = value.checkoutEng;
        checkinfoEng = value.checkinfoEng;
        checkinKor = value.checkinKor;
        checkoutKor = value.checkoutKor;
        checkinfoKor = value.checkinfoKor;
        notice = value.notice;
        console.log(infoImg);
        popupList +=
          '<div class="roominfo" id="' + idTag + '"><ul class="popup">';
        popupList +=
          '<li class="popup_json"><div class="close_wrapper"><a href="#"><i class="fas fa-times"></i></a></div>';
        popupList +=
          '<div class="popup_json_title"><span>Room Info</span><span>' +
          titleName +
          '</span></div>';
        popupList +=
          '<div class="popup_all_wrapper"><div = class="slider_wrapper"><section class="slider"><div class="regular">';
        popupList +=
          '<img src="' +
          infoImg[0] +
          '" /><img src="' +
          infoImg[1] +
          '" /><img src="' +
          infoImg[2] +
          '" /></section></div>';
        popupList +=
          '<div class="popup_all_not_slider_wrapper"><div class="properties"><span>PROPERTIES</span>';
        popupList +=
          '<ul><li>' + infoEng + '</li><li>' + infoKor + '</li></ul></div>';
        popupList +=
          '<div class="amenities"><span>COMMON AMENITIES</span><figure><img src="' +
          amenitiesImg +
          '" alt=""></figure></div>';
        popupList += '<div class="checkin"><span>CHECK IN & OUT</span><ul><li>';
        popupList +=
          '<span>' +
          checkinEng +
          '</span><span>' +
          checkoutEng +
          '</span><p>' +
          checkinfoEng +
          '</p></li>';
        popupList +=
          '<li><span>' +
          checkinKor +
          '</span><span>' +
          checkoutKor +
          '</span><p>' +
          checkinfoKor +
          '</p></li></ul></div>';
        popupList +=
          '<div class="noticeinfo"><span>NOTICE</span><ul><li><button>VIEW NOTICE</button></li>';
        popupList +=
          '<li>' + notice + '</li></ul></div></div></div></li></ul></div>';
      });
      $('.calldata').html(popupList);
      $('.regular').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      });
    },
  });
  var idName;
  $(document).on('click', '.rooms a', function (e) {
    e.preventDefault();
    idName = $(this).attr('href');
    $(`#${idName}`).addClass('active');
  });
  $(document).on('click', '.close_wrapper a', function () {
    $('.roominfo').removeClass('active');
  });
});
