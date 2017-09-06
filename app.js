var mymap = L.map('mapid').setView([24.553588, -81.794391], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2FtaGFtbSIsImEiOiJjajc5NjNmbzMya2t4MzJwYTZrNWFmbjdoIn0.b8kJbQXAWTBMZEhAxpuYdw'
}).addTo(mymap);

var publixIcon = L.icon({
    iconUrl: 'publix-marker.png',
    iconSize: [25, 25], // size of the icon
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-12, -25] // point from which the popup should open relative to the iconAnchor
});

var catIcon = L.icon({
    iconUrl: 'kitteh.png',
    iconSize: [35, 35], // size of the icon
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-12, -25] // point from which the popup should open relative to the iconAnchor
});

var dogIcon = L.icon({
    iconUrl: 'dog.png',
    iconSize: [35, 35], // size of the icon
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-12, -25] // point from which the popup should open relative to the iconAnchor
});

var pieIcon = L.icon({
    iconUrl: 'pie.png',
    iconSize: [35, 35], // size of the icon
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-12, -25] // point from which the popup should open relative to the iconAnchor
});

var tigerIcon = L.icon({
    iconUrl: 'tiger.png',
    iconSize: [35, 35], // size of the icon
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-12, -25] // point from which the popup should open relative to the iconAnchor
});

const hemingway = L.marker([24.5512044, -81.8006155], { icon: catIcon }).addTo(mymap);
hemingway.bindPopup("<b>Hemiingway House</b><br>907 Whitehead").openPopup();

const banana = L.marker([24.5488161, -81.797366], { icon: pieIcon }).addTo(mymap);
banana.bindPopup("<b>Banana Cafe</b><br>1215 Duval").openPopup();

const publix1 = L.marker([24.5659704, -81.7705233], { icon: publixIcon }).addTo(mymap);
publix1.bindPopup("<b>Publix</b><br>1112 Key Plaza").openPopup();

const publix2 = L.marker([24.5694112, -81.7639057], { icon: publixIcon }).addTo(mymap);
publix2.bindPopup("<b>Publix</b><br>3316 N Roosevelt Blvd").openPopup();

const bealls = L.marker([24.563204, -81.77625]).addTo(mymap);
bealls.bindPopup("<b>Beall's Outlet</b><br>2506 N Roosevelt Blvd").openPopup();

const tiger = L.marker([24.552809, -81.7887], { icon: tigerIcon }).addTo(mymap);
tiger.bindPopup("<b>Tiger!</b><br>1300 White").openPopup();

const mallory = L.marker([24.559027, -81.807014]).addTo(mymap);
mallory.bindPopup("<b>Mallory Square</b><br>400 Wall").openPopup();

const higgs = L.marker([24.5477945, -81.7870587], { icon: dogIcon }).addTo(mymap);
higgs.bindPopup("<b>Higgs Beach Dog Park</b><br>100 Atlantic Blvd").openPopup();

const rental = L.marker([24.553588, -81.792197]).addTo(mymap);
rental.bindPopup("<b>Wendy's rental</b><br>1111 Grinnell").openPopup();


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

const popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);