$(document).ready(function () {
    // initialize the Owl carousel
    $("#slider").owlCarousel({
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            601: {
                items: 3
            },
            1000: {
                items: 4
            }
        },
        pagination: true,
        responsiveRefreshRate: 100
    });
});