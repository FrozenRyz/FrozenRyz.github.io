$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
    $spinner   = $preloader.find('.spin');
    $spinner.delay(100).fadeOut('slow');
    $preloader.delay(450).fadeOut('slow');
});