$(function () {

  var LEFT_ARROW_KEY = 37;
  var UP_ARROW_KEY = 38;
  var RIGHT_ARROW_KEY = 39;
  var ESCAPE_KEY = 27;

  $(document).on('keydown', function (event) {
    if (event.keyCode === LEFT_ARROW_KEY) {
      $('[data-previous-photo]')[0].click();
    } else if (event.keyCode === RIGHT_ARROW_KEY) {
      $('[data-next-photo]')[0].click();
    }
  });

});