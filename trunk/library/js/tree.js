var start = new Object();
var end = new Object();

function getthetree() {
	return document.getElementById('TreeOntoActeur');
}

function RenameCurrent(treename,cellname){
	var tree = document.getElementById(treename);
	alert(cellname);
	var currentitem = tree.treeBoxObject.view.getItemAtIndex(tree.currentIndex);
	alert(tree.currentIndex);
	 var currentlabel = tree.view.getCellText(tree.currentIndex, tree.columns.getColumnAt(0));
	var newlabel = prompt("Donner un nom :",currentlabel);
	alert(currentlabel);
	
	if (newlabel!=false) {
	   var currentcell = currentitem.getElementsByTagName("treecell")[0];
	   currentcell.setAttribute("label",newlabel);
	}
	this.BuildPopups();
}

function DeleteCurrent(treename){

   if (confirm("Voulez-vous supprimer ce noeud ?") == true) {
      var tree = document.getElementById(treename);
      var currentelement = tree.treeBoxObject.view.getItemAtIndex(tree.currentIndex);
      currentelement.parentNode.removeChild(currentelement);
   }
}

function CreateSubTree(treeid,content){
	var tree = document.getElementById(treeid);
	var currentitem = tree.treeBoxObject.view.getItemAtIndex(tree.currentIndex);
	var currentid = tree.treeBoxObject.view.getItemAtIndex(
	          tree.currentIndex).getAttribute("id");
	//alert(currentitem);
	if (currentitem != null) {
	   content = prompt('Donner un nom pour le noeud : ','Noeud');
	   var parentid = tree.treeBoxObject.view.getItemAtIndex(
	              tree.currentIndex).parentNode.getAttribute("id");
	   var parent = tree.treeBoxObject.view.getItemAtIndex(tree.currentIndex).parentNode;
	
	   // create Treerow with id (rowid is a global variable so that
	   // we do not use the same id twice)
	   var tr = document.createElement("treerow");
	   //tr.setAttribute("id", "treerow" + this.rowid);
	   var tc = document.createElement("treecell");
	   tc.setAttribute("label", "");
	   var tc1 = document.createElement("treecell");
	   tc1.setAttribute("label", content);
	   var tc2 = document.createElement("treecell");
	   tc.setAttribute("value", "false");
	   //tc.setAttribute("id","cell-of-treeitem" + this.itemid);
	   tr.appendChild(tc);
	   tr.appendChild(tc1);
	   tr.appendChild(tc2);
	   this.rowid++;
	
	   // create treeitem with id (itemid is a global variable so 
	   // that we do not use the same id twice)
	   var ti = document.createElement("treeitem");
	   //ti.setAttribute("id", "treeitem" + this.itemid);
	   ti.appendChild(tr);
	   this.itemid++;
	
	   // we distinguish the case that
	   // the container of the item is empty --> create new treechildren
	   // object and append item a treechildren-object already exists --> 
	   // get the id and append new item to this one

	      this.treechildrenid++;
	      parent.appendChild(ti);

	   // set open status of the item
	   //currentitem.setAttribute("open", "true");
	}
}
function Select_Dictio(p1,p2,p3){}


function topcategory(childrenobject,content){
	thetree = document.getElementById(childrenobject);
	var tr = document.createElement("treerow");
	tr.setAttribute("id", "treerow" + this.rowid);
	this.rowid++;
	var tc = document.createElement("treecell");
	tc.setAttribute("label", content);
	//tc.setAttribute("id","cell-of-treeitem" + this.itemid);
	tr.appendChild(tc);
	this.rowid++;
	var ti = document.createElement("treeitem");
	//ti.setAttribute("id", "treeitem" + this.itemid);
	ti.appendChild(tr);
	this.itemid++;
	thetree.appendChild(ti);
}
function event_handler(elem){
        var treeBox = elem.treeBoxObject;
        var row = {};
        var col = {};
        var obj = {};
		//alert("hello : "+col);
        //treeBox.getCellAt(event.clientX,event.clientY,row,col,obj);
         var cellnode = this.getCellNodeAt(row.value,col.value);
         //alert(cellnode.id);
}
         
function getCellNodeAt(row,col){
	var view;
	try {
	  view = this.contentView;
	} catch (ex){}
	if (view){
	  var elem = view.getItemAtIndex(row);
	  if (elem){
	    var pos = ((document.getElementById(col).ordinal - 1) >> 1);
	    return elem.firstChild.childNodes[pos];
	  }
	}
	return null;
}
      
function GetCellSelect(col){

  try {

	//récupère l'onglet sélectionné
  	if (window.parent != self) 
		tb = parent.document.getElementById("tabboxCompare");
	else
		tb = document.getElementById("tabboxCompare");
	
	tab = tb.selectedPanel;
	//récupère l'identifiant du tree
	idTree = "treeExtraction_"+tab.id.substring(3,tab.id.length);

  	if (window.parent != self) 
		tree = parent.document.getElementById(idTree);
	else
		tree = document.getElementById(idTree);
	
	//pour gérer la multisélection
	var numRanges = tree.view.selection.getRangeCount();
	for (var t = 0; t < numRanges; t++){
		tree.view.selection.getRangeAt(t,start,end);
		for (var v = start.value; v <= end.value; v++){
			c = tree.treeBoxObject.columns[col];
			cell = tree.view.getCellText(v,c);
		}
	}
	return cell;
  } catch(ex2){ alert("tree:SetCellSelect:"+ex2); }
}

function SetCellSelect(valeur,col){

  try {

	//récupère l'onglet sélectionné
	tb = document.getElementById("tabboxCompare");
	tab = tb.selectedPanel;
	//récupère l'identifiant du tree
	idTree = "treeExtraction_"+tab.id.substring(3,tab.id.length);

	tree = document.getElementById(idTree);
	//pour gérer la multisélection
	var numRanges = tree.view.selection.getRangeCount();
	for (var t = 0; t < numRanges; t++){
		tree.view.selection.getRangeAt(t,start,end);
		for (var v = start.value; v <= end.value; v++){
			//alert("Item " + tree.view.getCellText(v,c) + " sélectionné.");
			c = tree.treeBoxObject.columns[col];
			tree.view.setCellText(v,c,valeur);
		}
	}
  } catch(ex2){ alert("tree:SetCellSelect:"+ex2); }
}

function SetCellWithCompare(colSrc,colDst,check,valeur){

  try {

	//récupère l'onglet sélectionné
	tb = document.getElementById("tabboxCompare");
	tab = tb.selectedPanel;
	//récupère l'identifiant du tree
	idTree = "treeExtraction_"+tab.id.substring(3,tab.id.length);

	tree = document.getElementById(idTree);
	cSrc = tree.treeBoxObject.columns[colSrc];
	cDst = tree.treeBoxObject.columns[colDst];
	
	//boucle sur toute les lignes
	for (i=0; i<tree.treeBoxObject.view.rowCount; i++)
	{
		ValSrc = tree.treeBoxObject.view.getCellText(i,cSrc);
		if(ValSrc==check){
			tree.view.setCellText(i,cDst,valeur);			
		}
	}
  } catch(ex2){ alert("tree:SetCellWithCompare:"+ex2); }
}


function GetTreeSelect(idTree,idTrace,colTrace){

  try {
	tree = document.getElementById(idTree);
	//pour gérer la multisélection
	var numRanges = tree.view.selection.getRangeCount();
	for (var t = 0; t < numRanges; t++){
		tree.view.selection.getRangeAt(t,start,end);
		for (var v = start.value; v <= end.value; v++){
			//alert("Item " + tree.view.getCellText(v,c) + " sélectionné.");
			for (var i = 0; i < idTrace.length; i++){
				dump("GetTreeSelect colTrace[i] "+colTrace[i]+"\n");
				dump("GetTreeSelect idTrace[i] "+idTrace[i]+"\n");
				//alert("GetTreeSelect idTrace["+i+"]="+idTrace[i]+" colTrace["+i+"]="+colTrace[i]+"\n")
				c = tree.treeBoxObject.columns[colTrace[i]];
				if(idTrace[i].substring(0,6)=="iframe"){
					//alert(idTrace[i]+tree.view.getCellText(v,c));
					document.getElementById(idTrace[i]).setAttribute("src",tree.view.getCellText(v,c));
				}else
					document.getElementById(idTrace[i]).value=tree.view.getCellText(v,c);
			}
		}
	}
  } catch(ex2){ alert("tree:GetTreeSelect:"+ex2); }
}

function GetTreeIdSelect(idTree,idCol,arrVal){

  try {
	tree = document.getElementById(idTree);
	c = tree.treeBoxObject.columns[idCol];
	var numRanges = tree.view.selection.getRangeCount();
	for (var t = 0; t < numRanges; t++){
		tree.view.selection.getRangeAt(t,start,end);
		for (var v = start.value; v <= end.value; v++){
			var val = tree.view.getCellText(v,c).split("_");
			for (var i = 0; i <= val.length; i++){
				if(val[i]==arrVal)
					return val[i+1] ;			
			}			
		}
	}
  } catch(ex2){ alert("tree:GetTreeValSelect:"+ex2); }
}



function GetTreeValSelect(idTree,idCol){

  try {
  	if (window.parent != self) 
		tree = parent.document.getElementById(idTree);
	else
		tree = document.getElementById(idTree);

	c = tree.treeBoxObject.columns[idCol];
	//pour gérer la multisélection
	var numRanges = tree.view.selection.getRangeCount();
	for (var t = 0; t < numRanges; t++){
		tree.view.selection.getRangeAt(t,start,end);
		for (var v = start.value; v <= end.value; v++){
			var val = tree.view.getCellText(v,c);
		}
	}
	return val;
  } catch(ex2){ alert("tree:GetTreeValSelect:"+ex2); }
}


function Tree_AddItem(parentitem, cells)
{
  try {
	var parent = document.getElementById(parentitem);
	if (!parent){
		if(trace)
			console.log("tree:Tree_AddItem:no parent="+parentitem);
		return null;
	}
	if(trace)
		console.log("tree:Tree_AddItem:parent="+parentitem);
	var item = document.createElement("treeitem");
	//item.setAttribute("id", "treeitem" + cells[0]);
	var row = document.createElement("treerow");
	
	//création des colonnes du tree
	for (var i = 0; i < cells.length; i++) {
		var cell = document.createElement("treecell");
		cell.setAttribute("label", cells[i]);
		row.appendChild(cell);
	}

	item.appendChild(row);
	if(trace)
		console.log("tree:Tree_AddItem:item.id="+item.id);

	parent = GetItemOrChildren(parent,item,cells[0]);

	// set open status of the item
	parent.setAttribute("open", "true");
	
  } catch(ex2){ console.log("tree:Tree_AddItem:"+ex2); }
 }

 function GetItemOrChildren(parent,item,id)
{
	// we distinguish the case that
	//		the container of the item is empty --> create new treechildren object and append item
	//		a treechildren-object already exists --> get the id and append new item to this one
	if (parent.getAttribute("container") != "true") {
		if(trace)
			console.log("tree:GetItemOrChildren:no conteneur="+parent.id);
		//alert('no conteneur');
		var children = document.createElement("treechildren");
		parent.setAttribute("container", "true");
		//item.setAttribute("container", "true");
		children.setAttribute("id", "treechildren" + id);
		children.appendChild(item);
		children.setAttribute("open", "true");
		parent.appendChild(children);
	} else {
		//alert('conteneur');
		//	deplacement du nouvel element en fin de liste					
		var container = parent.getElementsByTagName('treechildren')[0];
		if(trace)
			console.log("tree:GetItemOrChildren:conteneur="+container.id);
		try { container.removeChild(item) } catch(e) { }
		container.appendChild(item);
		
	}
	return parent;
}
 
 function GetTreeDom(file)
{
	
  try {
	var tree = document.getElementById(TreeId);
	
	var doc = "<rdf:RDF xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlns:lex='http://lex#'>";
	doc += "<rdf:Description rdf:about='urn:roots'>";
	doc += "<lex:titre>"+file.path+"</lex:titre>";
	doc += "<lex:visible>check_yes</lex:visible>";
	doc += "<lex:icone>images/cell.png</lex:icone>";
	doc += "<lex:file>photo_001</lex:file>";
	doc += "<lex:ID>0</lex:ID>";
	doc += "</rdf:Description>";	

	cID = tree.treeBoxObject.columns[2];
	for (i=0; i<tree.treeBoxObject.view.rowCount; i++)
	{
		IDi = i;//tree.treeBoxObject.view.getCellText(i,cID);
		doc += "<rdf:Description rdf:about='urn:root:"+IDi+"'>";

		for (j=0; j<tree.treeBoxObject.columns.count; j++)
		{
			c = tree.treeBoxObject.columns[j];
			name =tree.treeBoxObject.columns[j].element.getAttribute('label');
			if(name=="visible")
				val = GetVisible(tree, i);
			else
				val = tree.treeBoxObject.view.getCellText(i,c);
			doc += "<lex:"+name+">"+val+"</lex:"+name+">";
		}
		doc += "</rdf:Description>";													   
	}
	//création des hiérarchies
	doc += "<rdf:Seq rdf:about='urn:roots'>";
	doc += "<rdf:li rdf:resource='urn:root:0'/>";
	doc += "</rdf:Seq>";	
	doc += GetHierarchie(tree, 0);
	
	doc += "</rdf:RDF>";

  } catch(ex){ dump(ex); }
	
	return doc;
}

function GetHierarchie(tree, i)
{
	doc = "";
	cID = tree.treeBoxObject.columns[2];
	if(i<tree.treeBoxObject.view.rowCount){
		niv = tree.treeBoxObject.view.getLevel(i);
		isContainer = tree.treeBoxObject.view.isContainer(i);
		dump("-- "+i+" Hiérarchie "+isContainer+" --> "+niv+"\n");
		if(isContainer){
			IDi = i;//tree.treeBoxObject.view.getCellText(i,cID);
			doc += "<rdf:Seq rdf:about='urn:root:"+IDi+"'>";
			//création de la liste du niveau
			for (j=0; j<tree.treeBoxObject.view.rowCount; j++)
			{
				if(tree.treeBoxObject.view.getLevel(j)==(niv+1)){
					//vérifie que la branche est un enfant
					if(tree.treeBoxObject.view.getParentIndex(j)==i){
						IDj = j;//tree.treeBoxObject.view.getCellText(j,cID);
						doc += "<rdf:li rdf:resource='urn:root:"+IDj+"'/>";
					}
				}
			}
			doc += "</rdf:Seq>";
		}
		
		doc += GetHierarchie(tree, i+1);	
	}
	return doc;	
}

function SaveTree(file)
{
	//http://developer.mozilla.org/fr/docs/Extraits_de_code:Fichiers_E/S
	//var tree = document.getElementById(TreeId);
	//var doc = tree.treeBoxObject.view;//GetTreeDom();
	var doc = GetTreeDom(file);

	dump("SaveTree lancée "+file.path+"\n");
  try {

	var serializer = new XMLSerializer();
	var foStream = Components.classes["@mozilla.org/network/file-output-stream;1"]
				   .createInstance(Components.interfaces.nsIFileOutputStream);
	foStream.init(file, 0x02 | 0x08 | 0x20, 0666, 0); // write, create, truncate
	//serializer.serializeToStream(doc, foStream, "");   // rememeber, doc is the DOM tree
	
	foStream.write(doc, doc.length);
	foStream.close();			   	

  } catch(ex){ dump(ex); }

	dump("SaveTree finite\n");
}

function getSelectedConcept()
{
	var SelectedConcepts=new Array();
	var tree=document.getElementById('TreeOntoActeur');
	treeRows=tree.getElementsByTagName("treerow");
	j=0;
	//alert(treeRows.length);
	for (i=0;i<treeRows.length;i++)
	{
		var treeCells=treeRows[i].getElementsByTagName("treecell");
		if (treeCells[2]){
			if (treeCells[2].getAttribute("value")=="true"){
				SelectedConcepts[j]=treeCells[1].getAttribute("label");
				//alert(SelectedConcepts[j]);
				j++;
			}			
		}
	}
	//alert(SelectedConcepts.length);
	p_saisi=document.getElementById("S1");
	svg_tags='<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg   xmlns:svg="http://www.w3.org/2000/svg"   xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  version="1.0"   width="120mm"   height="297mm"   id="tagCloud">  <defs     id="defs4" /> ';
	for (i=0;i<SelectedConcepts.length;i++){
		svg_tags=svg_tags+insertIntoTag(SelectedConcepts[i],i);
	}
	svg_tags=svg_tags+"</svg>";
	var parser=new DOMParser();
	var xmlDoc=parser.parseFromString(svg_tags,"text/xml");
	p_saisi.appendChild(xmlDoc.documentElement);
	//alert(svg_tags);
}

function insertIntoTag(tag,i){
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	var mDBConn = connect_DB();
	
	if (verfierTag(tag)==0){
		var sql = 'INSERT INTO tag(tag,poids) VALUES(?1,?2);';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,tag);
		statement.bindUTF8StringParameter(1,"1");
		statement.execute();
		statement.reset();
		var op=0.25;
		var statement = mDBConn.createStatement('SELECT id_tag FROM tag ORDER BY id_tag DESC;');
		var myArray1 = boucle_select(statement);
		var id_tag=myArray1[0]["id_tag"];
		var id_hist=insertIntoHist();
		insertIntoTagCloud(id_tag,id_hist,g_idSvg,id_user);
		svg_tag='<text x = "10" y = "25" dx="'+((i%2)*100)+'" dy="'+(i*20)+'" style="opacity:'+op+';" fill = "navy" font-size = "'+10+'">'+tag+' </text>';
		return svg_tag;
	}
	else {
		var statement = mDBConn.createStatement('SELECT id_tag,poids FROM tag where tag=?1;');
		statement.bindUTF8StringParameter(0,tag);
		var myArray1 = boucle_select(statement);
		var id_tag=myArray1[0]["id_tag"];
		var poids=parseInt(myArray1[0]['poids']);
		//alert(poids);
		if (poids=="NaN")
			nouveau_poids=1;
		else 
			nouveau_poids=poids+1;
		//alert(nouveau_poids);
		var sql = 'UPDATE tag SET poids=?1 WHERE tag=?2;';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,nouveau_poids);
		statement.bindUTF8StringParameter(1,tag);
		statement.execute();
		statement.reset();	
		var id_hist=insertIntoHist();
		insertIntoTagCloud(id_tag,id_hist,g_idSvg,id_user);
		if (nouveau_poids<=10) {op=0.25;poid=10;}
		else if (nouveau_poids<=30){ op=0.50;poid=20;}
		else if (nouveau_poids<=50) {op=0.75;poid=30;}
		else if (nouveau_poids>50) {op=0.99;poid=40;}
		svg_tag='<text x = "10" y = "25" dx="'+((i%2)*100)+'" dy="'+(i*20)+'" style="opacity:'+op+';" fill = "navy" font-size = "'+poid+'">'+tag+' </text>';
		return svg_tag;
	}
}

function insertIntoTagCloud(id_tag,id_hist,id_svg,id_user){
	var mDBConn = connect_DB();
	var sql = 'INSERT INTO tag_cloud(id_tag,id_hist,id_svg,id_user) VALUES(?1,?2,?3,?4);';
	var statement = mDBConn.createStatement(sql);
	statement.bindUTF8StringParameter(0,id_tag);
	statement.bindUTF8StringParameter(1,id_hist);
	statement.bindUTF8StringParameter(2,id_svg);
	statement.bindUTF8StringParameter(3,id_user);
	statement.execute();
	statement.reset();
}

function insertIntoHist(){
	var mDBConn = connect_DB();
	var sql = 'INSERT INTO historique(date) VALUES(?1);';
	var statement = mDBConn.createStatement(sql);
	statement.bindUTF8StringParameter(0,ladate.toGMTString());
	statement.execute();
	statement.reset();
	var statement = mDBConn.createStatement('SELECT id_hist FROM historique ORDER BY id_hist DESC;');
	var myArray1 = boucle_select(statement);
	id_hist=myArray1[0]["id_hist"];
	return id_hist;
}

function verfierTag(tag)
{
	var mDBConn = connect_DB();
	var statement = mDBConn.createStatement('SELECT tag FROM tag where tag=?1;');
	statement.bindUTF8StringParameter(0,tag);
	var myArray1 = boucle_select(statement);
	if (myArray1.length==0)
		return 0;
	else return 1;
}

function rechercher_index(){
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	var mDBConn = connect_DB();
	tags=document.getElementById("recherche").value;
	tags_splited = new Array();
	tags_splited=tags.split(' ');
	var load=-1;
	for (i=0;i<tags_splited.length;i++){
		current_tag=tags_splited[i];
		var statement = mDBConn.createStatement('SELECT id_tag FROM tag where tag LIKE ?1;');
		statement.bindUTF8StringParameter(0,"%"+current_tag+"%");
		var myArray1 = boucle_select(statement);
		
		if (myArray1.length!=0){
			load = window.open('http://localhost/archipoenum/library/xul/res_search.xul?'+tags,'','scrollbars=2,menubar=no,height=300,width=700,resizable=no,toolbar=no,location=no,status=no');
			load.moveTo(400,100);
			break;
		}
		else continue;
	}
	if (load==-1) alert ("Aucune resultat est trouvee");
}

function afficher_res_rech(){
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	
	var parameters = location.search.substring(1).split("&");
	createDefault();	
    var tags = parameters[0];
    
	var mDBConn = connect_DB();
	tags_splited = new Array();
	tags_splited=tags.split('%20');
	//alert(tags_splited);
	for (i=0;i<tags_splited.length;i++){
		current_tag=tags_splited[i];
		var statement = mDBConn.createStatement('SELECT id_tag FROM tag where tag LIKE ?1;');
		statement.bindUTF8StringParameter(0,"%"+current_tag+"%");
		var myArray1 = boucle_select(statement);
		//alert(current_tag);
		if (myArray1.length!=0){
			for (k=0;k<myArray1.length;k++){
				var id_tag=myArray1[k]["id_tag"];
				var statement = mDBConn.createStatement('SELECT DISTINCT id_svg FROM tag_cloud where id_tag=?1 ORDER BY id_hist DESC;');
				statement.bindUTF8StringParameter(0,id_tag);
				var myArray2 = boucle_select(statement);
				for (j=0;j<myArray2.length;j++){
					id_svg_trouver=(myArray2[j]["id_svg"]);
					//alert(id_svg_trouver);
					var statement = mDBConn.createStatement('SELECT titre,fichier FROM svg where id_svg=?1;');
					statement.bindUTF8StringParameter(0,id_svg_trouver);
					var myArray1 = boucle_select(statement);
					fichier_svg = myArray1[0]['fichier'];
					titre_svg = myArray1[0]['titre'];
					var parser=new DOMParser();
					// Transformer le String en Objet DOM
					var graph=parser.parseFromString(fichier_svg,"text/xml");
					svg=createSvg("svg");
					graph.documentElement.setAttribute("id","svgTrouverNumero"+j);
					g=createG("root");
					g.appendChild(graph.documentElement);
					svg.appendChild(g);
					svg.setAttribute("version","1.1");
					svg.setAttribute("preserveAspectRatio","xMinYMin meet");
					svg.setAttribute("baseprofile","full");
					svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
					svg.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink");
					svg.setAttribute("xmlns:ev","http://www.w3.org/2001/xml-events");
					svg.setAttribute("visibility",'visible');
					svg.setAttribute("viewBox","0 0 1000 1000");
					svg.setAttribute("width","100px");
					svg.setAttribute("height","100px");
					p_res_search= document.getElementById("res_search");
					group=createGroupbox("group"+j);
					
					firstVbox= createVbox("v1"+j);
					firstHbox= createHbox("h1"+j);
					
					firstHbox.setAttribute("onclick","ouvrir_svg("+id_svg_trouver+")");
					var statement = mDBConn.createStatement('SELECT DISTINCT tag.tag FROM tag_cloud,tag WHERE id_svg=?1 AND tag_cloud.id_tag=tag.id_tag ORDER BY id_hist DESC;');
					statement.bindUTF8StringParameter(0,id_svg_trouver);
					var myArray3 = boucle_select(statement);
					var tags_svg="";
					for (j=0;j<myArray3.length;j++){
						if (j<myArray3.length-1)
							tags_svg=tags_svg+myArray3[j]['tag']+' , ';
						else tags_svg=tags_svg+myArray3[j]['tag'];
					}
					label_titre=createLabel("Titre de SVG : "+titre_svg);
					label_tags=createLabel("Mot Clef utilisees sont : "+tags_svg);
					label_vide=createLabel("                            "   );
					firstHbox.appendChild(svg);
					firstVbox.appendChild(label_titre);
					firstVbox.appendChild(label_tags);
					firstHbox.appendChild(label_vide);
					firstHbox.appendChild(firstVbox);
					group.appendChild(firstHbox);

					p_res_search.appendChild(group);
				}
				
			}
		}
	}
}

function ouvrir_svg (id_svg){
	self.close;
	window.opener.svg_open_id(id_svg);
}
 