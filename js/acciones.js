// JavaScript Document
$(document).ready(function(e) {
   // watchID se refiere a la aceleracion 'acual'
   
   var watchID = null;
   document.addEventListener("deviceready", Dispositivo_Listo, false);
   
   // cuando esta listo el dispositivo
   function Dispositivo_Listo() {
	   comienza();
   }
   
   // empieza la 'observacion' de la aceleracion
   function comienza() {
	   
	   // Actualiza la aceleracion cada 2 segundos
	  //
	   var opciones = { frequency: 2000};
	   
	   watchID = navigator.accelerometer.watchAcceleration(correcto, Error, opciones);
	    navigator.geolocation.getCurrentPosition(Localiza, ErrorLocalizacion);
   }
	// Detiene la 'observacion' de la aceleracion
	
	function Detente(){
		if (watchID) {
			navigator.accelerometer.clearWatch(watchID);
			watchID = null;
		}
	}
	
	// correcto: Toma una captura de la aceleracion
	function correcto(acceleration) {
		var element = document.getElementById('acelerometro');
		
		element.innerHTML = 'Aceleracion en x: ' + acceleration.x + '<br />'+
		                    'Aceleracion en y: '+ acceleration.y + '<br />'+
		                    'Aceleracion en z: '+ acceleration.z + '<br />'+
		                    'Intervalo:'      + acceleration.timestamp + '<br />'
	}
	
	// Error: Falla al obtener la aceleracion
	function Error() {
	alert('Error!');
	}
	// Exito al localizar
	function Localiza(posicion) {
		var element = document.getElementById('geolocalizacion');
		element.innerHTML = 'Latitud: '          + posicion.coords.latitude     + ' <br />' +
	                        'Longitud:'          + posicion.coords.longitude     + ' <br />'+
							'Altitud:'           + posicion.coords.altitude     + ' <br />'+
							'precision:'          + posicion.coords.accuracy      + '<br />'+	
							'precision de Altitud: '+ posicion.coords.altitudeAccuracy  + '<br />' +
							'Direccion: '            + posicion.coords.heading        + '<br />' +
							'Velocidad: '              + posicion.coords.speed          + '<br />' +
							'Intervalo: '         + posicion.timestamp         + '<br />';
	}
	// Error en la geolocalizacion
	function ErrorLocalizacion(error) {
		alert('codigo: '  + error.code   +'\n'+
		     'mensaje: ' + error.message + '\n');
	}
});//documento ready