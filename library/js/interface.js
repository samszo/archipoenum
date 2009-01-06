var trace=true;
var sep=";";
var xulDoc=window.parent.document;
var arrValidation = new Array();

function SetSvgId(){
	try {
		var src = svgDoc.getElementById("svgFrame").getAttribute("src");

	} catch(ex2){alert("interface:SetSvgId:"+ex2);}
}

function AfficheSvg(svgNom){
	try {
		document.getElementById("svgFrame").setAttribute("src","");
		document.getElementById("svgFrame").setAttribute("src","library/svg/"+svgNom);
	} catch(ex2){alert("interface:AfficheSvg:"+ex2);}	
}

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

function Saisir(idSrc){
	
	try {
		//var svgDoc=window.parent.frames['svgFrame'].document;
		//affiche les champs de saisie
		MontrerCacherXul("saisie_"+idSrc);
		//passe le graphique à l'orange
		document.getElementById(idSrc).setAttribute("fill","orange");
	} catch(ex2){alert("interface:Saisir:"+ex2);}
	
}

function Valider(idSrc,idsDst,idsValid){
	
	try {
		//passe le graphique au vert
		document.getElementById(idSrc).setAttribute("fill","green");
		//change les champs saisis
		ModifChampsSvg(idSrc);
		//vérifie l'afichage de nouveaux graphiques
		if(IdsEstValider(idsValid))
			MontrerSvg(idsDst);
		//cache le xul
		MontrerCacherXul("saisie_"+idSrc);
		//enregistre la validation
		arrValidation.push(idSrc);
	} catch(ex2){alert("interface:Valider:"+ex2);}
	
}

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

function ChangeAttributsValeur(idsDst, att, val){
	try {
		var arrId = idsDst.split(sep);
		for (var i = 0; i < arrId.length; i++)
			document.getElementById(arrId[i]).setAttribute(att,val);
	} catch(ex2){alert("interface:ChangeAttributsValeur:"+ex2);}
}

function MontrerSvg(idsDst){
	try {
		var arrId = idsDst.split(sep);
		for (var i = 0; i < arrId.length; i++)
			document.getElementById(arrId[i]).setAttribute("visibility","visible");
	} catch(ex2){alert("interface:MontrerSvg:"+ex2);}
}

function MontrerCacherXul(idsDst){
	try {
		var arrId = idsDst.split(sep);
		for (var i = 0; i < arrId.length; i++){
			var xul = document.getElementById(arrId[i]);
			if(xul.getAttribute("hidden")=="true")
				xul.setAttribute("hidden","false");
			else
				xul.setAttribute("hidden","true");
		}
	} catch(ex2){alert("interface:MontrerXul:"+ex2);}
}

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

function Save (){
	try{
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		var nsIFilePicker = Components.interfaces.nsIFilePicker;
		var fp = Components.classes["@mozilla.org/filepicker;1"]
				  .createInstance(nsIFilePicker);
		fp.init(window, "Select a File", nsIFilePicker.modeSave);
		var res = fp.show();
		if (res == nsIFilePicker.returnOK){
			var fichier = fp.file;
			var doc = getSVG();
			serialize(doc,fichier,1);		
		}
		
	}catch(ex2){ alert("interface:Save:"+ex2); }
} 

function Open(){
	try{
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		var nsIFilePicker = Components.interfaces.nsIFilePicker;
		var fp = Components.classes["@mozilla.org/filepicker;1"]
				  .createInstance(nsIFilePicker);
		fp.init(window, "Select a File", nsIFilePicker.modeOpen);
		var res = fp.show();
		if (res == nsIFilePicker.returnOK){
			var fichier = fp.file;
			document.getElementById("svgFrame").setAttribute("src","");
			var chemin = fichier.path;
			//serialize(chemin,'C:\Program Files\EasyPHP 2.0b1\www\archipoenum\temp.svg',1);
			//var s=chemin.replace(/(C:\Program Files\EasyPHP 2.0b1\www)/,'http://localhost/');
			document.getElementById("svgFrame").setAttribute("src",'http://localhost/archipoenum/test1.svg');
			document.getElementById("svgFrame").setAttribute("hidden","false");
			alert ('chemin ='+s);
		}

		
	}catch(ex2){ alert("interface:Open:"+ex2); }
} 


function getSVG(){
	try {
		var svg;
		svg=document.getElementById("svgFrame");
		return svg;
		
	} catch(ex2){alert("interface:GetSVG:"+ex2); }
}


