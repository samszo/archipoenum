var trace=true;
var sep=";";
var xulDoc=window.parent.document;
var arrValidation = new Array();
var figure_courant="fig_21";


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
function Saisir(idSrc,figure){
	
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
		for (var i = 0; i < ChampsSaisis.length; i++){
			var champ = ChampsSaisis[i];
			if(champ.tagName != "label" && champ.tagName != "button"){
				//récupére l'id
				var idDst = champ.getAttribute("id").replace("saisie_", "");
				//récupère le texte
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

// Afficher ou Cacher un élément XUL donnée 
function MontrerCacherXul(idsDst){
	try {
		var arrId = idsDst.split(sep);
		for (var i = 0; i < arrId.length; i++){
			var xul = document.getElementById(arrId[i]);
			if(xul.getAttribute("hidden")=="true"){
				xul.setAttribute("hidden","false");
				if (arrId[1]=="fig_18")	
					document.getElementById("ch1").setAttribute("hidden","false");
				else if (arrId[1]=="fig_19")	
					document.getElementById("ch2").setAttribute("hidden","false");
				else if (arrId[1]=="fig_21"){
					document.getElementById("ch1").setAttribute("hidden","true");
					document.getElementById("ch2").setAttribute("hidden","true");
				}
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
function Save (){
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
function Open(){
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
			// Intégrer le DOM récupéré à l'interieur de document
			document.getElementById("fig_21").appendChild(resultDoc.documentElement);
			
			doc=document.getElementById("fig_21");
			doc.removeChild(doc.firstChild);              
			document.getElementById("fig_21").setAttribute("hidden","false");
		
			//alert ('chemin ='+s);
		}

		
	}catch(ex2){ alert("interface:Open: "+ex2); }
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
		alert(figure_courant);
		svg=document.getElementById(figure_courant).firstChild;
		return svg;
		
	} catch(ex2){alert("interface:getSVG:"+ex2); }
}

// Afficher le figure principale
function afficher(){
try{
	document.getElementById("fig_18").setAttribute("hidden","true");
	document.getElementById("fig_19").setAttribute("hidden","true");
	document.getElementById("fig_21").setAttribute("hidden","false");
	
	document.getElementById("ch1").setAttribute("hidden","true");
	document.getElementById("ch2").setAttribute("hidden","true");
} catch(ex2){alert("interface:getSVG:"+ex2); }

function afficher1(){
	document.getElementById("fig_19").setAttribute("hidden","true");
	document.getElementById("fig_18").setAttribute("hidden","false");
	document.getElementById("fig_21").setAttribute("hidden","true");
	
	document.getElementById("ch2").setAttribute("hidden","true");
	document.getElementById("ch3").setAttribute("hidden","true");
} catch(ex2){alert("interface:getSVG:"+ex2); }

function afficher2(){
try{
	//alert("ch3");
	document.getElementById("fig_18").setAttribute("hidden","true");
	document.getElementById("fig_19").setAttribute("hidden","false");
	document.getElementById("fig_21").setAttribute("hidden","true");
	
	document.getElementById("ch3").setAttribute("hidden","false");
} catch(ex2){alert("interface:getSVG:"+ex2); }

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

function create () {
	var myDBFile = 'mydb.sqlite';
	var myCreateDBQuery = 'CREATE TABLE IF NOT EXISTS utilisateur(id TEXT PRIMARY KEY , pwd TEXT);';
	var myInsertQuery = 'INSERT INTO utilisateur VALUES("admin","admin");';
	$sqlite.cmd(myDBFile,myCreateDBQuery);
	$sqlite.cmd(myDBFile,myInsertQuery);
}

function login(id,pwd){
	


}
