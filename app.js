var mymap = L.map('mapid').setView([24.553588, -81.794391], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2FtaGFtbSIsImEiOiJjajc5NjNmbzMya2t4MzJwYTZrNWFmbjdoIn0.b8kJbQXAWTBMZEhAxpuYdw'
}).addTo(mymap);

var rental = L.marker([24.553588, -81.794391]).addTo(mymap);
rental.bindPopup("<b>Wendy's rental</b><br>1111 Grinnell").openPopup();

var hemingway = L.marker([24.5512044, -81.8028042]).addTo(mymap);
hemingway.bindPopup("<b>Hemiingway House</b><br>1111 Grinnell").openPopup();

var banana = L.marker([24.5488161, -81.79956]).addTo(mymap);
banana.bindPopup("<b>Banana Cafe</b><br>1215 Duval").openPopup();

var publix1 = L.marker([24.5676908, -81.7694085]).addTo(mymap);
publix1.bindPopup("<b>Publix</b><br>1112 Key Plaza").openPopup();

var publix2 = L.marker([24.5694112, -81.7660997]).addTo(mymap);
publix2.bindPopup("<b>Publix</b><br>3316 N Roosevelt Blvd").openPopup();

var bealls = L.marker([24.5626343, -81.777672]).addTo(mymap);
bealls.bindPopup("<b>Beall's Outlet</b><br>2506 N Roosevelt Blvd").openPopup();

var tiger = L.marker([24.5526508, -81.7916624]).addTo(mymap);
tiger.bindPopup("<b>Tiger!</b><br>1300 White").openPopup();

var mallory = L.marker([24.5594225, -81.8096326]).addTo(mymap);
mallory.bindPopup("<b>Mallory Square</b><br>400 Wall").openPopup();

var higgs = L.marker([24.5494199, -81.7821]).addTo(mymap);
higgs.bindPopup("<b>Higgs Beach Dog Park</b><br>100 Atlantic Blvd").openPopup();


// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);

// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);