'use strict'

$(document).ready(function () {

    var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
    $containers.scrollAnimations();

    function scrollTo(element, anchor) {
        $(element).click(function () {
            var destination = $(anchor).offset().top-75;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
            return false;
        });
    }

});