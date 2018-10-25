$(document).ready(function() {
    $('.modal').css('top', '-50%');
    $('a:contains("расписания туров")').on('click', function(e) {
        e.preventDefault();
        $('.overlay').animate({opacity: 'toggle'}, 3000);
        $('.modal').animate({opacity: 'toggle', top: '20%'}, 3000);
    });
    $('.main_btna').on('click', function(e) {
        e.preventDefault();
        $('.overlay').animate({opacity: 'toggle'}, 3000);
        $('.modal').animate({opacity: 'toggle', top: '20%'}, 3000);
    });
    $('.main_btn').on('click', function(e) {
        e.preventDefault();
        $('.overlay').animate({opacity: 'toggle'}, 3000);
        $('.modal').animate({top: '50px'}, 3000);
    });
    $('.close').on('click', function() {
        $('.overlay').animate({opacity: 'toggle'}, 3000);
        $('.modal').animate({opacity: 'toggle', top: '-50%'}, 3000);
    });

    $('#formx').on('submit', function() {
        let formData = $('#formx').serializeArray();
        $.ajax({
            type: 'POST',
            url: 'server.php',
            data: formData,
            success: function(data) {
              alert('Данные' + data + ' успешно отправлены!');
              $('.overlay').animate({opacity: 'toggle'}, 3000);
              $('.modal').animate({opacity: 'toggle', top: '-50%'}, 3000);
            },
            error:  function(xhr, str){
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
          });
    });
});
