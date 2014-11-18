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

//Add markers content window ----------------
      var contentString =
      '<p>Your Current Location</p>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
//End marker content window ----------------

//START YOUR LOCATION MARKER ----------------------------------
  var marker = new google.maps.Marker({
      position: pos,
      map: map,
      title: 'Your Location'
  });      
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  
//END MARKER -----------------------------------------

//LOAD PHP ------------------------------
	//alert(currentUser['FBID']);
	myFunction(currentUser['FBID']);
//END LOAD PHP --------------------------
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
  

//google.maps.event.addDomListener(window, 'load', initialize);

//google.maps.event.trigger(map, 'resize')
 
 
// INTERACT WITH PHP --------------------------------------------------------------------------------------------------------------------------------------
	function myFunction(FBID) {
	//alert(FBID);

	var data = [lat,long,FBID];
	xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			var response = xmlhttp.responseText;
			var responseArr = response.split(",");
			//alert(response);
			for(i=0; i< responseArr.length-1; i++){
				responseArr[i] = responseArr[i].split(" ");
				var contentString = "<img src="+ responseArr[i][0] +" width='50%' height='50%'>";
				makeMarker(responseArr[i][1],responseArr[i][2], contentString);

			}
			//document.getElementById("txtHint").innerHTML=responseArr[0][1];

			//var contentString = "<img src="+ imageurlArr[0] +">";
			//contentString +="<img src="+ imageurlArr[0] +">";
		}
	}
	xmlhttp.open("GET","test_map.php?q="+data,true);
	xmlhttp.send();
	}  	
	
	function makeMarker(lat, long, contentString){
		lat = parseFloat(lat);
		long = parseFloat(long);
		//lat+=(5/69)
	      	var pos = new google.maps.LatLng(lat,
	       long);
		var marker = new google.maps.Marker({
		position: pos,
		map: map,
		title: 'PIC'
		});
		
		var infowindow = new google.maps.InfoWindow({
		content: contentString
		}); 
		     
		google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
		});
	
	}
 //END PHP INTERACTION ------------------------------------------------------------------------------------------------------------------------------
 
 
 
function initializeOnSubmit(city_name) {
 
//LOAD PHP ------------------------------
    //alert(currentUser['FBID']);
    myFunctionOnSubmit(currentUser['FBID'], city_name);
//END LOAD PHP --------------------------
 
}


function myFunctionOnSubmit(FBID, city_name) {
//alert(FBID);

var data = [city_name, FBID];
xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		var markers = {};
		var response = xmlhttp.responseText;
		var responseArr = response.split(",");
		responseArr[0] = responseArr[0].split("^");
	   //INITIALIZE NEW MAP ON REQUESTED CITY AFTER READY STATE CHANGED
		  var mapOptions = {
		    zoom: 10
		  };
	  	map = new google.maps.Map(document.getElementById('map-canvas'),
	     	 mapOptions);
	      
	    lat = responseArr[0][1];
	    long = responseArr[0][2];
	    var pos = new google.maps.LatLng(lat,long);      
	    map.setCenter(pos);
	    //END INITIALIZE NEW MAP
	    var contentString = "<img src="+ responseArr[0][0] +" width='50%' height='50%'>";
	    markers[responseArr[0][1] +" "+ responseArr[0][2]] += contentString;
	    makeMarker(responseArr[0][1],responseArr[0][2], contentString);	  
	  
		for(i=1; i< responseArr.length-1; i++){
			responseArr[i] = responseArr[i].split("^");

			var contentString = "<img src="+ responseArr[i][0] +" width='50%' height='50%'>";
			markers[responseArr[i][1] +" "+ responseArr[i][2]] += contentString;
			//makeMarker(responseArr[i][1],responseArr[i][2], contentString);
		}
		for(var keys in markers)
		{
			markers[keys] = markers[keys].replace("undefined", "");
			var latLong = keys.split(" ");
			makeMarker(latLong[0],latLong[1], markers[keys]);	
		}
		alert(markers[responseArr[0][1] +" "+ responseArr[0][2]]);
		
	}
}
xmlhttp.open("GET","update.php?q="+data,true);
xmlhttp.send();
} 