// JavaScript Document

var map

  function initialize() {
	var latlng = new google.maps.LatLng(21.943046,-102.487335); //default
	//mexico
	var m1 = new google.maps.LatLng(19.525494,-99.190171);
	var m2 = new google.maps.LatLng(19.441989,-98.929932);
	var m3 = new google.maps.LatLng(19.385,-99.121506);
	var m4 = new google.maps.LatLng(19.291054,-99.234116);
	//guadalajara
	var g1 = new google.maps.LatLng(20.671657,-103.43496);
	var g2 = new google.maps.LatLng(20.687717,-103.322006);
	var g3 = new google.maps.LatLng(20.597758,-103.284928);
	//morelia
	var lat2lng = new google.maps.LatLng(19.684,-101.178);
	var lat3lng = new google.maps.LatLng(19.720, -101.219);
	
    var myOptions = {
      zoom: 5,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: true
	}
	
	map = new google.maps.Map(document.getElementById("map_canvas"),
    myOptions);
	//marcadores morelia
    marcador = new google.maps.Marker( {
		icon:'img/yo.png',
		animation:google.maps.Animation.DROP,
		map:map	
	})
	marcador2 = new google.maps.Marker( {
		icon:'img/h3.png',
		position: lat2lng,
		map:map	
	})
	marcador3 = new google.maps.Marker( {
		position: lat3lng,
		icon:'img/h3.png',
		map:map	
	})
	//marcadores c.mexico
	marcadorm1 = new google.maps.Marker( {
		icon:'img/h3.png',
		position: m1,
		map:map	
	})
	marcadorm2 = new google.maps.Marker( {
		position: m2,
		icon:'img/h3.png',
		map:map	
	})
	marcadorm3 = new google.maps.Marker( {
		icon:'img/h3.png',
		position: m3,
		map:map	
	})
	marcadorm4 = new google.maps.Marker( {
		icon:'img/h3.png',
		position: m4,
		map:map	
	})
	//marcadores guadalajara
	marcadorg1 = new google.maps.Marker( {
		icon:'img/h3.png',
		position: g1,
		map:map	
	})
	marcadorg2 = new google.maps.Marker( {
		icon:'img/h3.png',
		position: g2,
		map:map	
	})
	marcadorg3 = new google.maps.Marker( {
		icon:'img/h3.png',
		position: g3,
		map:map	
	})
	// informacion
	var infowindow2 = new google.maps.InfoWindow({
			content:"<p style='margin-bottom: 0; margin-top: 0'>Ave. Galaxia #99</p><p style='margin-bottom: 0; margin-top: 0'> Parque Industrial Mexicali</p><style='margin-bottom: 0; margin-top: 0'> Mexicali, BC. C.P. 21210</p><p style='margin-bottom: 0; margin-top: 0'> Tel. (52) 686 564 24 00</p>"	  
	});
	var infowindow3 = new google.maps.InfoWindow({
			content:"<p style='margin-bottom: 0; margin-top: 0'>Ave. Galaxia #99</p><p style='margin-bottom: 0; margin-top: 0'> Parque Industrial Mexicali</p><style='margin-bottom: 0; margin-top: 0'> Mexicali, BC. C.P. 21210</p><p style='margin-bottom: 0; margin-top: 0'> Tel. (52) 686 564 24 00</p>"	  
	});
	var infowindow4 = new google.maps.InfoWindow({
			content:"<p style='margin-bottom: 0; margin-top: 0'>Ave. Galaxia #99</p><p style='margin-bottom: 0; margin-top: 0'> Parque Industrial Mexicali</p><style='margin-bottom: 0; margin-top: 0'> Mexicali, BC. C.P. 21210</p><p style='margin-bottom: 0; margin-top: 0'> Tel. (52) 686 564 24 00</p>"	  
	});
	var infowindow5 = new google.maps.InfoWindow({
			content:"<p style='margin-bottom: 0; margin-top: 0'>Ave. Galaxia #99</p><p style='margin-bottom: 0; margin-top: 0'> Parque Industrial Mexicali</p><style='margin-bottom: 0; margin-top: 0'> Mexicali, BC. C.P. 21210</p><p style='margin-bottom: 0; margin-top: 0'> Tel. (52) 686 564 24 00</p>"	  
	});
	var infowindow6 = new google.maps.InfoWindow({
			content:"<p style='margin-bottom: 0; margin-top: 0'>Ave. Galaxia #99</p><p style='margin-bottom: 0; margin-top: 0'> Parque Industrial Mexicali</p><style='margin-bottom: 0; margin-top: 0'> Mexicali, BC. C.P. 21210</p><p style='margin-bottom: 0; margin-top: 0'> Tel. (52) 686 564 24 00</p>"	  
	});
	var infowindow7 = new google.maps.InfoWindow({
			content:"<p style='margin-bottom: 0; margin-top: 0'>Ave. Galaxia #99</p><p style='margin-bottom: 0; margin-top: 0'> Parque Industrial Mexicali</p><style='margin-bottom: 0; margin-top: 0'> Mexicali, BC. C.P. 21210</p><p style='margin-bottom: 0; margin-top: 0'> Tel. (52) 686 564 24 00</p>"	  
	});
	var infowindow8 = new google.maps.InfoWindow({
			content:"<p style='margin-bottom: 0; margin-top: 0'>Ave. Galaxia #99</p><p style='margin-bottom: 0; margin-top: 0'> Parque Industrial Mexicali</p><style='margin-bottom: 0; margin-top: 0'> Mexicali, BC. C.P. 21210</p><p style='margin-bottom: 0; margin-top: 0'> Tel. (52) 686 564 24 00</p>"	  
	});
	var infowindow9 = new google.maps.InfoWindow({
			content:"<p style='margin-bottom: 0; margin-top: 0'>Ave. Galaxia #99</p><p style='margin-bottom: 0; margin-top: 0'> Parque Industrial Mexicali</p><style='margin-bottom: 0; margin-top: 0'> Mexicali, BC. C.P. 21210</p><p style='margin-bottom: 0; margin-top: 0'> Tel. (52) 686 564 24 00</p>"	  
	});
	var infowindow10 = new google.maps.InfoWindow({
			content:"<p style='margin-bottom: 0; margin-top: 0'>Ave. Galaxia #99</p><p style='margin-bottom: 0; margin-top: 0'> Parque Industrial Mexicali</p><style='margin-bottom: 0; margin-top: 0'> Mexicali, BC. C.P. 21210</p><p style='margin-bottom: 0; margin-top: 0'> Tel. (52) 686 564 24 00</p>"	  
	});
	var infowindow = new google.maps.InfoWindow({
			content:"Te encuentras aqui"	  
	});
	//imprimiendo info
	google.maps.event.addListener(marcador, 'click', function() {
		infowindow.open(map,marcador);
	});
	google.maps.event.addListener(marcador2, 'click', function() {
		infowindow2.open(map,marcador2);
	});
	google.maps.event.addListener(marcador3, 'click', function() {
		infowindow3.open(map,marcador3);
	});
	//mexico
	google.maps.event.addListener(marcadorm1, 'click', function() {
		infowindow4.open(map,marcadorm1);
	});
	google.maps.event.addListener(marcadorm2, 'click', function() {
		infowindow5.open(map,marcadorm2);
	});
	google.maps.event.addListener(marcadorm3, 'click', function() {
		infowindow6.open(map,marcadorm3);
	});
	google.maps.event.addListener(marcadorm4, 'click', function() {
		infowindow7.open(map,marcadorm4);
	});
	//guadalajara
	google.maps.event.addListener(marcadorg1, 'click', function() {
		infowindow8.open(map,marcadorg1);
	});
	google.maps.event.addListener(marcadorg2, 'click', function() {
		infowindow9.open(map,marcadorg2);
	});
	google.maps.event.addListener(marcadorg3, 'click', function() {
		infowindow10.open(map,marcadorg3);
	});
  }
    
  //UBICACION GPS
  function mostrarUbicacion(){
		navigator.geolocation.getCurrentPosition( lecturaGPS , errorGPS , {enableHighAccuracy:true} )  
  }
  
  function lecturaGPS(ubicacion){
	  
	  var miubicacion = new google.maps.LatLng(ubicacion.coords.latitude, ubicacion.coords.longitude);  
	  map.setCenter(miubicacion)
	  map.setZoom(12)
	  marcador.setPosition(miubicacion)
  }
  
  //UBICACION MORELIA
  function mostrarUbicacionMorelia(){
	  
	  var latlngmor = new google.maps.LatLng(19.703, -101.195);
	  map.setCenter(latlngmor)
	  map.setZoom(12)	  
  }
  
  //UBICACION MEXICO
  function mostrarUbicacionMexico(){
	  
	  var latlngmx = new google.maps.LatLng(19.432, -99.135);
	  map.setCenter(latlngmx)
	  map.setZoom(9)	  
  }
  
  //UBICACION GUADALAJARA
  function mostrarUbicacionGuadalajara(){
	  
	  var latlngguad = new google.maps.LatLng(20.63921,-103.336083);
	  map.setCenter(latlngguad)
	  map.setZoom(10)	  
  }
  
  //error
  function errorGPS(){
	  alert("Error al acceder al GPS");
  }