			document.getElementById("consulta").onclick = function() {
			//disable
			this.innerHTML = "Hecho";
			this.disabled = true;
			//do some validation stuff
			var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
			db.transaction(populateDB, errorCB, successCB);
			console.log("inicio");
			}
			function populateDB(tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, data)');
//			tx.executeSql('INSERT INTO DEMO (data) VALUES ("First row")');
//			tx.executeSql('INSERT INTO DEMO (data) VALUES ("Second row")');
//			tx.executeSql('INSERT INTO DEMO (data) VALUES ("Third row")');
			tx.executeSql('INSERT INTO DEMO (data) VALUES ("tercera")');
			}
		
			// Transaction error callback
			//
			function errorCB(err) {
				alert("Error processing SQL: "+err);
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
				tx.executeSql('SELECT * FROM DEMO', [], consulta, errorCB);
			}
			function consulta(tx, resultado){
				var len = resultado.rows.length;
				var element = document.getElementById('consultado');
				for (var i=0; i<len; i++){
					element.innerHTML = element.innerHTML + 'Resultado: ' + resultado.rows.item(i).id + " DATA = " + resultado.rows.item(i).data+"</br>";
				}
			}
// JavaScript Document