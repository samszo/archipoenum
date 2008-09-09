var trace=true;
var sep=";";
var xulDoc=window.parent.document;

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

function Saisir(idSrc){
	
	try {
		var svgDoc=window.parent.frames['svgFrame'].document;
		//affiche les champs de saisie
		MontrerCacherXul("saisie_"+idSrc);
		//passe le graphique à l'orange
		svgDoc.getElementById(idSrc).setAttribute("fill","orange");
	} catch(ex2){alert("interface:Saisir:"+ex2);}
	
}

function Valider(idSrc,idsDst,idsValid){
	
	try {
		var svgDoc=window.parent.frames['svgFrame'].document;
		//passe le graphique au vert
		svgDoc.getElementById(idSrc).setAttribute("fill","green");
		//change les champs saisis
		ModifChampsSvg(idSrc);
		//vérifie l'afichage de nouveaux graphiques
		if(IdsEstValider(idsValid))
			MontrerSvg(idsDst);
		//cache le xul
		MontrerCacherXul("saisie_"+idSrc);
	} catch(ex2){alert("interface:Valider:"+ex2);}
	
}

function IdsEstValider(idsValid){
	try {
		if(idsValid=="")
			return true;
			
		var arrId = idsValid.split(sep);
		var svgDoc=window.parent.frames['svgFrame'].document;
		var valid = true;
		for (var i = 0; i < arrId.length; i++){
			var validColor = svgDoc.getElementById(arrId[i]).getAttribute("fill");
			if(validColor!="green")
				valid = false;
		}
		return valid;
	} catch(ex2){alert("interface:IdsEstValider:"+ex2);}
}



function ModifChampsSvg(idSrc){
	
	try {
		var svgDoc=window.parent.frames['svgFrame'].document;
		var ChampsSaisis = xulDoc.getElementById("saisie_"+idSrc).childNodes;
		for (var i = 0; i < ChampsSaisis.length; i++){
			var champ = ChampsSaisis[i];
			if(champ.tagName != "label" && champ.tagName != "button"){
				//récupére l'id
				var idDst = champ.getAttribute("id").replace("saisie_", "");
				//récupère le texte
				var texte = champ.value;
				//replace le texte
				svgDoc.getElementById(idDst).firstChild.data= texte; 	
			}
		}
	} catch(ex2){alert("interface:ModifChampsSvg:"+ex2);}	
}


function MontrerSvg(idsDst){
	try {
		var arrId = idsDst.split(sep);
		for (var i = 0; i < arrId.length; i++)
			window.parent.frames['svgFrame'].document.getElementById(arrId[i]).setAttribute("visibility","visible");
	} catch(ex2){alert("interface:MontrerSvg:"+ex2);}
}

function MontrerCacherXul(id){
	try {
		var xul = xulDoc.getElementById(id);
		if(xul.getAttribute("hidden")=="true")
			xul.setAttribute("hidden","false");
		else
			xul.setAttribute("hidden","true");
	} catch(ex2){alert("interface:MontrerXul:"+ex2);}
}