// Declaraci�n de variables globales
var myScroll, myScrollMenu, cuerpo, menuprincipal, wrapper, estado;

// Guardamos en variables elementos para poder rescatarlos despues sin tener que volver a buscarlos
cuerpo = document.getElementById("cuerpo"),
menuprincipal = document.getElementById("menuprincipal"),
wrapper = document.getElementById("wrapper");

var xhReq = new XMLHttpRequest();

var app = {
    // Constructor de la app
    initialize: function() {
    	// Estado inicial mostrando capa cuerpo
    	estado="cuerpo";
    	
    	// Creamos el elemento style, lo a�adimos al html y creamos la clase cssClass para aplicarsela al contenedor wrapper
	    var heightCuerpo=window.innerHeight-46;
	    var style = document.createElement('style');
	    style.type = 'text/css';
	    style.innerHTML = '.cssClass { position:absolute; z-index:2; left:0; top:45px; width:100%; height: '+heightCuerpo+'px; overflow:auto;}';
	    document.getElementsByTagName('head')[0].appendChild(style);
	    
	    // A�adimos las clases necesarias
		cuerpo.className = 'page center';
		menuprincipal.className = 'page center';
		wrapper.className = 'cssClass';
			
		// Leemos por ajax el archivos opcion1.html de la carpeta opciones
		xhReq.open("GET", "opciones/opcion11.html", false);
		xhReq.send(null);
		document.getElementById("contenidoCuerpo").innerHTML=xhReq.responseText;

		// Leemos por ajax el archivos menu.html de la carpeta opciones
		xhReq.open("GET", "opciones/menu2.html", false);
		xhReq.send(null);
		document.getElementById("contenidoMenu").innerHTML=xhReq.responseText;
		
		// Creamos los 2 scroll mediante el plugin iscroll, uno para el menu principal y otro para el cuerpo
		myScroll = new iScroll('wrapper', { hideScrollbar: true });
	    myScroll.options.onBeforeScrollStart = function(e) {                
        var target = e.target;
        while (target.nodeType != 1) target = target.parentNode;
        if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA'){
            e.preventDefault();
        }
   }
		myScrollMenu = new iScroll('wrapperMenu', { hideScrollbar: true });
	
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
    	// Ejecutamos la funci�n FastClick, que es la que nos elimina esos 300ms de espera al hacer click
    	new FastClick(document.body);
    },
    
};

// Funcion para a�adir clases css a elementos
function addClass( classname, element ) {
    var cn = element.className;
    if( cn.indexOf( classname ) != -1 ) {
    	return;
    }
    if( cn != '' ) {
    	classname = ' '+classname;
    }
    element.className = cn+classname;
}

// Funci�n para eliminar clases css a elementos
function removeClass( classname, element ) {
    var cn = element.className;
    var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
    cn = cn.replace( rxp, '' );
    element.className = cn;
}

function menu(opcion){
	
	// Si pulsamos en el bot�n de "menu" entramos en el if
	if(opcion=="menu"){
		if(estado=="cuerpo"){
			cuerpo.className = 'page transition right';
			estado="menuprincipal";
		}else if(estado=="menuprincipal"){
			cuerpo.className = 'page transition center';
			estado="cuerpo";	
		}
	// Si pulsamos un bot�n del menu principal entramos en el else
	}else{
		
		// A�adimos la clase al li presionado
		addClass('li-menu-activo' , document.getElementById("ulMenu").getElementsByTagName("li")[opcion]);
		// Recogemos mediante ajax el contenido del html seg�n la opci�n clickeada en el menu
		xhReq.open("GET", "opciones/opcion"+opcion+"2.html", false);
//		switch(opcion) {
//		case 1:
//			console.log("hola");
//			break;
//		case 2:
//			console.log("hola");
//			break;
//		}
//		xhReq.open("HEAD","bd.js",false);
		xhReq.send(null);
		document.getElementById("contenidoCuerpo").innerHTML=xhReq.responseText;
		

		// Refrescamos el elemento iscroll seg�n el contenido ya a�adido mediante ajax, y hacemos que se desplace al top
		myScroll.refresh();
		myScroll.scrollTo(0,0);
		// A�adimos las clases necesarias para que la capa cuerpo se mueva al centro de nuestra app y muestre el contenido
		cuerpo.className = 'page transition center';
		estado="cuerpo";
		
		// Quitamos la clase a�adida al li que hemos presionado
		setTimeout(function() {
			removeClass('li-menu-activo' , document.getElementById("ulMenu").getElementsByTagName("li")[opcion]);
		}, 300);
		 
	 }
	 	cuerpo.onclick = function() {
    		cuerpo.className = 'page transition center';
			estado="cuerpo";	
		};
		'area'.onclick = function() {
			alert('alerta');
		}
}