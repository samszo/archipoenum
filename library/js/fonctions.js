var myDBFile="archipoenum.sqlite";

function affiche_graph(c)
{
	document.getElementById(c).setAttribute("hidden","false");
	document.getElementById(c).setAttribute("visibility","visible");
	//alert('hello');
}

function afficher_form (id_form){
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	
		var mDBConn = connect_DB();
		var statement = mDBConn.createStatement('SELECT  form_xul FROM xul ORDER BY id_svg DESC;');
				

				// return dataset;	
		j=0;
		var myArray1 = boucle_select(statement);
		form_xul=myArray1[j]["form_xul"];
		alert("Base    :   "+form_xul);
		
		var parser=new DOMParser();
		// Transformer le String en Objet DOM
		var resultDoc=parser.parseFromString(form_xul,"text/xml");
		alert(resultDoc.documentElement);
		doc=document.getElementById("S1");
		doc.appendChild(resultDoc.documentElement);
}

function connect_DB(){
	var file = Components.classes["@mozilla.org/file/directory_service;1"]
	                     .getService(Components.interfaces.nsIProperties)
	                     .get("ProfD", Components.interfaces.nsIFile);
		file.append(myDBFile);
	
		var storageService = Components.classes["@mozilla.org/storage/service;1"]
	                        .getService(Components.interfaces.mozIStorageService);
		var mDBConn = storageService.openDatabase(file);
		return mDBConn;
}

function boucle_select(statement){
		var dataset = [];
		while (statement.executeStep()){
			var row = [];
			for(var i=0,k=statement.columnCount; i<k; i++){
				row[statement.getColumnName(i)] = statement.getUTF8String(i);
			}
			dataset.push(row);
		}
		return dataset;
	
}
