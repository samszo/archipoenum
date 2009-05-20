var myDBFile="archipoenum.sqlite";

function redim_svg(svg){

	svg.setAttribute("viewBox","0 0 1000 1000");
	svg.setAttribute("width","300px");
	svg.setAttribute("height","200px");

}


function affiche_graph(c)
{
	document.getElementById(c).setAttribute("hidden","false");
	document.getElementById(c).setAttribute("visibility","visible");
	//alert('hello');
}

function affiche_interface(idSrcCont, idSrcSvg, idDstCont, idDstSvg)
{
	//enregistre la version courante du svg source
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	var mDBConn = connect_DB();
	var doc=document.getElementById(idSrcCont);
	var serializer = new XMLSerializer();
    var xml = serializer.serializeToString(doc.firstChild);
	var sql = 'UPDATE svg SET fichier=?1 WHERE id_svg=?2;';
	var statement = mDBConn.createStatement(sql);
	statement.bindUTF8StringParameter(0,xml);
	statement.bindUTF8StringParameter(1,idSrcSvg);
	statement.execute();
	statement.reset();	
	
	
	//récupère le svg de destination
	
	var statement = mDBConn.createStatement('SELECT fichier FROM svg where id_svg=?1;');
	statement.bindUTF8StringParameter(0,idDstSvg);
	// return dataset;	
	var myArray1 = boucle_select(statement);
	// Now you can loop through the array:
	j=0;
	//alert (myArray1.length);
	//alert("SVG : "+myArray1[j]['fichier']);
	interface= myArray1[j]['fichier'];
	statement.reset();
	var parser=new DOMParser();
	var resultDoc=parser.parseFromString(interface,"text/xml");
	//alert("Doc : -------"+resultDoc);

	//met le svg de destination dans le conteneur de destination
	doc=document.getElementById(idDstCont);
	if (doc.hasChildNodes()==true)	
		doc.removeChild(doc.firstChild);
	doc.appendChild(resultDoc.documentElement);
	
	//redimensionne les svg
	if(idSrcCont!=idDstSvg && idSrcSvg!=""){
		//destination
		redim_svg(doc.firstChild);
		//source
		doc=document.getElementById(idSrcCont);
		redim_svg(doc.firstChild);
	}
	id_courant=idDstSvg;
}

function afficher_form (id_form,n1){
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	var mDBConn = connect_DB();
	
	if (document.getElementById("Vb_"+id_form)==null)
	{
		//alert("Formulaire:"+id_form);
		var statement = mDBConn.createStatement('SELECT  form_xul FROM xul where id_xul=?1');
		statement.bindUTF8StringParameter(0,id_form);		

				// return dataset;	
		j=0;
		var myArray1 = boucle_select(statement);
		form_xul=myArray1[j]["form_xul"];
		//alert("Base    :   "+form_xul);
		
		var parser=new DOMParser();
		// Transformer le String en Objet DOM
		var resultDoc=parser.parseFromString(form_xul,"text/xml");
		//alert(resultDoc.documentElement);
		doc=document.getElementById("S1");
		resultDoc.documentElement.setAttribute("id","Vb_"+id_form);
		
		//alert(resultDoc.documentElement.getElementsByTagName("button")[0].id);
		bt_v=resultDoc.documentElement.getElementsByTagName("button")[0];
		nb_texte=parseInt(bt_v.getAttribute("nb_texte"));
		nb_list=parseInt(bt_v.getAttribute("nb_list"));	
		doc.appendChild(resultDoc.documentElement);
		var statement = mDBConn.createStatement('SELECT id_f FROM forms where id_svg=?1;');
		//alert('SELECT id_f FROM forms where id_svg='+id_form);
		statement.bindUTF8StringParameter(0,id_form);
		j=0;
		var myArray1 = boucle_select(statement);
		//alert(myArray1);
		if (myArray1!=""){
			id_f=myArray1[j]["id_f"];
			//j=nb_texte+nb_list;
			j=0;
			for (i=1;i<=nb_texte;i++){
				var statement = mDBConn.createStatement('SELECT id_c FROM champs where id_f=?1 ORDER BY id_c DESC;');
				statement.bindUTF8StringParameter(0,id_f);
				jj=0;
				var myArray1 = boucle_select(statement);
				id_champ=myArray1[jj]["id_c"];
				jj++;
				
				var statement = mDBConn.createStatement('SELECT id_d FROM donnees where id_f=?1 ORDER BY id_d DESC;');
				statement.bindUTF8StringParameter(0,id_f);
				jjj=0;
				var myArray1 = boucle_select(statement);
				id_d=myArray1[jjj]["id_d"];
				jj++;
				//alert('SELECT valeur FROM forms,champs,valeurs,donnees where forms.id_svg='+id_form+' and champs.id_c='+id_champ+' and donnees.id_d='+id_d+' and forms.id_f=champs.id_f ORDER BY id_v DESC;');
				var statement = mDBConn.createStatement('SELECT valeur FROM forms,champs,valeurs,donnees where forms.id_svg=?1 and champs.id_c=?2 and donnees.id_d=?3 and forms.id_f=champs.id_f ORDER BY id_v DESC;');
				statement.bindUTF8StringParameter(0,id_f);
				statement.bindUTF8StringParameter(1,id_champ);
				statement.bindUTF8StringParameter(2,id_d);
				
				var myArray1 = boucle_select(statement);
				//j=0;
				valeur=myArray1[j]["valeur"];
				//alert("Valeur : "+valeur);
				j++;
				document.getElementById("zt"+n1+""+i).setAttribute("value",valeur);		
							
			}
		}
		else {
			var sql = 'INSERT INTO forms(nom,id_svg) VALUES(?1,?2);';
			
			var statement = mDBConn.createStatement(sql);
			statement.bindUTF8StringParameter(0,"form_"+id_form);
			statement.bindUTF8StringParameter(1,id_form);
			statement.execute();
			statement.reset();
			
			var statement = mDBConn.createStatement('SELECT id_f FROM forms ORDER BY id_f DESC;');
			j=0;
			var myArray1 = boucle_select(statement);
			id_f=myArray1[j]["id_f"];
			//alert("form inserted : "+id_f);	
			for (i=1;i<=nb_texte;i++){
				//alert(("zt"+n1+""+i));
				txt=document.getElementById("zt"+n1+""+i).value;
				//alert(txt);
				var sql = 'INSERT INTO champs(titre,id_f) VALUES(?1,?2);';
				//alert("champs inserted : "+i);
				var statement = mDBConn.createStatement(sql);
				var titre_t=document.getElementById("lt"+n1+""+i).value;
				statement.bindUTF8StringParameter(0,titre_t);
				statement.bindUTF8StringParameter(1,id_f);
				statement.execute();
				statement.reset();
			}
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
	//alert(form);
	nb_texte=parseInt(elem.getAttribute("nb_texte"));
	nb_list=parseInt(elem.getAttribute("nb_list"));	
	var mDBConn = connect_DB();
	/*var sql = 'INSERT INTO forms(nom,id_svg) VALUES(?1,?2);';
	var statement = mDBConn.createStatement(sql);
	statement.bindUTF8StringParameter(0,"form_"+form);
	statement.bindUTF8StringParameter(1,form);
	statement.execute();
	statement.reset();*/
	
	var statement = mDBConn.createStatement('SELECT id_f FROM forms where id_svg=?1;');
	//alert('SELECT id_f FROM forms where id_f='+form);
	statement.bindUTF8StringParameter(0,form);
	j=0;
	var myArray1 = boucle_select(statement);
	id_form=myArray1[j]["id_f"];
		
	for (i=1;i<=nb_texte;i++){
		txt=document.getElementById("zt"+n+""+i).value;
		//alert(txt);
		/*var sql = 'INSERT INTO champs(titre,id_f) VALUES(?1,?2);';
		var statement = mDBConn.createStatement(sql);
		var titre_t=document.getElementById("lt"+n+""+i).value;
		statement.bindUTF8StringParameter(0,titre_t);
		statement.bindUTF8StringParameter(1,id_form);
		statement.execute();
		statement.reset();*/

		var sql = 'INSERT INTO donnees(id_f) VALUES(?1);';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,id_form);
		statement.execute();
		statement.reset();
				
		var statement = mDBConn.createStatement('SELECT id_c FROM champs where id_f=?1;');
		statement.bindUTF8StringParameter(0,id_form);
		j=0;
		var myArray1 = boucle_select(statement);
		id_champ=myArray1[j]["id_c"];
		
		
		var statement = mDBConn.createStatement('SELECT id_d FROM donnees where id_f=?1;');
		statement.bindUTF8StringParameter(0,id_form);
		j=0;
		var myArray1 = boucle_select(statement);
		id_d=myArray1[j]["id_d"];
		
		var sql = 'INSERT INTO valeurs(valeur,id_c,id_d) VALUES(?1,?2,?3);';
		var statement = mDBConn.createStatement(sql);
		var titre_t=document.getElementById("lt"+n+""+i).value;
		statement.bindUTF8StringParameter(0,txt);
		//alert(id_champ);
		statement.bindUTF8StringParameter(1,id_champ);
		statement.bindUTF8StringParameter(2,id_d);
		statement.execute();
		statement.reset();
		
		var statement = mDBConn.createStatement('SELECT valeur FROM forms,champs,valeurs where forms.id_f=?1 and champs.id_c=?2 and valeurs.id_c=champs.id_c');
		statement.bindUTF8StringParameter(0,id_form);
		statement.bindUTF8StringParameter(1,id_champ);
		j=0;
		var myArray1 = boucle_select(statement);
		//for (=	
			valeur=myArray1[j]["valeur"];
		//alert("Valeur : "+valeur);
	}
	
	for (i=1;i<=nb_list;i++){
		//alert("liste_"+n+""+i);
		txt=document.getElementById("liste_"+n+""+i).value;
		
		/*var sql = 'INSERT INTO champs(titre,id_f) VALUES(?1,?2);';
		var statement = mDBConn.createStatement(sql);
		var titre_t=document.getElementById("ll"+n+""+i).value;
		statement.bindUTF8StringParameter(0,titre_t);
		statement.bindUTF8StringParameter(1,id_form);
		statement.execute();
		statement.reset();*/

		var sql = 'INSERT INTO donnees(id_f) VALUES(?1);';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,id_form);
		statement.execute();
		statement.reset();
				
		var statement = mDBConn.createStatement('SELECT id_c FROM champs ORDER BY id_c DESC;');
		j=0;
		var myArray1 = boucle_select(statement);
		id_champ=myArray1[j]["id_c"];
		
		var statement = mDBConn.createStatement('SELECT id_d FROM donnees ORDER BY id_d DESC;');
		j=0;
		var myArray1 = boucle_select(statement);
		id_d=myArray1[j]["id_d"];
		
		var sql = 'INSERT INTO valeurs(valeur,id_c,id_d) VALUES(?1,?2,?3);';
		var statement = mDBConn.createStatement(sql);
		var titre_t=document.getElementById("ll"+n+""+i).value;
		statement.bindUTF8StringParameter(0,txt);
		//alert(id_champ);
		statement.bindUTF8StringParameter(1,id_champ);
		statement.bindUTF8StringParameter(2,id_d);
		statement.execute();
		statement.reset();
		
		var statement = mDBConn.createStatement('SELECT valeur FROM forms,champs,valeurs where forms.id_f=?1 and champs.id_c=?2 and valeurs.id_c=champs.id_c');
		statement.bindUTF8StringParameter(0,id_form);
		statement.bindUTF8StringParameter(1,id_champ);
		j=0;
		var myArray1 = boucle_select(statement);
		valeur=myArray1[j]["valeur"];
		//alert("Valeur : "+valeur);
	}
	alert ("les valeurs sont sauvegardes");

	
}
