$(document).on('ready',function(){
	init();
	initialize();

});


function init(){
	$('#main_navigation').localScroll();
	$('#my_modal').popup();
}



function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(19.432628, -99.154479),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        var marcador = new google.maps.Marker({
		map: map,
		draggable: true,
		position:new google.maps.LatLng(19.432628, -99.154479),
		visible: true
		});
	
      }


  google.maps.event.addDomListener(window, 'load', initialize);
