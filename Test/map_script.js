// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see a blank space instead of the map, this
// is probably because you have denied permission for location sharing.

var map;
var lat;
var long;
function initialize() {
  var mapOptions = {
    zoom: 10
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      
     map.setCenter(pos);
    lat = position.coords.latitude;
    long = position.coords.longitude;
    // Add in the circle code here-- radius around user
    var populationOptions = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: pos,
      radius: 8046.72 //5 miles in meters
    };
    // Add the circle for this city to the map.
    cityCircle = new google.maps.Circle(populationOptions);

    //Add marker 
      var contentString =
      '<p><img src= http://images.travelpod.com/tw_slides/ta00/9df/88e/siebel-center-for-computer-science-catlin.jpg></p>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

	//START MARKER ----------------------------------
  var marker = new google.maps.Marker({
      position: pos,
      map: map,
      title: 'Uluru (Ayers Rock)'
  });      
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  
  //end marker -----------------------------------------
	//LOAD PHP ------------------------------
	myFunction();
    }, function() {
      handleNoGeolocation(true);
    });

    
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
  
}
  

google.maps.event.addDomListener(window, 'load', initialize);

//google.maps.event.trigger(map, 'resize')
 