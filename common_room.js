$(function () {
  //include
  $.ajax({
    url: 'data.json',
    success: function (data) {
      var type,
        imgSrc,
        roomnum,
        tagList = '';

      data.gallery.forEach(function (value, key) {
        type = value.roomtype;
        imgSrc = value.imgSrc;
        roomnum = value.roomnumber;
        tagList = '<li><span>' + type + '동 ' + roomnum + '호' + '</span>';
        tagList += '<img src="' + imgSrc + '"/>' + '</li>';
        $('main div ul').append(tagList);
      });
    },
  });
});
