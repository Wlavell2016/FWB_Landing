console.log(data3)

var map = L.map('map', {
        zoomSnap: 0.10,
        duration: 0.5,
        zoomControl: false
        });
map.setView([49.8062891, -84.1434475], 5.45);

 // L.tileLayer(' https://api.mapbox.com/styles/v1/lavellgis/cjdk7huor5ia52sobkizesrgf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF2ZWxsZ2lzIiwiYSI6ImNpeDZ3YnFvbzAxNHgyeXF5NDVob3VvanEifQ.2_vKfp2QtZlz70-C1Kkphw',{
 L.tileLayer('https://api.mapbox.com/styles/v1/lavellgis/cjdk7sipm3cez2rmk5v5tipfx/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF2ZWxsZ2lzIiwiYSI6ImNpeDZ3YnFvbzAxNHgyeXF5NDVob3VvanEifQ.2_vKfp2QtZlz70-C1Kkphw',{

    zoomSnap: 0.10,
    maxZoom: 18,
    // layers: [communities],
    attribution: 'Map data &copy; OpenStreetMap contributors'
}).addTo(map);


L.control.zoom({
     position:'bottomright'
}).addTo(map);


//******************************************************************************
/* general variables for the map*/
var checkclick = false;


//******************************************************************************
/* styles for the markers*/
var union = {
    name: "Union of Ontario Indians",
    fillColor: 'rgb(136, 14, 79)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}


var allied = {
    name: "Association of Iroquois and Allied Indians",
    fillColor: 'rgb(230, 81, 0)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var rama = {
    name: "Chippewas of Rama First Nation",
    fillColor: 'rgb(129, 119, 23)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var treaty3 = {
    name: "Grand Council Treaty #3",
    fillColor: 'rgb(85, 139, 47)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var independant = {
    name: "Independent First Nations",
    fillColor: 'rgb(1, 87, 155)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var metis = {
    name: "Metis Nation of Ontario",
    fillColor: 'rgb(26, 35, 126)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var sauga = {
    name: "Mississaugas of the New Credit First Nation",
    fillColor: 'rgb(194, 24, 21)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var mohawk = {
    name: " Mohawk Council of Akwesasne",
    fillColor: 'rgb(255, 234, 0)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var aski = {
    name: "Nishnawbe Aski Nation",
    fillColor: 'rgb(175, 180, 43)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var friendship = {
    name: "Ontario Federation of Indigenous Friendship Centres",
    fillColor: 'rgb(15, 157, 88)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var onwa = {
    name: " Ontario Native Women's Association",
    fillColor: 'rgb(2, 136, 209)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}


var inuit = {
    name: "Ottawa Inuit Children's Centre",
    fillColor: 'rgb(57, 73, 171)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var six = {
    name: "Six Nations of the Grand River",
    fillColor: 'rgb(85, 139, 47)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var tung_inuit = {
    name: "Tungasuvvingat Inuit",
    fillColor: 'rgb(189, 189, 189)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}


//******************************************************************************
var Union = L.layerGroup().addTo(map);

var Allied = L.layerGroup().addTo(map);
var Rama = L.layerGroup().addTo(map);
var Treaty3 = L.layerGroup().addTo(map);
var Independent = L.layerGroup().addTo(map);
var Metis = L.layerGroup().addTo(map);
var Sauga = L.layerGroup().addTo(map);
var Mohawk = L.layerGroup().addTo(map);
var Aski = L.layerGroup().addTo(map);
var Friendship = L.layerGroup().addTo(map);
var Onwa = L.layerGroup().addTo(map);
var Inuit = L.layerGroup().addTo(map);
var Six = L.layerGroup().addTo(map);
var Tung_inuit = L.layerGroup().addTo(map);



//******************************************************************************
// function onEachFeature(feature, layer) {
//     // does this feature have a property named popupContent?
//     if (feature.properties.partnerID === 1) {
//         feature.properties.color = '#4286f4'
//         console.log('test')
//     }else {
//         feature.properties.color = '#4286f4'
//         layer.bindPopup(feature.properties.Name);
//     }
// }
//
// var fwblayer = L.geoJSON(data2, {
//     pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng);
//     },
//     onEachFeature: onEachFeature
//     style: function(feature) {
//         return {color: feature.properties.color };
//     },
// });
//
// map.addLayer(fwblayer);


// make array to story color values
var color = [union, allied, rama, treaty3, independant, metis, sauga, mohawk ,aski ,friendship, onwa, inuit, six, tung_inuit]



var legend = L.control({position: 'topright'});

legend.onAdd = function (map) {
    	var div = L.DomUtil.create('div', 'info legend');

    	// loop through the status values and generate a label with a coloured square for each value
color.forEach(function(item){
    console.log(item.color)
    		div.innerHTML +=
    			// <i class="circle" style="background:" +  + item.color + ></i>  + (item.radius ? item.radius + '<br>' : '+');
                `<i class="circle" style="background:${item.fillColor}"></i> ${item.name} <br>`
    	})
    	return div;
    }
    // legend.addTo(map);

    //     marker = new L.Marker(new L.latLng(loc), {title: title} );//se property searched
    // marker.bindPopup('title: '+ title );
    // markersLayer.addLayer(circle);

 var communities = {
   'Union of Ontario Indians': Union,
   'Association of Iroquois and Allied Indians': Allied,
   'Rama First Nation': Rama,
   'Grand Council Treaty #3': Treaty3,
   'Independent First Nations': Independent,
   'Metis Nation of Ontario': Metis,
   'Mississaugas of the New Credit First Nation': Sauga,
   'Mohawk Council of Akwasasne': Mohawk,
   'Nishnawbe Aski Nation': Aski,
   'Ontario Federation of Indigenous Friendship Centres': Friendship,
   'Ontario Native Women\'s Association': Onwa,
   'Ottawa Inuit Children\'s Centre': Inuit,
   'Six Nations Of the Grand River': Six,
   'Tungasuvvingat Inuit': Tung_inuit,
   // 'All': parent
 };


L.control.layers(communities).addTo(map);

// readData(data2);
var sidebar = L.control.sidebar('sidebar').addTo(map);

 // ***************************************************************************//
// working loading of data
var fwblayer = L.geoJSON(data3, {
    pointToLayer: function(feature, latlng) {

        if (feature.properties.PartnerID === 1) {
            // var circle = L.marker(latlng, {icon: greenIcon});

            var circle = L.circleMarker(latlng,  union);
            Union.addLayer(circle).addTo(map);
        } else if (feature.properties.PartnerID === 2) {
            var circle = L.circleMarker(latlng,  allied);
            Allied.addLayer(circle).addTo(map);

        } else if (feature.properties.PartnerID === 3) {
            var circle = L.circleMarker(latlng, rama);
            Rama.addLayer(circle).addTo(map);
            // feature.layer = Rama;

        } else if (feature.properties.PartnerID === 4) {
            var circle = L.circleMarker(latlng, treaty3);
            Treaty3.addLayer(circle).addTo(map);
            // feature.layer = Treaty3;
        } else if (feature.properties.PartnerID === 5) {
            var circle = L.circleMarker(latlng, independant);
            Independent.addLayer(circle).addTo(map);
            // feature.layer = Independent;

        } else if (feature.properties.PartnerID === 6) {
            var circle = L.circleMarker(latlng, metis);
            Metis.addLayer(circle).addTo(map);
            // feature.layer = Metis;

        } else if (feature.properties.PartnerID === 7) {
            var circle = L.circleMarker(latlng, sauga);
            Sauga.addLayer(circle).addTo(map);
            // feature.layer = Sauga;

        } else if (feature.properties.PartnerID === 8) {
            var circle = L.circleMarker(latlng, mohawk);
            Mohawk.addLayer(circle).addTo(map);
            // feature.layer = Mohawk;

        } else if (feature.properties.PartnerID === 9) {
            var circle = L.circleMarker(latlng, aski);
            Aski.addLayer(circle).addTo(map);
            // feature.layer = Aski;

        } else if (feature.properties.PartnerID === 10) {
            var circle = L.circleMarker(latlng, friendship);
            Friendship.addLayer(circle).addTo(map);
            // feature.layer = Friendship;

        } else if (feature.properties.PartnerID === 11) {
            var circle = L.circleMarker(latlng, onwa);
            Onwa.addLayer(circle).addTo(map);
            // feature.layer = Onwa;

        } else if (feature.properties.PartnerID === 12) {
            var circle = L.circleMarker(latlng, inuit);
            Inuit.addLayer(circle).addTo(map);
            // feature.layer = Inuit;

        } else if (feature.properties.PartnerID === 13) {
            var circle = L.circleMarker(latlng, six);
            Six.addLayer(circle).addTo(map);
            // feature.layer = Six;

        } else if (feature.properties.PartnerID === 14) {
            var circle = L.circleMarker(latlng, tung_inuit);
            Tung_inuit.addLayer(circle).addTo(map);

        } else {
            circle = L.circleMarker(latlng);
        }
            circle.on('click', function() {
                // console.log(marker.title)
                map.flyTo(latlng, 10)
                // $('#data .sidebar-header').text(feature.properties.Partner)
                $('#data .website').text(feature.properties.Website)
                $('#data .email').text(feature.properties.Email)
                $('#data .contact').text(feature.properties.Contact)
                $('#data .phone').text(feature.properties.Phone)
                $('#data .description_text').text(feature.properties.Description)
                if (checkclick === false) {
                    sidebar.open('#sidebar');
                    $('#data').addClass('active');
                    checkclick = true;
                } else {
                    sidebar.close('#sidebar');
                    checkclick = false;
                }
            })
            return circle.bindPopup(feature.properties.Name)
    },
    onEachFeature: function (feature, layer) {
       feature.layer = layer;
}
});
map.addLayer(fwblayer);


//  ***************************************************************************//


    var searchCtrl = L.control.fuseSearch()
    searchCtrl.addTo(map);

    searchCtrl.indexFeatures(data3, ['Name', 'Partner']);
	////////////populate map with markers from sample data
	// for(i in data) {
	// 	var title = data[i].title,	//value searched
	// 		loc = data[i].loc,		//position found
	// 		marker = new L.Marker(new L.latLng(loc), {title: title} );//se property searched
	// 	marker.bindPopup('title: '+ title );
	// 	markersLayer.addLayer(marker);
	// }










   //*****************************//
   // add clustered markers with layer control //



   // control.addOverlay(parent, 'Parent');
   // control.addOverlay(Union, 'Union');
   // control.addOverlay(Allied, 'Allied');
   // control.addOverlay(Treaty3, 'Treaty3');
   // control.addOverlay(Independent, 'Independent');
   // control.addOverlay(Metis, 'Metis');
   // control.addOverlay(Sauga, 'Sauga');
   // control.addOverlay(Mohawk, 'Mohawk');
   // control.addOverlay(Aski, 'Aski');
   // control.addOverlay(Friendship, 'Friendship');
   // control.addOverlay(Onwa, 'Onwa');
   // control.addOverlay(Inuit, 'Inuit');
   // control.addOverlay(Six, 'Six Nations');
   // control.addOverlay(Tung_inuit, 'Tungasuvvingat Inuit ');

   // var parent = L.markerClusterGroup(),
   //  Union = L.featureGroup.subGroup(parent),
   //  Allied = L.featureGroup.subGroup(parent),
   //  Rama = L.featureGroup.subGroup(parent),
   //  Treaty3 = L.featureGroup.subGroup(parent),
   //  Independent = L.featureGroup.subGroup(parent),
   //  Metis = L.featureGroup.subGroup(parent),
   //  Sauga = L.featureGroup.subGroup(parent),
   //  Mohawk = L.featureGroup.subGroup(parent),
   //  Aski = L.featureGroup.subGroup(parent),
   //  Friendship = L.featureGroup.subGroup(parent),
   //  Onwa = L.featureGroup.subGroup(parent),
   //  Inuit = L.featureGroup.subGroup(parent),
   //  Six = L.featureGroup.subGroup(parent),
   //  Tung_inuit = L.featureGroup.subGroup(parent),
   //  control = L.control.layers(null, null, { collapsed: false });
   // parent.addTo(map);
   // control.addTo(map);

   //*****************************//
