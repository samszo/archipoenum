function xulListeModele(id, cont, myDBFile, hidden) {

  try {
  	 	
    this.id = id;
    this.cont = cont;
    this.myDBFile = myDBFile;
    this.hidden = hidden;

	//ajoute le menu des modeles svg
    this.get_DB_list = function() {
		try{
			this.choix = createMenuList(id);
			this.choix.setAttribute("hidden",this.hidden); 
			this.pop = createMenuPopup("popModele");
			var label = createLabel("Liste des modèles :");
			label.setAttribute("id","label_"+id); 
			label.setAttribute("hidden",this.hidden); 
			
			//récupération des données dans la base
			netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
			var file = Components.classes["@mozilla.org/file/directory_service;1"]
	                     .getService(Components.interfaces.nsIProperties)
	                     .get("ProfD", Components.interfaces.nsIFile);
			file.append(this.myDBFile);
			var storageService = Components.classes["@mozilla.org/storage/service;1"]
			                        .getService(Components.interfaces.mozIStorageService);
			var mDBConn = storageService.openDatabase(file);
			
			var statement = mDBConn.createStatement("SELECT * FROM svg WHERE isModel='true' ;");
			var myArray1 = boucle_select(statement);
			for(var j=0;j<myArray1.length;j++){
				//alert("SVG : "+myArray1[j]['fichier']);
				var m1=createMenuItem(myArray1[j]['id_svg']+' : '+myArray1[j]['titre']);
				m1.setAttribute("value",myArray1[j]['id_svg']);
				m1.setAttribute("fichier",myArray1[j]['fichier']);
				this.pop.appendChild(m1);
			}
			statement.reset();

			//ajoute le xul
			this.choix.appendChild(this.pop);
			this.cont.appendChild(label);
			this.cont.appendChild(this.choix);

		}catch(ex2){ 
			alert("xulListeModele:get_DB_SVG: "+ex2); 
			statement.reset();
		}
	} 



  } catch(ex2){alert("xulListeModele::"+ex2);}
		
} 