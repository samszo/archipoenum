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
	if (currentid != "") {
	   content = prompt('Donner un nom pour le noeud : ','undefined');
	   var parentid = tree.treeBoxObject.view.getItemAtIndex(
	              tree.currentIndex).parentNode.getAttribute("id");
	   var parent = tree.treeBoxObject.view.getItemAtIndex(tree.currentIndex).parentNode;
	
	   // create Treerow with id (rowid is a global variable so that
	   // we do not use the same id twice)
	   var tr = document.createElement("treerow");
	   tr.setAttribute("id", "treerow" + this.rowid);
	   var tc = document.createElement("treecell");
	   tc.setAttribute("label", content);
	   tc.setAttribute("id","cell-of-treeitem" + this.itemid);
	   tr.appendChild(tc);
	   this.rowid++;
	
	   // create treeitem with id (itemid is a global variable so 
	   // that we do not use the same id twice)
	   var ti = document.createElement("treeitem");
	   ti.setAttribute("id", "treeitem" + this.itemid);
	   ti.appendChild(tr);
	   this.itemid++;
	
	   // we distinguish the case that
	   // the container of the item is empty --> create new treechildren
	   // object and append item a treechildren-object already exists --> 
	   // get the id and append new item to this one
	   if (currentitem.getAttribute("container") != "true") {
	      currentitem.setAttribute("container", "true");
	      var tch = document.createElement("treechildren");
	      tch.setAttribute("id", "treechildren" + this.treechildrenid);
	      tch.appendChild(ti);
	      this.treechildrenid++;
	      currentitem.appendChild(tch);
	   } else {
	      var existingtreechildren = 
	          document.getElementById(currentitem.childNodes.item(0).getAttribute("id"));
	      existingtreechildren.appendChild(ti);
	   }
	   // set open status of the item
	   currentitem.setAttribute("open", "true");
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
	tc.setAttribute("id","cell-of-treeitem" + this.itemid);
	tr.appendChild(tc);
	this.rowid++;
	var ti = document.createElement("treeitem");
	ti.setAttribute("id", "treeitem" + this.itemid);
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
         alert(cellnode.id);
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
	item.setAttribute("id", "treeitem" + cells[0]);
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
 
