$.ajax({
  url: 'data.json',
  success: function (data) {
    var tagList = '',
      tagimgSrc,
      tagContent,
      tagName,
      tagContact,
      tagFar;
    data.tour.forEach(function (value, key) {
      tagimgSrc = value.imgs;
      tagName = value.name;
      tagContact = value.contact;
      tagFar = value.farfrom;
      tagContent = value.contents;

      tagList +=
        '<div class="information_map"><div class="information_map_wrap"><section class="slider"><div class="regular">';
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
  },
});
