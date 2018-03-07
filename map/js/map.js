console.log(data3)

var map = L.map('map', {
        zoomSnap: 0.10,
        duration: 0.5,
        zoomControl: false
        });
// map.setView([48.533671, -80.464389], 5.45);
// map.setView([47.797477, -81.525733], 5.45);

if (window.matchMedia("(min-width: 992px)").matches) {
    map.setView([47.95737078926579, -85.29625075948509], 5.65)

} else if(window.matchMedia("(min-width: 768px)").matches) {
    map.setView([49.96476820929739, -85.21924120780686], 5.5)

} else if (window.matchMedia("(min-width: 300px)").matches) {
    map.setView([49.014845091628885, -84.8537125219008], 4.6)
} else {
console.log ('ok')
}
// map.setView([49.199941, -82.764132], 5.45);

// Cochrane District
// Ontario, Canada
// 49.199941, -82.764132
// } else if (window.matchMedia("(min-width: px)").matches) {
//     map.setView([47.992676, -84.775135], 5.45);
// } else (window.matchMedia("(min-width: px)").matches) {
//     map.setView([47.992676, -84.775135], 5.45);
// }




 // L.tileLayer(' https://api.mapbox.com/styles/v1/lavellgis/cjdk7huor5ia52sobkizesrgf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF2ZWxsZ2lzIiwiYSI6ImNpeDZ3YnFvbzAxNHgyeXF5NDVob3VvanEifQ.2_vKfp2QtZlz70-C1Kkphw',{
 L.tileLayer('https://api.mapbox.com/styles/v1/lavellgis/cjdk7sipm3cez2rmk5v5tipfx/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF2ZWxsZ2lzIiwiYSI6ImNpeDZ3YnFvbzAxNHgyeXF5NDVob3VvanEifQ.2_vKfp2QtZlz70-C1Kkphw',{

    zoomSnap: 0.10,
    maxZoom: 18,
    // layers: [communities],
    attribution: 'Map data &copy; OpenStreetMap contributors'
}).addTo(map);

map.on('click',function() {
    var center = map.getCenter()
    console.log(center)
});


L.control.zoom({
     position:'bottomright'
}).addTo(map);


//******************************************************************************
/* general variables for the map*/
var checkclick = false;

//******************************************************************************
/* styles for the markers*/
var union = {
    iconSize:[16,16],
    iconShape:'circle-dot',
    backgroundColor:'rgb(136, 14, 79)',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: 'Union of Ontario Indians'
}

var allied = {
    iconSize:[16,16],
    iconShape:'circle-dot',
    backgroundColor:'rgb(230, 81, 0)',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: 'Association  of Iroquois and Allied Indians'
}

var rama = {
    iconSize:[16,16],
    iconShape:'circle-dot',
    backgroundColor:'rgb(129, 119, 23)',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: 'Chippewas of Rama First Nation'
}

var treaty3 = {
    iconSize:[16,16],
    iconShape:'circle-dot',
    backgroundColor:'rgb(85, 139, 47)',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: 'Grand Council Treaty #3'
}

var independant = {
    iconSize:[16,16],
    iconShape:'circle-dot',
    backgroundColor:'rgb(1, 87, 155)',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: 'Independent First Nations'
}

var metis = {
    iconSize:[16,16],
    iconShape:'circle-dot',
    backgroundColor:'rgb(26, 35, 126)',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: "Metis Nation of Ontario"
}

var sauga = {
    iconSize:[16,16],
    iconShape:'circle-dot',
    backgroundColor:'rgb(194, 24, 21)',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: "Mississaugas of the New Credit First Nation"
}

var mohawk = {
    iconSize:[16,16],
    iconShape:'circle-dot',
    backgroundColor:'rgb(255, 234, 0)',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: "Mohawk Council of Akwesasne"
}

var aski = {
    iconSize:[16,16],
    iconShape:'circle-dot',
    backgroundColor:'rgb(175, 180, 43)',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: "Nishnawbe Aski Nation"
}

var friendship = {
    iconSize:[16,16],
    iconShape:'circle-dot',
    backgroundColor:'rgb(15, 157, 88)',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: "Ontario Federation of Indigenous Friendship Centres"
}

var onwa = {
    iconSize:[16,16],
    iconShape:'circle-dot',
    backgroundColor:'rgb(2, 136, 209)',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: "Ontario Native Women's Association"
}

var inuit = {
    iconSize:[16,16],
    iconShape:'circle-dot',
    backgroundColor:'rgb(57, 73, 171)',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: "Ottawa Inuit Children's Centre"
}

var six = {
    iconSize:[16,16],
    iconShape:'circle-dot',
    backgroundColor:'rgb(85, 139, 47)',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: "Six Nations of the Grand River"
}

var tung_inuit = {
    iconSize:[16,16],
    iconShape:'circle-dot',
    backgroundColor:'rgb(189, 189, 189)',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: "Tungasuvvingat Inuit"
}

var other = {
    iconSize:[16,16],
    iconShape:'circle-dot',
    backgroundColor:'#45e8a1',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: "Tungasuvvingat Inuit"
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
                `<i class="circle" style="background:${item.backgroundColor}"></i> ${item.name} <br>`
    	})
    	return div;
    }
    if (window.matchMedia("(min-width: 768px)").matches) {
        legend.addTo(map);
} else {
console.log ('too small')
}

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
            var image2 = 'images/icons/union.png'
            var circle = L.marker(latlng, {icon: L.BeautifyIcon.icon(union),draggable: true}).addTo(map)
            Union.addLayer(circle).addTo(map);

        } else if (feature.properties.PartnerID === 2) {
            var image2 = 'images/icons/AIAI.png'
            var circle = L.marker(latlng, {icon: L.BeautifyIcon.icon(allied),draggable: true}).addTo(map)
            Allied.addLayer(circle).addTo(map);
        //
        } else if (feature.properties.PartnerID === 3) {
            var image2 = 'images/icons/rama.png'
            var circle = L.marker(latlng, {icon: L.BeautifyIcon.icon(rama),draggable: true}).addTo(map)
            Rama.addLayer(circle).addTo(map);
        //
        } else if (feature.properties.PartnerID === 4) {
            var circle = L.marker(latlng, {icon: L.BeautifyIcon.icon(treaty3),draggable: true}).addTo(map)
            Treaty3.addLayer(circle).addTo(map);
            var image2 = 'images/icons/3.jpg'
        //
        } else if (feature.properties.PartnerID === 5) {
            var image2 = 'images/icons/rama.png'
            var circle = L.marker(latlng, {icon: L.BeautifyIcon.icon(independant),draggable: true}).addTo(map)
            Independent.addLayer(circle).addTo(map);
        //
        } else if (feature.properties.PartnerID === 6) {
            var image2 = 'images/icons/metis.png'
            var circle = L.marker(latlng, {icon: L.BeautifyIcon.icon(metis),draggable: true}).addTo(map)
            Metis.addLayer(circle).addTo(map);
        //
        } else if (feature.properties.PartnerID === 7) {
            var image2 = 'images/icons/newcredit.png'
            var circle = L.marker(latlng, {icon: L.BeautifyIcon.icon(sauga),draggable: true}).addTo(map)
            Sauga.addLayer(circle).addTo(map);
        //
        } else if (feature.properties.PartnerID === 8) {
            var image2 = 'images/icons/mohawk.jpg'
            var circle = L.marker(latlng, {icon: L.BeautifyIcon.icon(mohawk),draggable: true}).addTo(map)
            Mohawk.addLayer(circle).addTo(map);
        //
        } else if (feature.properties.PartnerID === 9) {
            var image2 = 'images/icons/Aski.jpg'
            var circle = L.marker(latlng, {icon: L.BeautifyIcon.icon(aski),draggable: true}).addTo(map)
            Aski.addLayer(circle).addTo(map);
        //
        } else if (feature.properties.PartnerID === 10) {
            var image2 = 'images/icons/OFIFC.png'
            var circle = L.marker(latlng, {icon: L.BeautifyIcon.icon(friendship),draggable: true}).addTo(map)
            Friendship.addLayer(circle).addTo(map);
        //
        } else if (feature.properties.PartnerID === 11) {
            var image2 = 'images/logo/Logo_no_text.png'
            var circle = L.marker(latlng, {icon: L.BeautifyIcon.icon(onwa),draggable: true}).addTo(map)
            Onwa.addLayer(circle).addTo(map);
        //
        } else if (feature.properties.PartnerID === 12) {
            var image2 = 'images/icons/inuit.png'
            var circle = L.marker(latlng, {icon: L.BeautifyIcon.icon(inuit),draggable: true}).addTo(map)
            Inuit.addLayer(circle).addTo(map);
        //
        } else if (feature.properties.PartnerID === 13) {
            var image2 = 'images/icons/6nations.png'
            var circle = L.marker(latlng, {icon: L.BeautifyIcon.icon(six),draggable: true}).addTo(map)
            Six.addLayer(circle).addTo(map);
        //
        } else if (feature.properties.PartnerID === 14) {
            var image2 = 'images/icons/tung_inuit.jpg'
            var circle = L.marker(latlng, {icon: L.BeautifyIcon.icon(tung_inuit),draggable: true}).addTo(map)
            Tung_inuit.addLayer(circle).addTo(map);

        } else {
            var circle = L.marker(latlng, {icon: L.BeautifyIcon.icon(other),draggable: true}).addTo(map)
        //     Tung_inuit.addLayer(circle).addTo(map);
            // circle = new L.Marker.SVGMarker(latlng, { iconOptions: { color: "rgb(25,25,100)" }})
        }
            // var mapoffsetY = feature.properties.Y - 0.02
            // var mapoffsetX = feature.properties.X - 0.1

            circle.on('click', function() {
                // console.log(marker.title)
                if (window.matchMedia("(min-width: 992px)").matches) {
                    map.flyTo(latlng, 10)
                } else if(window.matchMedia("(min-width: 768px)").matches) {
                    var mapoffsetY = feature.properties.Y - -0.09
                    var mapoffsetX = feature.properties.X - 0.25
                    map.flyTo([mapoffsetY, mapoffsetX],10)
                } else if (window.matchMedia("(min-width: 300px)").matches) {
                    var mapoffsetY = feature.properties.Y - 0.14
                    var mapoffsetX = feature.properties.X - 0
                    map.flyTo([mapoffsetY, mapoffsetX],10)
                } else {
                console.log ('ok')
                }
                // map.setView([feature.properties.Y,feature.properties.X],10)
                $('#data img').attr('src',image2);
                $('#data .organization').text(feature.properties.Partner)
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
