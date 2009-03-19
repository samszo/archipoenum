var trace=true;
var sep=";";
var xulDoc=window.parent.document;
var arrValidation = new Array();
var figure_courant="fig_21";
var myDBFile="archipoenum.sqlite";
var docs=2;
var doc_courant="";
var user;

function  init(){	
	var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    user = unescape(temp[1]);
    //alert(user);
	document.getElementById("u1").setAttribute("value","Utilisateur Connect� : "+user);
	document.getElementById("u1").setAttribute("hidden","false");
	document.getElementById("u2").setAttribute("hidden","false");

}
function SetFichier(){
	
  try {
    netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
  	
	//saisi le libell� 
	var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
	                        .getService(Components.interfaces.nsIPromptService);
	var input = {value: ""};
	var check = {value: false};
	result = prompts.prompt(window, "Donner le nom du fichier", "Saisir le nom du fichier", input, null, check);
	if(!result)
		return;
	var nomFic = input.value+".svg";
	var newFilePath = "chrome://archipoenum/content/sauvegardes/";
	var fXml = Components.classes["@mozilla.org/file/local;1"]
	                     .createInstance(Components.interfaces.nsILocalFile);
	fXml.initWithPath(newFilePath);

	//lbl = Utf8.encode(lbl);
	//v�rification de l'extension

	return fXml;

  } catch(ex2){alert("interface:GetNomFichier:"+ex2);}
}



// Fonction d'affichage de SVG dans l' IFRAME
function AfficheSvg(svgNom){
	try {
		document.getElementById("svgFrame").setAttribute("src","");
		document.getElementById("svgFrame").setAttribute("src","library/svg/"+svgNom);
	} catch(ex2){alert("interface:AfficheSvg:"+ex2);}	
}

// Changer le couleur de graphe s�l�ctionn� apr�s la validation des donn�es saisies
function AfficheValidation(){
	try {
		for (var i = 0; i < arrValidation.length; i++){
			var svgGraphique = document.getElementById(arrValidation[i]);
			if(svgGraphique){
				svgGraphique.setAttribute("hidden","false");
				svgGraphique.setAttribute("fill","green");			
			}
		}
	} catch(ex2){alert("interface:AfficheValidation:"+ex2);}	
}

// Afficher la partie de saisir des donn�es
function  Saisir(idSrc,figure){
	
	try {
		figure_courant=figure;
		//alert(figure_courant);
		//var svgDoc=window.parent.frames['svgFrame'].document;
		//affiche les champs de saisie
		MontrerCacherXul("saisie_"+idSrc);
		//passe le graphique � l'orange
		document.getElementById(idSrc).setAttribute("fill","orange");
	} catch(ex2){alert("interface:Saisir:"+ex2);}
	
}

// Changer le variable figure_courant
function changer(figure){
	figure_courant=figure;
	//alert('Changer �'+figure_courant);
}

// Changer le couleur de graphe s�l�ctionn�
function Valider(idSrc,idsDst,idsValid){
	
	try {
		//passe le graphique au vert
		document.getElementById(idSrc).setAttribute("fill","green");
		//change les champs saisis
		ModifChampsSvg(idSrc);
		//v�rifie l'afichage de nouveaux graphiques
		if(IdsEstValider(idsValid)){
			MontrerSvg(idsDst);
			
		}
		//cache le xul
		MontrerCacherXul("saisie_"+idSrc);
		//enregistre la validation
		arrValidation.push(idSrc);
	} catch(ex2){alert("interface:Valider:"+ex2);}
	
}

// V�rifier que le graphe est valid� ou non
function IdsEstValider(idsValid){
	try {
		if(idsValid=="")
			return true;
			
		var arrId = idsValid.split(sep);
		var valid = true;
		for (var i = 0; i < arrId.length; i++){
			var validColor = document.getElementById(arrId[i]).getAttribute("fill");
			if(validColor!="green")
				valid = false;
		}
		return valid;
	} catch(ex2){alert("interface:IdsEstValider:"+ex2);}
}


// Modifier les champs dans le graphe SVG
function ModifChampsSvg(idSrc){
	
	try {
		var ChampsSaisis = document.getElementById("saisie_"+idSrc).childNodes;
		//alert(idSrc);
		for (var i = 0; i < ChampsSaisis.length; i++){
			var champ = ChampsSaisis[i];
			if(champ.tagName != "label" && champ.tagName != "button"){
				//r�cup�re l'id
				var idDst = champ.getAttribute("id").replace("saisie_", "");
				//alert(idSrc+' | '+idDst);
				//r�cup�re le texte
				var texte = champ.value;
				//replace le texte
				document.getElementById(idDst).firstChild.data= texte; 	
			}
		}
	} catch(ex2){alert("interface:ModifChampsSvg:"+ex2);}	
}

// Modifier la valeur d'un champ
function ChangeAttributsValeur(idsDst, att, val){
	try {
		var arrId = idsDst.split(sep);
		for (var i = 0; i < arrId.length; i++)
			document.getElementById(arrId[i]).setAttribute(att,val);
	} catch(ex2){alert("interface:ChangeAttributsValeur:"+ex2);}
}

// Afficher un graphe SVG
function MontrerSvg(idsDst){
	try {
		var arrId = idsDst.split(sep);
		for (var i = 0; i < arrId.length; i++)
			document.getElementById(arrId[i]).setAttribute("visibility","visible");
	} catch(ex2){alert("interface:MontrerSvg:"+ex2);}
}

// Afficher ou Cacher un �l�ment XUL donn�e 
function MontrerCacherXul(idsDst){
	try {
		var arrId = idsDst.split(sep);
		for (var i = 0; i < arrId.length; i++){
			//alert("arrId[i] : "+arrId[i]);
			var xul = document.getElementById(arrId[i]);
			if(xul.getAttribute("hidden")=="true"){
				xul.setAttribute("hidden","false");
				if (arrId[1]=="fig_18")	{
					document.getElementById("D1").setAttribute("hidden","false");
					//document.getElementById("D2").setAttribute("hidden","false");
					document.getElementById("m11").setAttribute("hidden","false");
					document.getElementById("m12").setAttribute("hidden","false");
				}
				else if (arrId[1]=="fig_19"){
					document.getElementById("m12").setAttribute("hidden","false");
				}
				/*else if (arrId[1]=="fig_21"){
					document.getElementById("ch1").setAttribute("hidden","true");
					document.getElementById("ch2").setAttribute("hidden","true");
				}*/
			}
			else
				xul.setAttribute("hidden","true");
		}
	} catch(ex2){alert("interface:MontrerXul:"+ex2);}
}

// Enregistrement d'un document dans un fichier
function serialize(doc,file,extra) {

  try {
    //http://developer.mozilla.org/fr/docs/Extraits_de_code:Fichiers_E/S
    netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
    
    //alert(file.path);    
    var serializer = new XMLSerializer();
    var xml = serializer.serializeToString(doc);
    //si le fichier n'est pas pr�ciser on renvoit le xml
    if(!file)
        return xml;
    
    if(extra){
        //supprime le namespace
        var debTree = xml.indexOf("onselect",0);
        //alert(debBody+','+finBody);
        xml = xml.substring(debTree,xml.length);
        //ajoute l'encoding et le debut du tree
        //xml = "<?xml version='1.0' encoding='UTF-8' ?><tree "+xml;
        xml = "<?xml version='1.0' encoding='ISO-8859-1' ?><tree "+xml;
    }
        
    var foStream = Components.classes["@mozilla.org/network/file-output-stream;1"]
                   .createInstance(Components.interfaces.nsIFileOutputStream);
    foStream.init(file, 0x02 | 0x08 | 0x20, 0666, 0); // write, create, truncate
    //serializer.serializeToStream(doc, foStream, "");   // rememeber, doc is the DOM tree
    foStream.write(xml, xml.length);
    foStream.close();
        
  } catch(ex2){ alert("interface:serialize:"+ex2); }
}

// Afficher le menu de sauvegarde  
function Export(){
	try{
		
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		var nsIFilePicker = Components.interfaces.nsIFilePicker;
		var fp = Components.classes["@mozilla.org/filepicker;1"]
				  .createInstance(nsIFilePicker);
		fp.init(window, "Select a File", nsIFilePicker.modeSave);
		fp.defaultExtension ="svg";
		fp.appendFilter("Fichier SVG","*.svg");
		var res = fp.show();
		if (res == nsIFilePicker.returnOK){
			var fichier = fp.file;
			var fichierO=fichier.path;
			var fichierC;
			if (fichierO.substr(fichierO.length-4,4)!=".svg")
				fichierC=fichierO+".svg";
			else
				fichierC=fichierO;	
			var doc = getSVG();		
			serialize(doc,fichier,0);	
			
		}
		else if (res==2){
			var fichier = fp.file;
			var doc = getSVG();
			serialize(doc,fichier,0);
		}
		
	}catch(ex2){ alert("interface:Save:"+ex2); }
} 

// Afficher le menu d'ouverture de fichier
function Import(){
	try{
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		var nsIFilePicker = Components.interfaces.nsIFilePicker;
		var fp = Components.classes["@mozilla.org/filepicker;1"]
				  .createInstance(nsIFilePicker);
		fp.init(window, "Select a File", nsIFilePicker.modeOpen);
		fp.appendFilter("Fichier SVG","*.svg");
		
		var res = fp.show();
		if (res == nsIFilePicker.returnOK){
			var fichier = fp.file;
			document.getElementById("svgFrame").setAttribute("src","");
			var chemin = fichier.path;	
			
			
			//AppendSVG("chrome://archipoenum/content/sauvegardes/"+fichier.leafName,document.getElementById("fig_21"));
			xml = read(chemin);
			var parser=new DOMParser();
			// Transformer le String en Objet DOM
			var resultDoc=parser.parseFromString(xml,"text/xml");
			// Int�grer le DOM r�cup�r� � l'interieur de document
			resultDoc.documentElement.setAttribute("id",fichier.leafName);
			document.getElementById("C1").appendChild(resultDoc.documentElement);
			
			//doc=document.getElementById(figure_courant);
			//doc.removeChild(doc.firstChild);              
			document.getElementById(figure_courant).setAttribute("hidden","true	");
			figure_courant=fichier.leafName;
			
			//alert ('chemin ='+s);
		}

		
	}catch(ex2){ alert("interface:Import: "+ex2); }
} 

function Open(){
			netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
  	
			//saisi le libell� 
			/*var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
			                        .getService(Components.interfaces.nsIPromptService);
			var input = {value: ""};
			var check = {value: false};
			result = prompts.prompt(window, "Donner l'identifiant du SVG", "Saisir l'identifiant du SVG", input, null, check);
			if(!result)
				return;*/
			 var win = window.openDialog("http://localhost/archipoenum/Ouvrir.xul", "dlg", "dependent,dialog,modal,width=320,height=200", "");
			

}

// biblioth�que SQLite http://codesnippets.joyent.com/posts/show/1030
var $sqlite = {
	storageService: [],
	mDBConn: [],
	
	_initService : function(file){
		//http://xulfr.org/wiki/RessourcesLibs/LectureFichierCodeAvecCommentaires
    	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		var db = Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("ProfD", Components.interfaces.nsIFile);
		db.append(file);
		this.storageService[file] = Components.classes["@mozilla.org/storage/service;1"].getService(Components.interfaces.mozIStorageService);
		this.mDBConn[file] = (this.storageService[file]).openDatabase(db);
			
	},
	
	select : function(file,sql,param){
		if (this.storageService[file]== undefined){
                    this._initService(file);
		}
		var ourTransaction = false;
		if ((this.mDBConn[file]).transactionInProgress){
			ourTransaction = true;
			(this.mDBConn[file]).beginTransactionAs((this.mDBConn[file]).TRANSACTION_DEFERRED);
		}
		var statement = (this.mDBConn[file]).createStatement(sql);
                if (param){
			for (var m=2, arg=null; arg=arguments[m]; m++) {
				statement.bindUTF8StringParameter(m-2, arg);
			}
		}
		try{
			var dataset = [];
			while (statement.executeStep()){
				var row = [];
				for(var i=0,k=statement.columnCount; i<k; i++){
					row[statement.getColumnName(i)] = statement.getUTF8String(i);
				}
				dataset.push(row);
			}
			// return dataset;	
		}
		finally {
			statement.reset();
		}
		if (ourTransaction){
			(this.mDBConn[file]).commitTransaction();
		}
        return dataset;	
	},
	
	
	cmd : function(file,sql,param){
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		if (this.storageService[file] == undefined){
	                    this._initService(file);
		}
		var ourTransaction = false;
		
		if ((this.mDBConn[file]).transactionInProgress){
			ourTransaction = true;
			(this.mDBConn[file]).beginTransactionAs((this.mDBConn[file]).TRANSACTION_DEFERRED);
		}
		var statement = (this.mDBConn[file]).createStatement(sql);
		if (param){
			for (var m=2, arg=null; arg=arguments[m]; m++) {
				statement.bindUTF8StringParameter(m-2, arg);
			}
		}
		try{
			statement.execute();
		}
		finally {
			statement.reset();
		}
		if (ourTransaction){
			(this.mDBConn[file]).commitTransaction();
		}
	}	

}
function getSVG_DB(id_svg){
try{
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		var file = Components.classes["@mozilla.org/file/directory_service;1"]
                     .getService(Components.interfaces.nsIProperties)
                     .get("ProfD", Components.interfaces.nsIFile);
		file.append(myDBFile);
		var storageService = Components.classes["@mozilla.org/storage/service;1"]
		                        .getService(Components.interfaces.mozIStorageService);
		var mDBConn = storageService.openDatabase(file);
		
		var statement = mDBConn.createStatement('SELECT fichier FROM svg where id_svg=?1;');
		statement.bindUTF8StringParameter(0,id_svg);
		
		var dataset = [];
		while (statement.executeStep()){
			var row = [];
			for(var i=0,k=statement.columnCount; i<k; i++){
				row[statement.getColumnName(i)] = statement.getUTF8String(i);
			}
			dataset.push(row);
		}
			// return dataset;	
		
		
		var myArray1 = dataset;
		// Now you can loop through the array:
		test =0;
		j=0;
		//alert (myArray1.length);
		for(var j=0;j<myArray1.length;j++){
			alert("SVG : "+myArray1[j]['fichier']);
			return myArray1[j]['fichier'];
		}
		statement.reset();
	}
	catch(ex2){ 
		alert("interface:getSVG_DB: "+ex2); 
		statement.reset();
		
	}
} 
function annuler(){

window.close();}
function svg_open(choix_svg,fig_svg)
{
			//xml = getSVG_DB(choix_svg);
			//figure_courant=get_figure(input.value);
			//alert ("fig : "+figure_courant);
			//alert (input.value);
			var parser=new DOMParser();
			// Transformer le String en Objet DOM
			var resultDoc=parser.parseFromString(fig_svg,"text/xml");
			// Int�grer le DOM r�cup�r� � l'interieur de document
			document.getElementById(choix_svg).appendChild(resultDoc.documentElement);
			
			doc=document.getElementById(choix_svg);
			doc.removeChild(doc.firstChild);
			if (figure_courant!=choix_svg)  {            
				document.getElementById(choix_svg).setAttribute("hidden","true");
				//alert ("hidden : true");	
			}
}
function ok_svg(){
	var fichier_svg=document.getElementById("choixSVG").selectedItem.getAttribute("fichier");
	var figure_svg=document.getElementById("choixSVG").selectedItem.getAttribute("figure");
	alert(figure_svg);
	alert(fichier_svg);
	window.close();
	window.opener.svg_open(figure_svg,fichier_svg);
}
function get_list_SVG_DB(){
try{
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		var file = Components.classes["@mozilla.org/file/directory_service;1"]
                     .getService(Components.interfaces.nsIProperties)
                     .get("ProfD", Components.interfaces.nsIFile);
		file.append(myDBFile);
		var storageService = Components.classes["@mozilla.org/storage/service;1"]
		                        .getService(Components.interfaces.mozIStorageService);
		var mDBConn = storageService.openDatabase(file);
		
		var statement = mDBConn.createStatement('SELECT * FROM svg ;');
		//statement.bindUTF8StringParameter(0,id_svg);
		
		var dataset = [];
		while (statement.executeStep()){
			var row = [];
			for(var i=0,k=statement.columnCount; i<k; i++){
				row[statement.getColumnName(i)] = statement.getUTF8String(i);
			}
			dataset.push(row);
		}
			// return dataset;	
		
		
		var myArray1 = dataset;
		// Now you can loop through the array:
		test =0;
		j=0;
		//alert (myArray1.length);
		var popup = document.getElementById("SVG_list");
		for(var j=0;j<myArray1.length;j++){
			//alert("SVG : "+myArray1[j]['fichier']);
			var m1=createMenuItem(myArray1[j]['id_svg']+' : '+myArray1[j]['figure_c']);
			m1.setAttribute("value",myArray1[j]['id_svg']);
			m1.setAttribute("fichier",myArray1[j]['fichier']);
			m1.setAttribute("figure",myArray1[j]['figure_c']);
			popup.appendChild(m1);
		//	return myArray1[j]['fichier'];
		}
		statement.reset();
	}
	catch(ex2){ 
		alert("interface:getSVG_DB: "+ex2); 
		statement.reset();
		
	}
} 


function get_figure(id_svg){
try{
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		var file = Components.classes["@mozilla.org/file/directory_service;1"]
                     .getService(Components.interfaces.nsIProperties)
                     .get("ProfD", Components.interfaces.nsIFile);
		file.append(myDBFile);
		//alert ("id_svg : "+id_svg);
		var storageService = Components.classes["@mozilla.org/storage/service;1"]
		                        .getService(Components.interfaces.mozIStorageService);
		var mDBConn = storageService.openDatabase(file);
		
		var statement = mDBConn.createStatement('SELECT figure_c FROM svg where id_svg=?1;');
		statement.bindUTF8StringParameter(0,id_svg);
		
		var dataset = [];
		while (statement.executeStep()){
			var row = [];
			for(var i=0,k=statement.columnCount; i<k; i++){
				row[statement.getColumnName(i)] = statement.getUTF8String(i);
			}
			dataset.push(row);
		}
			// return dataset;	
		
		
		var myArray1 = dataset;
		// Now you can loop through the array:
		test =0;
		j=0;
		//alert (myArray1.length);
		for(var j=0;j<myArray1.length;j++){
			//alert("SVG : "+myArray1[j]['figure_c']);
			return myArray1[j]['figure_c'];
		}
		statement.reset();
	}
	catch(ex2){ 
		alert("interface:getSVG_DB: "+ex2); 
		statement.reset();
		
	}
} 

function login_user(){
	try{
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		var file = Components.classes["@mozilla.org/file/directory_service;1"]
                     .getService(Components.interfaces.nsIProperties)
                     .get("ProfD", Components.interfaces.nsIFile);
		file.append(myDBFile);
		
		var storageService = Components.classes["@mozilla.org/storage/service;1"]
		                        .getService(Components.interfaces.mozIStorageService);
		var mDBConn = storageService.openDatabase(file);
		login = document.getElementById("nom").value;
		password = document.getElementById("passwd").value;
		alert (login +' : '+password);
		var statement = mDBConn.createStatement('SELECT login,pwd FROM utilisateur where login=?1');
		statement.bindUTF8StringParameter(0,login);
		
		var dataset = [];
		while (statement.executeStep()){
			var row = [];
			for(var i=0,k=statement.columnCount; i<k; i++){
				row[statement.getColumnName(i)] = statement.getUTF8String(i);
			}
			dataset.push(row);
		}
			// return dataset;	
		
		
		var myArray1 = dataset;
		// Now you can loop through the array:
		test =0;
		j=0;
		//alert (myArray1.length);
		for(var j=0;j<1;j++){
			//alert("User : "+myArray1[j]['login']);
			if (password==myArray1[j]['pwd']) {
				var load = window.open('http://localhost/archipoenum/index.xul?login='+login,'','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,location=no,status=no');
				test=1;
				user=login;
				//alert(user);
				//getElementById("u1").setAttribute("value","Utilisateur Connect� :"+user);				
			}
			else document.getElementById("erreur_login").setAttribute("hidden","false");
		}
		if (test==0)document.getElementById("erreur_login").setAttribute("hidden","false");
		statement.reset();
	}
	catch(ex2){ 
		alert("interface:login: "+ex2); 
		statement.reset();
		
	}
} 


  
function createDB(){
	try {
		var myCreateDBQuery =  'CREATE TABLE IF NOT EXISTS utilisateur (id INTEGER PRIMARY KEY AUTOINCREMENT,  login uniqueidentifier, pwd varchar(40));';
		var myCreateDBQuery2 = 'CREATE TABLE IF NOT EXISTS tag (id_tag INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, tag varchar(40), poids int, domaine varchar(40));';
		var myCreateDBQuery3 = 'CREATE TABLE IF NOT EXISTS tag_cloud (id_user uniqueidentifier , id_tag uniqueidentifier , id_hist uniqueidentifier);';
		var myCreateDBQuery4 = 'CREATE TABLE IF NOT EXISTS forms (id_f INTEGER PRIMARY KEY AUTOINCREMENT,  nom varchar(40), id_svg uniqueidentifier);';  
		var myCreateDBQuery5 = 'CREATE TABLE IF NOT EXISTS champs (id_c INTEGER PRIMARY KEY AUTOINCREMENT, titre varchar(40), id_f uniqueidentifier);';  
		var myCreateDBQuery6 = 'CREATE TABLE IF NOT EXISTS donnees (id_d INTEGER PRIMARY KEY AUTOINCREMENT,  id_f uniqueidentifier);';  
		var myCreateDBQuery7 = 'CREATE TABLE IF NOT EXISTS valeurs (id_v INTEGER PRIMARY KEY AUTOINCREMENT, valeur varchar(40), id_c uniqueidentifier, id_d uniqueidentifier);';
		var myCreateDBQuery8 = 'CREATE TABLE IF NOT EXISTS historique (id_hist INTEGER PRIMARY KEY AUTOINCREMENT, date varchar(40));';  
		var myCreateDBQuery9 = 'CREATE TABLE IF NOT EXISTS svg (id_svg INTEGER PRIMARY KEY AUTOINCREMENT,  fichier text(1000),figure_c text(40), id_user uniqueidentifier);'; 
		$sqlite._initService(myDBFile);
		$sqlite.cmd(myDBFile,myCreateDBQuery);
		$sqlite.cmd(myDBFile,myCreateDBQuery2);
		$sqlite.cmd(myDBFile,myCreateDBQuery3);
		$sqlite.cmd(myDBFile,myCreateDBQuery4);
		$sqlite.cmd(myDBFile,myCreateDBQuery5);
		$sqlite.cmd(myDBFile,myCreateDBQuery6);
		$sqlite.cmd(myDBFile,myCreateDBQuery7);
		$sqlite.cmd(myDBFile,myCreateDBQuery8);
		$sqlite.cmd(myDBFile,myCreateDBQuery9);
	}
	catch(ex2){ 
		alert("interface::createDB"+ex2); 
		//statement.reset();
	}
}

function insert_user (){
	try {
		
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		createDB();
		login = document.getElementById("login_i").value;
		password = document.getElementById("password_i").value;
		alert (login +' : '+password);
		var file = Components.classes["@mozilla.org/file/directory_service;1"]
	                     .getService(Components.interfaces.nsIProperties)
	                     .get("ProfD", Components.interfaces.nsIFile);
		file.append(myDBFile);
	
		var storageService = Components.classes["@mozilla.org/storage/service;1"]
	                        .getService(Components.interfaces.mozIStorageService);
		var mDBConn = storageService.openDatabase(file);
		var sql = 'INSERT INTO utilisateur(login,pwd) VALUES(?1,?2);';
		var statement = mDBConn.createStatement(sql);
	    statement.bindUTF8StringParameter(0, login);
	    statement.bindUTF8StringParameter(1, password);
	    statement.execute();
	    statement.reset();
	    
	    //Partie login
	    netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');

			// return dataset;	
		
		
		//var myArray1 = dataset;
		// Now you can loop through the array:
		test =0;
		j=0;
		//alert (myArray1.length);

		var load = window.open('http://localhost/archipoenum/index.xul?login='+login,'','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,location=no,status=no');
		statement.reset();
	}
	catch(ex2){
		alert("interface: insert_user: "+ex2);
		//statement.reset(); 
	}
}

function Save_SVG(){
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		createDB();
		svg = getSVG();
		alert ("SVG : "+svg);
		var file = Components.classes["@mozilla.org/file/directory_service;1"]
	                     .getService(Components.interfaces.nsIProperties)
	                     .get("ProfD", Components.interfaces.nsIFile);
		file.append(myDBFile);
	
		var storageService = Components.classes["@mozilla.org/storage/service;1"]
	                        .getService(Components.interfaces.mozIStorageService);
		var mDBConn = storageService.openDatabase(file);
		var sql = 'INSERT INTO svg(fichier,figure_c) VALUES(?1,?2);';
		var statement = mDBConn.createStatement(sql);
	    statement.bindUTF8StringParameter(0,svg);
	    statement.bindUTF8StringParameter(1,figure_courant);
	    //statement.bindUTF8StringParameter(1, password);
	    statement.execute();
	    statement.reset();
}

function read(filepath) {
  try {
	//http://xulfr.org/wiki/RessourcesLibs/LectureFichierCodeAvecCommentaires
    netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	  
	//Le fichier est ouvert
	 var file =  Components.classes["@mozilla.org/file/local;1"]
	            .createInstance(Components.interfaces.nsILocalFile);
	 file.initWithPath(filepath);
	 if ( file.exists() != true) {
	  alert("Le fichier "+filepath+" n'existe pas");
	  return ;
	 }

	 //Mode de lecture du fichier, un flux est n�cessaire
	 //Le second argument d�finit les diff�rents modes de lecture parmis
	 //PR_RDONLY     =0x01 lecture seulement
	 //PR_WRONLY     =0x02 �criture seulement
	 //PR_RDWR       =0x04 lecture ou �criture
	 //PR_CREATE_FILE=0x08 si le fichier n'existe pas, il est cr�� (sinon, sans effet)
	 //PR_APPEND     =0x10 le fichier est positionn� � la fin avant chaque �criture
	 //PR_TRUNCATE   =0x20 si le fichier existe, sa taille est r�duite � z�ro
	 //PR_SYNC       =0x40 chaque �criture attend que les donn�es ou l'�tat du fichier soit mis � jour
	 //PR_EXCL       =0x80 idem que PR_CREATE_FILE, sauf que si le fichier existe, NULL est retourn�e
	 //Le troisi�me argument d�finit les droits

	 var inputStream = Components.classes["@mozilla.org/network/file-input-stream;1"]
	         .createInstance( Components.interfaces.nsIFileInputStream );
	 inputStream.init(file, 0x01, 00004, null);
	 var sis = Components.classes["@mozilla.org/binaryinputstream;1"]
	          .createInstance(Components.interfaces.nsIBinaryInputStream);

	 sis.setInputStream( inputStream );
	 var output = sis.readBytes( sis.available() );
	 return output;
 
  } catch(ex2){ alert("read::"+filepath+" "+ex2); }
 
 }

// R�cup�rer le SVG � partir du fichier et le charger dans le document en cours 
function AppendSVG(url,doc) {
  try {
	dump("AppendSVG IN "+url+"\n");

	// Fonction Ajax pour r�cup�rer le SVg � partir de l'url
	p = new XMLHttpRequest();
	p.onload = null;
	p.open("GET", url, false);
	p.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	p.send(null);

	if (p.status != "200" ){
	      alert("R�ception erreur " + p.status);
	}else{

	    var response = p.responseText;
		var parser=new DOMParser();
		// Transformer le String en Objet DOM
		var resultDoc=parser.parseFromString(response,"text/xml");
		resultDoc.documentElement.setAttribute("id","Document_"+docs);
		resultDoc.documentElement.setAttribute("hidden","true");
		resultDoc.getElementById("fig_18_document").setAttribute("id","Document_"+docs+"_document");
		resultDoc.getElementById("fig_18_type").setAttribute("id","Document_"+docs+"_type");
		resultDoc.getElementById("fig_18_format").setAttribute("id","Document_"+docs+"_format");
		resultDoc.getElementById("fig_18_section").setAttribute("id","Document_"+docs+"_section");
		resultDoc.getElementById("fig_18_nature").setAttribute("id","Document_"+docs+"_nature");
		resultDoc.getElementById("fig_18_actor").setAttribute("id","Document_"+docs+"_actor");
		resultDoc.getElementById("fig_18_ontoactor").setAttribute("id","Document_"+docs+"_ontoactor");
		resultDoc.getElementById("fig_18_concept").setAttribute("id","Document_"+docs+"_concept");
		resultDoc.getElementById("fig_18_work").setAttribute("id","Document_"+docs+"_work");
		resultDoc.getElementById("fig_18_instance").setAttribute("id","Document_"+docs+"_instance");
		resultDoc.getElementById("fig_18_physicpart").setAttribute("id","Document_"+docs+"_physicpart");
		// Int�grer le DOM r�cup�r� � l'interieur de document
		doc.appendChild(resultDoc.documentElement);

	}
	dump("AppendSVG OUT \n");
   } catch(ex2){alert("AppendSVG::"+ex2);}
}

// R�cup�rer le SVG en cours d'utilisation
function getSVG(){
	try {
		var svg;
		alert(figure_courant);
		svg=document.getElementById(figure_courant).firstChild;
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
    
	    //alert(file.path);    
	    var serializer = new XMLSerializer();
	    var xml = serializer.serializeToString(svg);
		return xml;
		
	} 
	catch(ex2){alert("interface:getSVG:"+ex2); }
}

// Afficher le figure principale
function afficher(){
try{
	document.getElementById(figure_courant).setAttribute("hidden","true");
	document.getElementById("fig_18").setAttribute("hidden","true");
	document.getElementById("fig_19").setAttribute("hidden","true");
	document.getElementById("fig_21").setAttribute("hidden","false");
	
	//document.getElementById("ch1").setAttribute("hidden","true");
	//document.getElementById("ch2").setAttribute("hidden","true");
} 
catch(ex2){alert("interface:afficher:"+ex2); }
}

function afficher1(){
try{
document.getElementById(figure_courant).setAttribute("hidden","true");
	document.getElementById("fig_19").setAttribute("hidden","true");
	document.getElementById("fig_18").setAttribute("hidden","false");
	document.getElementById("fig_21").setAttribute("hidden","true");
	
	//document.getElementById("ch2").setAttribute("hidden","true");
	//document.getElementById("ch3").setAttribute("hidden","true");
} 
catch(ex2){alert("interface:afficher1:"+ex2); }
}

function afficher2(){
try{
	//alert("ch3");
	document.getElementById(figure_courant).setAttribute("hidden","true");
	document.getElementById("fig_18").setAttribute("hidden","true");
	document.getElementById("fig_19").setAttribute("hidden","false");
	document.getElementById("fig_21").setAttribute("hidden","true");
	
	//document.getElementById("ch3").setAttribute("hidden","false");
} 
catch(ex2){alert("interface:afficher2:"+ex2); }
}

function afficher3(id_svg){
try{
	//alert("ch3");
	document.getElementById(id_svg).setAttribute("hidden","false");
	document.getElementById(figure_courant).setAttribute("hidden","true");
	document.getElementById("fig_18").setAttribute("hidden","true");
	document.getElementById("fig_19").setAttribute("hidden","true");
	document.getElementById("fig_21").setAttribute("hidden","true");
	
	//document.getElementById("ch3").setAttribute("hidden","false");
} 
catch(ex2){alert("interface:afficher3:"+ex2); }
}

function createMenuItem(aLabel) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(XUL_NS, "menuitem"); // create a new XUL menuitem
  item.setAttribute("label", aLabel);
  return item;
}

function createMenu(aLabel) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(XUL_NS, "menu"); // create a new XUL menuitem
  item.setAttribute("label", aLabel);
  return item;
}

function createMenuPopup(aId) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(XUL_NS, "menupopup"); // create a new XUL menuitem
  item.setAttribute("id", aId);
  return item;
}
function RC(chaine, quoi, par)
{
	i=0;
	k=0;
	r="";
	match=false;
	while(i<chaine.length)
	{
		c=chaine.charAt(i);
		if(c==quoi.charAt(k))
		{
			match=true;k++;
		} 
		else 
		{	
			if(match==true)
				{
					for(z=i-k; z<i; z++)
					{
						r=r+chaine.charAt(z);
					}
				}
		match=false;
		k=0;};
		if(match==false)
		{
			r=r+c;
			i++;
		}
		else
		{
			if(k==quoi.length)
			{
				r=r+par;
				match=false;
				k=0;
			}
			i++;
		}
	}
	return r;
}


function Ajouter_doc() {

		//AppendSVG("chrome://archipoenum/content/sauvegardes/"+fichier.leafName,document.getElementById("fig_21"));
	chemin="C:\\wamp\\www\\archipoenum\\library\\xul\\doc.xul";	
	xml = read(chemin);
	xml2=RC(xml,"fig_18","Document_"+docs);
	//AppendSVG("http://localhost/archipoenum/library/xul/doc.xul",document.getElementById("C1"));
	var parser=new DOMParser();
	// Transformer le String en Objet DOM
	var resultDoc=parser.parseFromString(xml2,"text/xml");
	// Int�grer le DOM r�cup�r� � l'interieur de document
/*		resultDoc.documentElement.setAttribute("id","Document_"+docs);
		resultDoc.documentElement.setAttribute("hidden","true");
		resultDoc.getElementById("fig_18_document").setAttribute("id","Document_"+docs+"_document");
		resultDoc.getElementById("fig_18_type").setAttribute("id","Document_"+docs+"_type");
		resultDoc.getElementById("fig_18_format").setAttribute("id","Document_"+docs+"_format");
		resultDoc.getElementById("fig_18_section").setAttribute("id","Document_"+docs+"_section");
		resultDoc.getElementById("fig_18_nature").setAttribute("id","Document_"+docs+"_nature");
		resultDoc.getElementById("fig_18_actor").setAttribute("id","Document_"+docs+"_actor");
		resultDoc.getElementById("fig_18_ontoactor").setAttribute("id","Document_"+docs+"_ontoactor");
		resultDoc.getElementById("fig_18_concept").setAttribute("id","Document_"+docs+"_concept");
		resultDoc.getElementById("fig_18_work").setAttribute("id","Document_"+docs+"_work");
		resultDoc.getElementById("fig_18_instance").setAttribute("id","Document_"+docs+"_instance");
		resultDoc.getElementById("fig_18_physicpart").setAttribute("id","Document_"+docs+"_physicpart");*/
		document.getElementById("D2").appendChild(resultDoc.documentElement);
	
	//doc=document.getElementById(figure_courant);
	//doc.removeChild(doc.firstChild);              
	//document.getElementById(figure_courant).setAttribute("hidden","true	");
	//figure_courant="Document"+docs;
	//alert ('chemin ='+s);
	chemin="C:\\wamp\\www\\archipoenum\\library\\xul\\DocSaisie.xul";	
	xml = read(chemin);
	xml2=RC(xml,"fig_18","Document_"+docs);
	//AppendSVG("http://localhost/archipoenum/library/xul/doc.xul",document.getElementById("C1"));
	var parser=new DOMParser();
	// Transformer le String en Objet DOM
	var resultDoc=parser.parseFromString(xml2,"text/xml");
	resultDoc.getElementById("ZonesSaisies").setAttribute("id","ZonesSaisies_"+docs);
	document.getElementById("S1").appendChild(resultDoc.documentElement);
			
	var popup = document.getElementById("test"); // a <menupopup> element
	var first = createMenu("Document_"+docs);
	var pop = createMenuPopup("p"+docs);
	var last = createMenuItem("DOC");
	last.setAttribute("onclick","afficher3('Document_"+docs+"')");
	var last2 = createMenuItem("Acteur");
	pop.appendChild(last);
	pop.appendChild(last2);
	first.appendChild(pop);
	popup.appendChild(first);
	docs++;
}



function afficher_form_user(){
try{
	if (document.getElementById("form_user").getAttribute("hidden")=="true"){
			document.getElementById("form_user").setAttribute("hidden","false");
			document.getElementById("user_c").setAttribute("label","Cacher le formulaire     --->");
	}
	else if (document.getElementById("form_user").getAttribute("hidden")=="false"){
			document.getElementById("form_user").setAttribute("hidden","true");
			document.getElementById("user_c").setAttribute("label","Creer un nouveau utilisateur");
	}
	else{
		alert (document.getElementById("form_user").getAttribute("hidden"));
	}


} 
catch(ex2){alert("interface:afficher_form_user:"+ex2); }
}


function logout(){
	document.getElementById("logout").setAttribute("hidden","false");
	document.getElementById("logout_user").setAttribute("value",user+" est deconnecter");
	document.getElementById(figure_courant).setAttribute("hidden","true");
	alert(user+" est deconnecter");
	window.close();
}
/*
function createMenuItem() {
  const XUL_NS = "http://www.mozilla.org/keymaster/gat...re.is.only.xul";
  var item = document.createElementNS(XUL_NS, "menu"); // cr�e un nouvel �l�ment de menu XUL
  var item2=document.createElementNS(XUL_NS, "menupopup");
  var item3=document.createElementNS(XUL_NS, "menuitem");
  //var item4=document.createElementNS(XUL_NS, "menupopup");
  item.setAttribute("label", "Document2");
  item.setAttribute("id", "D3");
//  item.setAttribute("flex","1");
  item3.setAttribute("label", "Doc");
  item3.setAttribute("id", "m261");
  //item.setAttribute("hidden", "false");
  //item2.setAttribute("hidden", "false");
  //item3.setAttribute("hidden", "true");
  item.appendChild(item2);
  item2.appendChild(item3);
  var popup = document.getElementById("test");
 // popup.appendChild(item2);
  popup.appendChild(item);
  
  
  //return item;
}
*/