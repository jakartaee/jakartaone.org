$('#eclipsefdn-modal').on('show.bs.modal', function (event) {
	  var $init = $(event.relatedTarget);
	  var $modal = $(this);
	  $modal.find('h4.modal-title').text($init.attr('data-title'));
	  $modal.find('#modal-presenter').text($init.attr('data-presenter'));
	  $modal.find('#modal-time').text($init.attr('data-time'));
	  $modal.find('.modal-body').html($init.find('.modal-content')[0].innerHTML);
});