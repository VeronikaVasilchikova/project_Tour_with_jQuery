$(document).ready(function(){

    function animateIn() {
        $('.overlay').fadeIn(1200);
        $('.modal').slideDown(1200);
    }

    $('li:nth-child(2)').on('click', animateIn);

    $('.main_btna').on('click', animateIn);

    $('.main_btn').on('click', animateIn);

    $('.close').on('click', function() {
        $('.overlay').fadeOut(1200);
        $('.modal').slideUp(1200);
    });
});