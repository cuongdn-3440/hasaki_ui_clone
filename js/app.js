$(document).ready(function () {
    $('.header .container').on('click', '#header_hamburger_button', function () {
        $('#hamburger_menu').css('display', 'block')
        $('.shadow_layer').css('display', 'block')
    })

    $('#hamburger_menu').on('click', '#menu_close_arrow', function () {
        $('#hamburger_menu').css('display', 'none')
        $('.shadow_layer').css('display', 'none')
    })

    $('.shadow_layer').click(function () {
        $('#hamburger_menu').css('display', 'none')
        $('.shadow_layer').css('display', 'none')
    })
})