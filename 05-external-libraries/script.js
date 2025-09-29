$(document).ready(function () {

    $("#restofthepage").hover(function () {
        $("#caption").animate({ top: '220px' }, { duration: 500, easing: 'swing' });
    });

    $(window).on("scroll", function () {
        let i = 10;
        $(".review").each(function () {
            const topOfElement = $(this).offset().top;
            const bottomOfWindow = $(window).scrollTop() + $(window).height();

            if (bottomOfWindow > topOfElement + 50 && $(this).css("opacity") == 0) {
                $(this).animate({ opacity: 1, left: i + "%" }, 800, "swing");
            }
            i += 5;
        });

    })


});