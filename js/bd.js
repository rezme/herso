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
// JavaScript Document