var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

function initialize_gmaps() {
	// var fidi = { lat: 40.705189, lng: -74.009209 };
    var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
    // set the map options hash
    var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var styles = [
      {
        stylers: [
          { hue: "#add8e6" },
          { saturation: -30 }
        ]
      },{
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 100 },
          { visibility: "simplified" }
        ]
      },{
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("map");
    // initialize a new Google Map with the options
    var map = new google.maps.Map(map_canvas_obj, mapOptions);
    // Add the marker to the map

 	 google.maps.event.addListener(map, 'click', function(event) {
 	   addMarker(event.latLng, map);
 	 });

 	 addMarker(myLatlng, map);
   map.setOptions({styles: styles});
}

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map
  });
}



// $(document).ready(function() {
// 	initialize_gmaps();
// });

google.maps.event.addDomListener(window, 'load', initialize_gmaps);
