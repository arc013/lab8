/**
 * Created by arnoldchen on 2/25/16.
 */
function initMap() {
    // Create center marker at UCSD
    var ucsd_ltlng = {lat:32.880, lng:-117.236};
    var cicc= {lat:32.88501116, lng:-117.24133551};


    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: cicc,
        zoom: 17
    });

    var marker = new google.maps.Marker({
        position: cicc,
        map: map,
        title: 'UCSD'
    });


    map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);
    });


}
function placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    map.panTo(latLng);
}