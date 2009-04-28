var trace=true;
var sep=";";
var xulDoc=window.parent.document;
var arrValidation = new Array();
var figure_courant="fig_21";
var myDBFile="archipoenum.sqlite";
var SVG_NS ="http://www.w3.org/2000/svg";
var docs=2;
var doc_courant="";
var user;
var id_user;
var ladate=new Date();
//var cmpt=1;
function  init(){	
	var parameters = location.search.substring(1).split("&");
	//alert(parameters);
	//alert(parameters[0]);
    var temp = parameters[0].split("=");
    var temp2 = parameters[1].split("=");
    user = unescape(temp[1]);
    id_user=unescape(temp2[1]);
    //alert(id_user+' : '+user);
	document.getElementById("u1").setAttribute("value","Utilisateur Connecte : "+user);
	document.getElementById("ch1").setAttribute("label",user);
	document.getElementById("u1").setAttribute("hidden","false");
	document.getElementById("u2").setAttribute("hidden","false");
	document.getElementById("fig_21_indexer").setAttribute("fill","green");
	document.getElementById("fig_21_indexing").setAttribute("fill","green");
	document.getElementById("fig_21_indexer_name").firstChild.data=user;
	document.getElementById("fig_21_indexing_id").firstChild.data=id_user;
	document.getElementById("fig_21_indexing_date").firstChild.data=ladate.getDate()+"-"+(ladate.getMonth()+1)+"-"+ladate.getFullYear();
	get_list_SVG_user();
}
function SetFichier(){
	
  try {
    netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
  	
	//saisi le libellé 
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
	//vérification de l'extension

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

// Changer le couleur de graphe séléctionné aprés la validation des données saisies
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

// Afficher la partie de saisir des données
function  Saisir(idSrc,figure){
	
	try {
		figure_courant=figure;
		//alert(figure_courant);
		//var svgDoc=window.parent.frames['svgFrame'].document;
		//affiche les champs de saisie
		MontrerCacherXul("saisie_"+idSrc);
		//passe le graphique à l'orange
		document.getElementById(idSrc).setAttribute("fill","orange");
	} catch(ex2){alert("interface:Saisir:"+ex2);}
	
}

// Changer le variable figure_courant
function changer(figure){
	figure_courant=figure;
	//alert('Changer à'+figure_courant);
}

// Changer le couleur de graphe séléctionné
function Valider(idSrc,idsDst,idsValid){
	
	try {
		//passe le graphique au vert
		document.getElementById(idSrc).setAttribute("fill","green");
		//change les champs saisis
		ModifChampsSvg(idSrc);
		//vérifie l'afichage de nouveaux graphiques
		if(IdsEstValider(idsValid)){
			MontrerSvg(idsDst);
			
		}
		//cache le xul
		MontrerCacherXul("saisie_"+idSrc);
		//enregistre la validation
		arrValidation.push(idSrc);
	} catch(ex2){alert("interface:Valider:"+ex2);}
	
}

// Vérifier que le graphe est validé ou non
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
		for (var i = 1; i < ChampsSaisis.length; i++){
			//alert(champ);
			var champ = ChampsSaisis[i];
			if( champ!=ChampsSaisis[0] && champ.tagName != "label" && champ.tagName != "button"){
				//récupére l'id
				var idDst = champ.getAttribute("id").replace("saisie_", "");
				//alert(idSrc+' | '+idDst);
				//récupère le texte
				if (champ.tagName == "menulist"){
					if (champ.selected){
						text=champ.value;
						alert(champ.value);
					}
				}
				else
					var texte = champ.value;
				//replace le texte
				document.getElementById(idDst).firstChild.data= texte; 	
			}
			i++;
			//alert(i);
		}
		if (idSrc=='fig_21_indexer'){
			document.getElementById("fig_21_indexer_name").firstChild.data=champ.value;
			document.getElementById("u1").setAttribute("value","Utilisateur Connecte : "+champ.value);
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

// Afficher ou Cacher un élément XUL donnée 
function MontrerCacherXul(idsDst){
	try {
		var arrId = idsDst.split(sep);
		for (var i = 0; i < arrId.length; i++){
			//alert("arrId[i] : "+arrId[i]);
			var xul = document.getElementById(arrId[i]);
			if(xul.getAttribute("hidden")=="true"){
				xul.setAttribute("hidden","false");
				if (arrId[1]=="fig_18")	{
					document.getElementById("ch2").setAttribute("hidden","false");
					document.getElementById("D1").setAttribute("hidden","false");
					//document.getElementById("D2").setAttribute("hidden","false");
					document.getElementById("m11").setAttribute("hidden","false");
					//document.getElementById("m12").setAttribute("hidden","false");
					document.getElementById("add_doc").setAttribute("disabled","false");
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
    //si le fichier n'est pas préciser on renvoit le xml
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
function Export(cmp){
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
			if (cmp=="p")	
				var doc = getSVG();
			else if (cmp=="a")
				doc = 	document.getElementById("svg_1");	
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
function Import(cmp){
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
			//document.getElementById("svgFrame").setAttribute("src","");
			var chemin = fichier.path;	
			if (cmp=='p')
			{
				//AppendSVG("chrome://archipoenum/content/sauvegardes/"+fichier.leafName,document.getElementById("fig_21"));
				xml = read(chemin);
				var parser=new DOMParser();
				// Transformer le String en Objet DOM
				var resultDoc=parser.parseFromString(xml,"text/xml");
				// Intégrer le DOM récupéré à l'interieur de document
				resultDoc.documentElement.setAttribute("id",fichier.leafName);
				document.getElementById("C1").appendChild(resultDoc.documentElement);
				
				doc=document.getElementById(figure_courant);
				doc.removeChild(doc.firstChild);              
				document.getElementById(figure_courant).setAttribute("hidden","true	");
				figure_courant=fichier.leafName;
			}
			else if (cmp=='a')
			{
				document.getElementById("f_svg").setAttribute("value",chemin);
				document.getElementById("l1").setAttribute("hidden","false");
				//var resultDoc=set_ids(chemin);
			}
			
			//alert ('chemin ='+s);
		}

		
	}catch(ex2){ alert("interface:Import: "+ex2); }
} 



function interface_modif()
{
try
{
	chemin=document.getElementById("f_svg").getAttribute("value");
	//xml = read(chemin);
	var resultDoc=set_ids(chemin);
	var parser=new DOMParser();
	// Transformer le String en Objet DOM
	//var resultDoc=parser.parseFromString(xml,"text/xml");
	// Intégrer le DOM récupéré à l'interieur de document
	//resultDoc.documentElement.setAttribute("id","fig_svg");
	doc=document.getElementById("v_svg");
	
	set_saisie(resultDoc);
	if (doc.firstChild)
		doc.removeChild(doc.firstChild);    
	doc.appendChild(resultDoc);
    doc.setAttribute("hidden","false");
}
catch(ex2){ alert("interface:interface_modif: "+ex2); }
} 

function Open(){
			netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
  	
			//saisi le libellé 
			/*var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
			                        .getService(Components.interfaces.nsIPromptService);
			var input = {value: ""};
			var check = {value: false};
			result = prompts.prompt(window, "Donner l'identifiant du SVG", "Saisir l'identifiant du SVG", input, null, check);
			if(!result)
				return;*/
			 var win = window.openDialog("http://localhost/archipoenum/Ouvrir.xul", "dlg", "dependent,dialog,modal,width=320,height=200", "");
			

}

// bibliothèque SQLite http://codesnippets.joyent.com/posts/show/1030
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
			// Intégrer le DOM récupéré à l'interieur de document
			document.getElementById(choix_svg).appendChild(resultDoc.documentElement);
			
			doc=document.getElementById(choix_svg);
			doc.removeChild(doc.firstChild);
			if (figure_courant!=choix_svg)  {            
				document.getElementById(choix_svg).setAttribute("hidden","true");
				//alert ("hidden : true");	
			}
}

function svg_open_id(id_svg)
{
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		var file = Components.classes["@mozilla.org/file/directory_service;1"]
                     .getService(Components.interfaces.nsIProperties)
                     .get("ProfD", Components.interfaces.nsIFile);
		file.append(myDBFile);
		var storageService = Components.classes["@mozilla.org/storage/service;1"]
		                        .getService(Components.interfaces.mozIStorageService);
		var mDBConn = storageService.openDatabase(file);
		var statement = mDBConn.createStatement('SELECT * FROM svg where id_svg=?1;');
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
		j=0;
		var myArray1 = dataset;
		choix_svg=myArray1[j]["figure_c"];
		fig_svg=myArray1[j]["fichier"];
		
			//xml = getSVG_DB(choix_svg);
			//figure_courant=get_figure(input.value);
			//alert ("fig : "+figure_courant);
			//alert (input.value);
			var parser=new DOMParser();
			// Transformer le String en Objet DOM
			var resultDoc=parser.parseFromString(fig_svg,"text/xml");
			// Intégrer le DOM récupéré à l'interieur de document
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
			var m1=createMenuItem(myArray1[j]['id_svg']+' : '+myArray1[j]['titre']+ ' : id_user = '+myArray1[j]['id_user']);
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

function get_list_SVG_user(){
try{
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		var file = Components.classes["@mozilla.org/file/directory_service;1"]
                     .getService(Components.interfaces.nsIProperties)
                     .get("ProfD", Components.interfaces.nsIFile);
		file.append(myDBFile);
		var storageService = Components.classes["@mozilla.org/storage/service;1"]
		                        .getService(Components.interfaces.mozIStorageService);
		var mDBConn = storageService.openDatabase(file);
		
		var statement = mDBConn.createStatement('SELECT * FROM svg where id_user=?1;');
		statement.bindUTF8StringParameter(0,id_user);
		
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
		
		var popup = document.getElementById("test3"); // a <menupopup> element
		var first = createMenu("List des SVG");
		var pop = createMenuPopup("p"+docs);
		for(var j=0;j<myArray1.length;j++){
			//alert("SVG : "+myArray1[j]['fichier']);
			var last = createMenuItem(myArray1[j]["id_svg"]+" : "+myArray1[j]["titre"]);
			last.setAttribute("onclick","svg_open_id('"+myArray1[j]["id_svg"]+"');");
			pop.appendChild(last);

		//	return myArray1[j]['fichier'];
		}
		first.appendChild(pop);
		popup.appendChild(first);
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
		var statement = mDBConn.createStatement('SELECT id,login,pwd FROM utilisateur where login=?1');
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
				var load = window.open('http://localhost/archipoenum/index.xul?login='+login+"&id="+myArray1[j]['id'],'','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,location=no,status=no');
				test=1;
				user=login;
				id_user=myArray1[j]['id'];
				//alert(id_user);
				//getElementById("u1").setAttribute("value","Utilisateur Connecte :"+user);				
			}
			else document.getElementById("erreur_login").setAttribute("hidden","false");
		}
		if (test==0)document.getElementById("erreur_login").setAttribute("hidden","false");
		statement.reset();
	}
	catch(ex2){ 
		alert("Authentification non correcte"); 
		document.getElementById("erreur_login").setAttribute("hidden","false");
		statement.reset();
		
	}
} 

function open_wizard()
{
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	var load = window.open('http://localhost/archipoenum/library/xul/modification_saisie.xul','','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,location=no,status=no');
}

function open_wizard2()
{
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	var load = window.open('http://localhost/archipoenum/library/xul/modif_interface.xul','','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,location=no,status=no');
}

function afficher_zone(ch1)
	{
	//alert(ch1.getAttribute("id")+" : "+ch1.getAttribute("checked"));
	ch2=document.getElementById("nb_text");
	ch3=document.getElementById("nb_list");
	//ch1.setAttribute("hidden","false");
		if (ch1.getAttribute("checked")=="true" && ch1.getAttribute("id")=="zt"){
			//alert(ch1.getAttribute("checked"));
			ch2.setAttribute("hidden","false");
		}
		else if (ch1.getAttribute("checked")=="true" && ch1.getAttribute("id")=="ld"){
			//alert(ch1.getAttribute("checked"));
			ch3.setAttribute("hidden","false");
		}
		else if (ch1.getAttribute("checked")=="" && ch1.getAttribute("id")=="zt"){
			//alert(ch1.getAttribute("checked"));
			ch2.setAttribute("hidden","true");
		}
		else if (ch1.getAttribute("checked")=="" && ch1.getAttribute("id")=="ld"){
			//alert(ch1.getAttribute("checked"));
			ch3.setAttribute("hidden","true");
		}
		else alert("Else");
	}
function get_nb_saisies(){
	nb_zt=document.getElementById("nb_zt").value;
	nb_ld=document.getElementById("nb_ld").value;
	alert(nb_zt+" : "+nb_ld);
	afficher_nb_saisies(nb_zt,nb_ld);
}
function afficher_nb_saisies(nb_zt,nb_ld)
{
	alert(nb_zt+" |:| "+nb_ld);
	page_assistant=document.getElementById("interface_zone");
	for (i=1;i<nb_zt;i++)
	{
		
	}
	for (i=1;i<nb_ld;i++)
	{
		
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
		var myCreateDBQuery9 = 'CREATE TABLE IF NOT EXISTS svg (id_svg INTEGER PRIMARY KEY AUTOINCREMENT,  titre text(40), fichier text(1000),figure_c text(40), id_user uniqueidentifier);';
		var myCreateDBQuery10 = 'CREATE TABLE IF NOT EXISTS xul (id_xul INTEGER PRIMARY KEY AUTOINCREMENT,id_element integer, form_xul text(10000), id_svg uniqueidentifier);';   
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
		$sqlite.cmd(myDBFile,myCreateDBQuery10);
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
		//alert (login +' : '+password);
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
		var statement = mDBConn.createStatement('SELECT id,login,pwd FROM utilisateur where login=?1');
		statement.bindUTF8StringParameter(0,login);
		
		var dataset = [];
		while (statement.executeStep()){
			var row = [];
			for(var i=0,k=statement.columnCount; i<k; i++){
				row[statement.getColumnName(i)] = statement.getUTF8String(i);
			}
			dataset.push(row);
		}
		
		var myArray1 = dataset;

		for(var j=0;j<1;j++){
			//alert("User : "+myArray1[j]['login']);			
				var load = window.open('http://localhost/archipoenum/index.xul?login='+login+"&id="+myArray1[j]['id'],'','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,location=no,status=no');
		}
	}
	catch(ex2){
		alert("interface: insert_user: "+ex2);
		//statement.reset(); 
	}
}

function Save_SVG(){
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
	                  .getService(Components.interfaces.nsIPromptService);
		var input = {value: ""};
		var check = {value: false};
		result = prompts.prompt(window, "Donner un titre du fichier", "Saisir le titre du figure sauvgardé", input, null, check);
		if(!result)
			return;
		var nomFic = input.value;
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
		var sql = 'INSERT INTO svg(fichier,figure_c,titre,id_user) VALUES(?1,?2,?3,?4);';
		var statement = mDBConn.createStatement(sql);
	    statement.bindUTF8StringParameter(0,svg);
	    statement.bindUTF8StringParameter(1,figure_courant);
	    statement.bindUTF8StringParameter(2,nomFic);
	    statement.bindUTF8StringParameter(3,id_user);
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

	 //Mode de lecture du fichier, un flux est nécessaire
	 //Le second argument définit les différents modes de lecture parmis
	 //PR_RDONLY     =0x01 lecture seulement
	 //PR_WRONLY     =0x02 écriture seulement
	 //PR_RDWR       =0x04 lecture ou écriture
	 //PR_CREATE_FILE=0x08 si le fichier n'existe pas, il est créé (sinon, sans effet)
	 //PR_APPEND     =0x10 le fichier est positionné à la fin avant chaque écriture
	 //PR_TRUNCATE   =0x20 si le fichier existe, sa taille est réduite à zéro
	 //PR_SYNC       =0x40 chaque écriture attend que les données ou l'état du fichier soit mis à jour
	 //PR_EXCL       =0x80 idem que PR_CREATE_FILE, sauf que si le fichier existe, NULL est retournée
	 //Le troisième argument définit les droits

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

// Récupérer le SVG à partir du fichier et le charger dans le document en cours 
function AppendSVG(url,doc) {
  try {
	dump("AppendSVG IN "+url+"\n");

	// Fonction Ajax pour récupérer le SVg à partir de l'url
	p = new XMLHttpRequest();
	p.onload = null;
	p.open("GET", url, false);
	p.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	p.send(null);

	if (p.status != "200" ){
	      alert("Réception erreur " + p.status);
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
		// Intégrer le DOM récupéré à l'interieur de document
		doc.appendChild(resultDoc.documentElement);

	}
	dump("AppendSVG OUT \n");
   } catch(ex2){alert("AppendSVG::"+ex2);}
}

// Récupérer le SVG en cours d'utilisation
function getSVG(){
	try {
		var svg;
		//alert(figure_courant);
		svg=document.getElementById(figure_courant).firstChild;
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
    
	    //alert(file.path);    
	    var serializer = new XMLSerializer();
	    var xml = serializer.serializeToString(svg);
		return svg;
		
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

function createMenuList(aLabel) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(XUL_NS, "menulist"); // create a new XUL menuitem
  item.setAttribute("id", aLabel);
  return item;
}


function createMenu(aLabel) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(XUL_NS, "menu"); // create a new XUL menuitem
  item.setAttribute("label", aLabel);
  return item;
}

function createLabel(aLabel) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(XUL_NS, "label"); // create a new XUL menuitem
  item.setAttribute("value", aLabel);
  return item;
}

function createCaption(aLabel) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(XUL_NS, "caption"); // create a new XUL menuitem
  item.setAttribute("label", aLabel);
  return item;
}

function createCheck(aLabel) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(XUL_NS, "checkbox"); // create a new XUL menuitem
  item.setAttribute("label", aLabel);
  return item;
}

function createButton(id,aLabel) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(XUL_NS, "button"); // create a new XUL menuitem
  item.setAttribute("id", id);
  item.setAttribute("label", aLabel);
  return item;
}

function createScript(id) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(XUL_NS, "script"); // create a new XUL menuitem
  item.setAttribute("id", id);
  return item;
}

function createGroupbox(id) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(XUL_NS, "groupbox"); // create a new XUL menuitem
  item.setAttribute("label", id);
  return item;
}

function createText(aLabel) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(XUL_NS, "textbox"); // create a new XUL menuitem
  item.setAttribute("id", aLabel);
  return item;
}

function createHbox(aLabel) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(XUL_NS, "hbox"); // create a new XUL menuitem
  item.setAttribute("id", aLabel);
  return item;
}

function createVbox(aLabel) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(XUL_NS, "vbox"); // create a new XUL menuitem
  item.setAttribute("id", aLabel);
  return item;
}

function createSvg(aLabel) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(SVG_NS, "svg"); // create a new XUL menuitem
  item.setAttribute("id", aLabel);
  return item;
}

function createG(aLabel) {
  var item = document.createElementNS(SVG_NS, "g"); // create a new XUL menuitem
  item.setAttribute("id", aLabel);
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
	che="chrome://archipoenum/content/library/xul/DocSaisie.xul";	
	chrm=chromeToPath (che);
	xml = read(chemin);
	xml2=RC(xml,"fig_18","Document_"+docs);
	xml3=RC(xml2,"fig_21","Document_"+docs);
	xml4=RC(xml3,"fig_19","Document_"+docs);
	xulData="<box id='doc"+docs+"' flex='1'  " +
	          "xmlns='http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul'>" +
	          xml4 + "</box>";
	//AppendSVG("http://localhost/archipoenum/library/xul/doc.xul",document.getElementById("C1"));
	var parser=new DOMParser();
	// Transformer le String en Objet DOM
	var resultDoc=parser.parseFromString(xulData,"text/xml");
	// Intégrer le DOM récupéré à l'interieur de document
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
	xml3=RC(xml2,"fig_21","Document_"+docs);
	xml4=RC(xml3,"fig_19","Document_"+docs);
			xulData="<box id='d"+docs+"' flex='1'  " +
	          "xmlns='http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul'>" +
	          xml4 + "</box>";
	//alert(xulData);
	//AppendSVG("http://localhost/archipoenum/library/xul/doc.xul",document.getElementById("C1"));
	var parser=new DOMParser();
	// Transformer le String en Objet DOM
	var resultDoc=parser.parseFromString(xulData,"text/xml");
	/*var resultDoc=document.getElementById("ZonesSaisies").cloneNode(true);
	resultDoc.setAttribute("id","ZonesSaisies_"+docs);
	resultDoc.setAttribute("hidden","false");
	resultDoc.getElementById("saisie_fig_18_document").setAttribute("id","saisie_Document_"+docs+"_document");
	resultDoc.getElementById("saisie_fig_18_type").setAttribute("id","saisie_Document_"+docs+"_type");
	resultDoc.getElementById("saisie_fig_18_format").setAttribute("id","saisie_Document_"+docs+"_format");
	resultDoc.getElementById("saisie_fig_18_section").setAttribute("id","saisie_Document_"+docs+"_section");
	resultDoc.getElementById("saisie_fig_18_nature").setAttribute("id","saisie_Document_"+docs+"_nature");
	resultDoc.getElementById("saisie_fig_18_actor").setAttribute("id","saisie_Document_"+docs+"_actor");
	resultDoc.getElementById("saisie_fig_18_ontoactor").setAttribute("id","saisie_Document_"+docs+"_ontoactor");
	resultDoc.getElementById("saisie_fig_18_concept").setAttribute("id","saisie_Document_"+docs+"_concept");
	resultDoc.getElementById("saisie_fig_18_work").setAttribute("id","saisie_Document_"+docs+"_work");
	resultDoc.getElementById("saisie_fig_18_instance").setAttribute("id","saisie_Document_"+docs+"_instance");
	resultDoc.getElementById("saisie_fig_18_physicpart").setAttribute("id","saisie_Document_"+docs+"_physicpart");*/
	var popup = resultDoc.getElementById("liste1");
	var item1 = createMenuItem("Text");
	item1.setAttribute("value","Text");
	var item2 = createMenuItem("Listing");
	item1.setAttribute("value","Listing");
	var item3 = createMenuItem("Pg");
	item1.setAttribute("value","Pg");
	var item4 = createMenuItem("Video");
	item1.setAttribute("value","Video");
	var item5 = createMenuItem("Photo");
	item1.setAttribute("value","Photo");
	var item6 = createMenuItem("Sound");
	item1.setAttribute("value","Sound");
	var item7 = createMenuItem("Objet13");
	item1.setAttribute("value","Objet");
	popup.appendChild(item1);
	popup.appendChild(item2);
	popup.appendChild(item3);
	popup.appendChild(item4);
	popup.appendChild(item5);
	popup.appendChild(item6);
	popup.appendChild(item7);
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

function set_ids(fichier_svg){
try
	{
		xml=read(fichier_svg);
		var parser=new DOMParser();
		fct='<script xlink:href="http://localhost/archipoenum/library/js/fonctions.js" />';
		//alert(fct);
		xml2=RC(xml,"</svg>"," </svg>");
		//alert(xml2);
		// Transformer le String en Objet DOM
		var xmlDoc=parser.parseFromString(xml2,"text/xml");
		c1=1;
		x=xmlDoc.getElementsByTagName("svg")[0];
		x.setAttribute("id",'svg_1');
		x.setAttribute("xmlns:xlink",'http://www.w3.org/1999/xlink');
		for (i=1;i<x.getElementsByTagName("g").length;i++)
		{	
			y=x.getElementsByTagName("g")[i];
			y.setAttribute("id",'graph_'+c1);
			y.setAttribute("onclick",'init_svg(this)');
			y.setAttribute("hidden",'false');
			y.setAttribute("visibility","visible");
			//alert(y.id);
			c1++;
		}
		
		for (j=0;j<x.getElementsByTagName("path").length;j++)
		{	
			
			y=x.getElementsByTagName("path")[j];
			y.setAttribute("id",'graph_'+c1);
			y.setAttribute("onclick",'init_svg(this)');
			y.setAttribute("hidden",'false');
			y.setAttribute("visibility","visible");
			c1++;
		}
		
		for (k=0;k<x.getElementsByTagName("text").length;k++)
		{	
			y=x.getElementsByTagName("text")[k];
			y.setAttribute("id",'graph_'+c1);
			y.setAttribute("onclick",'init_svg(this)');
			y.setAttribute("hidden",'false');
			y.setAttribute("visibility","visible");
			//alert(y.id);
			c1++;
		}
		
		for (l=0;l<x.getElementsByTagName("polygon").length;l++)
		{	
			y=x.getElementsByTagName("polygon")[l];
			y.setAttribute("id",'graph_'+c1);
			y.setAttribute("onclick",'init_svg(this)');
			y.setAttribute("hidden",'false');
			y.setAttribute("visibility","visible");
			//alert(y.id);
			c1++;
		}
		
		for (l=0;l<x.getElementsByTagName("rect").length;l++)
		{	
			y=x.getElementsByTagName("rect")[l];
			y.setAttribute("id",'graph_'+c1);
			y.setAttribute("onclick",'init_svg(this)');
			y.setAttribute("hidden",'false');
			y.setAttribute("visibility","visible");
			//alert(y.id);
			c1++;
		}
		/*doc=document.getElementById("test123");
		doc.appendChild(x);*/
		return(x);
	}
catch(ex2){alert("interface:set_ids:"+ex2); }
}
function createActionSaisie(c,graph,graph_c)
{
	first= createVbox(c);
	g=createG("root");
	g3=createGroupbox("g3"+c1);
	g4=createGroupbox("g4"+c1);
	svg=createSvg("svg");
	graph.setAttribute("id","svg"+c1);
	g.appendChild(graph);
	svg.appendChild(g);
	svg.setAttribute("version","1.1");
	svg.setAttribute("baseprofile","full");
	svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
	svg.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink");
	svg.setAttribute("xmlns:ev","http://www.w3.org/2001/xml-events");
	svg.setAttribute("visibility",'visible');
	svg.setAttribute("viewBox","0 0 1000 1000");
	svg.setAttribute("preserveAspectRatio","none");
	svg.setAttribute("width","300px");
	svg.setAttribute("height","200px");
	label=createCaption(c);
	ch_c=createCheck("Cacher le graphique      ");
	ch_c.setAttribute("id","cacher_"+c1);
	label1=createLabel("Choisissez un evenement ");
	l=createLabel(" ");
	choix = createMenuList("choixEvenement_"+c1);
	var pop = createMenuPopup("pop"+c1);
	var evt1 = createMenuItem("Evenement en cliquant sur le graphique");
	evt1.setAttribute("value","onclick");
	var evt2 = createMenuItem("Evenement en commande");
	evt2.setAttribute("value","oncommand");
	label2=createLabel("Choisissez l'action ");
	label3=createLabel("Qu'est ce que vous voulez ajouter a la zone de saisie :    ");
	choix2 = createMenuList("choixAction_"+c1);
	var pop2 = createMenuPopup("pop2"+c1);
	var fct1 = createMenuItem("Afficher un formulaire a saisir");
	fct1.setAttribute("value","afficher_form");
	choix2.setAttribute("onselect","test_evt(this)");
	var fct2 = createMenuItem("Afficher un graphique");
	fct2.setAttribute("value","affiche_graph");
	var fct3 = createMenuItem("Afficher une autre interface");
	fct3.setAttribute("value","affiche_interface");
	var bt1= createButton("bt_"+c1,"Valider");
	bt1.setAttribute("onclick", "Valider_form('"+c+"');");
	//alert(c);
	second= createHbox("h1"+c1);
	third= createHbox("h2"+c1);
	ch1=createCheck("Zone Texte      ");
	ch1.setAttribute("id","ch1_"+c1);
	ch1.setAttribute("oncommand","affiche_valid(this)");
	bt_1= createButton("bt_h1"+c1,"Nouveau");
	bt_1.setAttribute("onclick","Ajouter_zone(this,"+c1+")");
	bt_1.setAttribute("hidden","true");
	bt_1.setAttribute("cpmt",1);
	ch2=createCheck("Menu Liste");
	ch2.setAttribute("id","ch2_"+c1);
	ch2.setAttribute("oncommand","affiche_valid(this)");
	bt_2= createButton("bt_h2"+c1,"Nouvelle liste");
	bt_3= createButton("bt_c"+c1,"Cacher");
	bt_2.setAttribute("onclick","Ajouter_liste(this,"+c1+")");
	bt_2.setAttribute("hidden","true");
	bt_2.setAttribute("cpmt",1);
	txt1=createText("txt_h1"+c1);
	txt2=createText("txt_h2"+c1);
	second.appendChild(ch1);
	g3.appendChild(second);
	//second.appendChild(txt1);
	second.appendChild(bt_1);
	third.appendChild(ch2);
	g4.appendChild(third);
	//third.appendChild(txt2);
	third.appendChild(bt_2);
	
	pop.appendChild(evt1);
	pop.appendChild(evt2);
	choix.appendChild(pop);
	g1=createGroupbox("g"+c1);
	g1.appendChild(label);
	g2=createGroupbox("svg"+c1);
	g2.appendChild(svg);
	g1.appendChild(g2);
	g1.appendChild(ch_c);
	g1.appendChild(l.cloneNode(false));
	g1.appendChild(label1);
	g1.appendChild(choix);
	pop2.appendChild(fct2);
	pop2.appendChild(fct1);
	pop2.appendChild(fct3);
	choix2.appendChild(pop2);
	g1.appendChild(label2);
	g1.appendChild(choix2);	
	vb=createVbox("v"+c1);
	vb.setAttribute("hidden","true");
	vb.appendChild(label3);
	vb.appendChild(g3);
	vb.appendChild(g4);
	vb2=createVbox("v_l"+c1);
	choix3 = createMenuList("choixGraph_"+c1);
	choix3.setAttribute("hidden","true");
	var pop3 = createMenuPopup("pop3"+c1);
	bt_3.setAttribute("onclick","cacher_form('"+c+"');");
	c2=1;
	//alert("hello");
	x1=graph_c;
		for (j=1;j<x1.getElementsByTagName("g").length;i++)
		{	
			z=x1.getElementsByTagName("g")[j].cloneNode(false);
			//alert(z.id+" : "+graph.id);
			if (z.id!=graph.id){
				var graph1 = createMenuItem(z.id).cloneNode(false);
				graph1.setAttribute("value",z.id);
				pop3.appendChild(graph1);
				
				c2++;
			}
			//alert(z.id);
		}
		
		for (j=0;j<x1.getElementsByTagName("path").length;j++)
		{	

			z=x1.getElementsByTagName("path")[j].cloneNode(false);
			//alert(z.id);
			if (z.id!=graph.id){
				var graph1 = createMenuItem(z.id).cloneNode(false);
				graph1.setAttribute("value",z.id);
				pop3.appendChild(graph1);
				//alert(c2);
				c2++;
			}
			//alert("hello : "+z.id);
		}
		for (j=0;j<x1.getElementsByTagName("text").length;j++)
		{	
			z=x1.getElementsByTagName("text")[j].cloneNode(false);
			//alert(z.id);
			if (z.id!=graph.id){
				var graph1 = createMenuItem(z.id).cloneNode(false);
				graph1.setAttribute("value",z.id);
				pop3.appendChild(graph1);
				c2++;
			}
		}
		for (j=0;j<x1.getElementsByTagName("polygon").length;j++)
		{	
			z=x1.getElementsByTagName("polygon")[j].cloneNode(false);
			//alert(z.id);
			if (z.id!=graph.id){
				var graph1 = createMenuItem(z.id).cloneNode(false);
				graph1.setAttribute("value",z.id);
				pop3.appendChild(graph1);
				c2++;
			}
		}
		
		for (j=0;j<x1.getElementsByTagName("rect").length;j++)
		{	

			z=x1.getElementsByTagName("rect")[j].cloneNode(false);
			//alert(z.id);
			if (z.id!=graph.id){
				var graph1 = createMenuItem(z.id);
				graph1.setAttribute("value",z.id);
				pop3.appendChild(graph1);
				c2++;
			}
		}	
	choix3.appendChild(pop3);
	label4=createLabel("Choisissez un graphe :    ");
	g1.appendChild(label4);
	g1.appendChild(choix3);
	g1.appendChild(l.cloneNode(false));
	g1.appendChild(vb);
	h1= createHbox("h3"+c1);
	h1.appendChild(bt1);
	h1.appendChild(bt_3);
	g1.appendChild(h1);
	g1.appendChild(l);
	first.appendChild(g1);		
	first.setAttribute("hidden",'true');
	//alert(c1);
	return(first);		
}
function set_saisie(doc1){
try
	{
	
		c1=1;
		//doc=document.getElementById("v_svg");
		//alert(doc);
		x=doc1;
		for (i=1;i<x.getElementsByTagName("g").length;i++)
		{	
			//alert(c1);
			y=x.getElementsByTagName("g")[i].cloneNode(true);			
			var resultDoc=createActionSaisie('saisie_graph_'+c1,y,doc1);
			document.getElementById("modifs").appendChild(resultDoc.cloneNode(true));
			c1++;
		}
		
		for (i=0;i<x.getElementsByTagName("path").length;i++)
		{	
			//alert(c1);
			y=x.getElementsByTagName("path")[i].cloneNode(false);			
			var resultDoc=createActionSaisie('saisie_graph_'+c1,y,doc1);
			document.getElementById("modifs").appendChild(resultDoc.cloneNode(true));
			c1++;
	
			
		}
		for (i=0;i<x.getElementsByTagName("text").length;i++)
		{	
			//alert(c1);
			y=x.getElementsByTagName("text")[i].cloneNode(true);
			var resultDoc=createActionSaisie('saisie_graph_'+c1,y,doc1);
			document.getElementById("modifs").appendChild(resultDoc.cloneNode(true));
			c1++;
		}
		for (i=0;i<x.getElementsByTagName("polygon").length;i++)
		{	
			//alert(c1);
			y=x.getElementsByTagName("polygon")[i].cloneNode(false);
			var resultDoc=createActionSaisie('saisie_graph_'+c1,y,doc1);
			document.getElementById("modifs").appendChild(resultDoc.cloneNode(true));
			c1++;
		}
		
		for (i=0;i<x.getElementsByTagName("rect").length;i++)
		{	
			//alert(c1);
			y=x.getElementsByTagName("rect")[i].cloneNode(false);
			var resultDoc=createActionSaisie('saisie_graph_'+c1,y,doc1);
			document.getElementById("modifs").appendChild(resultDoc.cloneNode(true));
			c1++;
		}

	}
catch(ex2){alert("interface:set_saisie:"+ex2); }
}

function init_svg(c_svg)
{
	//alert("saisie_"+c_svg.id);
	if (document.getElementById("saisie_"+c_svg.id).getAttribute("hidden")=="true")
		document.getElementById("saisie_"+c_svg.id).setAttribute("hidden","false");
	else
		document.getElementById("saisie_"+c_svg.id).setAttribute("hidden","true");
}

function cacher_form(id_form)
{
	//alert(id_form);
	x= document.getElementById(id_form);
	x.setAttribute("hidden","true");
}

function can_advance(){
	alert("hello");
	document.getElementById("import_svg").setAttribute("canAdvance","false");
}

function Valider_form(id_form)
{
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	//alert(id_form);
	x= document.getElementById(id_form);
	//x.setAttribute("hidden","true");
	n1=id_form.charAt(id_form.length-1);
	if (document.getElementById("choixAction_"+n1).value=="afficher_form"){
		if (document.getElementById("ch1_"+n1).checked==true || document.getElementById("ch2_"+n1).checked==true){
			xul_complet='<?xml version="1.0" ?><?xml-stylesheet href="../../design/svg.css" type="text/css"?><overlay xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul" ><vbox>'+contruire_texte(n1);
			xul_complet=xul_complet+"</vbox></overlay>";
			alert(xul_complet);
		}
		var file = Components.classes["@mozilla.org/file/directory_service;1"]
		                     .getService(Components.interfaces.nsIProperties)
		                     .get("ProfD", Components.interfaces.nsIFile);
		file.append(myDBFile);
	
		var storageService = Components.classes["@mozilla.org/storage/service;1"]
		                        .getService(Components.interfaces.mozIStorageService);
		var mDBConn = storageService.openDatabase(file);
		
		svg=document.getElementById("svg_1");
		var sql = 'INSERT INTO svg(fichier,figure_c,titre) VALUES(?1,?2,?3);';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,svg);
		statement.bindUTF8StringParameter(1,"fig_21");
		statement.bindUTF8StringParameter(2,"test");
		statement.execute();
		statement.reset();
		
		var statement = mDBConn.createStatement('SELECT  id_svg FROM svg ORDER BY id_svg DESC;');
			
			
			var dataset = [];
			while (statement.executeStep()){
				var row = [];
				for(var i=0,k=statement.columnCount; i<k; i++){
					row[statement.getColumnName(i)] = statement.getUTF8String(i);
				}
				dataset.push(row);
			}
				// return dataset;	
			j=0;
			var myArray1 = dataset;
			id_svg=myArray1[j]["id_svg"];
		if (document.getElementById("ch1_"+n1).checked==true){   
			var sql = 'INSERT INTO xul(form_xul,id_svg) VALUES(?1,?2);';
			var statement = mDBConn.createStatement(sql);
			statement.bindUTF8StringParameter(0,xul_complet);
			statement.bindUTF8StringParameter(1,id_svg);
			statement.execute();
			statement.reset();
		}
	}
	listes=x.getElementsByTagName("menulist");
	evt=listes[0].selectedItem.value;
	fct=listes[1].selectedItem.value;
	id_graph=RC(id_form,"saisie_","");
	if (document.getElementById("cacher_"+n1).checked==true){
		//alert(document.getElementById("cacher_"+n1).checked+"1");
		document.getElementById(id_graph).setAttribute("hidden","true");
		document.getElementById(id_graph).setAttribute("visibility","hidden");
	}
	else
		//alert(document.getElementById("cacher_"+n1).checked+"2");
	if (fct=="affiche_graph"){
		g1=listes[2].selectedItem.value;
		alert(evt+" : "+fct+"('"+g1+"')");
		document.getElementById(id_graph).setAttribute(evt,fct+"('"+g1+"')");
	}
	else if (evt=="afficher_form"){
	}
	else{
	}
	
	
}

function affiche_valid(elem)
{
	//alert("bt_"+c1+"_"+elem.parentNode.id);
	cmpt=1;
	if (document.getElementById("bt_"+elem.parentNode.id).getAttribute("hidden")=="true")
		document.getElementById("bt_"+elem.parentNode.id).setAttribute("hidden","false");
	else
		document.getElementById("bt_"+elem.parentNode.id).setAttribute("hidden","true");
}

function Ajouter_zone(elem,cpt)
{
	elem.setAttribute("hidden","true");
	racine=document.getElementById("h1"+cpt);
	cmpt=parseInt(elem.getAttribute("cpmt"));
	//alert(cpt);
	//alert(document.getElementById("vz"+cpt));
	if (document.getElementById("vz"+cpt)==null)
	{	

		//alert("new");
		first= createVbox("vz"+cpt);
		second= createHbox("hz"+racine.id+cmpt);
		label=createLabel("Ajouter un titre pour la zone texte numero "+cmpt);
		txt=createText("texte_"+racine.id+cmpt);
		bout1= createButton("btnz_"+cpt,"Ajouter");
		//alert(cpt);
		bout1.setAttribute("onclick","Ajouter_zone(this,"+cpt+")");
		bout1.setAttribute("cpmt",cmpt+1);
		second.appendChild(label);
		second.appendChild(txt);
		second.appendChild(bout1);		
		first.appendChild(second);
		//alert("cpt: "+cpt+" cpmt : "+cmpt);
		//bout= createButton("bout_"+racine.id,"Valider");
		//bout.setAttribute("onclick","Ajouter_zone(this,"+cpt+")");
		first.appendChild(second);
		//first.appendChild(bout);
		
		if (elem.label=="Nouveau"){
			racine.appendChild(first);
			//alert(elem.label);	
		}
		else
			racine.parentNode.appendChild(first);
		cmpt++;

	}
	else
	{
		//alert("old");
		first= document.getElementById("vz"+cpt);
		second= createHbox("hz"+racine.id+cmpt);
		label=createLabel("Ajouter un titre pour la zone texte numero "+cmpt);
		txt=createText("texte_"+racine.id+cmpt);
		ancien=document.getElementById("hz"+racine.id+(cmpt-1));
		ancien.removeChild(bout1);
		bout1= createButton("btnz_"+cpt,"Ajouter");
		bout1.setAttribute("onclick","Ajouter_zone(this,"+cpt+")");
		bout1.setAttribute("cpmt",cmpt+1);
		//bout=first.lastChild;
		//first.removeChild(bout);
		second.appendChild(label);
		second.appendChild(txt);
		second.appendChild(bout1);		
		first.appendChild(second);

		//alert("cpt: "+cpt+" cpmt : "+cmpt);
		//bout= createButton("bout_"+racine.id,"Valider");
		first.appendChild(second);
		//first.appendChild(bout);
		
		if (elem.label=="Nouveau"){
			racine.appendChild(first);
			alert(elem.label);	
		}
		else{}
			//racine.parentNode.appendChild(first);
		
	}
}

function Ajouter_liste(elem,cpt)
{
	elem.setAttribute("hidden","true");
	racine=document.getElementById("h2"+cpt);
	cmpt=parseInt(elem.getAttribute("cpmt"));
	//alert(cpt);
	//alert(document.getElementById("vz"+cpt));
	if (document.getElementById("vl"+cpt)==null)
	{	

		//alert("new");
		first= createVbox("vl"+cpt);
		second= createHbox("hl"+racine.id+cmpt);
		label=createLabel("Ajouter un titre pour la liste numero "+cmpt);
		txt=createText("texte_"+racine.id+cmpt);
		bout1= createButton("btnl_"+cmpt,"Ajouter Liste");
		bout2= createButton("btnl2_"+cmpt,"Ajouter Element");
		bout1.setAttribute("onclick","Ajouter_liste(this,"+cpt+")");
		bout1.setAttribute("cpmt",cmpt+1);
		bout2.setAttribute("onclick","Ajouter_element_liste(this,"+cpt+")");
		bout2.setAttribute("cpmt",1);
		second.appendChild(label);
		second.appendChild(txt);
		second.appendChild(bout1);		
		second.appendChild(bout2);
		first.appendChild(second);
		//alert("cpt: "+cpt+" cpmt : "+cmpt);
		//bout= createButton("boutL_"+racine.id,"Valider");
		first.appendChild(second);
		//first.appendChild(bout);
		
		if (elem.label=="Nouveau"){
			racine.appendChild(first);
			//alert(elem.label);	
		}
		else
			racine.parentNode.appendChild(first);
		cmpt++;

	}
	else
	{
		//alert("old");
		first= document.getElementById("vl"+cpt);
		second= createHbox("hl"+racine.id+cmpt);
		label=createLabel("Ajouter un titre pour la liste numero "+cmpt);
		txt=createText("texte_"+racine.id+cmpt);
		ancien=document.getElementById("hz"+racine.id+(cmpt-1));
		ancien.removeChild(bout1);
		bout1= createButton("btnl_"+cmpt,"Ajouter Liste");
		bout2= createButton("btnl2_"+cmpt,"Ajouter Element");
		bout1.setAttribute("onclick","Ajouter_liste(this,"+cpt+")");
		bout1.setAttribute("cpmt",cmpt+1);
		bout2.setAttribute("onclick","Ajouter_element_liste(this,"+cpt+")");
		bout2.setAttribute("cpmt",1);
		//bout=first.lastChild;
		//first.removeChild(bout);
		second.appendChild(label);
		second.appendChild(txt);
		second.appendChild(bout1);
		second.appendChild(bout2);		
		first.appendChild(second);

		//alert("cpt: "+cpt+" cpmt : "+cmpt);
		//bout= createButton("bout_"+racine.id,"Valider");
		first.appendChild(second);
		//first.appendChild(bout);
		
		if (elem.label=="Nouveau"){
			racine.appendChild(first);
			alert(elem.label);	
		}
		else{}
			//racine.parentNode.appendChild(first);
		
	}
}

function Ajouter_element_liste(elem,cpt)
{
	elem.setAttribute("hidden","true");
	racine=document.getElementById("h2"+cpt);
	cmpt=parseInt(elem.getAttribute("cpmt"));
	//alert(cpt);
	//alert(document.getElementById("vz"+cpt));
	if (document.getElementById("ve"+cpt)==null)
	{	

		//alert("new");
		f=document.getElementById(racine.id);
		//alert(racine.id);
		first= createVbox("ve"+cpt);
		second= createHbox("he"+racine.id+cmpt);
		label=createLabel("Ajouter un element "+cmpt);
		txt=createText("texte_"+racine.id+cmpt);
		bout1= createButton("btne_"+cmpt,"Ajouter");
		bout1.setAttribute("onclick","Ajouter_element_liste(this,"+cpt+")");
		bout1.setAttribute("cpmt",cmpt+1);
		second.appendChild(label);
		second.appendChild(txt);
		second.appendChild(bout1);		
		first.appendChild(second);
		//alert("cpt: "+cpt+" cpmt : "+cmpt);
		bout= createButton("bout_"+racine.id,"Valider");
		first.appendChild(second);
		//first.appendChild(bout);
		f.appendChild(first);
		
		if (elem.label=="Ajouter Element"){
			racine.appendChild(f);
			//alert(elem.label);	
		}
		else
			racine.parentNode.appendChild(first);
		cmpt++;

	}
	else
	{
		//alert("old");
		f=document.getElementById(racine.id);
		first= document.getElementById("ve"+cpt);
		second= createHbox("he"+racine.id+cmpt);
		label=createLabel("Ajouter un element "+cmpt);
		txt=createText("texte_"+racine.id+cmpt);
		ancien=document.getElementById("hz"+racine.id+(cmpt-1));
		ancien.removeChild(bout1);
		bout1= createButton("btne_"+cmpt,"Ajouter");
		bout1.setAttribute("onclick","Ajouter_element_liste(this,"+cpt+")");
		bout1.setAttribute("cpmt",cmpt+1);
		//bout=first.lastChild;
		//first.removeChild(bout);
		second.appendChild(label);
		second.appendChild(txt);
		second.appendChild(bout1);		
		first.appendChild(second);

		//alert("cpt: "+cpt+" cpmt : "+cmpt);
		//bout= createButton("bout_"+racine.id,"Valider");
		first.appendChild(second);
		//first.appendChild(bout);
		f.appendChild(first);
		if (elem.label=="Ajouter Element"){
			racine.appendChild(f);
			alert(elem.label);	
		}
		else{}
			//racine.parentNode.appendChild(first);
		
	}
}

function version_final()
{
	graph=document.getElementById("svg_1");
	s1= createScript("s1");
	//alert(read("http://localhost/archipoenum/library/js/fonctions.js"));
	s1.setAttribute("src","http://localhost/archipoenum/library/js/fonctions.js");
	graph.appendChild(s1);
	container=document.getElementById("vb1");
	container.appendChild(graph);
}

function test_evt(elem){
	n=elem.parentNode.parentNode.id;
	n1=n.charAt(n.length-1);
	//alert("v"+n1);
	if (elem.selectedItem.value=="afficher_form")
	{
		document.getElementById("v"+n1).setAttribute("hidden","false");
		document.getElementById("choixGraph_"+n1).setAttribute("hidden","true");
		//alert(document.getElementById("v"+n1).getAttribute("hidden"));
	}
	else if (elem.selectedItem.value=="affiche_graph"){
		document.getElementById("v"+n1).setAttribute("hidden","true");
		document.getElementById("choixGraph_"+n1).setAttribute("hidden","false");
		//alert(document.getElementById("v"+n1).getAttribute("hidden"));
	}
}

function fin_assitant()
{
	graph=document.getElementById("svg_1");
	s1= createScript("s1");
	//alert(read("http://localhost/archipoenum/library/js/fonctions.js"));
	s1.setAttribute("src","http://localhost/archipoenum/library/js/fonctions.js");
	graph.appendChild(s1);
	//alert(graph);
	window.opener.add_svg(graph);
}
function chromeToPath (aPath) {

   if (!aPath || !(/^chrome:/.test(aPath)))
      return; //not a chrome url
   var rv;
   		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
      var ios = Components.classes['@mozilla.org/network/io-service;1'].getService(Components.interfaces["nsIIOService"]);
        var uri = ios.newURI(aPath, "UTF-8", null);
        var cr = Components.classes['@mozilla.org/chrome/chrome-registry;1'].getService(Components.interfaces["nsIChromeRegistry"]);
        rv = cr.convertChromeURL(uri).spec;

        if (/^file:/.test(rv)) 
          rv = this.urlToPath(rv);
        else
          rv = this.urlToPath("file://"+rv);

      return rv;
}

function urlToPath (aPath) {
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
    if (!aPath || !/^file:/.test(aPath))
      return ;
    var rv;
   var ph = Components.classes["@mozilla.org/network/protocol;1?name=file"]
        .createInstance(Components.interfaces.nsIFileProtocolHandler);
    rv = ph.getFileFromURLSpec(aPath).path;
    return rv;
}

function add_svg(svg)
{
	doc=document.getElementById(figure_courant);
	document.getElementById("C1").removeChild(doc); 
	v1=createVbox(figure_courant);
	v1.appendChild(svg);
	document.getElementById("C1").appendChild(v1);
	document.getElementById(figure_courant).setAttribute("hidden","true	");
}

function modif_interface(){
	x=window.opener.getSVG();
	//alert(xmlDoc);
	c1=1;
		//x=xmlDoc.getElementsByTagName("svg")[0];
		x.setAttribute("id",'svg_1');
		x.setAttribute("xmlns:xlink",'http://www.w3.org/1999/xlink');
		for (i=0;i<x.getElementsByTagName("g").length;i++)
		{	
			y=x.getElementsByTagName("g")[i];
			y.setAttribute("id",'graph_'+c1);
			y.setAttribute("onclick",'init_svg(this)');
			y.setAttribute("hidden",'false');
			y.setAttribute("visibility","visible");
			//alert(y.id);
			c1++;
		}
		
		for (j=0;j<x.getElementsByTagName("path").length;j++)
		{	
			
			y=x.getElementsByTagName("path")[j];
			y.setAttribute("id",'graph_'+c1);
			y.setAttribute("onclick",'init_svg(this)');
			y.setAttribute("hidden",'false');
			y.setAttribute("visibility","visible");
			c1++;
		}
		
		for (k=0;k<x.getElementsByTagName("text").length;k++)
		{	
			y=x.getElementsByTagName("text")[k];
			y.setAttribute("id",'graph_'+c1);
			y.setAttribute("onclick",'init_svg(this)');
			y.setAttribute("hidden",'false');
			y.setAttribute("visibility","visible");
			//alert(y.id);
			c1++;
		}
		
		for (l=0;l<x.getElementsByTagName("polygon").length;l++)
		{	
			y=x.getElementsByTagName("polygon")[l];
			y.setAttribute("id",'graph_'+c1);
			y.setAttribute("onclick",'init_svg(this)');
			y.setAttribute("hidden",'false');
			y.setAttribute("visibility","visible");
			//alert(y.id);
			c1++;
		}
		
		for (l=0;l<x.getElementsByTagName("rect").length;l++)
		{	
			y=x.getElementsByTagName("rect")[l];
			y.setAttribute("id",'graph_'+c1);
			y.setAttribute("onclick",'init_svg(this)');
			y.setAttribute("hidden",'false');
			y.setAttribute("visibility","visible");
			//alert(y.id);
			c1++;
		}
	c1=1;
	doc=document.getElementById("v_svg");
		for (i=0;i<x.getElementsByTagName("g").length;i++)
		{	
			y=x.getElementsByTagName("g")[i].cloneNode(true);			
			var resultDoc=createActionSaisie('saisie_graph_'+c1,y);
			document.getElementById("modifs").appendChild(resultDoc.cloneNode(true));
			c1++;
		}
		
		for (i=0;i<x.getElementsByTagName("path").length;i++)
		{	

			y=x.getElementsByTagName("path")[i].cloneNode(false);			
			var resultDoc=createActionSaisie('saisie_graph_'+c1,y);
			document.getElementById("modifs").appendChild(resultDoc.cloneNode(true));
			c1++;
	
			
		}
		for (i=0;i<x.getElementsByTagName("text").length;i++)
		{	

			y=x.getElementsByTagName("text")[i].cloneNode(true);
			var resultDoc=createActionSaisie('saisie_graph_'+c1,y);
			document.getElementById("modifs").appendChild(resultDoc.cloneNode(true));
			c1++;
		}
		for (i=0;i<x.getElementsByTagName("polygon").length;i++)
		{	

			y=x.getElementsByTagName("polygon")[i].cloneNode(false);
			var resultDoc=createActionSaisie('saisie_graph_'+c1,y);
			document.getElementById("modifs").appendChild(resultDoc.cloneNode(true));
			c1++;
		}
		
		for (i=0;i<x.getElementsByTagName("rect").length;i++)
		{	

			y=x.getElementsByTagName("rect")[i].cloneNode(false);
			var resultDoc=createActionSaisie('saisie_graph_'+c1,y);
			document.getElementById("modifs").appendChild(resultDoc.cloneNode(true));
			c1++;
		}
	if (doc.firstChild)
		doc.removeChild(doc.firstChild);    
	doc.appendChild(x);
    doc.setAttribute("hidden","false");
}

function construire_xul(elem,c){
	contruire_texte(elem,c);
}

function contruire_texte(c){
	xul_text='';
	//alert("btnz_"+c);
	cp=parseInt(document.getElementById("btnz_"+c).getAttribute("cpmt"));
	alert("cpmt="+cp);
	for (i=1;i<cp;i++){
		//alert("texte_h1"+c+""+i);
		txt=document.getElementById("texte_h1"+c+""+i);
		xul_text=xul_text+'<hbox><label value="'+txt.value+' "  flex="1"/> <textbox id="zt'+c+""+i+'" value=""  /></hbox>';
	}
	
	return(xul_text);
}

function contruire_liste(){

}

