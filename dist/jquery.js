 // jQuery ajax function (Menu)
 $(function() {
  $('.load-info').on('click', function() {
    $('.load-info').hide()
    $.ajax({
      method: 'GET',
      url: 'data_menu.json',
      dataType: 'json'
    }).done(function(data) {
      $.each(data.hamburgers, function(key, val) {
        $('.info-menu').append(
          '<p class="dotted">' + val.name + ' ' + '|' + ' ' + val.description + '</p>'
        );
      }) // end each
    }) // end ajax
  }) // end click event
}) // end jQuery ready