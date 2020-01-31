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

$('#eclipsefdn-modal').on('shown.bs.modal', function (event) {
	  var $init = $(event.relatedTarget) // Button that triggered the modal
	  var $modal = $(this);
	  console.log('bing!')
	  $modal.find('.modal-title').text($init.attr('data-title'));
	  $modal.find('.modal-body').innerHTML($init.find('.modal-content').innerHTML());
	  console.log($init.attr('data-title'))
	  console.log($init.find('.modal-content'))
	  
});