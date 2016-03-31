$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 20) {

            $('#steak').addClass('animated flipInX infinite');
        }

    });

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 500) {

            $('#catfish').addClass('animated jello');
        }

    });
});