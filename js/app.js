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

    $('#slide_navigator').on('click', '#slide_arrow_right', function () {
        let leftPosition = $('#slides').css('left')
        let lastIndex = $('#slides').css('left').length - 2
        let leftPositionNumber = leftPosition.substring(0, lastIndex)
        const bannerWidth = 640
        if (leftPositionNumber % bannerWidth != 0) {
            return
        }
        let currentSlide = leftPositionNumber / -bannerWidth
        let nextSlidePosition = (currentSlide + 1) * (-bannerWidth)
        if (Math.abs(nextSlidePosition) >= bannerWidth*5) {
            $('#slides').css('left', '0px')
            return
        }
        $('#slides').css('left', nextSlidePosition + 'px')
    })

    $('#slide_navigator').on('click', '#slide_arrow_left', function () {
        let leftPosition = $('#slides').css('left')
        let lastIndex = $('#slides').css('left').length - 2
        let leftPositionNumber = leftPosition.substring(0, lastIndex)
        const bannerWidth = 640
        if (leftPositionNumber % bannerWidth != 0) {
            return
        }
        let currentSlide = leftPositionNumber / -bannerWidth + 1
        let nextSlidePosition = (currentSlide - 2) * (-bannerWidth)
        if (nextSlidePosition > 0) {
            $('#slides').css('left', -bannerWidth*4 + 'px')
            return
        }
        $('#slides').css('left', nextSlidePosition + 'px')
    })
})
