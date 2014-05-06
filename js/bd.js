			//document.getElementById("consulta").onclick = function() {
			function consultar(){
			//disable
			document.getElementById("consultar").innerHTML = "Hecho";
			document.getElementById("consultar").hidden = true;
			//do some validation stuff
			var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
			db.transaction(successCB);
			console.log("inicio");
			}
			function guardar(){
				var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
				db.transaction(populateDB);
				console.log("inicio guardar");
			}
			function populateDB(tx) { 
			//tx.executeSql('DROP TABLE registro');	
			tx.executeSql('CREATE TABLE IF NOT EXISTS registro (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nombre, fecha DATETIME, descripcion, comentarios)');
			var nombre, descripcion, comentarios, fecha;
			nombre = document.getElementById('nombre').value;
			fecha = document.getElementById('fecha').value;
			descripcion = document.getElementById('descripcion').value;
			comentarios = document.getElementById('comentarios').value;
			console.log(fecha);
//			tx.executeSql("INSERT INTO elites (id, name, twitter) VALUES (?)", [i+1], onSuccess, onError);
//			tx.executeSql('INSERT INTO DEMO (data) VALUES ("Third row")');
			tx.executeSql("INSERT INTO registro (nombre, fecha, descripcion, comentarios) VALUES (?,?,?,?)",[nombre,fecha,descripcion,comentarios]);
			console.log("guardado");
			}
			// Transaction error callback
			//
			function errorCB(err) {
				alert("Error processing SQL :CCC: "+err+"dota");
			}
		
			// Transaction success callback
			//
			function successCB() {
		//		alert("success!");
				var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
				db.transaction(queryDB,errorCB);
				console.log('exito');
			}
			function queryDB(tx) {
				tx.executeSql('SELECT * FROM registro', [], consulta, errorCB);
			}
			function consulta(tx, resultado){
				var len = resultado.rows.length;
				var element = document.getElementById('consultado');
				for (var i=0; i<len; i++){
					element.innerHTML = element.innerHTML + 'Resultado: ' + " nombre = " + resultado.rows.item(i).nombre+"</br>"
																		+ " fecha = " + resultado.rows.item(i).fecha+"</br>"
																		+ " descripcion = " + resultado.rows.item(i).descripcion+"</br>"
																		+ " comentarios = " + resultado.rows.item(i).comentarios+"</br>";
				}
			}
			function consultaLista(){
				var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
				db.transaction(queryDBLista);
				console.log("consultalista");
			}
			function queryDBLista(tx) {
				tx.executeSql('SELECT * FROM registro', [], listaShow, errorCB);
				console.log("querylisto");
			}
			function listaShow(tx, resultado){
				console.log("showin lista");
				var len = resultado.rows.length;
				var element = document.getElementById('consultadolista');
				for (var i=0; i<len; i++){
					element.innerHTML = element.innerHTML + " nombre = " + resultado.rows.item(i).nombre+"(<a href='javascript:void(0);' onclick='verItem(" + resultado.rows.item(i).id + "); refrescar();'>Ir al evento</a>) " + "  (<a href='javascript:void(0);' onclick='eliminar(" + resultado.rows.item(i).id + "); refrescar();'>Eliminar</a>)</br>"
				}
			}
			function verItem(id){
				var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
				console.log(id);
//				db.transaction(eliminar);
				db.transaction(function(tx) {
					tx.executeSql('SELECT * FROM registro where id=(?)', [id], consulta, errorCB);
				});
			}
			function refrescar(){
				document.getElementById('consultado').innerHTML = "";
				document.getElementById('consultadolista').innerHTML = "";
				console.log("refrescadO!");
			}
			function eliminar(id) {
				var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
				console.log(id);
				db.transaction(function(tx) {
					tx.executeSql("DELETE FROM registro WHERE id=(?)", [id]);
					consultaLista();
				});
			}
			function guardaragenda(){
				var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
				db.transaction(populateDBagenda);
				console.log("inicio guardar agenda");
			}
			function populateDBagenda(tx) { 
			//tx.executeSql('DROP TABLE registro');	
			tx.executeSql('CREATE TABLE IF NOT EXISTS agenda (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nombre, hora, descripcion, comentarios)');
			var nombreagenda, descripcionagenda, comentariosagenda, horagenda;
			nombreagenda = document.getElementById('nombrea').value;
			horaagenda = document.getElementById('horarioa').value;
			descripcionagenda = document.getElementById('descripciona').value;
			comentariosagenda = document.getElementById('comentariosa').value;
			console.log(horaagenda);
//			tx.executeSql("INSERT INTO elites (id, name, twitter) VALUES (?)", [i+1], onSuccess, onError);
//			tx.executeSql('INSERT INTO DEMO (data) VALUES ("Third row")');
			tx.executeSql("INSERT INTO agenda (nombre, hora, descripcion, comentarios) VALUES (?,?,?,?)",[nombreagenda,horaagenda,descripcionagenda,comentariosagenda]);
			console.log("guardado");
			}
			function consultaListaagenda(){
				var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
				db.transaction(queryDBListaagenda);
				console.log("consultalista");
			}
			function queryDBListaagenda(tx) {
				tx.executeSql('SELECT * FROM agenda', [], listaShowagenda, errorCB);
				console.log("querylisto agenda");
			}
			function listaShowagenda(tx, resultado){
				console.log("showin lista de agenda");
				var len = resultado.rows.length;
				var element = document.getElementById('consultadolistaagenda');
				for (var i=0; i<len; i++){
					element.innerHTML = element.innerHTML + " nombre = " + resultado.rows.item(i).nombre+"(<a href='javascript:void(0);' onclick='verItemagenda(" + resultado.rows.item(i).id + "); refrescaragenda();'>Ir al evento</a>) " + "  (<a href='javascript:void(0);' onclick='eliminaragenda(" + resultado.rows.item(i).id + "); refrescaragenda();'>Eliminar</a>)</br>"
				}
			}
			function verItemagenda(id){
				var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
				console.log(id);
//				db.transaction(eliminar);
				db.transaction(function(tx) {
					tx.executeSql('SELECT * FROM agenda where id=(?)', [id], consultaagenda, errorCB);
				});
			}
			function refrescaragenda(){
				document.getElementById('consultado').innerHTML = "";
				document.getElementById('consultadolistaagenda').innerHTML = "";
				console.log("refrescadO!");
			}
			function eliminaragenda(id) {
				var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
				console.log(id);
				db.transaction(function(tx) {
					tx.executeSql("DELETE FROM agenda WHERE id=(?)", [id]);
					consultaListaagenda();
				});
			}
			function consultaagenda(tx, resultado){
				var len = resultado.rows.length;
				var element = document.getElementById('consultado');
				for (var i=0; i<len; i++){
					element.innerHTML = element.innerHTML + 'Resultado: ' + " nombre = " + resultado.rows.item(i).nombre+"</br>"
																		+ " horario = " + resultado.rows.item(i).hora+"</br>"
																		+ " descripcion = " + resultado.rows.item(i).descripcion+"</br>"
																		+ " comentarios = " + resultado.rows.item(i).comentarios+"</br>";
				}
			}
			function verniveles(){
				document.getElementById('mostrarimagen').innerHTML = "(<a href='javascript:void(0);' onclick='vernivel(1);'> Nivel 1</a>)</br>"+
																		"(<a href='javascript:void(0);' onclick='vernivel(2);'> Nivel 2</a>)</br>"+
																		"(<a href='javascript:void(0);' onclick='vernivel(3);'> Nivel 3</a>)</br>";
			}
			function vernivel(num){
				document.getElementById('mostrarimagen').innerHTML = "<img id='mapapa' src='img/"+ num +".PNG' alt='piso3' width='575' height='358' usemap='#imgmap'>";
				console.log("refrescadO!");
				$('area').on('click', function(e) {
				alert($(this).attr('alt') + ' clickeado');	
			});
			}
			function refrescarmapa(){
				document.getElementById('mostrarimagen').innerHTML = "";
				console.log("refrescadO!");
			}
// JavaScript Document