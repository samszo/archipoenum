var trace=true;
var sep=";";
var xulDoc=window.parent.document;
var arrValidation = new Array();
var figure_courant="fig_21";


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
			/*var file = Components.classes["@mozilla.org/file/local;1"]
                     .createInstance(Components.interfaces.nsILocalFile);
            lpath="http://localhost/archipoenum/sauvegardes/";//+fichierC;
			file.initWithPath(lpath);
			alert("Path : "+file.path);*/
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
			
			
			AppendSVG("http://localhost/archipoenum/sauvegardes/"+fichier.leafName,document.getElementById("fig_21"));
			doc=document.getElementById("fig_21");
			doc.removeChild(doc.firstChild);              
			document.getElementById("fig_21").setAttribute("hidden","false");
		
			//alert ('chemin ='+s);
		}

		
	}catch(ex2){ alert("interface:Open: "+ex2); }
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
	document.getElementById("fig_18").setAttribute("hidden","true");
	document.getElementById("fig_19").setAttribute("hidden","true");
	document.getElementById("fig_21").setAttribute("hidden","false");
	
	document.getElementById("ch1").setAttribute("hidden","true");
	document.getElementById("ch2").setAttribute("hidden","true");
}

function afficher1(){
	document.getElementById("fig_19").setAttribute("hidden","true");
	document.getElementById("fig_18").setAttribute("hidden","false");
	document.getElementById("fig_21").setAttribute("hidden","true");
	
	document.getElementById("ch2").setAttribute("hidden","true");
	document.getElementById("ch3").setAttribute("hidden","true");
}

function afficher2(){
	//alert("ch3");
	document.getElementById("fig_18").setAttribute("hidden","true");
	document.getElementById("fig_19").setAttribute("hidden","false");
	document.getElementById("fig_21").setAttribute("hidden","true");
	
	document.getElementById("ch3").setAttribute("hidden","false");
}

function login(id,pwd){
	
	// Routine de vérification si le navigateur gêre la méthode utilisée
	if (document.implementation && document.implementation.createDocument) {
		// déclaration pour Mozilla et FF
		docXml = document.implementation.createDocument('', '', null);
		
	}
	else if (window.ActiveXObject){
		// déclaration pour IE
		docXml = new ActiveXObject("Microsoft.XMLDOM");
		
	}
	else {
	
		alert('Votre navigateur ne saurait pas éxécuter ce script.');
	
	}
	
	docXml.load("user.xml");
	//alert("XML: "+docXml.toString());
	//var user = docXml.getElementsByTagName("user").childNodes[0].nodeValue;
	alert (docXml.firstChild.childNodes.length);//.getAttribute('id'));

}
