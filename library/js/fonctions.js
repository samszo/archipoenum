var myDBFile="archipoenum.sqlite";

function affiche_graph(c)
{
	document.getElementById(c).setAttribute("hidden","false");
	document.getElementById(c).setAttribute("visibility","visible");
	//alert('hello');
}

function afficher_form (id_form){
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		if (document.getElementById("Vb_"+id_form)==null)
		{
			var mDBConn = connect_DB();
			var statement = mDBConn.createStatement('SELECT  form_xul FROM xul where id_xul=?1');
			statement.bindUTF8StringParameter(0,id_form);		
	
					// return dataset;	
			j=0;
			var myArray1 = boucle_select(statement);
			form_xul=myArray1[j]["form_xul"];
			alert("Base    :   "+form_xul);
			
			var parser=new DOMParser();
			// Transformer le String en Objet DOM
			var resultDoc=parser.parseFromString(form_xul,"text/xml");
			//alert(resultDoc.documentElement);
			doc=document.getElementById("S1");
			resultDoc.documentElement.setAttribute("id","Vb_"+id_form);
			
			alert(resultDoc.documentElement.getElementsByTagName("button")[0].id);
			bt_v=resultDoc.documentElement.getElementsByTagName("button")[0];
			nb_texte=parseInt(bt_v.getAttribute("nb_texte"));
			nb_list=parseInt(bt_v.getAttribute("nb_list"));	
			doc.appendChild(resultDoc.documentElement);
			var statement = mDBConn.createStatement('SELECT id_f FROM forms where id_svg=?1;');
			alert('SELECT id_f FROM forms where id_svg='+id_form);
			statement.bindUTF8StringParameter(0,id_form);
			j=0;
			var myArray1 = boucle_select(statement);
			id_f=myArray1[j]["id_f"];
			for (i=1;i<=nb_texte;i++){
				var statement = mDBConn.createStatement('SELECT id_c FROM champs where id_f=?1 ORDER BY id_c DESC;');
				statement.bindUTF8StringParameter(0,id_f);
				j=0;
				var myArray1 = boucle_select(statement);
				id_champ=myArray1[j]["id_c"];
				var statement = mDBConn.createStatement('SELECT valeur FROM forms,champs,valeurs where forms.id_svg=?1 and champs.id_c=?2 and valeurs.id_c=champs.id_c');
				statement.bindUTF8StringParameter(0,id_form);
				statement.bindUTF8StringParameter(1,id_champ);
				j=0;
				var myArray1 = boucle_select(statement);
				valeur=myArray1[j]["valeur"];
				alert("Valeur : "+valeur);
				document.getElementById("zt"+id_form+""+i).setAttribute("value",valeur);
				
			}
		}
		else if (document.getElementById("Vb_"+id_form).getAttribute("hidden")=="true")
		{
			document.getElementById("Vb_"+id_form).setAttribute("hidden","false");			
		}
		else 
		{
			document.getElementById("Vb_"+id_form).setAttribute("hidden","true");		
		}
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

function Valider_saisi(n,elem){
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	form=elem.parentNode.id.split("_",2)[1];
	alert(form);
	nb_texte=parseInt(elem.getAttribute("nb_texte"));
	nb_list=parseInt(elem.getAttribute("nb_list"));	
	var mDBConn = connect_DB();
	var sql = 'INSERT INTO forms(nom,id_svg) VALUES(?1,?2);';
	var statement = mDBConn.createStatement(sql);
	statement.bindUTF8StringParameter(0,"form_"+form);
	statement.bindUTF8StringParameter(1,form);
	statement.execute();
	statement.reset();
	
	var statement = mDBConn.createStatement('SELECT id_f FROM forms ORDER BY id_f DESC;');
	j=0;
	var myArray1 = boucle_select(statement);
	id_form=myArray1[j]["id_f"];
		
	for (i=1;i<=nb_texte;i++){
		txt=document.getElementById("zt"+n+""+i).value;
		alert(txt);
		var sql = 'INSERT INTO champs(titre,id_f) VALUES(?1,?2);';
		var statement = mDBConn.createStatement(sql);
		var titre_t=document.getElementById("lt"+n+""+i).value;
		statement.bindUTF8StringParameter(0,titre_t);
		statement.bindUTF8StringParameter(1,id_form);
		statement.execute();
		statement.reset();
		
		var statement = mDBConn.createStatement('SELECT id_c FROM champs ORDER BY id_c DESC;');
		j=0;
		var myArray1 = boucle_select(statement);
		id_champ=myArray1[j]["id_c"];
		
		var sql = 'INSERT INTO valeurs(valeur,id_c) VALUES(?1,?2);';
		var statement = mDBConn.createStatement(sql);
		var titre_t=document.getElementById("lt"+n+""+i).value;
		statement.bindUTF8StringParameter(0,txt);
		alert(id_champ);
		statement.bindUTF8StringParameter(1,id_champ);
		statement.execute();
		statement.reset();
		
		var statement = mDBConn.createStatement('SELECT valeur FROM forms,champs,valeurs where forms.id_f=?1 and champs.id_c=?2 and valeurs.id_c=champs.id_c');
		statement.bindUTF8StringParameter(0,id_form);
		statement.bindUTF8StringParameter(1,id_champ);
		j=0;
		var myArray1 = boucle_select(statement);
		valeur=myArray1[j]["valeur"];
		alert("Valeur : "+valeur);
	}


	
}
