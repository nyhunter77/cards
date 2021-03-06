// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui
//= require best_in_place
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).on('ready page:load', function () {

	//$(".nav").mousedown(function() {
	$(document).on('ajax:success', '.nav', function() {
		$(this).closest(".card").fadeOut(500)
	});

	// .on('ajax:success', function() {  });

	
  		/* Activating Best In Place */
  		$(".best_in_place").best_in_place();

  		//The card is not sortable, the board is!
  		$("#board").sortable({
  			appendTo: $('#board'),
  			update: function() {  //Once sorted, call post, and serialize it in the url
  				$.post($(this).data('update-url'), 
  					$(this).sortable('serialize'));
  			}
  		});


});

