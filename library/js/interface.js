var trace=true;
var sep=";";
var xulDoc=window.parent.document;
var arrValidation = new Array();
var figure_courant="fig_p";
var id_courant='1';
var myDBFile="archipoenum.sqlite";
var SVG_NS ="http://www.w3.org/2000/svg";
var docs=2;
var doc_courant="";
var user;
var id_user;
var g_idSvg=-1;
var g_idModel=-1;
var ladate=new Date();
var xul_c='';
var svgTitre;
var racine_interface="test3";

//var cmpt=1;
function  init(){	
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	var parameters = location.search.substring(1).split("&");
	//alert(parameters);
	//alert(parameters[0]);
	createDefault();	
    var temp = parameters[0].split("=");
    var temp2 = parameters[1].split("=");
    user = unescape(temp[1]);
    id_user=unescape(temp2[1]);
    //alert(id_user+' : '+user);
	document.getElementById("u1").setAttribute("value","Utilisateur Connecté  :  "+user);
	//document.getElementById("ch1").setAttribute("label",user);
	document.getElementById("u1").setAttribute("hidden","false");
	document.getElementById("u2").setAttribute("hidden","false");
	//x=xmlDoc.getElementsByTagName("svg");
	//document.removeChild(x[x.length]); 
	/*document.getElementById("fig_21_indexer").setAttribute("fill","green");
	document.getElementById("fig_21_indexing").setAttribute("fill","green");
	document.getElementById("fig_21_indexer_name").firstChild.data=user;
	document.getElementById("fig_21_indexing_id").firstChild.data=id_user;
	document.getElementById("fig_21_indexing_date").firstChild.data=ladate.getDate()+"-"+(ladate.getMonth()+1)+"-"+ladate.getFullYear();*/
	get_list_SVG_user();
}

function createDefault(){
	var mDBConn = connect_DB();
	var statement = mDBConn.createStatement('SELECT id_svg FROM svg where id_user=?1;');
	statement.bindUTF8StringParameter(0,0);
	// return dataset;	
	var myArray1 = boucle_select(statement);
	if (myArray1.length<2)	{
		chemin1="C:\\wamp\\www\\archipoenum\\library\\xul\\fig_21.xul";	
		che1="chrome://archipoenum/content/library/xul/fig_21.xul";	
		chrm1=chromeToPath (che1);

		

	
		chemin1="C:\\wamp\\www\\archipoenum\\library\\xul\\fig_18.xul";	
		che1="chrome://archipoenum/content/library/xul/fig_18.xul";	
		chrm1=chromeToPath (che1);
		xml1 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 width="960px" height="580px" viewBox="0 0 980.879 650" enable-background="new 0 0 980.879 650"	 xml:space="preserve"><script xlink:href="../js/interface.js" /><g>		<g id="fig_18_type" onclick="Saisir(this.id,\'fig_18\')" fill="red" visibility="visible">		<polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="		0.504,284 72.504,284 72.504,338 0.504,338 0.504,284 	"/>		<text style="fill:#231F20;font-size:20px;" transform="matrix(1 0 0 1 20 314.8838)">Type</text>		<path fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" d="		M0.504,347.45c0-4.875,3.9-8.775,8.775-8.775h54.45c4.875,0,8.775,3.9,8.775,8.775v36.449c0,4.875-3.9,8.775-8.775,8.775H9.279		c-4.875,0-8.775-3.9-8.775-8.775v-40.35V347.45z"/>		<text id="fig_18_type_name" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 8.606 351.7822)">***</text>				<g id="fig_18_type_document" onclick="changer(\'fig_18\')" fill="none" visibility="inherit">				<polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="			158.679,299.525 162.504,300.65 164.304,301.775 165.879,303.575 167.004,305.6 167.904,307.85 168.58,310.325 168.804,313.025 			167.904,318.425 167.004,320.675 165.879,322.7 164.304,324.275 162.504,325.399 160.705,326.3 158.679,326.524 130.554,326.524 			127.179,326.524 123.354,325.399 121.554,324.275 120.205,322.7 118.854,320.675 117.955,318.425 117.279,315.725 117.054,313.025 			117.955,307.85 118.854,305.6 120.205,303.575 121.554,302 123.354,300.65 125.154,299.75 127.179,299.525 153.955,299.525 			158.679,299.525 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 130 316.9072)">has</text>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="72.504" y1="311" x2="117.054" y2="311"/>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="168.804" y1="313.025" x2="203.679" y2="313.025"/>			<polyline fill="white" stroke="black" fill-rule="evenodd" clip-rule="evenodd" points="87.354,318.098 87.354,304.925 				107.164,304.925 107.164,318.098 87.354,318.098 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 87.356 314.8838)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"></tspan><tspan x="8.326" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="11.692" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"></tspan><tspan x="14.393" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>			<polyline fill="white" stroke="black" fill-rule="evenodd" clip-rule="evenodd" points="175.33,320.123 175.33,306.95 				195.139,306.95 195.139,320.123 175.33,320.123 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 175.3247 316.9072)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"></tspan><tspan x="8.326" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="11.692" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"></tspan><tspan x="14.393" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan></text>		</g>			<g id="fig_18_type_format" onclick="changer(\'fig_18\')" fill="none" visibility="inherit">					<polygon stroke="black" stroke-linecap="square" stroke-miterlimit="10" points="58.33,444.649 63.729,445.774 				66.205,446.899 68.229,448.7 70.029,450.725 71.379,452.975 72.279,455.45 72.504,458.149 71.379,463.55 70.029,465.8 				68.229,467.825 66.205,469.399 63.729,470.524 61.029,471.425 58.33,471.649 19.179,471.649 14.679,471.649 9.279,470.524 				6.804,469.399 4.779,467.825 2.979,465.8 1.629,463.55 0.729,460.85 0.504,458.149 1.629,452.975 2.979,450.725 4.779,448.7 				6.804,447.125 9.279,445.774 11.979,444.875 14.679,444.649 51.804,444.649 58.33,444.649 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 10 462.0322)">Conditions</text>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="36.504" y1="392.675" x2="36.504" y2="444.649"/>					<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="36.504" y1="471.649" x2="36.504" y2="538.475"/>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="black" points="28.404,422.048 28.404,408.875 				42.713,408.875 42.713,422.048 28.404,422.048 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 28.4028 418.8291)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="8.991" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="black" points="26.604,525.772 26.604,512.6 				46.414,512.6 46.414,525.772 26.604,525.772 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 26.5981 522.5635)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"></tspan><tspan x="8.326" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="11.692" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"></tspan><tspan x="14.393" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan></text>		</g>	</g>		<g id="fig_18_format" onclick="Saisir(this.id,\'fig_18\')" fill="red" visibility="visible">		<polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="			0.504,538.475 72.504,538.475 72.504,592.475 0.504,592.475 0.504,538.475 	"/>		<text style="fill:#231F20;font-size:20px;" transform="matrix(1 0 0 1 3.6528 563.5088)">Format</text>		<path transform="translate(0 255)" fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" d="		M0.504,347.45c0-4.875,3.9-8.775,8.775-8.775h54.45c4.875,0,8.775,3.9,8.775,8.775v36.449c0,4.875-3.9,8.775-8.775,8.775H9.279		c-4.875,0-8.775-3.9-8.775-8.775v-40.35V347.45z"/>		<text id="fig_18_format_name" style="fill:#231F20;font-family:ArialMT;font-size:12px;" x="5" y="610" >***</text>	</g>		<g id="fig_18_document" onclick="Saisir(this.id,\'fig_18\')" fill="red" visibility="visible">		<text transform="matrix(1 0 0 1 179.604 266.2822)"><tspan x="0" y="0" fill="#FF8000" stroke="#231F20" font-family="EurostileRegular" font-size="39.825">d</tspan><tspan x="20.281" y="0" fill="#FF8000" stroke="#231F20" font-family="EurostileRegular" font-size="39.825">o</tspan><tspan x="40.506" y="0" fill="#FF8000" stroke="#231F20" font-family="EurostileRegular" font-size="39.825">cu</tspan><tspan x="80.1" y="0" fill="#FF8000" stroke="#231F20" font-family="EurostileRegular" font-size="39.825">me</tspan><tspan x="132.993" y="0" fill="#FF8000" stroke="#231F20" font-family="EurostileRegular" font-size="39.825">n</tspan><tspan x="153.487" y="0" fill="#FF8000" stroke="#231F20" font-family="EurostileRegular" font-size="39.825">t</tspan></text>		<polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="		203.679,289.175 275.679,289.175 275.679,343.175 203.679,343.175 203.679,289.175 	"/>		<text style="fill:#231F20;font-size:20px;" transform="matrix(1 0 0 1 217.4028 320.0635)">Doc</text>		<path fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" d="		M202.554,352.175c0-4.875,3.9-8.775,8.775-8.775h54.45c4.875,0,8.775,3.9,8.775,8.775v81.45c0,4.875-3.9,8.774-8.775,8.774h-54.45		c-4.875,0-8.775-3.899-8.775-8.774v-85.351V352.175z"/>		<text id="fig_18_document_titre" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 205 361.0088)">Titre</text>		<text id="fig_18_document_auteur" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 205 372.9307)">Auteur</text>		<text id="fig_18_document_date" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 205 384.8525)">Date</text>		<text id="fig_18_document_adresse" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 205 396.7822)">Adresse</text>		<text id="fig_18_document_circonstance" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 205 408.7119)">Circonstance</text>		<g id="fig_18_document_format" onclick="changer(\'fig_18\')" fill="none" visibility="inherit">				<polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="			200.979,549.05 206.379,550.175 208.854,551.3 210.879,553.1 212.679,555.125 214.029,557.375 214.929,559.85 215.154,562.55 			214.029,567.95 212.679,570.2 210.879,572.225 208.854,573.8 206.379,574.925 203.679,575.825 200.979,576.05 161.83,576.05 			157.33,576.05 151.929,574.925 149.455,573.8 147.429,572.225 145.629,570.2 144.279,567.95 143.379,565.25 143.154,562.55 			144.279,557.375 145.629,555.125 147.429,553.1 149.455,551.524 151.929,550.175 154.629,549.274 157.33,549.05 194.455,549.05 			200.979,549.05 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 160 566.4385)">has</text>			<polyline fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" points="238.554,442.399 238.554,562.55 				215.154,562.55 	"/>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="143.154" y1="562.55" x2="72.504" y2="562.55"/>			<polyline fill="white" stroke="black" fill-rule="evenodd" clip-rule="evenodd" points="96.58,569.647 96.58,556.475 				116.389,556.475 116.389,569.647 96.58,569.647 	"/>			<text style="fill:#231F20;font-size:20px;" transform="matrix(1 0 0 1 96.5747 566.4385)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"></tspan><tspan x="8.326" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="11.692" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"></tspan><tspan x="14.393" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>			<polyline fill="white" stroke="black" fill-rule="evenodd" clip-rule="evenodd" points="228.654,517.897 228.654,504.725 				248.464,504.725 248.464,517.897 228.654,517.897 	"/>			<text style="fill:#231F20;font-size:20px;" transform="matrix(1 0 0 1 228.6528 514.6807)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"></tspan><tspan x="8.326" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="11.692" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"></tspan><tspan x="14.393" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan></text>		</g>	</g>			<g id="fig_18_section" onclick="Saisir(this.id,\'fig_18\')" fill="red" visibility="hidden">		<polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="		456.804,290.75 528.804,290.75 528.804,344.75 456.804,344.75 456.804,290.75 	"/>		<text style="fill:#231F20;font-size:20px;" transform="matrix(1 0 0 1 462 321.6338)">Section</text>		<path fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" d="		M456.804,352.399c0-4.875,3.9-8.774,8.775-8.774h54.45c4.875,0,8.774,3.899,8.774,8.774v38.7c0,4.875-3.899,8.775-8.774,8.775		h-54.45c-4.875,0-8.775-3.9-8.775-8.775v-42.6V352.399z"/>		<text id="fig_18_section_begin" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 467.8247 363.7041)">Begining</text>		<text id="fig_18_section_end" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 481.3247 375.6338)">End</text>		<text id="fig_18_section_id" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 485.8325 387.5635)">id</text>		<g id="fig_18_document_section" onclick="changer(\'fig_18\')" fill="none" visibility="inherit">				<polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="			371.08,301.1 375.129,302.225 376.929,303.35 378.279,305.15 379.629,307.175 380.529,309.425 381.205,311.9 381.429,314.6 			380.529,320 379.629,322.25 378.279,324.275 376.929,325.85 375.129,326.975 373.104,327.875 371.08,328.1 342.955,328.1 			339.804,328.1 335.754,326.975 334.179,325.85 332.604,324.275 331.479,322.25 330.58,320 329.904,317.3 329.679,314.6 			330.58,309.425 331.479,307.175 332.604,305.15 334.179,303.575 335.754,302.225 337.779,301.325 339.804,301.1 366.354,301.1 			371.08,301.1 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 340 318.4775)">has</text>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="275.679" y1="316.175" x2="329.679" y2="316.175"/>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="381.429" y1="314.6" x2="456.804" y2="314.6"/>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="black" points="297.279,323.272 297.279,310.1 				317.089,310.1 317.089,323.272 297.279,323.272 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 297.2778 320.0635)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="8.326" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="11.692" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="14.393" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="black" points="407.754,321.697 407.754,308.525 				427.564,308.525 427.564,321.697 407.754,321.697 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 407.7544 318.4775)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="8.326" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="11.692" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="14.393" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan></text>		</g>		<g id="fig_18_section_nature" onclick="changer(\'fig_18\')" fill="none" visibility="inherit">					<polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="			408.429,448.925 413.83,450.05 416.304,451.175 418.33,452.975 420.129,455 421.479,457.25 422.379,459.725 422.604,462.425 			421.479,467.825 420.129,470.075 418.33,472.1 416.304,473.675 413.83,474.8 411.129,475.7 408.429,475.925 369.279,475.925 			364.779,475.925 359.379,474.8 356.904,473.675 354.879,472.1 353.08,470.075 351.729,467.825 350.83,465.125 350.604,462.425 			351.729,457.25 353.08,455 354.879,452.975 356.904,451.399 359.379,450.05 362.08,449.149 364.779,448.925 401.904,448.925 			408.429,448.925 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 370 466.3135)">has</text>			<polyline fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" points="492.804,399.875 492.804,436.1 				386.604,436.1 386.604,448.925 	"/>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="386.604" y1="475.925" x2="386.604" y2="510.125"/>			<polyline fill="white" stroke="black" fill-rule="evenodd" clip-rule="evenodd" points="376.705,501.923 376.705,488.75 				396.514,488.75 396.514,501.923 376.705,501.923 	"/>			<text style="fill:#231F20;font-size:20px;" transform="matrix(1 0 0 1 376.6997 498.7041)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="8.326" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="11.692" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="14.393" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>			<polyline fill="white" stroke="black" fill-rule="evenodd" clip-rule="evenodd" points="482.904,423.397 482.904,410.225 				502.714,410.225 502.714,423.397 482.904,423.397 	"/>			<text style="fill:#231F20;font-size:20px;" transform="matrix(1 0 0 1 482.9028 420.1885)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="8.326" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="11.691" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="14.393" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan></text>		</g>		<g id="fig_18_type_section" onclick="changer(\'fig_18\')" fill="none" visibility="inherit">					<polygon stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="261.504,189.5 266.904,190.625 				269.379,191.75 271.404,193.55 273.205,195.575 274.554,197.825 275.455,200.3 275.679,203 274.554,208.4 273.205,210.65 				271.404,212.675 269.379,214.25 266.904,215.375 264.205,216.275 261.504,216.5 222.354,216.5 217.854,216.5 212.455,215.375 				209.979,214.25 207.955,212.675 206.154,210.65 204.804,208.4 203.904,205.7 203.679,203 204.804,197.825 206.154,195.575 				207.955,193.55 209.979,191.975 212.455,190.625 215.154,189.725 217.854,189.5 254.979,189.5 261.504,189.5 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 210 206.8838)">Conditions</text>			<polyline fill="none" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="36.504,284 36.504,203 				203.679,203 	"/>			<polyline fill="none" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="275.679,203 474.804,203 				474.804,290.75 	"/>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="#231F20" points="464.904,253.072 464.904,239.9 				484.714,239.9 484.714,253.072 464.904,253.072 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 464.9028 249.8525)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="8.326" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="11.692" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="14.393" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan></text>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="#231F20" points="26.604,261.172 26.604,248 46.414,248 				46.414,261.172 26.604,261.172 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 26.5981 257.9619)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">0</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="8.326" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="11.692" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="14.393" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan></text>		</g>	</g>	<g id="fig_18_nature" onclick="Saisir(this.id,\'fig_18\')" fill="red" visibility="hidden">			<polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="		351.279,510.125 423.279,510.125 423.279,564.125 351.279,564.125 351.279,510.125 	"/>		<text style="fill:#231F20;font-size:20px;" transform="matrix(1 0 0 1 360 541.0088)">Nature</text>		<path fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" d="		M347.904,573.35c0-4.875,3.9-8.774,8.775-8.774h64.125c4.875,0,8.775,3.899,8.775,8.774V637.7c0,4.875-3.9,8.774-8.775,8.774		h-64.125c-4.875,0-8.775-3.899-8.775-8.774v-68.25V573.35z"/>		<text id="fig_18_nature_name" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 370.856 585.7822)">***</text>	</g>	<g id="fig_18_actor" onclick="changer_interface(\'1\',\'2\',this);" fill="red" visibility="hidden">					<text transform="matrix(1 0 0 1 665.6138 201.0586)"><tspan x="0" y="0" fill="#FF8000" stroke="#231F20" font-family="EurostileRegular" font-size="39.825">a</tspan><tspan x="20.262" y="0" fill="#FF8000" stroke="#231F20" font-family="EurostileRegular" font-size="39.825">c</tspan><tspan x="39.611" y="0" fill="#FF8000" stroke="#231F20" font-family="EurostileRegular" font-size="39.825">to</tspan><tspan x="72.887" y="0" fill="#FF8000" stroke="#231F20" font-family="EurostileRegular" font-size="39.825">r</tspan></text>		<polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="		974.979,0.95 974.979,54.95 902.979,54.95 902.979,0.95 974.979,0.95 	"/>		<text style="fill:#231F20;font-size:20px;" transform="matrix(1 0 0 1 920 31.8369)">Actor</text>		<path fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" d="		M902.754,63.275c0-4.875,3.9-8.775,8.775-8.775h54.449c4.875,0,8.775,3.9,8.775,8.775V80.15c0,4.875-3.9,8.775-8.775,8.775H911.53		c-4.875,0-8.775-3.9-8.775-8.775V59.375V63.275z"/>		<text id="fig_18_actor_type" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 926.3794 75.7041)">Type</text>		<g id="fig_18_section_actor" onclick="changer(\'fig_18\')" fill="none" visibility="inherit">					<polygon fill="none" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="685.179,304.25 690.58,305.375 				693.054,306.5 695.08,308.3 696.879,310.325 698.229,312.575 699.129,315.05 699.354,317.75 698.229,323.15 696.879,325.399 				695.08,327.425 693.054,329 690.58,330.125 687.879,331.024 685.179,331.25 646.03,331.25 641.53,331.25 636.129,330.125 				633.655,329 631.629,327.425 629.83,325.399 628.479,323.15 627.58,320.45 627.354,317.75 628.479,312.575 629.83,310.325 				631.629,308.3 633.655,306.725 636.129,305.375 638.83,304.475 641.53,304.25 678.655,304.25 685.179,304.25 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 644.0044 321.6338)">Products</text>			<polyline fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" points="699.354,317.75 938.754,317.75 				938.754,88.925 	"/>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="#231F20" points="930.655,150.922 930.655,137.75 				944.963,137.75 944.963,150.922 930.655,150.922 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 930.6528 147.7041)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">0</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="8.991" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="528.804" y1="317.75" x2="627.354" y2="317.75"/>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="#231F20" points="551.754,324.848 551.754,311.675 				566.063,311.675 566.063,324.848 551.754,324.848 	"/>			<text transform="matrix(1 0 0 1 551.7544 321.6338)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="8.991" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>		</g>	</g>	<g id="fig_18_ontoactor" onclick="Saisir(this.id,\'fig_18\');" fill="red" visibility="hidden">					<path fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" d="		M688.554,63.5c0-4.875,3.9-8.775,8.775-8.775h52.425c4.875,0,8.775,3.9,8.775,8.775v36.45c0,4.875-3.9,8.775-8.775,8.775H697.33		c-4.875,0-8.775-3.9-8.775-8.775V59.6V63.5z"/>		<text id="fig_18_ontoactor_date" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 710.606 73.6807)">Date</text>		<text id="fig_18_ontoactor_place" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 708.356 85.6104)">Place</text>		<text id="fig_18_ontoactor_id" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 716.4575 97.5322)">id</text>		<polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="		759.429,0.95 759.429,54.95 687.429,54.95 687.429,0.95 759.429,0.95 	"/>		<text  style="fill:#231F20;font-size:20px;" transform="matrix(1 0 0 1 690 25.9775)">Onto</text>		<text style="fill:#231F20;font-size:20px;" transform="matrix(1 0 0 1 710 37.915)">actor</text>		<g id="fig_18_ontoactor_actor" onclick="changer(\'fig_18\')" fill="none" visibility="inherit">					<polygon stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="853.929,14.225 859.33,15.35 				861.804,16.475 863.83,18.275 865.629,20.3 866.979,22.55 867.879,25.025 868.104,27.725 866.979,33.125 865.629,35.375 				863.83,37.4 861.804,38.975 859.33,40.1 856.629,41 853.929,41.225 814.78,41.225 810.28,41.225 804.879,40.1 802.405,38.975 				800.379,37.4 798.58,35.375 797.229,33.125 796.33,30.425 796.104,27.725 797.229,22.55 798.58,20.3 800.379,18.275 802.405,16.7 				804.879,15.35 807.58,14.45 810.28,14.225 847.405,14.225 853.929,14.225 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 818.8247 31.6025)">Builds</text>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="759.429" y1="27.95" x2="796.104" y2="27.725"/>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="868.104" y1="27.725" x2="902.979" y2="27.95"/>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="#231F20" points="875.53,34.822 875.53,21.65 				895.339,21.65 895.339,34.822 875.53,34.822 	"/>			<text transform="matrix(1 0 0 1 875.5278 31.6025)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="8.326" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="11.691" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="14.393" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="#231F20" points="767.754,35.047 767.754,21.875 				787.564,21.875 787.564,35.047 767.754,35.047 	"/>			<text transform="matrix(1 0 0 1 767.7544 31.8369)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="8.326" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="11.691" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="14.393" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan></text>		</g>		</g>	<g id="fig_18_concept" onclick="Saisir(this.id,\'fig_18\')" fill="red" visibility="hidden">				<polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="		528.58,0.5 528.58,54.5 456.58,54.5 456.58,0.5 528.58,0.5 	"/>		<text style="fill:#231F20;font-size:20px;" transform="matrix(1 0 0 1 459 31.376)">Concept</text>		<path fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" d="		M456.354,62.825c0-4.875,3.9-8.775,8.775-8.775h54.45c4.875,0,8.774,3.9,8.774,8.775v21.6c0,4.875-3.899,8.775-8.774,8.775h-54.45		c-4.875,0-8.775-3.9-8.775-8.775v-25.5V62.825z"/>		<text id="fig_18_concept_name" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 476.5981 77.5088)">name</text>		<g id="fig_18_section_concept" onclick="changer(\'fig_18\')" fill="none" visibility="inherit">					<polygon stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="515.08,132.125 520.479,133.25 				522.955,134.375 524.979,136.175 526.78,138.2 528.129,140.45 529.03,142.925 529.254,145.625 528.129,151.025 526.78,153.275 				524.979,155.3 522.955,156.875 520.479,158 517.78,158.9 515.08,159.125 475.929,159.125 471.429,159.125 466.029,158 				463.554,156.875 461.529,155.3 459.729,153.275 458.379,151.025 457.479,148.325 457.254,145.625 458.379,140.45 459.729,138.2 				461.529,136.175 463.554,134.6 466.029,133.25 468.729,132.35 471.429,132.125 508.554,132.125 515.08,132.125 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 473.0044 149.501)">Develops</text>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="493.254" y1="159.125" x2="492.804" y2="290.75"/>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="493.254" y1="132.125" x2="492.58" y2="54.5"/>			<polyline fill-rule="evenodd" fill="white" clip-rule="evenodd" stroke="#231F20" points="483.129,220.897 483.129,207.725 				502.939,207.725 502.939,220.897 483.129,220.897 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 483.1294 217.6885)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="8.326" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="11.691" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="14.393" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>			<polyline fill-rule="evenodd" fill="white" clip-rule="evenodd" stroke="#231F20" points="483.129,122.123 483.129,108.95 				502.939,108.95 502.939,122.123 483.129,122.123 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 483.1294 118.9072)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="8.326" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="11.691" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="14.393" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>		</g>		<g id="fig_18_concept_ontoactor" onclick="changer(\'fig_18\')" fill="none" visibility="inherit">					<polygon stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="625.78,14 631.179,15.125 				633.655,16.25 635.679,18.05 637.479,20.075 638.83,22.325 639.729,24.8 639.955,27.5 638.83,32.9 637.479,35.15 635.679,37.175 				633.655,38.75 631.179,39.875 628.479,40.775 625.78,41 586.629,41 582.129,41 576.729,39.875 574.254,38.75 572.229,37.175 				570.429,35.15 569.08,32.9 568.179,30.2 567.955,27.5 569.08,22.325 570.429,20.075 572.229,18.05 574.254,16.475 576.729,15.125 				579.429,14.225 582.129,14 619.254,14 625.78,14 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 587.5278 31.376)">Defines</text>					<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="639.955" y1="27.5" x2="687.429" y2="27.95"/>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="#231F20" points="652.78,34.822 652.78,21.65 				667.088,21.65 667.088,34.822 652.78,34.822 	"/>			<text style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 652.7778 31.6025)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="8.991" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="528.58" y1="27.5" x2="567.955" y2="27.5"/>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="#231F20" points="541.629,34.598 541.629,21.425 				555.938,21.425 555.938,34.598 541.629,34.598 	"/>			<text transform="matrix(1 0 0 1 541.6294 31.376)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="8.991" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>		</g>	</g>	<g id="fig_18_work" onclick="Saisir(this.id,\'fig_18\')" fill="red" visibility="hidden">					<text transform="matrix(1 0 0 1 823.3384 460.6963)"><tspan x="0" y="0" fill="#FF8000" stroke="#231F20" font-family="EurostileRegular" font-size="39.825">w</tspan><tspan x="26.58" y="0" fill="#FF8000" stroke="#231F20" font-family="EurostileRegular" font-size="39.825">o</tspan><tspan x="46.805" y="0" fill="#FF8000" stroke="#231F20" font-family="EurostileRegular" font-size="39.825">r</tspan><tspan x="62.593" y="0" fill="#FF8000" stroke="#231F20" font-family="EurostileRegular" font-size="39.825">k</tspan></text>		<path fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" d="		M907.705,555.125c0-4.875,3.899-8.775,8.774-8.775h55.125c4.875,0,8.775,3.9,8.775,8.775v5.175c0,4.875-3.9,8.775-8.775,8.775		h-55.125c-4.875,0-8.774-3.9-8.774-8.775v-9.075V555.125z"/>		<text id="fig_18_work_titre" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 933.1294 561.7119)">title</text>		<polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="		979.705,522.5 979.705,546.35 907.705,546.35 907.705,522.5 979.705,522.5 	"/>		<text style="fill:#231F20;font-size:20px;" transform="matrix(1 0 0 1 920 538.3135)">Work</text>	</g>	<g id="fig_18_instance" onclick="Saisir(this.id,\'fig_18\')" fill="red" visibility="hidden">					<path fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" d="		M699.129,559.85c0-4.875,3.9-8.774,8.775-8.774h70.875c4.875,0,8.774,3.899,8.774,8.774v46.125c0,4.875-3.899,8.775-8.774,8.775		h-70.875c-4.875,0-8.775-3.9-8.775-8.775V555.95V559.85z"/>		<text id="fig_18_instance_id" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 736.2544 563.5088)">id</text>		<text id="fig_18_instance_authors" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 722.0825 575.4307)">authors</text>		<text id="fig_18_instance_date" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 729.0513 587.3525)">date</text>		<text id="fig_18_instance_duration" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 722.0825 599.2822)">duration</text>		<text id="fig_18_instance_place" style="fill:#231F20;font-family:ArialMT;font-size:12px;" transform="matrix(1 0 0 1 728.1528 611.2041)">place</text>		<polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="		785.08,518 785.08,551.075 700.03,551.075 700.03,518 785.08,518 	"/>		<text style="fill:#231F20;font-size:20px;font-family:ArialMT;" transform="matrix(1 0 0 1 710 538.54)">Instance</text>		<g id="fig_18_instance_work" onclick="changer(\'fig_18\')" fill="none" visibility="inherit">					<polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="			868.554,520.925 872.604,522.05 874.405,523.175 875.754,524.975 877.104,527 878.004,529.25 878.679,531.725 878.905,534.425 			878.004,539.825 877.104,542.075 875.754,544.1 874.405,545.675 872.604,546.8 870.58,547.7 868.554,547.925 840.429,547.925 			837.28,547.925 833.229,546.8 831.655,545.675 830.08,544.1 828.955,542.075 828.054,539.825 827.379,537.125 827.155,534.425 			828.054,529.25 828.955,527 830.08,524.975 831.655,523.399 833.229,522.05 835.254,521.149 837.28,520.925 863.83,520.925 			868.554,520.925 	"/>			<text style="fill:#231F20;font-size:20px;font-family:ArialMT;" transform="matrix(1 0 0 1 844.6997 538.3135)">has</text>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="785.304" y1="534.649" x2="827.155" y2="534.425"/>				<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="878.905" y1="534.425" x2="907.705" y2="534.425"/>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="#231F20" points="884.53,541.522 884.53,528.35 				898.838,528.35 898.838,541.522 884.53,541.522 	"/>			<text transform="matrix(1 0 0 1 884.5278 538.3135)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="8.991" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="#231F20" points="794.754,541.747 794.754,528.575 				814.564,528.575 814.564,541.747 794.754,541.747 	"/>			<text transform="matrix(1 0 0 1 794.7544 538.54)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="8.326" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="11.691" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9"> </tspan><tspan x="14.393" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan></text>		</g>	</g>	<g id="fig_18_physicpart" onclick="Saisir(this.id,\'fig_18\')" fill="red" visibility="hidden">					<polygon stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="702.054,358.25 783.729,358.25 			783.729,412.25 702.054,412.25 702.054,358.25 	"/>		<text style="fill:#231F20;font-size:20px;font-family:ArialMT;" transform="matrix(1 0 0 1 705.4263 383.2822)">Physical part</text>		<text style="fill:#231F20;font-size:20px;font-family:ArialMT;" transform="matrix(1 0 0 1 715 395.2041)">of the work</text>		<g id="fig_18_section_physicpart" onclick="changer(\'fig_18\')" fill="none" visibility="inherit">					<polygon stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="629.155,371.975 634.554,373.1 				637.03,374.225 639.054,376.024 640.854,378.05 642.205,380.3 643.104,382.774 643.33,385.475 642.205,390.875 640.854,393.125 				639.054,395.149 637.03,396.725 634.554,397.85 631.854,398.75 629.155,398.975 590.004,398.975 585.504,398.975 580.104,397.85 				577.629,396.725 575.604,395.149 573.804,393.125 572.455,390.875 571.554,388.175 571.33,385.475 572.455,380.3 573.804,378.05 				575.604,376.024 577.629,374.45 580.104,373.1 582.804,372.2 585.504,371.975 622.629,371.975 629.155,371.975 	"/>			<text style="fill:#231F20;font-size:20px;font-family:ArialMT;" transform="matrix(1 0 0 1 592.0278 389.3604)">treates</text>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="#231F20" points="665.379,392.348 665.379,379.175 				679.688,379.175 679.688,392.348 665.379,392.348 	"/>			<text transform="matrix(1 0 0 1 665.3794 389.1338)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">0</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="8.991" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="528.804" y1="385.7" x2="571.33" y2="385.475"/>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="#231F20" points="545.905,392.572 545.905,379.399 				560.213,379.399 560.213,392.572 545.905,392.572 	"/>			<text transform="matrix(1 0 0 1 545.9028 389.3604)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="8.991" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>		</g>		<g id="fig_18_instance_physicpart" onclick="changer(\'fig_18\')" fill="none" visibility="inherit">					<polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#231F20" stroke-linecap="square" stroke-miterlimit="10" points="			758.754,445.325 762.804,446.45 764.604,447.575 765.955,449.375 767.304,451.399 768.205,453.649 768.879,456.125 			769.104,458.825 768.205,464.225 767.304,466.475 765.955,468.5 764.604,470.075 762.804,471.2 760.78,472.1 758.754,472.325 			730.629,472.325 727.479,472.325 723.429,471.2 721.854,470.075 720.28,468.5 719.155,466.475 718.254,464.225 717.58,461.524 			717.354,458.825 718.254,453.649 719.155,451.399 720.28,449.375 721.854,447.8 723.429,446.45 725.455,445.55 727.479,445.325 			754.03,445.325 758.754,445.325 	"/>			<text style="fill:#231F20;font-size:20px;font-family:ArialMT;" transform="matrix(1 0 0 1 734.9028 462.7041)">has</text>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="643.33" y1="385.475" x2="702.054" y2="385.25"/>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="743.004" y1="412.25" x2="743.004" y2="445.325"/>			<line fill="none" stroke="black" stroke-linecap="square" stroke-miterlimit="10" x1="743.004" y1="472.325" x2="742.554" y2="518"/>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="#231F20" points="734.905,437.348 734.905,424.175 				749.213,424.175 749.213,437.348 734.905,437.348 	"/>			<text transform="matrix(1 0 0 1 734.9028 434.1338)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="8.991" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>			<polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="#231F20" points="734.679,502.372 734.679,489.2 				748.988,489.2 748.988,502.372 734.679,502.372 	"/>			<text transform="matrix(1 0 0 1 734.6763 499.165)"><tspan x="0" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">1</tspan><tspan x="5.625" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">-</tspan><tspan x="8.991" y="0" stroke="#231F20" font-family="ArialMT" font-size="9.9">n</tspan></text>		</g>	</g>	</g></svg>';
		//alert (xml1);
		//figure_courant="fig_18";
		var sql = 'INSERT INTO svg(fichier,isModel,titre,id_user) VALUES(?1,?2,?3,?4);';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,xml1);
		statement.bindUTF8StringParameter(1,"true");
		statement.bindUTF8StringParameter(2,"Document");
		statement.bindUTF8StringParameter(3,"0");
		statement.execute();
		statement.reset();
		
		chemin1="C:\\wamp\\www\\archipoenum\\library\\xul\\ZonesSaisies.xul";	
		che1="chrome://archipoenum/content/library/xul/ZonesSaisies.xull";	
		chrm1=chromeToPath (che1);
		xml2 = '<vbox id="ZonesSaisies" xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"><hbox hidden="true" id="saisie_fig_21_indexer" ><label value="Name : " /><textbox id="saisie_fig_21_indexer_name" value="" /><button label="Valider" tooltiptext="Valider la saisie" onclick="Valider(\'fig_21_indexer\',\'fig_21_indexing\',\'\');"/></hbox><vbox hidden="true" id="saisie_fig_21_indexing" ><label value="Date : " /><datepicker id="saisie_fig_21_indexing_date" type="popup" value=""/><label value="Place : " /><textbox id="saisie_fig_21_indexing_place" value="" /><label value="Id : " /><textbox id="saisie_fig_21_indexing_id" value="" /><button label="Valider" tooltiptext="Valider la saisie" onclick="Valider(\'fig_21_indexing\',\'fig_21_document\',\'\');"/></vbox><hbox hidden="true" id="saisie_fig_21_document" ><label value="Afficher la figure 18" /><button label="Valider" onclick="MontrerCacherXul(\'fig_21;fig_18;saisie_fig_21_document\');"/></hbox><vbox hidden="true" id="saisie_fig_18_type" ><label value="Type : " /><menulist id="saisie_fig_18_type_name" editable="true"><menupopup><menuitem label="Text" value="Text"/><menuitem label="Listing" value="Listing"/><menuitem label="Pg" value="Pg"/><menuitem label="Video" value="Bats"/><menuitem label="Photo" value="Photo"/><menuitem label="Sound" value="Sound"/><menuitem label="Objet" value="Objet"/></menupopup></menulist><button label="Valider" tooltiptext="Valider la saisie" onclick="Valider(\'fig_18_type\',\'fig_18_section;fig_18_nature\',\'fig_18_document;fig_18_format\');"/></vbox><vbox hidden="true" id="saisie_fig_18_document" ><label value="Title : " /><textbox id="saisie_fig_18_document_titre" value="" /><label value="Author : " /><textbox id="saisie_fig_18_document_auteur" value="" /><label value="Date : " /><datepicker id="saisie_fig_18_document_date" type="popup" value=""/><label value="Adresse : " /><textbox id="saisie_fig_18_document_adresse" value="" /><label value="Circonstance : " /><menulist id="saisie_fig_18_document_circonstance" editable="true"><menupopup><menuitem label="Expo" value="Expo"/><menuitem label="Interview" value="Interview"/><menuitem label="Conference" value="Conference"/></menupopup></menulist><button label="Valider" tooltiptext="Valider la saisie" onclick="Valider(\'fig_18_document\',\'fig_18_section;fig_18_nature\',\'fig_18_type;fig_18_format\');"/></vbox><vbox hidden="true" id="saisie_fig_18_format" ><label value="Format : " /><menulist id="saisie_fig_18_format_name" editable="true"><menupopup><menuitem label="mpeg" value="Mpeg"/><menuitem label="avi" value="avi"/><menuitem label="wawe" value="wawe"/><menuitem label="mp3" value="mp3"/><menuitem label="jpeg" value="jpeg"/></menupopup></menulist><button label="Valider" tooltiptext="Valider la saisie" onclick="Valider(\'fig_18_format\',\'fig_18_section;fig_18_nature\',\'fig_18_document;fig_18_type\');"/></vbox><vbox hidden="true" id="saisie_fig_18_section" ><label value="Begining : " /><textbox id="saisie_fig_18_section_begin" value="" /><label value="End : " /><textbox id="saisie_fig_18_section_end" value="" /><label value="Id : " /><textbox id="saisie_fig_18_section_id" value="" /><button label="Valider" tooltiptext="Valider la saisie" onclick="Valider(\'fig_18_section\',\'fig_18_work;fig_18_actor\',\'fig_18_nature\');"/></vbox><vbox hidden="true" id="saisie_fig_18_nature" ><label value="Nature : " /><menulist id="saisie_fig_18_nature_name" editable="true"><menupopup><menuitem label="action" value="action"/><menuitem label="interview" value="interview"/><menuitem label="simulation" value="simulation"/><menuitem label="analyse" value="analyse"/><menuitem label="storage" value="storage"/></menupopup></menulist><button label="Valider" tooltiptext="Valider la saisie" onclick="Valider(\'fig_18_nature\',\'fig_18_work;fig_18_actor\',\'fig_18_section\');"/></vbox><hbox hidden="true" id="saisie_fig_18_actor" ><label value="Afficher la figure 19" /><button label="Valider" onclick="changer_interface(\'1\',\'2\',this);"/></hbox><hbox hidden="true" id="saisie_fig_18_work" ><label value="Title : " /><textbox id="saisie_fig_18_work_titre" value="" /><button label="Valider" onclick="Valider(\'fig_18_work\',\'fig_18_instance\',\'\');"/></hbox><vbox hidden="true" id="saisie_fig_18_instance" ><label value="Id : " /><textbox id="saisie_fig_18_instance_id" value="" /><label value="Authors : " /><textbox id="saisie_fig_18_instance_authors" value="" /><label value="Date : " /><datepicker id="saisie_fig_18_instance_date" type="popup" value=""/><label value="Duration : " /><textbox id="saisie_fig_18_instance_duration" value="" /><label value="Place : " /><textbox id="saisie_fig_18_instance_place" value="" /><button label="Valider" onclick="Valider(\'fig_18_instance\',\'fig_18_physicpart\',\'\');"/></vbox><vbox hidden="true" id="saisie_fig_18_ontoactor" ><label value="Id : " /><textbox id="saisie_fig_18_ontoactor_id" value="" /><label value="Date : " /><datepicker id="saisie_fig_18_ontoactor_date" type="popup" value=""/><label value="Place : " /><textbox id="saisie_fig_18_ontoactor_place" value="" /><button label="Valider" onclick="afficher_last_interface();Valider(\'fig_18_ontoactor\',\'fig_18_concept\',\'\');MontrerCacherXul(\'OntoActeur;saisie_fig_18_concept\');"/></vbox><hbox hidden="true" id="saisie_fig_18_physicpart" ><label value="Afficher la figure 19" /><button label="Valider" onclick="MontrerCacherXul(\'fig_18;fig_19;saisie_fig_18_physicpart\');"/></hbox><vbox hidden="true" flex="1" id="saisie_fig_18_concept" ><label value="Name : " hidden="true" /><textbox id="saisie_fig_18_concept_name" value="" hidden="true" /><button label="Valider" onclick="Valider(\'fig_18_concept\',\'fig_18_instance\',\'\');MontrerCacherXul(\'fig_p;savoirs;OntoActeur\');"/></vbox><hbox hidden="true" id="saisie_fig_19_analyst" ><label value="Type : " /><menulist id="saisie_fig_19_analyst_type" editable="true"><menupopup><menuitem label="semiotician" value="semiotician"/><menuitem label="littereary analyse" value="littereary analyse"/></menupopup></menulist><button label="Valider" onclick="Valider(\'fig_19_analyst\',\'fig_19_analyse;fig_19_create;fig_19_observe\',\'\');ChangeAttributsValeur(\'fig_19_reader;fig_19_autor\',\'fill\',\'none\');"/></hbox><hbox hidden="true" id="saisie_fig_19_analyse1" ><label value="Afficher la figure 18" /><button label="Valider" onclick="MontrerCacherXul(\'fig_19;fig_18;saisie_fig_19_analyse1\');AfficheValidation();MontrerSvg(\'fig_18_ontoactor\');"/></hbox><hbox hidden="true" id="saisie_fig_19_analyse2" ><label value="Afficher la figure 18" /><button label="Valider" onclick="MontrerCacherXul(\'fig_19;fig_18;saisie_fig_19_analyse2\');AfficheValidation();MontrerSvg(\'fig_18_ontoactor\');"/></hbox><hbox hidden="true" id="saisie_fig_19_analyse3" ><label value="Afficher la figure 18" /><button label="Valider" onclick="MontrerCacherXul(\'fig_19;fig_18;saisie_fig_19_analyse3\');AfficheValidation();MontrerSvg(\'fig_18_ontoactor\');"/></hbox><hbox hidden="true" id="saisie_fig_19_analyse4" ><label value="Afficher la figure 18" /><button label="Valider" onclick="changer_interface(\'2\',\'1\',this);AfficheValidation();MontrerSvg(\'fig_18_ontoactor\');"/></hbox><hbox hidden="true" id="saisie_fig_19_analyse5" ><label value="Afficher la figure 18" /><button label="Valider" onclick="MontrerCacherXul(\'fig_19;fig_18;saisie_fig_19_analyse5\');AfficheValidation();MontrerSvg(\'fig_18_ontoactor\');"/></hbox><hbox hidden="true" id="saisie_fig_19_analyse6" ><label value="Afficher la figure 18" /><button label="Valider" onclick="MontrerCacherXul(\'fig_19;fig_18;saisie_fig_19_analyse6\');AfficheValidation();MontrerSvg(\'fig_18_ontoactor\');"/></hbox><hbox hidden="true" id="saisie_fig_19_analyse7" ><label value="Afficher la figure 18" /><button label="Valider" onclick="MontrerCacherXul(\'fig_19;fig_18;saisie_fig_19_analyse7\');AfficheValidation();MontrerSvg(\'fig_18_ontoactor\');"/></hbox><hbox hidden="true" id="saisie_fig_19_analyse8" ><label value="Afficher la figure 18" /><button label="Valider" onclick="MontrerCacherXul(\'fig_19;fig_18;saisie_fig_19_analyse8\');AfficheValidation();MontrerSvg(\'fig_18_ontoactor\');"/></hbox><hbox hidden="true" id="saisie_fig_19_analyse9" ><label value="Afficher la figure 18" /><button label="Valider" onclick="MontrerCacherXul(\'fig_19;fig_18;saisie_fig_19_analyse9\');AfficheValidation();MontrerSvg(\'fig_18_ontoactor\');"/></hbox><hbox hidden="true" id="saisie_fig_19_analyse10" ><label value="Afficher la figure 18" /><button label="Valider" onclick="MontrerCacherXul(\'fig_19;fig_18;saisie_fig_19_analyse10\');AfficheValidation();MontrerSvg(\'fig_18_ontoactor\');"/></hbox><hbox hidden="true" id="saisie_fig_19_analyse11" ><label value="Afficher la figure 18" /><button label="Valider" onclick="MontrerCacherXul(\'fig_19;fig_18;saisie_fig_19_analyse11\');AfficheValidation();MontrerSvg(\'fig_18_ontoactor\');"/></hbox></vbox>';
		//alert (xml1);	
		//xml1 = '<vbox id="ZonesSaisies" xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"><vbox hidden="false" id="saisie_fig_18_type" ><label value="Type : " /><menulist id="saisie_fig_18_type_name" editable="true"><menupopup><menuitem label="Text" value="Text"/><menuitem label="Sound" value="Sound"/><menuitem label="Objet" value="Objet"/></menupopup></menulist><button label="Valider" tooltiptext="Valider la saisie" onclick="Valider(\'fig_18_type\',\'fig_18_section;fig_18_nature\',\'fig_18_document;fig_18_format\');"/></vbox></vbox>';
		var statement = mDBConn.createStatement('SELECT id_svg FROM svg ORDER BY id_svg DESC;');
		var myArray1 = boucle_select(statement);
		j=0;
		id_svg=myArray1[j]["id_svg"];
		var sql = 'INSERT INTO xul(id_element,form_xul,id_svg) VALUES(?1,?2,?3);';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,"Zones saisies");
		statement.bindUTF8StringParameter(1,xml2);
		statement.bindUTF8StringParameter(2,id_svg);
		statement.execute();
		statement.reset();	
		
		xml3 = '<vbox id="OntoActeur" xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul" flex="1" ><tree id="TreeOntoActeur" onselect="Select_Dictio(\'ieml\',\'treecol_ieml\',\'treecol_descp\');" flex="1" editable="true"><treecols ><treecol id="treecol_Tagdel" flex="1" primary="true" label="Type ontology"  persist="width ordinal hidden" editable="false" /><splitter class="tree-splitter"/><treecol id="treecol_descp" flex="1" label="concept" persist="width ordinal hidden" editable="false" /><splitter class="tree-splitter"/><treecol type="checkbox" label="select" editable="true" /></treecols><treechildren>    <treeitem container="true" open="true">      <treerow>        <treecell label="Actor ontology"/>        <treecell label=""/>      </treerow>      <treechildren>        <treeitem container="true" open="false">          <treerow>            <treecell label="litterature analyst" />            <treecell label="" />          </treerow>      <treechildren>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="potentiel" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="virtuel" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="potentiel-virtuel" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="oulipo" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="palindrome" />            <treecell value="false" />          </treerow>        </treeitem>      </treechildren>        </treeitem>        <treeitem container="true" open="true">          <treerow>            <treecell label="semiotic analyst" />            <treecell label="" />          </treerow>      <treechildren>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="transitoire observable" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="programme" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="génération combinatoire" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="génération automatique de texte" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="génération adaptative" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="génération avec modèle physique" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="génération graphique" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="oeuvre interactive" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="oeuvre hypertextuelle" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="oeuvre collaborative" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="oeuvre participative" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="oeuvre utilisant une Base de Données" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="oeuvre utilisant une gestion des flux" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="oeuvre performative" />            <treecell value="false" />          </treerow>        </treeitem>      </treechildren>        </treeitem>        <treeitem container="true" open="false">          <treerow>            <treecell label="reader" />            <treecell label="" />          </treerow>      <treechildren>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="transitoire observable" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="programme" />            <treecell value="false" />          </treerow>        </treeitem>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="animation" />            <treecell value="false" />          </treerow>        </treeitem>      </treechildren>        </treeitem>        <treeitem container="true" open="false">          <treerow>            <treecell label="autor" />            <treecell label="" />          </treerow>      <treechildren>        <treeitem>          <treerow>            <treecell label="" />            <treecell label="génération adaptative" />            <treecell value="false" />          </treerow>        </treeitem>      </treechildren>        </treeitem>      </treechildren>    </treeitem>  </treechildren></tree></vbox>';
		//alert (xml1);
		
		//figure_courant="fig_21";
		var sql = 'INSERT INTO xul(id_element,form_xul,id_svg) VALUES(?1,?2,?3);';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,"Ontologie acteurs");
		statement.bindUTF8StringParameter(1,xml3);
		statement.bindUTF8StringParameter(2,id_svg);
		statement.execute();
		statement.reset();
		
		chemin1="C:\\wamp\\www\\archipoenum\\library\\xul\\fig_19.xul";	
		che1="chrome://archipoenum/content/library/xul/fig_19.xul";	
		chrm1=chromeToPath (che1);
		xml1 ='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1212.95px" height="528.726px" viewBox="0 0 1212.95 528.726" enable-background="new 0 0 1212.95 528.726" xml:space="preserve"><defs><style type="text/css"><![CDATA[.styleTxtTitre{fill:#231F20;font-family:ArialMT;font-size:20px;}.styleTxtAttribut{fill:#231F20;font-family:ArialMT;font-size:12px;}]]></style></defs><script xlink:href="../js/interface.js" /><g><g id="fig_19_centre" onclick="" fill="none" visibility="visible"><polygon fill-rule="evenodd" clip-rule="evenodd" stroke="#008080" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="326.8,40.15 862.976,40.15 862.976,325.899 326.8,325.899 326.8,40.15 "/><polygon fill="none" stroke="#008080" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="488.8,57.025 494.2,58.15 496.675,59.275 498.7,61.075 500.5,63.1 501.85,65.35 502.75,67.825 502.975,70.525 501.85,75.925 500.5,78.175 498.7,80.2 496.675,81.775 494.2,82.9 491.5,83.8 488.8,84.025 449.65,84.025 445.15,84.025 439.75,82.9 437.275,81.775 435.25,80.2 433.45,78.175 432.1,75.925 431.2,73.225 430.975,70.525 432.1,65.35 433.45,63.1 435.25,61.075 437.275,59.5 439.75,58.15 442.45,57.25 445.15,57.025 482.275,57.025 488.8,57.025 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 456.4023 74.4082)">uses</text><polygon fill="none" stroke="#008080" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="517.825,205.75 523.225,206.875 525.7,208 527.725,209.8 529.525,211.825 530.875,214.075 531.775,216.55 532,219.25 530.875,224.65 529.525,226.9 527.725,228.925 525.7,230.5 523.225,231.625 520.525,232.525 517.825,232.75 478.675,232.75 474.175,232.75 468.775,231.625 466.3,230.5 464.275,228.925 462.475,226.9 461.125,224.65 460.225,221.95 460,219.25 461.125,214.075 462.475,211.825 464.275,209.8 466.3,208.225 468.775,206.875 471.475,205.975 474.175,205.75 511.3,205.75 517.825,205.75 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 475.9727 223.127)">compiles</text><polygon fill="none" stroke="#008080" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="650.351,205.75 655.75,206.875 658.226,208 660.25,209.8 662.05,211.825 663.4,214.075 664.3,216.55 664.525,219.25 663.4,224.65 662.05,226.9 660.25,228.925 658.226,230.5 655.75,231.625 653.05,232.525 650.351,232.75 611.2,232.75 606.7,232.75 601.3,231.625 598.825,230.5 596.8,228.925 595,226.9 593.65,224.65 592.75,221.95 592.525,219.25 593.65,214.075 595,211.825 596.8,209.8 598.825,208.225 601.3,206.875 604,205.975 606.7,205.75 643.825,205.75 650.351,205.75 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 609.1758 223.127)">products</text><polygon fill="none" stroke="#008080" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="338.05,60.175 393.625,60.175 393.625,101.8 338.05,101.8 338.05,60.175 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 353.5742 84.9863)">datas</text><polygon fill="none" stroke="#008080" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="536.5,61.075 588.7,61.075 588.7,100.225 536.5,100.225 536.5,61.075 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 556.9727 84.5332)">pg</text><polygon fill="none" stroke="#008080" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="470.125,267.851 522.1,267.851 522.1,306.774 470.125,306.774 470.125,267.851 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 480.918 291.3145)">sources</text><polygon fill="none" stroke="#008080" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="603.1,268.075 654.175,268.075 654.175,306.325 603.1,306.325 603.1,268.075 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 624.4727 291.0801)">to</text><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="393.625" y1="69.85" x2="430.975" y2="70.525"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="502.975" y1="70.525" x2="536.5" y2="70.75"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="496" y1="232.75" x2="496.225" y2="267.851"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="628.525" y1="232.75" x2="628.525" y2="268.075"/><polyline fill="none" stroke="#008080" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="496,205.75 496,175.6 628.525,175.6 628.525,205.75 "/><line fill="none" stroke="#008080" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="562.6" y1="100.225" x2="562.825" y2="175.6"/><polyline fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="521.2,182.697 521.2,169.525 535.509,169.525 535.509,182.697 521.2,182.697 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 521.1992 179.4863)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">1</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text><polyline fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="588.25,182.697 588.25,169.525 602.559,169.525 602.559,182.697 588.25,182.697 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 588.2461 179.4863)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">0</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text><polyline fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="621.325,265.048 621.325,251.875 635.634,251.875 635.634,265.048 621.325,265.048 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 621.3242 261.8379)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">1</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">1</tspan></text><polyline fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="488.8,254.922 488.8,241.75 503.109,241.75 503.109,254.922 488.8,254.922 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 488.793 251.7051)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">1</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text><polyline fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="403.975,77.172 403.975,64 418.284,64 418.284,77.172 403.975,77.172 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 403.9727 73.9629)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">1</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text><polyline fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="512.65,77.848 512.65,64.675 526.959,64.675 526.959,77.848 512.65,77.848 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 512.6523 74.6348)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">0</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text><polygon fill="none" stroke="#008080" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="488.8,110.8 494.2,111.925 496.675,113.05 498.7,114.85 500.5,116.875 501.85,119.125 502.75,121.6 502.975,124.3 501.85,129.7 500.5,131.95 498.7,133.975 496.675,135.55 494.2,136.675 491.5,137.575 488.8,137.8 449.65,137.8 445.15,137.8 439.75,136.675 437.275,135.55 435.25,133.975 433.45,131.95 432.1,129.7 431.2,127 430.975,124.3 432.1,119.125 433.45,116.875 435.25,114.85 437.275,113.275 439.75,111.925 442.45,111.025 445.15,110.8 482.275,110.8 488.8,110.8 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 447.6211 128.1895)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">p</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">r</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">odu</tspan><tspan x="25.865" y="0" font-family="\'ArialMT\'" font-size="9.9">c</tspan><tspan x="30.815" y="0" font-family="\'ArialMT\'" font-size="9.9">t</tspan><tspan x="33.516" y="0" font-family="\'ArialMT\'" font-size="9.9">s</tspan></text><polyline fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="519.625,131.397 519.625,118.225 533.934,118.225 533.934,131.397 519.625,131.397 "/><text class="styleTxtAttribut"  transform="matrix(1 0 0 1 519.6211 128.1895)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">0</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text><polyline fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="401.5,131.397 401.5,118.225 415.809,118.225 415.809,131.397 401.5,131.397 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 401.4961 128.1895)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">0</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text><polygon fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="696.925,62.875 702.325,64 704.8,65.125 706.825,66.925 708.625,68.95 709.976,71.2 710.875,73.675 711.101,76.375 709.976,81.775 708.625,84.025 706.825,86.05 704.8,87.625 702.325,88.75 699.625,89.65 696.925,89.875 657.775,89.875 653.275,89.875 647.875,88.75 645.4,87.625 643.375,86.05 641.575,84.025 640.226,81.775 639.325,79.075 639.101,76.375 640.226,71.2 641.575,68.95 643.375,66.925 645.4,65.35 647.875,64 650.575,63.1 653.275,62.875 690.4,62.875 696.925,62.875 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 664.5273 80.2598)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">u</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">s</tspan><tspan x="10.574" y="0" font-family="\'ArialMT\'" font-size="9.9">e</tspan><tspan x="16.199" y="0" font-family="\'ArialMT\'" font-size="9.9">s</tspan></text><polygon fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="748.9,55.675 804.476,55.675 804.476,97.3 748.9,97.3 748.9,55.675 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 762.168 80.4863)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">de</tspan><tspan x="11.249" y="0" font-family="\'ArialMT\'" font-size="9.9">v</tspan><tspan x="16.199" y="0" font-family="\'ArialMT\'" font-size="9.9">i</tspan><tspan x="18.448" y="0" font-family="\'ArialMT\'" font-size="9.9">ce</tspan></text><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="588.475" y1="80.2" x2="639.101" y2="80.2"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="711.101" y1="76.375" x2="748.9" y2="76.6"/><polyline fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="603.775,87.297 603.775,74.125 618.084,74.125 618.084,87.297 603.775,87.297 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 603.7695 84.0879)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">0</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text><polyline fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="721.45,83.473 721.45,70.3 735.759,70.3 735.759,83.473 721.45,83.473 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 721.4492 80.2598)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">0</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text></g><g id="fig_19_create" onclick="" visibility="hidden"><polygon fill-rule="evenodd" fill="#FFFFFF" clip-rule="evenodd" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="203.95,67.6 209.35,68.725 211.825,69.85 213.85,71.65 215.65,73.675 217,75.925 217.9,78.4 218.125,81.1 217,86.5 215.65,88.75 213.85,90.775 211.825,92.35 209.35,93.475 206.65,94.375 203.95,94.6 164.8,94.6 160.3,94.6 154.9,93.475 152.425,92.35 150.4,90.775 148.6,88.75 147.25,86.5 146.35,83.8 146.125,81.1 147.25,75.925 148.6,73.675 150.4,71.65 152.425,70.075 154.9,68.725 157.6,67.825 160.3,67.6 197.425,67.6 203.95,67.6 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 165.6992 84.9863)">Creates</text><polygon fill-rule="evenodd" fill="#FFFFFF" clip-rule="evenodd" stroke="#000000" stroke-linecap="square" stroke-miterlimit="10" points="294.4,269.649 299.8,270.774 302.275,271.899 304.3,273.7 306.1,275.726 307.45,277.976 308.35,280.45 308.575,283.149 307.45,288.55 306.1,290.8 304.3,292.825 302.275,294.399 299.8,295.524 297.1,296.425 294.4,296.649 255.25,296.649 250.75,296.649 245.35,295.524 242.875,294.399 240.85,292.825 239.05,290.8 237.7,288.55 236.8,285.851 236.575,283.149 237.7,277.976 239.05,275.726 240.85,273.7 242.875,272.124 245.35,270.774 248.05,269.874 250.75,269.649 287.875,269.649 294.4,269.649 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 256.1445 287.0332)">Creates</text><polygon fill-rule="evenodd" fill="#FFFFFF" clip-rule="evenodd" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="1074.7,7.975 1080.101,9.1 1082.575,10.225 1084.601,12.025 1086.4,14.05 1087.75,16.3 1088.65,18.775 1088.875,21.475 1087.75,26.875 1086.4,29.125 1084.601,31.15 1082.575,32.725 1080.101,33.85 1077.4,34.75 1074.7,34.975 1035.55,34.975 1031.05,34.975 1025.65,33.85 1023.175,32.725 1021.15,31.15 1019.351,29.125 1018,26.875 1017.101,24.175 1016.875,21.475 1018,16.3 1019.351,14.05 1021.15,12.025 1023.175,10.45 1025.65,9.1 1028.351,8.2 1031.05,7.975 1068.175,7.975 1074.7,7.975 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 1036.4492 25.3535)">Creates</text><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="80.65" y1="80.65" x2="146.125" y2="80.65"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="91" y1="282.024" x2="236.575" y2="282.024"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="1088.875" y1="21.475" x2="1139.5" y2="21.475"/><polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" points="112.6,88.079 112.6,74.35 127.45,74.35 127.45,88.079 112.6,88.079 "/><text transform="matrix(1 0 0 1 112.5977 84.3535)"><tspan x="0" y="0" font-family="\'Arial-BoldMT\'" font-size="9.9">0</tspan><tspan x="5.625" y="0" font-family="\'Arial-BoldMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'Arial-BoldMT\'" font-size="9.9">n</tspan></text><polyline fill-rule="evenodd" fill="#FFFFFF" clip-rule="evenodd" points="109.9,289.122 109.9,275.95 124.209,275.95 124.209,289.122 109.9,289.122 "/><text transform="matrix(1 0 0 1 109.8945 285.9004)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">1</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text><polyline fill-rule="evenodd" fill="#FFFFFF" clip-rule="evenodd" points="1022.275,296.097 1022.275,282.925 1036.584,282.925 1036.584,296.097 1022.275,296.097 "/><text transform="matrix(1 0 0 1 1022.2695 292.8848)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">1</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text><polyline fill-rule="evenodd" clip-rule="evenodd" fill="white" points="1100.351,28.572 1100.351,15.4 1114.659,15.4 1114.659,28.572 1100.351,28.572 "/><text transform="matrix(1 0 0 1 1100.3398 25.3535)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">0</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text><polyline fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="1016.875,21.475 365.95,21.475 365.95,60.175 "/><polyline fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="308.575,283.149 308.575,287.425 360.775,287.425 362.125,284.274 363.7,283.374 365.275,282.925 368.425,284.274 369.325,285.851 369.775,287.425 470.125,287.425 "/><polyline fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="427.375,294.522 427.375,281.351 441.684,281.351 441.684,294.522 427.375,294.522 "/><text transform="matrix(1 0 0 1 427.3711 291.3145)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">1</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text><polyline fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="964,28.572 964,15.4 978.309,15.4 978.309,28.572 964,28.572 "/><text transform="matrix(1 0 0 1 963.9961 25.3535)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">0</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="218.125" y1="81.1" x2="338.05" y2="81.1"/><polyline fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="304.525,88.197 304.525,75.025 318.834,75.025 318.834,88.197 304.525,88.197 "/><text transform="matrix(1 0 0 1 304.5273 84.9863)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">0</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text><polyline fill="none" stroke="#008080" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="379.675,101.8 379.675,124.3 430.975,124.3 "/><polyline fill="none" stroke="#008080" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="502.975,124.3 549.55,124.3 549.55,100.225 "/></g><g id="fig_19_autor" onclick="" fill="red" visibility="visible"><path stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M1,211.712C1,108.525,21.95,25.975,48.138,25.975s47.138,82.55,47.138,185.737c0,103.187-20.95,185.738-47.138,185.738S1,314.899,1,211.712L1,211.712z"/><text class="styleTxtTitre" transform="matrix(1 0 0 1 30 196.5879)">Author</text><polygon fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="20.8,295.976 75.25,295.976 75.25,336.925 20.8,336.925 20.8,295.976 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 25.7461 320.3379)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">do</tspan><tspan x="11.25" y="0" font-family="\'ArialMT\'" font-size="9.9">c</tspan><tspan x="16.199" y="0" font-family="\'ArialMT\'" font-size="9.9">u</tspan><tspan x="21.824" y="0" font-family="\'ArialMT\'" font-size="9.9">m</tspan><tspan x="30.368" y="0" font-family="\'ArialMT\'" font-size="9.9">en</tspan><tspan x="41.617" y="0" font-family="\'ArialMT\'" font-size="9.9">t</tspan></text></g><g id="fig_19_reader" onclick="" fill="red" visibility="visible"><path stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M1108.675,194.5c0-107.5,22.95-193.5,51.638-193.5s51.638,86,51.638,193.5c0,107.499-22.95,193.499-51.638,193.499S1108.675,301.999,1108.675,194.5L1108.675,194.5z"/><text class="styleTxtTitre" transform="matrix(1 0 0 1 1146.6914 194.1035)">Reader</text><polygon transform="translate(1110, 1)" fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="20.8,295.976 75.25,295.976 75.25,336.925 20.8,336.925 20.8,295.976 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 1135 320.3379)">document</text></g><g id="fig_19_analyst" onclick="Saisir(this.id)" fill="red" visibility="visible"><path stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M91.225,485.763c0-23.313,139.1-41.963,312.975-41.963s312.975,18.65,312.975,41.963s-139.1,41.963-312.975,41.963S91.225,509.075,91.225,485.763L91.225,485.763z"/><text class="styleTxtTitre" transform="matrix(1 0 0 1 386.8711 485.2988)">Analyst</text><text id="fig_19_analyst_type" class="styleTxtAttribut" transform="matrix(1 0 0 1 400 500)">***</text></g><g id="fig_19_observe" onclick="" fill="#FFFFFF" visibility="hidden"><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="993.7" y1="288.999" x2="1115.2" y2="288.999"/><polygon fill-rule="evenodd" clip-rule="evenodd" fill="white" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="979.525,275.499 984.925,276.624 987.4,277.749 989.425,279.55 991.226,281.575 992.575,283.825 993.476,286.3 993.7,288.999 992.575,294.399 991.226,296.649 989.425,298.675 987.4,300.249 984.925,301.374 982.226,302.274 979.525,302.499 940.375,302.499 935.875,302.499 930.476,301.374 928,300.249 925.976,298.675 924.175,296.649 922.825,294.399 921.925,291.7 921.7,288.999 922.825,283.825 924.175,281.575 925.976,279.55 928,277.976 930.476,276.624 933.175,275.726 935.875,275.499 973,275.499 979.525,275.499 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 937.2227 292.8848)">Observe</text></g><g id="fig_19_analyse" visibility="hidden"><polygon id="fig_19_analyse1" fill="white" onclick="Saisir(this.id)" fill-rule="evenodd" clip-rule="evenodd" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="201.025,339.624 206.425,340.749 208.9,341.874 210.925,343.675 212.725,345.7 214.075,347.95 214.975,350.425 215.2,353.124 214.075,358.524 212.725,360.774 210.925,362.8 208.9,364.374 206.425,365.499 203.725,366.399 201.025,366.624 161.875,366.624 157.375,366.624 151.975,365.499 149.5,364.374 147.475,362.8 145.675,360.774 144.325,358.524 143.425,355.825 143.2,353.124 144.325,347.95 145.675,345.7 147.475,343.675 149.5,342.101 151.975,340.749 154.675,339.851 157.375,339.624 194.5,339.624 201.025,339.624 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 159.3945 357.0176)">Analyse</text><polygon id="fig_19_analyse2" fill="white" onclick="Saisir(this.id)" fill-rule="evenodd" clip-rule="evenodd" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="294.4,392.726 299.8,393.851 302.275,394.976 304.3,396.774 306.1,398.8 307.45,401.05 308.35,403.524 308.575,406.226 307.45,411.624 306.1,413.874 304.3,415.899 302.275,417.476 299.8,418.601 297.1,419.499 294.4,419.726 255.25,419.726 250.75,419.726 245.35,418.601 242.875,417.476 240.85,415.899 239.05,413.874 237.7,411.624 236.8,408.925 236.575,406.226 237.7,401.05 239.05,398.8 240.85,396.774 242.875,395.2 245.35,393.851 248.05,392.95 250.75,392.726 287.875,392.726 294.4,392.726 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 252.7695 410.1113)">Analyse</text><polygon id="fig_19_analyse3" fill="white" onclick="Saisir(this.id)" fill-rule="evenodd" clip-rule="evenodd" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="387.1,343.226 392.5,344.351 394.975,345.476 397,347.274 398.8,349.3 400.15,351.55 401.05,354.024 401.275,356.726 400.15,362.124 398.8,364.374 397,366.399 394.975,367.976 392.5,369.101 389.8,369.999 387.1,370.226 347.95,370.226 343.45,370.226 338.05,369.101 335.575,367.976 333.55,366.399 331.75,364.374 330.4,362.124 329.5,359.425 329.275,356.726 330.4,351.55 331.75,349.3 333.55,347.274 335.575,345.7 338.05,344.351 340.75,343.45 343.45,343.226 380.575,343.226 387.1,343.226 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 345.4727 360.6113)">Analyse</text><polygon id="fig_19_analyse4" fill="white" onclick="Saisir(this.id)" fill-rule="evenodd" clip-rule="evenodd" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="518.5,370.226 523.9,371.351 526.375,372.476 528.4,374.274 530.2,376.3 531.55,378.55 532.45,381.024 532.675,383.726 531.55,389.124 530.2,391.374 528.4,393.399 526.375,394.976 523.9,396.101 521.2,396.999 518.5,397.226 479.35,397.226 474.85,397.226 469.45,396.101 466.975,394.976 464.95,393.399 463.15,391.374 461.8,389.124 460.9,386.425 460.675,383.726 461.8,378.55 463.15,376.3 464.95,374.274 466.975,372.7 469.45,371.351 472.15,370.45 474.85,370.226 511.975,370.226 518.5,370.226 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 476.8711 387.6113)">Analyse</text><polygon id="fig_19_analyse5" onclick="Saisir(this.id)" fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="649.45,363.476 654.851,364.601 657.325,365.726 659.351,367.524 661.15,369.55 662.5,371.8 663.4,374.274 663.625,376.976 662.5,382.374 661.15,384.624 659.351,386.649 657.325,388.226 654.851,389.351 652.15,390.249 649.45,390.476 610.301,390.476 605.8,390.476 600.4,389.351 597.925,388.226 595.9,386.649 594.1,384.624 592.75,382.374 591.85,379.675 591.625,376.976 592.75,371.8 594.1,369.55 595.9,367.524 597.925,365.95 600.4,364.601 603.1,363.7 605.8,363.476 642.925,363.476 649.45,363.476 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 607.8242 380.8613)">Analyse</text><polygon id="fig_19_analyse6" onclick="Saisir(this.id)" fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="983.125,362.575 988.525,363.7 991,364.825 993.025,366.624 994.825,368.649 996.175,370.899 997.075,373.374 997.3,376.075 996.175,381.476 994.825,383.726 993.025,385.749 991,387.325 988.525,388.45 985.825,389.351 983.125,389.575 943.976,389.575 939.476,389.575 934.075,388.45 931.601,387.325 929.575,385.749 927.775,383.726 926.425,381.476 925.525,378.774 925.3,376.075 926.425,370.899 927.775,368.649 929.575,366.624 931.601,365.05 934.075,363.7 936.775,362.8 939.476,362.575 976.601,362.575 983.125,362.575 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 941.4961 379.9629)">Analyse</text><polygon id="fig_19_analyse7" onclick="Saisir(this.id)" fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="1182.25,409.825 1187.65,410.95 1190.125,412.075 1192.15,413.874 1193.95,415.899 1195.3,418.149 1196.2,420.624 1196.425,423.325 1195.3,428.726 1193.95,430.976 1192.15,432.999 1190.125,434.575 1187.65,435.7 1184.95,436.601 1182.25,436.825 1143.101,436.825 1138.601,436.825 1133.2,435.7 1130.726,434.575 1128.7,432.999 1126.9,430.976 1125.55,428.726 1124.65,426.024 1124.425,423.325 1125.55,418.149 1126.9,415.899 1128.7,413.874 1130.726,412.3 1133.2,410.95 1135.9,410.05 1138.601,409.825 1175.726,409.825 1182.25,409.825 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 1140.6133 427.2129)">Analyse</text><polygon id="fig_19_analyse8" onclick="Saisir(this.id)" fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="68.275,414.55 73.675,415.675 76.15,416.8 78.175,418.601 79.975,420.624 81.325,422.874 82.225,425.351 82.45,428.05 81.325,433.45 79.975,435.7 78.175,437.726 76.15,439.3 73.675,440.425 70.975,441.325 68.275,441.55 29.125,441.55 24.625,441.55 19.225,440.425 16.75,439.3 14.725,437.726 12.925,435.7 11.575,433.45 10.675,430.749 10.45,428.05 11.575,422.874 12.925,420.624 14.725,418.601 16.75,417.024 19.225,415.675 21.925,414.774 24.625,414.55 61.75,414.55 68.275,414.55 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 26.6445 431.9395)">Analyse</text><polyline fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="91.225,485.649 46.45,485.649 46.45,441.55 "/><line fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="272.575" y1="392.726" x2="272.575" y2="296.649"/><polyline fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="179.2,339.624 179.2,286.524 182.35,285.175 183.25,283.601 183.7,282.024 182.35,278.874 180.775,277.976 179.2,277.524 179.2,94.6 "/><line fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="177.625" y1="455.274" x2="179.2" y2="366.624"/><line fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="272.8" y1="447.399" x2="272.575" y2="419.726"/><line fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="365.5" y1="443.8" x2="365.275" y2="370.226"/><line fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="497.575" y1="445.825" x2="496.675" y2="397.226"/><line fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="496.675" y1="370.226" x2="496.225" y2="306.774"/><line fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="626.5" y1="453.7" x2="627.625" y2="390.476"/><line fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="627.625" y1="363.476" x2="628.525" y2="306.325"/><polyline fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="715.825,485.649 1160.425,485.649 1160.425,436.825 "/><polyline fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="715.825,485.649 961.3,485.649 961.3,389.575 "/><line fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="961.3" y1="362.575" x2="961.3" y2="302.499"/><polygon id="fig_19_analyse9" onclick="Saisir(this.id)" fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="1078.75,362.575 1084.15,363.7 1086.625,364.825 1088.65,366.624 1090.45,368.649 1091.8,370.899 1092.7,373.374 1092.925,376.075 1091.8,381.476 1090.45,383.726 1088.65,385.749 1086.625,387.325 1084.15,388.45 1081.45,389.351 1078.75,389.575 1039.601,389.575 1035.101,389.575 1029.7,388.45 1027.226,387.325 1025.2,385.749 1023.4,383.726 1022.05,381.476 1021.15,378.774 1020.925,376.075 1022.05,370.899 1023.4,368.649 1025.2,366.624 1027.226,365.05 1029.7,363.7 1032.4,362.8 1035.101,362.575 1072.226,362.575 1078.75,362.575 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 1037.1211 379.9629)">Analyse</text><line fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="1056.025" y1="485.649" x2="1056.925" y2="389.575"/><polyline fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="1056.925,362.575 1055.8,293.274 1058.726,291.925 1059.625,290.575 1060.075,288.999 1058.726,286.075 1057.375,285.175 1055.8,284.726 1052.875,34.975 "/><line fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="46.45" y1="414.55" x2="48.025" y2="336.925"/><line fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="365.275" y1="343.226" x2="365.95" y2="101.8"/><line fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="1160.425" y1="409.825" x2="1160.2" y2="340.3"/><line fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="775.9" y1="485.649" x2="776.575" y2="389.351"/><polyline fill="none" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="776.575,362.351 776.575,292.374 779.726,291.024 780.625,289.45 781.075,287.874 779.726,284.726 778.15,283.825 776.575,283.374 776.8,97.3 "/><polygon id="fig_19_analyse10" onclick="Saisir(this.id)" fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" stroke="#C08040" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="798.4,362.351 803.8,363.476 806.275,364.601 808.3,366.399 810.101,368.425 811.45,370.675 812.351,373.149 812.575,375.851 811.45,381.249 810.101,383.499 808.3,385.524 806.275,387.101 803.8,388.226 801.101,389.124 798.4,389.351 759.25,389.351 754.75,389.351 749.351,388.226 746.875,387.101 744.851,385.524 743.05,383.499 741.7,381.249 740.8,378.55 740.575,375.851 741.7,370.675 743.05,368.425 744.851,366.399 746.875,364.825 749.351,363.476 752.05,362.575 754.75,362.351 791.875,362.351 798.4,362.351 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 756.7695 379.7285)">Analyse</text><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="921.7" y1="288.999" x2="654.175" y2="287.2"/><polyline fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="873.55,295.872 873.55,282.7 887.858,282.7 887.858,295.872 873.55,295.872 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 873.5508 292.6582)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">1</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text><polygon id="fig_19_analyse11" onclick="Saisir(this.id)" fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="979.976,180.1 985.375,181.225 987.851,182.35 989.875,184.15 991.675,186.175 993.025,188.425 993.925,190.9 994.15,193.6 993.025,199 991.675,201.25 989.875,203.275 987.851,204.85 985.375,205.975 982.675,206.875 979.976,207.1 940.825,207.1 936.325,207.1 930.925,205.975 928.45,204.85 926.425,203.275 924.625,201.25 923.275,199 922.375,196.3 922.15,193.6 923.275,188.425 924.625,186.175 926.425,184.15 928.45,182.575 930.925,181.225 933.625,180.325 936.325,180.1 973.45,180.1 979.976,180.1 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 938.3477 197.4863)">analyse</text><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="958.15" y1="207.1" x2="957.7" y2="275.499"/><polyline fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="950.726,249.072 950.726,235.9 965.034,235.9 965.034,249.072 950.726,249.072 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 950.7227 245.8613)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">0</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">1</tspan></text><polyline fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="994.15,193.6 1050.175,193.6 1051.525,190.45 1053.101,189.55 1054.675,189.1 1057.825,190.45 1058.726,192.025 1059.175,193.6 1108.675,193.825 "/><polyline fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="1005.175,200.697 1005.175,187.525 1019.483,187.525 1019.483,200.697 1005.175,200.697 "/><text class="styleTxtAttribut" transform="matrix(1 0 0 1 1005.1758 197.4863)"><tspan x="0" y="0" font-family="\'ArialMT\'" font-size="9.9">0</tspan><tspan x="5.625" y="0" font-family="\'ArialMT\'" font-size="9.9">-</tspan><tspan x="8.991" y="0" font-family="\'ArialMT\'" font-size="9.9">n</tspan></text></g></g></svg>';
		//alert (xml1);	
		//figure_courant="fig_19";
		var sql = 'INSERT INTO svg(fichier,isModel,titre,id_user) VALUES(?1,?2,?3,?4);';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,xml1);
		statement.bindUTF8StringParameter(1,"true");
		statement.bindUTF8StringParameter(2,"Acteur");
		statement.bindUTF8StringParameter(3,"0");
		statement.execute();
		statement.reset();
		
		var statement = mDBConn.createStatement('SELECT id_svg FROM svg ORDER BY id_svg DESC;');
		var myArray1 = boucle_select(statement);
		j=0;
		id_svg=myArray1[j]["id_svg"];
		var sql = 'INSERT INTO xul(id_element,form_xul,id_svg) VALUES(?1,?2,?3);';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,"Zones saisies");
		statement.bindUTF8StringParameter(1,xml2);
		statement.bindUTF8StringParameter(2,id_svg);
		statement.execute();
		statement.reset();	
		
		var sql = 'INSERT INTO xul(id_element,form_xul,id_svg) VALUES(?1,?2,?3);';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,"Ontologie acteur");
		statement.bindUTF8StringParameter(1,xml3);
		statement.bindUTF8StringParameter(2,id_svg);
		statement.execute();
		statement.reset();
		//figure_courant="fig_21";
	}
}

function Open_default(elem){
	g_idModel = 1;
	elem.setAttribute("disabled","true");
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	var mDBConn = connect_DB();
	var p_interface = document.getElementById("C1");
	var p_saisi=document.getElementById("S1");
	while(p_saisi.hasChildNodes())	
		p_saisi.removeChild(doc.firstChild);
	
	var statement = mDBConn.createStatement('SELECT fichier,isModel FROM svg where id_svg=?1;');
	statement.bindUTF8StringParameter(0,'1');
	// return dataset;	
	var myArray1 = boucle_select(statement);
	document.getElementById("add_doc").setAttribute("disabled","false");
	document.getElementById("savoirs").setAttribute("hidden","true");
	document.getElementById("fig_p").setAttribute("hidden","false");
	//alert("SVG : "+myArray1[j]['fichier']);
	var parser=new DOMParser();
	// Transformer le String en Objet DOM
	var resultDoc=parser.parseFromString(myArray1[0]['fichier'],"text/xml");
	doc=document.getElementById("fig_p");
	resultDoc.documentElement.setAttribute("hidden","false");
	resultDoc.documentElement.setAttribute("id_model","1");
	while(doc.hasChildNodes())	
			doc.removeChild(doc.firstChild);
	doc.appendChild(resultDoc.documentElement);

	statement.reset();
	
	var statement = mDBConn.createStatement('SELECT form_xul FROM xul where id_xul=?1;');
	statement.bindUTF8StringParameter(0,"1");
	// return dataset;	
	var myArray1 = boucle_select(statement);
	//alert (myArray1.length);
	for(var j=0;j<myArray1.length;j++){
		//alert("SVG : "+myArray1[j]['form_xul']);
		var parser=new DOMParser();
		// Transformer le String en Objet DOM
		var resultDoc=parser.parseFromString(myArray1[j]['form_xul'],"text/xml");
		resultDoc.documentElement.setAttribute("hidden","false");
		resultDoc.documentElement.setAttribute("flex","1");
		p_saisi.appendChild(resultDoc.documentElement);
	}
	statement.reset();
	document.getElementById("mo").setAttribute("disabled","false");
}

function afficher_last_interface(){
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	if (document.getElementById("OntoActeur")==null){
		var p_saisi=document.getElementById("saisie_fig_18_concept");
		var mDBConn = connect_DB();
		var statement = mDBConn.createStatement('SELECT form_xul FROM xul where id_xul=?1;');
		statement.bindUTF8StringParameter(0,"2");
		// return dataset;	
		var myArray1 = boucle_select(statement);
		j=0;
		var parser=new DOMParser();
		// Transformer le String en Objet DOM
		var resultDoc=parser.parseFromString(myArray1[j]['form_xul'],"text/xml");
		
		p_saisi.appendChild(resultDoc.documentElement);
		document.getElementById("OntoActeur").setAttribute("hidden","true");

		statement.reset();
	}
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
		//figure_courant=figure;
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
	//figure_courant=figure;
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
		for (var i = 1; i < ChampsSaisis.length; i++){
			//alert(champ);
			var champ = ChampsSaisis[i];
			if( champ!=ChampsSaisis[0] && champ.tagName != "label" && champ.tagName != "button"){
				//r�cup�re l'id
				var idDst = champ.getAttribute("id").replace("saisie_", "");
				//alert(idSrc+' | '+idDst);
				//r�cup�re le texte
					var texte = champ.value;
				//replace le texte
				texte1=document.getElementById(idDst)
				if (texte!="")
					texte1.firstChild.data= texte;
				else 
					texte1.firstChild.data= "***"; 	
				
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


function changer_interface(idsSrc,idsDst,elem){
	
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		var mDBConn = connect_DB();
		var p_interface = document.getElementById("C1");
		var statement = mDBConn.createStatement('SELECT id_svg,fichier,titre,isModel FROM svg where id_svg=?1;');
		statement.bindUTF8StringParameter(0,idsDst);
		// return dataset;	
		var myArray1 = boucle_select(statement);
		j=0;	
		var	id_m2=myArray1[j]['id_svg'];
		var svg_src2 = myArray1[j]['fichier'];
		var titre2=myArray1[j]['titre'];
		var test_model2=myArray1[j]['isModel'];
		
		doc=document.getElementById("fig_p");
		p_saisi=document.getElementById("S1");
		var serializer = new XMLSerializer();
    	var svg_src = serializer.serializeToString(doc.firstChild);
    	var serializer = new XMLSerializer();
    	var xul_src = serializer.serializeToString(p_saisi.firstChild);
		//svg_src=doc.firstChild;
		
		var statement = mDBConn.createStatement('SELECT id_svg,titre,isModel FROM svg where id_svg=?1;');
		statement.bindUTF8StringParameter(0,idsSrc);
		var myArray1 = boucle_select(statement);
		// Now you can loop through the array:
		var id_m=myArray1[j]['id_svg'];
		var test_model =myArray1[j]['isModel'];		
		var titre=myArray1[j]['titre'];
		
		var statement = mDBConn.createStatement('SELECT form_xul FROM xul where id_svg=?1;');
		statement.bindUTF8StringParameter(0,idsDst);
		//alert(idsDst);
		var myArray1 = boucle_select(statement);		
		form_xulDst=myArray1[j]['form_xul'];
		//alert(test_model+ "else");
		if (test_model=="true"){
			//alert(elem.id);
			var sql = 'INSERT INTO svg(fichier,isModel,titre,id_user) VALUES(?1,?2,?3,?4);';
			var statement = mDBConn.createStatement(sql);
		    statement.bindUTF8StringParameter(0,svg_src);
		    statement.bindUTF8StringParameter(1,id_m);
		    statement.bindUTF8StringParameter(2,titre+" - "+user+" - "+ladate.toGMTString());
		    statement.bindUTF8StringParameter(3,id_user);
		    statement.execute();
	    	statement.reset();
	    	
	    	var statement = mDBConn.createStatement('SELECT id_svg,fichier FROM svg ORDER BY id_svg DESC;');
			var myArray1 = boucle_select(statement);
			// Now you can loop through the array:
			id_interface =myArray1[j]['id_svg'];
			interface_modif=myArray1[j]['fichier'];
			
			var sql = 'INSERT INTO xul(id_element,form_xul,id_svg) VALUES(?1,?2,?3);';
			var statement = mDBConn.createStatement(sql);
			statement.bindUTF8StringParameter(0,"saisie_"+id_interface);
			statement.bindUTF8StringParameter(1,xul_src);
			statement.bindUTF8StringParameter(2,id_interface);
			statement.execute();
			statement.reset();
			if (idsSrc!=idsDst){
		    	var pop = document.getElementById(racine_interface); // a <menupopup> element
				var first = createMenu(titre);
				var pop2=createMenuPopup("pop_interface_"+id_interface);
				//var last = createMenuItem(titre);
				first.setAttribute("onclick","affiche_interface('fig_p','','fig_p','"+id_interface+"');");
				//pop2.appendChild(last);
				first.appendChild(pop2);
				pop.appendChild(first);
				racine_interface="pop_interface_"+id_interface;
				id_courant=idsDst;
			}
			else if (idsSrc==idsDst){
				var pop = document.getElementById("test3"); // a <menupopup> element
				var first = createMenu(titre);
				var pop2=createMenuPopup("pop_interface_"+id_interface);
				//var last = createMenuItem(titre);
				first.setAttribute("onclick","affiche_interface('fig_p','','fig_p','"+id_interface+"');");
				//pop2.appendChild(last);
				first.appendChild(pop2);
				pop.appendChild(first);
				racine_interface="pop_interface_"+id_interface;
				id_courant=idsDst;
			}
		}
		else {
			//alert(test_model+ "else");
			var sql = 'UPDATE svg SET fichier=?1 WHERE id_svg=?2;';
			var statement = mDBConn.createStatement(sql);
			statement.bindUTF8StringParameter(0,svg_src);
			statement.bindUTF8StringParameter(1,idsSrc);
			statement.execute();
			statement.reset();	
			
			var sql = 'UPDATE xul SET form_xul=?1 WHERE id_svg=?2;';
			var statement = mDBConn.createStatement(sql);
			statement.bindUTF8StringParameter(0,xul_src);
			statement.bindUTF8StringParameter(1,idsSrc);
			statement.execute();
			statement.reset();	
		}
		
		if (test_model2=="true"){
			//alert(elem.id);
			var sql = 'INSERT INTO svg(fichier,isModel,titre,id_user) VALUES(?1,?2,?3,?4);';
			var statement = mDBConn.createStatement(sql);
		    statement.bindUTF8StringParameter(0,svg_src2);
		    statement.bindUTF8StringParameter(1,id_m2);
		    statement.bindUTF8StringParameter(2,titre2+" - "+user+" - "+ladate.toGMTString());
		    statement.bindUTF8StringParameter(3,id_user);
		    statement.execute();
	    	statement.reset();
	    	
	    	var statement = mDBConn.createStatement('SELECT id_svg FROM svg ORDER BY id_svg DESC;');
			var myArray1 = boucle_select(statement);
			// Now you can loop through the array:
			id_interface2 =myArray1[j]['id_svg'];
			
			var sql = 'INSERT INTO xul(id_element,form_xul,id_svg) VALUES(?1,?2,?3);';
			var statement = mDBConn.createStatement(sql);
			statement.bindUTF8StringParameter(0,"saisie_"+id_interface2);
			statement.bindUTF8StringParameter(1,form_xulDst);
			statement.bindUTF8StringParameter(2,id_interface2);
			statement.execute();
			statement.reset();
			
			// Now you can loop through the array:
			form_xul =myArray1[j]['form_xul'];
	    	var pop = document.getElementById(racine_interface); // a <menupopup> element
			var first = createMenu(titre2);
			var pop2=createMenuPopup("pop_interface_"+id_interface2);
			//var last = createMenuItem(titre2);
			first.setAttribute("onclick","affiche_interface('fig_p','','fig_p','"+id_interface2+"');");
			//pop2.appendChild(last);
			first.appendChild(pop2);
			pop.appendChild(first);
			id_courant=id_interface2;
			racine_interface="pop_interface_"+id_interface2;
		}

		if (test_model=="true"){
			xml2=RC(interface_modif,"changer_interface(\'"+idsSrc+"\',\'"+idsDst+"\',this)","changer_interface(\'"+id_interface+"\',\'"+id_interface2+"\',this)");
			var sql = 'UPDATE svg SET fichier= ?1 WHERE id_svg=?2;';
			//alert('UPDATE svg SET fichier= '+'hello'+' WHERE id_svg='+id_interface+';');
			var statement = mDBConn.createStatement(sql);
			statement.bindUTF8StringParameter(0,xml2);
			statement.bindUTF8StringParameter(1,id_interface);
			statement.execute();
			statement.reset();
			
			xml4=RC(xul_src,"changer_interface(\'"+idsSrc+"\',\'"+idsDst+"\',this)","changer_interface(\'"+id_interface+"\',\'"+id_interface2+"\',this)");
			var sql = 'UPDATE xul SET form_xul= ?1 WHERE id_svg=?2;';
			//alert('UPDATE svg SET fichier= '+'hello'+' WHERE id_svg='+id_interface+';');
			var statement = mDBConn.createStatement(sql);
			statement.bindUTF8StringParameter(0,xml4);
			statement.bindUTF8StringParameter(1,id_interface);
			statement.execute();
			statement.reset();
		}
		else {
			xml2=interface_modif;
			xml4=xul_src;
		}
		if (test_model2=="true"){
			xml3=RC(svg_src2,"changer_interface(\'"+idsDst+"\',\'"+idsSrc+"\',this)","changer_interface(\'"+id_interface2+"\',\'"+id_interface+"\',this)");
			var sql = 'UPDATE svg SET fichier= ?1 WHERE id_svg=?2;';
			//alert("changer_interface(\'"+idsDst+"\',\'"+idsSrc+"\',this)"+"  <---  changer_interface(\'"+id_interface2+"\',\'"+id_interface+"\',this)");
			//alert(xml3);
			var statement = mDBConn.createStatement(sql);
			statement.bindUTF8StringParameter(0,xml3);
			statement.bindUTF8StringParameter(1,id_interface2);
			statement.execute();
			statement.reset();	

			xml5=RC(form_xulDst,"changer_interface(\'"+idsDst+"\',\'"+idsSrc+"\',this)","changer_interface(\'"+id_interface2+"\',\'"+id_interface+"\',this)");
			var sql = 'UPDATE xul SET form_xul= ?1 WHERE id_svg=?2;';
			//alert("changer_interface(\'"+idsDst+"\',\'"+idsSrc+"\',this)"+"  <---  changer_interface(\'"+id_interface2+"\',\'"+id_interface+"\',this)");
			//alert(xml3);
			var statement = mDBConn.createStatement(sql);
			statement.bindUTF8StringParameter(0,xml5);
			statement.bindUTF8StringParameter(1,id_interface2);
			statement.execute();
			statement.reset();
		}
		else {
			xml3=svg_src2;
			xml5=form_xulDst
		}
		while (doc.hasChildNodes())	
			doc.removeChild(doc.firstChild);
		var parser=new DOMParser();
		// Transformer le String en Objet DOM
		var resultDoc=parser.parseFromString(xml3,"text/xml");
		resultDoc.documentElement.setAttribute("id_model",id_m2);
		doc.appendChild(resultDoc.documentElement);
		var parser2=new DOMParser();
		// Transformer le String en Objet DOM
		var resultDoc2=parser2.parseFromString(xml5,"text/xml");
		while (p_saisi.hasChildNodes())	
			p_saisi.removeChild(p_saisi.firstChild);
		p_saisi.appendChild(resultDoc2.documentElement);
		/*document.getElementById("fig_21_indexer").setAttribute("fill","green");
		document.getElementById("fig_21_indexing").setAttribute("fill","green");
		document.getElementById("fig_21_indexer_name").firstChild.data=user;
		document.getElementById("fig_21_indexing_id").firstChild.data=id_user;
		document.getElementById("fig_21_indexing_date").firstChild.data=ladate.getDate()+"-"+(ladate.getMonth()+1)+"-"+ladate.getFullYear();*/
			
		statement.reset();
	//} catch(ex2){alert("interface:changer_interface:"+ex2);}
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
				//gestion de l'importation pour le menu stockage->charger
				
				//AppendSVG("chrome://archipoenum/content/sauvegardes/"+fichier.leafName,document.getElementById("fig_21"));
				xml = read(chemin);
				var parser=new DOMParser();
				// Transformer le String en Objet DOM
				var resultDoc=parser.parseFromString(xml,"text/xml");
				doc=document.getElementById(figure_courant);
				if (doc.hasChildNodes()){	
					doc.removeChild(doc.firstChild);					
				}  
				// Int�grer le DOM r�cup�r� � l'interieur de document
				resultDoc.documentElement.setAttribute("id",fichier.leafName);
				doc.appendChild(resultDoc.documentElement);
				//alert(figure_courant);
				

				//alert(doc.hasChildNodes());
            
				document.getElementById(figure_courant).setAttribute("hidden","true	");
				////figure_courant=fichier.leafName;
				document.getElementById("mo").setAttribute("disabled","false");
			}
			else if (cmp=='a')
			{
				//gestion de l'importation pour l'assitant d'interface
				document.getElementById("f_svg").setAttribute("value",chemin);
				document.getElementById('titre_svg').setAttribute('hidden','false');
				document.getElementById('l0').setAttribute('hidden','false');
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
	var chemin=document.getElementById("f_svg").getAttribute("value");
	svgTitre=document.getElementById("titre_svg").value;
	//xml = read(chemin);
	//rend dynamique les graphique du svg
	var resultDoc=set_ids(chemin);
	var parser=new DOMParser();
	// Transformer le String en Objet DOM
	//var resultDoc=parser.parseFromString(xml,"text/xml");
	// Int�grer le DOM r�cup�r� � l'interieur de document
	//resultDoc.documentElement.setAttribute("id","fig_svg");
	doc=document.getElementById("v_svg");
	
	//set_saisie(resultDoc);
	if (doc.firstChild)
		doc.removeChild(doc.firstChild);    
	doc.appendChild(resultDoc);
    doc.setAttribute("hidden","false");
}
catch(ex2){ alert("interface:interface_modif: "+ex2); }
} 

function Open(){
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	var win = window.openDialog("http://localhost/archipoenum/Ouvrir.xul", "dlg", "dependent,dialog,modal", "");			
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

function getObjSVG_DB(id_svg){
try{

		var parser=new DOMParser();
		// Transformer le String en Objet DOM
		var strSvg=getSVG_DB(id_svg);
		var resultDoc=parser.parseFromString(strSvg,"text/xml");		
		return resultDoc.documentElement;

	}
	catch(ex2){ 
		alert("interface:getObjSVG_DB: "+ex2); 		
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

			// return dataset;	
		var myArray1 = boucle_select(statement);
		j=0;
		//alert (myArray1.length);
		for(var j=0;j<myArray1.length;j++){
			//alert("SVG : "+myArray1[j]['fichier']);
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
	document.getElementById("savoirs").setAttribute("hidden","true");
	document.getElementById("fig_p").setAttribute("hidden","false");
	var parser=new DOMParser();
	// Transformer le String en Objet DOM
	var resultDoc=parser.parseFromString(fig_svg,"text/xml");
	var doc=document.getElementById(choix_svg);
	while(doc.hasChildNodes())
		doc.removeChild(doc.firstChild);
	// Int�grer le DOM r�cup�r� � l'interieur de document
	doc.appendChild(resultDoc.documentElement);
	document.getElementById("mo").setAttribute("disabled","false");
}

function svg_open_id(id_svg)
{

	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	var file = Components.classes["@mozilla.org/file/directory_service;1"]
                    .getService(Components.interfaces.nsIProperties)
                    .get("ProfD", Components.interfaces.nsIFile);
	file.append(myDBFile);
	p_saisi=document.getElementById("S1");
	var storageService = Components.classes["@mozilla.org/storage/service;1"]
	                        .getService(Components.interfaces.mozIStorageService);
	var mDBConn = storageService.openDatabase(file);
	var statement = mDBConn.createStatement('SELECT * FROM svg where id_svg=?1;');
	statement.bindUTF8StringParameter(0,id_svg);
	//alert('SELECT * FROM svg where id_svg='+id_svg);
	document.getElementById("savoirs").setAttribute("hidden","true");
	document.getElementById("fig_p").setAttribute("hidden","false");
		// return dataset;	
	var j=0;
	var myArray1 = boucle_select(statement);
	choix_svg="fig_p";
	fig_svg=myArray1[j]["fichier"];
	// Transformer le String en Objet DOM
	var parser=new DOMParser();
	var resultDoc=parser.parseFromString(fig_svg,"text/xml");
	// Int�grer le DOM r�cup�r� � l'interieur de document
	doc=document.getElementById(choix_svg);
	if (doc!=null){
		if (doc.hasChildNodes()==true)	
			doc.removeChild(doc.firstChild);
		doc.appendChild(resultDoc.documentElement);
		//alert(doc);
		if (figure_courant!=choix_svg)  {            
			document.getElementById(choix_svg).setAttribute("hidden","true");
			//alert ("hidden : true");	
		}
	}
	else {
		document.getElementById("C1").appendChild(resultDoc.documentElement);
	}
	var statement = mDBConn.createStatement('SELECT form_xul FROM xul where id_svg=?1;');
	statement.bindUTF8StringParameter(0,id_svg);
	var myArray1 = boucle_select(statement);		
	form_xulDst=myArray1[0]['form_xul'];
	//alert(form_xulDst);
	var parser2=new DOMParser();
	// Transformer le String en Objet DOM
	var resultDoc2=parser2.parseFromString(form_xulDst,"text/xml");
	while (p_saisi.hasChildNodes())	
		p_saisi.removeChild(p_saisi.firstChild);
	p_saisi.appendChild(resultDoc2.documentElement);
	document.getElementById("mo").setAttribute("disabled","false");
}


function ok_svg(){
	window.opener.g_idModel=document.getElementById("listModele").selectedItem.getAttribute("value");
	window.close();
	window.opener.svg_open_id(window.opener.g_idModel);
}
function get_list_SVG_model(idXul){
	try{
		//ajoute la liste des mod�les
		var listModele = new xulListeModele("listModele", document.getElementById(idXul), myDBFile);
		listModele.get_DB_list();
	}
	catch(ex2){ 
		alert("interface:get_list_SVG_model: "+ex2); 
		statement.reset();
		
	}
} 

function get_list_SVG_user(){
try{
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');

		var mDBConn = connect_DB();
		
		var statement = mDBConn.createStatement("SELECT * FROM svg WHERE isModel<>'true' AND id_user=?1;");
		statement.bindUTF8StringParameter(0,id_user);
		

			// return dataset;	
		
		
		var myArray1 = boucle_select(statement);
		var popup = document.getElementById("stock"); // a <menupopup> element
		var first = createMenu("Liste des SVG");
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

		var mDBConn = connect_DB();
		
		var statement = mDBConn.createStatement('SELECT figure_c FROM svg where id_svg=?1;');
		statement.bindUTF8StringParameter(0,id_svg);
		

			// return dataset;	
		
		
		var myArray1 = boucle_select(statement);
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

		var mDBConn = connect_DB();
		login = document.getElementById("nom").value;
		password = document.getElementById("passwd").value;
		//alert (login +' : '+password);
		var statement = mDBConn.createStatement('SELECT id,login,pwd FROM utilisateur where login=?1');
		statement.bindUTF8StringParameter(0,login);
		

			// return dataset;	
		
		
		var myArray1 = boucle_select(statement);
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
		else {}//alert("Else");
	}
function get_nb_saisies(){
	nb_zt=document.getElementById("nb_zt").value;
	nb_ld=document.getElementById("nb_ld").value;
	//alert(nb_zt+" : "+nb_ld);
	afficher_nb_saisies(nb_zt,nb_ld);
}
function afficher_nb_saisies(nb_zt,nb_ld)
{
	//alert(nb_zt+" |:| "+nb_ld);
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
		var myCreateDBQuery9 = 'CREATE TABLE IF NOT EXISTS svg (id_svg INTEGER PRIMARY KEY AUTOINCREMENT,  titre text(40), fichier text(1000),isModel varchar(40), id_user uniqueidentifier);';
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

function insert_user (){
	try {
		
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		createDB();
		login = document.getElementById("login_i").value;
		password = document.getElementById("password_i").value;
		//alert (login +' : '+password);

		var mDBConn = connect_DB();
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
		
	
		
		var myArray1 = boucle_select(statement);

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
		result = prompts.prompt(window, "Donner un titre du fichier", "Saisir le titre du figure sauvgard�", input, null, check);
		if(!result)
			return;
		var nomFic = input.value;
		createDB();
		doc = getSVG();
		var serializer = new XMLSerializer();
    	var svg = serializer.serializeToString(doc);
		//alert ("SVG : "+svg);

		var mDBConn = connect_DB();
		var sql = 'INSERT INTO svg(fichier,isModel,titre,id_user) VALUES(?1,?2,?3,?4);';
		var statement = mDBConn.createStatement(sql);
	    statement.bindUTF8StringParameter(0,svg);
	    statement.bindUTF8StringParameter(1,"false");
	    statement.bindUTF8StringParameter(2,nomFic);
	    statement.bindUTF8StringParameter(3,id_user);
	    //statement.bindUTF8StringParameter(1, password);
	    statement.execute();
	    statement.reset();
    	j=0;
	    var statement = mDBConn.createStatement('SELECT id_svg FROM svg ORDER BY id_svg DESC;');
		var myArray1 = boucle_select(statement);
		// Now you can loop through the array:
		id_interface =myArray1[j]['id_svg'];
		
		p_saisi=document.getElementById("S1");
		//alert(p_saisi.firstChild);
		//alert(id_interface);
    	var serializer = new XMLSerializer();
    	var xul_src = serializer.serializeToString(p_saisi.firstChild);
    
    	var sql = 'INSERT INTO xul(id_element,form_xul,id_svg) VALUES(?1,?2,?3);';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,"saisie_"+id_interface);
		statement.bindUTF8StringParameter(1,xul_src);
		statement.bindUTF8StringParameter(2,id_interface);
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
		svg=document.getElementById(figure_courant).firstChild.cloneNode(true);
		return svg;
		
	} 
	catch(ex2){alert("interface:getSVG:"+ex2); }
}

// Afficher le figure principale
function afficher(){
try{
	if(document.getElementById(figure_courant)!=null)
		document.getElementById(figure_courant).setAttribute("hidden","true");
	if(document.getElementById("fig_18")!=null)
		document.getElementById("fig_18").setAttribute("hidden","true");
	if(document.getElementById("fig_19")!=null)
		document.getElementById("fig_19").setAttribute("hidden","true");
	if(document.getElementById("fig_p")!=null)
		document.getElementById("fig_p").setAttribute("hidden","false");
	if(document.getElementById("fig_21")!=null)
		document.getElementById("fig_21").setAttribute("hidden","false");	
	//document.getElementById("ch1").setAttribute("hidden","true");
	//document.getElementById("ch2").setAttribute("hidden","true");
} 
catch(ex2){alert("interface:afficher:"+ex2); }
}

function afficher1(){
try{
	//alert(figure_courant);
if(document.getElementById(figure_courant)!=null)
		document.getElementById(figure_courant).setAttribute("hidden","true");
	if(document.getElementById("fig_18")!=null)
		document.getElementById("fig_18").setAttribute("hidden","false");
	if(document.getElementById("fig_19")!=null)
		document.getElementById("fig_19").setAttribute("hidden","true");
	if(document.getElementById("fig_p")!=null)
		document.getElementById("fig_p").setAttribute("hidden","false");
	if(document.getElementById("fig_21")!=null)
		document.getElementById("fig_21").setAttribute("hidden","true");	
	//document.getElementById("ch2").setAttribute("hidden","true");
	//document.getElementById("ch3").setAttribute("hidden","true");
} 
catch(ex2){alert("interface:afficher1:"+ex2); }
}

function afficher2(){
try{
	//alert("ch3");
	if(document.getElementById(figure_courant)!=null)
		document.getElementById(figure_courant).setAttribute("hidden","true");
	if(document.getElementById("fig_18")!=null)
		document.getElementById("fig_18").setAttribute("hidden","true");
	if(document.getElementById("fig_19")!=null)
		document.getElementById("fig_19").setAttribute("hidden","false");
	if(document.getElementById("fig_p")!=null)
		document.getElementById("fig_p").setAttribute("hidden","false");
	if(document.getElementById("fig_21")!=null)
		document.getElementById("fig_21").setAttribute("hidden","true");	
	
	//document.getElementById("ch3").setAttribute("hidden","false");
} 
catch(ex2){alert("interface:afficher2:"+ex2); }
}

function afficher3(id_svg){
try{
	//alert("ch3");
	
	if(document.getElementById(figure_courant)!=null)
		document.getElementById(figure_courant).setAttribute("hidden","true");
	if(document.getElementById("fig_18")!=null)
		document.getElementById("fig_18").setAttribute("hidden","true");
	if(document.getElementById("fig_19")!=null)
		document.getElementById("fig_19").setAttribute("hidden","true");
	if(document.getElementById("fig_p")!=null)
		document.getElementById("fig_p").setAttribute("hidden","false");
	if(document.getElementById("fig_21")!=null)
		document.getElementById("fig_21").setAttribute("hidden","true");
	if(document.getElementById(id_svg)!=null)
		document.getElementById(id_svg).setAttribute("hidden","false");
	//figure_courant=id_svg;
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
  item.setAttribute("id", id);
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
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		//AppendSVG("chrome://archipoenum/content/sauvegardes/"+fichier.leafName,document.getElementById("fig_21"));
	chemin="C:\\wamp\\www\\archipoenum\\library\\xul\\doc.xul";	
	che="chrome://archipoenum/content/library/xul/DocSaisie.xul";	
	chrm=chromeToPath(che);
	var mDBConn = connect_DB();
	var statement = mDBConn.createStatement('SELECT fichier FROM svg where id_svg=?1;');
	statement.bindUTF8StringParameter(0,"1");
	// return dataset;	
	var myArray1 = boucle_select(statement);
		// Now you can loop through the array:
	test =0;
	j=0;
		//alert (myArray1.length);
		
	xml = myArray1[j]['fichier'];
	xml2=RC(xml,"fig_18","Document_"+docs);
	xml3=RC(xml2,"fig_21","Document_"+docs);
	xml4=RC(xml3,"fig_19","Document_"+docs);
	//alert(xml4);
	xulData=xml4 ;
	//AppendSVG("http://localhost/archipoenum/library/xul/doc.xul",document.getElementById("C1"));
	var parser=new DOMParser();
	// Transformer le String en Objet DOM
	var resultDoc=parser.parseFromString(xulData,"text/xml");
	// Int�grer le DOM r�cup�r� � l'interieur de document
	resultDoc.documentElement.setAttribute("hidden","true");
		document.getElementById("C1").appendChild(resultDoc.documentElement);

	chemin="C:\\wamp\\www\\archipoenum\\library\\xul\\DocSaisie.xul";	
	var statement = mDBConn.createStatement('SELECT form_xul FROM xul where id_xul=?1;');
	statement.bindUTF8StringParameter(0,"1");
	// return dataset;	
	var myArray1 = boucle_select(statement);
		// Now you can loop through the array:
	j=0;
	xml = myArray1[j]['form_xul'];
	xml2=RC(xml,"fig_18","Document_"+docs);
	xml3=RC(xml2,"fig_21","Document_"+docs);
	xml4=RC(xml3,"fig_19","Document_"+docs);
	xulData=xml4;
	//alert(xulData);
	//AppendSVG("http://localhost/archipoenum/library/xul/doc.xul",document.getElementById("C1"));
	var parser=new DOMParser();
	// Transformer le String en Objet DOM
	var resultDoc=parser.parseFromString(xulData,"text/xml");
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
		//alert (document.getElementById("form_user").getAttribute("hidden"));
	}


} 
catch(ex2){alert("interface:afficher_form_user:"+ex2); }
}


function logout(){
	document.getElementById("logout").setAttribute("hidden","false");
	document.getElementById("logout_user").setAttribute("value",user+" est deconnecté");
	document.getElementById(figure_courant).setAttribute("hidden","true");
	alert(user+" est deconnecter");
	window.close();
}

function set_ids(fichier_svg){
try
	{
		var xml=read(fichier_svg);
		var parser=new DOMParser();
		fct='<script xlink:href="http://localhost/archipoenum/library/js/fonctions.js" />';
		//alert(fct);
		//tester si on peut supprimer
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
	//r�cup�ration du num�ro de graphique
	var c1 = c.split("_")[2];

	first= createVbox(c);
	g=createG("root");
	g3=createGroupbox("g3"+c1);
	g4=createGroupbox("g4"+c1);
	svg=createSvg("svg");
	graph.setAttribute("id","svg"+c1);
	g.appendChild(graph);
	svg.appendChild(g);
	svg.setAttribute("version","1.1");
	svg.setAttribute("preserveAspectRatio","xMinYMin meet");
	svg.setAttribute("baseprofile","full");
	svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
	svg.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink");
	svg.setAttribute("xmlns:ev","http://www.w3.org/2001/xml-events");
	svg.setAttribute("visibility",'visible');
	svg.setAttribute("viewBox","0 0 1000 1000");
	//svg.setAttribute("preserveAspectRatio","none");
	svg.setAttribute("width","300px");
	svg.setAttribute("height","200px");
	label=createCaption(c);
	ch_c=createCheck("Cacher le graphique      ");
	ch_c.setAttribute("id","cacher_"+c1);
	label1=createLabel("Choisissez un evenement ");
	l=createLabel(" ");
	m_hist=createMenuList('Mhist'+c1);
	l_hist=createMenuPopup('hist'+c1);
	m_hist.appendChild(l_hist);
	choix = createMenuList("choixEvenement_"+c1);
	var pop = createMenuPopup("pop"+c1);
	var evt1 = createMenuItem("Evenement en cliquant sur le graphique");
	evt1.setAttribute("value","onclick");
	var evt2 = createMenuItem("Evenement en chargeant la page");
	evt2.setAttribute("value","onload");
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
	var fct4 = createMenuItem("Cacher ce graphique");
	fct4.setAttribute("value","cacher_graph");
		
	var bt1= createButton("bt_"+c1,"Valider");
	bt1.setAttribute("onclick", "Valider_form('"+c+"');");
	//alert(c);
	second= createHbox("h1"+c1);
	third= createHbox("h2"+c1);
	ch1=createCheck("Zone Texte      ");
	ch1.setAttribute("id","ch1_"+c1);
	ch1.setAttribute("oncommand","affiche_valid(this)");
	bt_1= createButton("bt_h1"+c1,"Nouvelle Zone texte");
	bt_1.setAttribute("onclick","Ajouter_zone(this,"+c1+")");
	bt_1.setAttribute("hidden","false");
	bt_1.setAttribute("cpmt",1);
	ch2=createCheck("Menu Liste");
	ch2.setAttribute("id","ch2_"+c1);
	ch2.setAttribute("oncommand","affiche_valid(this)");
	bt_2= createButton("bt_h2"+c1,"Nouvelle Menu liste");
	bt_3= createButton("bt_c"+c1,"Cacher");
	bt_2.setAttribute("onclick","Ajouter_liste(this,"+c1+")");
	bt_2.setAttribute("hidden","false");
	bt_2.setAttribute("cpmt",1);
	txt1=createText("txt_h1"+c1);
	txt2=createText("txt_h2"+c1);
	//second.appendChild(ch1);
	g3.appendChild(second);
	//second.appendChild(txt1);
	second.appendChild(bt_1);
	//third.appendChild(ch2);
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
	//g1.appendChild(ch_c);
	g1.appendChild(l.cloneNode(false));
	g1.appendChild(label1);
	g1.appendChild(choix);
	pop2.appendChild(fct2);
	pop2.appendChild(fct4);
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
	
	//cr�ation des items du menu choissir un graphique
	pop3 = create_saisie(graph_c, pop3, "g");
	pop3 = create_saisie(graph_c, pop3, "path");
	pop3 = create_saisie(graph_c, pop3, "text");
	pop3 = create_saisie(graph_c, pop3, "polygon");
	pop3 = create_saisie(graph_c, pop3, "rect");

	choix3.appendChild(pop3);
	label4=createLabel("Choisissez un graphe :    ");
	lh=createLabel("Historique :    ");
	label4.setAttribute("id","label_"+c1);
	g1.appendChild(label4);
	g1.appendChild(choix3);
	g1.appendChild(l.cloneNode(false));
	g1.appendChild(vb);
		
	//ajoute la liste des mod�les
	var listModele = new xulListeModele("listModele_"+c1, g1, myDBFile, true);
	listModele.get_DB_list();
		
	h1= createHbox("h3"+c1);
	h1.appendChild(bt1);
	h1.appendChild(bt_3);
	g1.appendChild(h1);
	g1.appendChild(l);
	first.appendChild(g1);
	g1.appendChild(lh);	
	g1.appendChild(m_hist);	
	first.setAttribute("hidden",'true');
	//alert(c1);
	return(first);		
}

function create_saisie(x1, pop3, balise){

	for (j=0;j<x1.getElementsByTagName(balise).length;j++)
	{	
		z=x1.getElementsByTagName(balise)[j].cloneNode(false);
		//alert(z.id+" : "+graph.id);
		var graph1 = createMenuItem(z.id).cloneNode(false);
		graph1.setAttribute("value",z.id);
		pop3.appendChild(graph1);
		
		//alert(z.id);
	}

	return pop3;

}

function create_saisie_graph(x, balise){

		for (i=1;i<x.getElementsByTagName(balise).length;i++)
		{	
			//alert(c1);
			y=x.getElementsByTagName(balise)[i].cloneNode(true);			
			var resultDoc=createActionSaisie('saisie_graph_'+c1,y,doc1);
			document.getElementById("modifs").appendChild(resultDoc.cloneNode(true));
			c1++;
		}

	return pop3;

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
	if(!document.getElementById("saisie_"+c_svg.id)){
		var resultDoc=createActionSaisie('saisie_'+c_svg.id,c_svg.cloneNode(true),document.getElementById("svg_1"));
		document.getElementById("modifs").appendChild(resultDoc.cloneNode(true));
	}
	
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
    
    //alert(file.path);    

	//x.setAttribute("hidden","true");
	n=id_form.split("_",3);
	n1=n[2];
	cp_elem=0;
	cp_texte=0;
	cp_list=0;
	if (document.getElementById("btnz_"+n1))
	{
		cp_elem=cp_elem+parseInt(document.getElementById("btnz_"+n1).getAttribute("cpmt"))-1;
		cp_texte=parseInt(document.getElementById("btnz_"+n1).getAttribute("cpmt"))-1;
		//alert(cp);
	}
	if (document.getElementById("btnl_"+n1))
	{
		cp_elem=cp_elem+parseInt(document.getElementById("btnl_"+n1).getAttribute("cpmt"))-1;
		cp_list=parseInt(document.getElementById("btnl_"+n1).getAttribute("cpmt"))-1;
		//alert(cp);
	}
	
	//alert(n1);
	listes=x.getElementsByTagName("menulist");
	evt=listes[0].selectedItem.value;
	fct=listes[1].selectedItem.value;
	id_graph=RC(id_form,"saisie_","");

	var mDBConn = connect_DB();
	
	svg=document.getElementById("svg_1");
	var serializer = new XMLSerializer();
   	var xml = serializer.serializeToString(svg);
   	
   	//v�rifie si on a d�j� enregistr� le svg
	if(g_idSvg==-1){    	
		var sql = 'INSERT INTO svg(fichier,isModel,titre) VALUES(?1,?2,?3);';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,xml);
		statement.bindUTF8StringParameter(1,"true");
		statement.bindUTF8StringParameter(2,svgTitre+" - "+user+" - model:"+ladate.toGMTString());
		statement.execute();
		statement.reset();			
		var statement = mDBConn.createStatement('SELECT id_svg FROM svg ORDER BY id_svg DESC;');	
		// return dataset;	
		j=0;
		var myArray1 = boucle_select(statement);
		g_idSvg=myArray1[j]["id_svg"];
		alert(g_idSvg);
	}else{
		var sql = 'UPDATE svg SET fichier = ?1 WHERE id_svg = ?2;';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,xml);
		statement.bindUTF8StringParameter(1,g_idSvg);
		statement.execute();
		statement.reset();	
		//alert("update : "+g_idSvg);		
	}


	if (fct=="afficher_form"){
		
		xul_complet='<vbox xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul">'+contruire_texte(n1)+contruire_liste(n1);
		xul_complet=xul_complet+'<button id="bt_valider_'+n1+'" label="Valider" nb_elements="'+cp_elem+'" nb_texte="'+cp_texte+'" nb_list="'+cp_list+'" tooltiptext="Valider la saisie" onclick="Valider_saisi('+n1+',this);"/></vbox>';
		//alert(xul_complet);
		
		var sql = 'INSERT INTO xul(id_element,form_xul,id_svg) VALUES(?1,?2,?3);';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,id_form);
		statement.bindUTF8StringParameter(1,xul_complet);
		statement.bindUTF8StringParameter(2,g_idSvg);
		statement.execute();
		statement.reset();
		//g1=listes[2].selectedItem.value;
		
		
		var statement = mDBConn.createStatement('SELECT  id_xul FROM xul ORDER BY id_xul DESC;');
				

				// return dataset;	
		j=0;
		var myArray1 = boucle_select(statement);
		id_xul=myArray1[j]["id_xul"];
		//alert("Base    :   "+id_xul);
		//alert(evt+" : "+fct+"('"+id_xul+"')");
		document.getElementById(id_graph).setAttribute(evt,fct+"('"+id_xul+"','"+n1+"')");
		hist=document.getElementById("hist"+n1);
		var h1 = createMenuItem(" Affichage de formulaire numero : "+n1);
		hist.appendChild(h1);
	}

	else if (fct=="cacher_graph"){
		//alert(document.getElementById("cacher_"+n1).checked+"1");
		document.getElementById(id_graph).setAttribute("hidden","true");
		document.getElementById(id_graph).setAttribute("visibility","hidden");
		hist=document.getElementById("hist"+n1);
		var h1 = createMenuItem(" Ce graph a ete cacher ");
		hist.appendChild(h1);
	}
	else if (fct=="affiche_graph"){
		g1=listes[2].selectedItem.value;
		//alert(evt+" : "+fct+"('"+g1+"')");
		document.getElementById(id_graph).setAttribute(evt,fct+"('"+g1+"')");
		hist=document.getElementById("hist"+n1);
		var h1 = createMenuItem(" Affichage du graph numero : "+g1);
		hist.appendChild(h1);
	}
	else if (fct=="affiche_interface"){
		g1=document.getElementById("listModele_"+n1).selectedItem.value;
		document.getElementById(id_graph).setAttribute(evt,fct+"('vb1','"+g_idSvg+"','fig_p','"+g1+"')");
		hist=document.getElementById("hist"+n1);
		var h1 = createMenuItem("Affichage du mod�le: "+g1);
		hist.appendChild(h1);
	}
	else{
	}
	alert(' La modification de '+id_graph+' est termine avec succes');  	
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
			//alert(elem.label);	
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
	//alert(racine.id);
	//alert(document.getElementById("vl"+cpt));
	if (document.getElementById("vl"+cpt)==null)
	{	

		//alert("new");
		first= createVbox("vl"+cpt);
		second= createHbox("hl"+racine.id+cmpt);
		label=createLabel("Ajouter un titre pour la liste numero "+cmpt);
		txt=createText("texte_"+racine.id+cmpt);
		bout21= createButton("btnl_"+cpt,"Ajouter Liste");
		bout22= createButton("btnl2_"+cpt,"Ajouter Element");
		bout21.setAttribute("onclick","Ajouter_liste(this,"+cpt+")");
		bout21.setAttribute("cpmt",cmpt+1);
		bout22.setAttribute("onclick","Ajouter_element_liste(this,"+cpt+","+cmpt+")");
		bout22.setAttribute("cpmt",1);
		second.appendChild(label);
		second.appendChild(txt);
		second.appendChild(bout21);		
		second.appendChild(bout22);
		first.appendChild(second);
		//alert("cpt: "+cpt+" cpmt : "+cmpt);
		//bout= createButton("boutL_"+racine.id,"Valider");
		first.appendChild(second);
		//first.appendChild(bout);
		
		if (elem.label=="Nouvelle Menu liste"){
			racine.appendChild(first);
			//alert(racine.id);	
		}
		else{
			racine.parentNode.appendChild(first);
			//alert(elem.label);	
		}
		cmpt++;

	}
	else 
	{
		//alert("old1");
		first= document.getElementById("vl"+cpt);
		second= createHbox("hl"+racine.id+cmpt);
		label=createLabel("Ajouter un titre pour la liste numero "+cmpt);
		txt=createText("texte_"+racine.id+cmpt);
		//alert("hz"+racine.id+(cmpt));
		ancien=document.getElementById("hl"+racine.id+(cmpt-1));
		ancien.removeChild(bout21);
		bout21= createButton("btnl_"+cpt,"Ajouter Liste");
		bout22= createButton("btnl2_"+cpt,"Ajouter Element");
		bout21.setAttribute("onclick","Ajouter_liste(this,"+cpt+")");
		bout21.setAttribute("cpmt",cmpt+1);
		bout22.setAttribute("onclick","Ajouter_element_liste(this,"+cpt+","+cmpt+")");
		bout22.setAttribute("cpmt",1);
		//bout=first.lastChild;
		//first.removeChild(bout);
		second.appendChild(label);
		second.appendChild(txt);
		second.appendChild(bout21);
		second.appendChild(bout22);		
		first.appendChild(second);

		//alert("cpt: "+cpt+" cpmt : "+cmpt);
		//bout= createButton("bout_"+racine.id,"Valider");
		first.appendChild(second);
		//first.appendChild(bout);
		
		if (elem.label=="Nouvelle Menu liste"){
			racine.appendChild(first);
			//alert(elem.label);	
		}
		else{}
			//racine.parentNode.appendChild(first);
		
	}

}

function Ajouter_element_liste(elem,cpt,liste)
{
	elem.setAttribute("hidden","true");
	racine=document.getElementById("h2"+cpt);
	//alert(racine1.id+" : "+"hl"+racine1.id+liste);
	//racine1=document.getElementById("hl"+racine1.id+liste);
	cmpt=parseInt(elem.getAttribute("cpmt"));
	//alert(document.getElementById("ve"+cpt));
	//alert(document.getElementById("vz"+cpt));
	if (document.getElementById("ve"+cpt)==null )
	{	
		if( document.getElementById("gl"+cpt+liste)==null){
			//alert("new1");
			f=document.getElementById(racine.id);
			//alert("ve"+cpt);
			first= createVbox("ve"+cpt);
			
			gl=createGroupbox("gl"+cpt+liste);
			cap1=createCaption("Liste numero : "+liste);
			second= createHbox("he"+racine.id+liste+cmpt);
			
			//alert(("texte_"+racine.id+liste));
			titre=document.getElementById("texte_"+racine.id+liste);
			third= createVbox("ve"+cpt);
			label=createLabel("Titre : "+titre.value);
			l=createLabel(" ");
			label2=createLabel("Ajouter un element "+cmpt);			
			txt=createText("texte_e_"+racine.id+liste+cmpt);
			bout11= createButton("btne_"+cpt+liste,"Ajouter");
			bout11.setAttribute("onclick","Ajouter_element_liste(this,"+cpt+","+liste+")");
			bout11.setAttribute("cpmt",cmpt+1);
			second.appendChild(label2);
			second.appendChild(txt);
			second.appendChild(bout11);
			
			first.appendChild(second);
			//alert("cpt: "+cpt+" cpmt : "+cmpt);
			bout= createButton("bout_"+racine.id,"Valider");
			third.appendChild(label);
			third.appendChild(l);
			third.appendChild(second);
			gl.appendChild(cap1);
			gl.appendChild(third);
			first.appendChild(gl);
			//first.appendChild(bout);
			//racine.appendChild(first);
			
			if (elem.label=="Ajouter Element"){
				racine.appendChild(first);
				//alert(elem.label);	
			}
			else
				racine.parentNode.appendChild(first);
			cmpt++;	
		}
		else
		{
			//alert("old1");
			f=document.getElementById(racine.id);
			first= document.getElementById("ve"+cpt);
			//alert("gl"+liste);
			gl=document.getElementById("gl"+cpt+liste);
			//cap1=createCaption("Liste numero : "+liste);
			second= createHbox("he"+racine.id+liste+cmpt);
			titre=document.getElementById("texte_"+racine.id+liste);
			third= createVbox("ve"+cpt);
			label=createLabel("Titre : "+titre.value);
			l=createLabel(" ");
			label2=createLabel("Ajouter un element "+cmpt);
			txt=createText("texte_e_"+racine.id+liste+cmpt);
			bout11= document.getElementById("btne_"+cpt+liste);
			ancien=document.getElementById("he"+racine.id+liste+(cmpt-1));
			ancien.removeChild(bout11);
			bout11= createButton("btne_"+cpt+liste,"Ajouter");
			bout11.setAttribute("onclick","Ajouter_element_liste(this,"+cpt+","+liste+")");
			bout11.setAttribute("cpmt",cmpt+1);
			//bout=first.lastChild;
			//first.removeChild(bout);
			second.appendChild(label2);
			second.appendChild(txt);
			second.appendChild(bout11);	
			//third.appendChild(label);
			//third.appendChild(l);
			third.appendChild(second);	
			gl.appendChild(third);
			//gl.appendChild(cap1);
			//first.appendChild(gl);
	
			//alert("cpt: "+cpt+" cpmt : "+cmpt);
			//bout= createButton("bout_"+racine.id,"Valider");
			//first.appendChild(second);
			//first.appendChild(bout);
			//racine.appendChild(first);
		
				//racine.parentNode.appendChild(first);
			
		}
	}
	else {
		if( document.getElementById("gl"+cpt+liste)==null){
			//alert("new2");
			f=document.getElementById(racine.id);
			//alert(racine.id);
			first= document.getElementById("ve"+cpt);
			gl=createGroupbox("gl"+cpt+liste);
			cap1=createCaption("Liste numero : "+liste);
			second= createHbox("he"+racine.id+liste+cmpt);
			//alert(("texte_"+racine.id+liste));
			titre=document.getElementById("texte_"+racine.id+liste);
			//alert(titre.value);
			third= createVbox("ve"+cpt);
			label=createLabel("Titre : "+titre.value);
			l=createLabel(" ");
			label2=createLabel("Ajouter un element "+cmpt);
			txt=createText("texte_e_"+racine.id+liste+cmpt);
			bout11= createButton("btne_"+cpt+liste,"Ajouter");
			bout11.setAttribute("onclick","Ajouter_element_liste(this,"+cpt+","+liste+")");
			bout11.setAttribute("cpmt",cmpt+1);
			second.appendChild(label2);
			second.appendChild(txt);
			second.appendChild(bout11);		
			first.appendChild(second);
			//alert("cpt: "+cpt+" cpmt : "+cmpt);
			bout= createButton("bout_"+racine.id,"Valider");
			third.appendChild(label);
			third.appendChild(l);
			third.appendChild(second);
			gl.appendChild(third);
			gl.appendChild(cap1);
			first.appendChild(gl);
			//first.appendChild(bout);
			//racine.appendChild(first);
			
			if (elem.label=="Ajouter Element"){
				racine.appendChild(first);
				//alert(elem.label);	
			}
			else
				racine.parentNode.appendChild(first);
			cmpt++;	
		}
		else
		{
			//alert("old2");
			f=document.getElementById(racine.id);
			first= document.getElementById("ve"+cpt);
			//alert("gl"+liste);
			gl=document.getElementById("gl"+cpt+liste);
			//cap1=createCaption("Liste numero : "+liste);
			second= createHbox("he"+racine.id+liste+cmpt);
			titre=document.getElementById("texte_"+racine.id+liste);
			third= createVbox("ve"+cpt);
			label=createLabel("Titre : "+titre.value);
			l=createLabel(" ");
			label2=createLabel("Ajouter un element "+cmpt);
			txt=createText("texte_e_"+racine.id+liste+cmpt);
			ancien=document.getElementById("he"+racine.id+liste+(cmpt-1));
			bout11= document.getElementById("btne_"+cpt+liste);
			ancien.removeChild(bout11);
			bout11= createButton("btne_"+cpt+liste,"Ajouter");
			bout11.setAttribute("onclick","Ajouter_element_liste(this,"+cpt+","+liste+")");
			bout11.setAttribute("cpmt",cmpt+1);
			//bout=first.lastChild;
			//first.removeChild(bout);
			second.appendChild(label2);
			second.appendChild(txt);
			second.appendChild(bout11);	
			//third.appendChild(label);
			//third.appendChild(l);
			third.appendChild(second);	
			gl.appendChild(third);
			//gl.appendChild(cap1);
			//first.appendChild(gl);
	
			//alert("cpt: "+cpt+" cpmt : "+cmpt);
			//bout= createButton("bout_"+racine.id,"Valider");
			//first.appendChild(second);
			//first.appendChild(bout);
			//racine.appendChild(first);
		
				//racine.parentNode.appendChild(first);
			
		}
	}
}

function version_final()
{
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	var mDBConn = connect_DB();
	graph=document.getElementById("svg_1");
	s1= createScript("s1");
	//alert(read("http://localhost/archipoenum/library/js/fonctions.js"));
	s1.setAttribute("src","http://localhost/archipoenum/library/js/fonctions.js");
	graph.appendChild(s1);
	container=document.getElementById("vb1");
	s1=document.getElementById("S1");
	var serializer = new XMLSerializer();
   	var xml = serializer.serializeToString(graph);
	
	if (container.hasChildNodes()==true){
		container.removeChild(container.firstChild);	
	}    
	if (s1!=null){
		if (s1.hasChildNodes()==true){
			s1.removeChild(s1.firstChild)	
		}
	}   
	container.appendChild(graph);
}

function test_evt(elem){
	n=elem.parentNode.parentNode.id;
	n1=n.split("_",3)[2];
	//alert(n1);
	//alert("v"+n1);
	if (elem.selectedItem.value=="afficher_form")
	{
		document.getElementById("v"+n1).setAttribute("hidden","false");
		document.getElementById("label_"+n1).setAttribute("hidden","true");
		document.getElementById("choixGraph_"+n1).setAttribute("hidden","true");
		document.getElementById("listModele_"+n1).setAttribute("hidden","true");
		document.getElementById("label_listModele_"+n1).setAttribute("hidden","true");
		//alert(document.getElementById("v"+n1).getAttribute("hidden"));
	}
	else if (elem.selectedItem.value=="affiche_graph"){
		document.getElementById("v"+n1).setAttribute("hidden","true");
		document.getElementById("choixGraph_"+n1).setAttribute("hidden","false");
		document.getElementById("label_"+n1).setAttribute("hidden","false");
		document.getElementById("listModele_"+n1).setAttribute("hidden","true");
		document.getElementById("label_listModele_"+n1).setAttribute("hidden","true");
		//alert(document.getElementById("v"+n1).getAttribute("hidden"));
	}
	else if (elem.selectedItem.value=="cacher_graph"){
		document.getElementById("v"+n1).setAttribute("hidden","true");
		document.getElementById("label_"+n1).setAttribute("hidden","true");
		document.getElementById("choixGraph_"+n1).setAttribute("hidden","true");
		document.getElementById("listModele_"+n1).setAttribute("hidden","true");
		document.getElementById("label_listModele_"+n1).setAttribute("hidden","true");
	}
	else if (elem.selectedItem.value=="affiche_interface"){
		document.getElementById("v"+n1).setAttribute("hidden","true");
		document.getElementById("label_"+n1).setAttribute("hidden","true");
		document.getElementById("choixGraph_"+n1).setAttribute("hidden","true");
		document.getElementById("listModele_"+n1).setAttribute("hidden","false");
		document.getElementById("label_listModele_"+n1).setAttribute("hidden","false");
	}
	else {
		document.getElementById("v"+n1).setAttribute("hidden","true");
		document.getElementById("label_"+n1).setAttribute("hidden","true");
		document.getElementById("choixGraph_"+n1).setAttribute("hidden","true");
		document.getElementById("listModele_"+n1).setAttribute("hidden","true");
		document.getElementById("label_listModele_"+n1).setAttribute("hidden","true");
	}
}

function fin_assitant()
{
	netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	var mDBConn = connect_DB();
	graph=document.getElementById("svg_1");
	for (i=0;i<graph.getElementsByTagName("g").length;i++)
	{
		y=graph.getElementsByTagName("g")[i];
		if (y.getAttribute("onclick")=='init_svg(this)')		
			y.setAttribute("onclick",'');
	}
	
	for (j=0;j<graph.getElementsByTagName("path").length;j++)
	{	
		y=graph.getElementsByTagName("path")[j];
		if (y.getAttribute("onclick")=='init_svg(this)')		
			y.setAttribute("onclick",'');


	}
	
	for (k=0;k<graph.getElementsByTagName("text").length;k++)
	{	
		y=graph.getElementsByTagName("text")[k];
		if (y.getAttribute("onclick")=='init_svg(this)')
			y.setAttribute("onclick",'');
	}
	
	for (l=0;l<graph.getElementsByTagName("polygon").length;l++)
	{	
		y=graph.getElementsByTagName("polygon")[l];
		if (y.getAttribute("onclick")=='init_svg(this)')
			y.setAttribute("onclick",'');
	}
	
	for (m=0;m<graph.getElementsByTagName("rect").length;m++)
	{	
		y=graph.getElementsByTagName("rect")[m];
		if (y.getAttribute("onclick")=='init_svg(this)')
			y.setAttribute("onclick",'');
	}
	s1= createScript("s1");
	//alert(read("http://localhost/archipoenum/library/js/fonctions.js"));
	s1.setAttribute("src","http://localhost/archipoenum/library/js/fonctions.js");
	graph.appendChild(s1);
	//alert(graph);
	doc=document.getElementById("svg_1");
	var serializer = new XMLSerializer();
   	var xml = serializer.serializeToString(doc);
	if(g_idSvg==-1){    	
		var sql = 'INSERT INTO svg(fichier,isModel,titre) VALUES(?1,?2,?3);';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,xml);
		statement.bindUTF8StringParameter(1,"true");
		statement.bindUTF8StringParameter(2,svgTitre+" - "+user+" - model:"+ladate.toGMTString());
		statement.execute();
		statement.reset();			
		var statement = mDBConn.createStatement('SELECT id_svg FROM svg ORDER BY id_svg DESC;');	
		// return dataset;	
		j=0;
		var myArray1 = boucle_select(statement);
		g_idSvg=myArray1[j]["id_svg"];
		//alert(g_idSvg);
	}else{
		//alert("update : "+g_idSvg);
		//alert(xml);
		var sql = 'UPDATE svg SET fichier = ?1 WHERE id_svg = ?2;';
		var statement = mDBConn.createStatement(sql);
		statement.bindUTF8StringParameter(0,xml);
		statement.bindUTF8StringParameter(1,g_idSvg);
		statement.execute();
		statement.reset();			
	}
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
	//alert(figure_courant);
	if (doc.hasChildNodes()==true){
		document.getElementById(figure_courant).removeChild(doc.firstChild); 
		document.getElementById(figure_courant).setAttribute("hidden","true	");}
	doc.appendChild(svg);	
	document.getElementById("mo").setAttribute("disabled","false");
}

function modif_interface(){
	var x=window.opener.getObjSVG_DB(window.opener.g_idModel);
	
	//alert(x);
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
		var resultDoc=createActionSaisie('saisie_graph_'+c1,y,x);
		document.getElementById("modifs").appendChild(resultDoc.cloneNode(true));
		c1++;
	}
	
	for (i=0;i<x.getElementsByTagName("path").length;i++)
	{	

		y=x.getElementsByTagName("path")[i].cloneNode(false);			
		var resultDoc=createActionSaisie('saisie_graph_'+c1,y,x);
		document.getElementById("modifs").appendChild(resultDoc.cloneNode(true));
		c1++;

		
	}
	for (i=0;i<x.getElementsByTagName("text").length;i++)
	{	

		y=x.getElementsByTagName("text")[i].cloneNode(true);
		var resultDoc=createActionSaisie('saisie_graph_'+c1,y,x);
		document.getElementById("modifs").appendChild(resultDoc.cloneNode(true));
		c1++;
	}
	for (i=0;i<x.getElementsByTagName("polygon").length;i++)
	{	

		y=x.getElementsByTagName("polygon")[i].cloneNode(false);
		var resultDoc=createActionSaisie('saisie_graph_'+c1,y,x);
		document.getElementById("modifs").appendChild(resultDoc.cloneNode(true));
		c1++;
	}
	
	for (i=0;i<x.getElementsByTagName("rect").length;i++)
	{	

		y=x.getElementsByTagName("rect")[i].cloneNode(false);
		var resultDoc=createActionSaisie('saisie_graph_'+c1,y,x);
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
	if (document.getElementById("btnz_"+c)){
		cp=parseInt(document.getElementById("btnz_"+c).getAttribute("cpmt"));
		//alert("cpmt="+cp);
		for (i=1;i<cp;i++){
			//alert("texte_h1"+c+""+i);
			txt=document.getElementById("texte_h1"+c+""+i);
			xul_text=xul_text+'<hbox><label id="lt'+c+i+'" value="'+txt.value+' "  flex="1"/> <textbox id="zt'+c+""+i+'" value=""  /></hbox>';
		}
	}	
	return(xul_text);
}

function contruire_liste(c){
	xul_text='';
	//alert("btnl_"+c);
	if (document.getElementById("btnl_"+c)){
		cp=parseInt(document.getElementById("btnl_"+c).getAttribute("cpmt"));
		//alert("Nb Listes= "+cp);
		for (i=1;i<cp;i++){
			//alert(("btne_"+c+i));
			txt=document.getElementById("texte_h2"+c+""+i).value;
			xul_text=xul_text+'<vbox><label id="ll'+c+i+'" value="'+txt+'"/><menulist id="liste_'+c+i+'" editable="true"><menupopup>';
			if (document.getElementById("btne_"+c+i)){	
				cp2=parseInt(document.getElementById("btne_"+c+i).getAttribute("cpmt"));
				//alert("Nb Elements dans la liste "+i+" = "+cp2);
				for (j=1;j<cp2;j++){
					//alert("texte_e_h2"+c+""+i+""+j);
					//texte_e_h2411  texte_e_h2412  texte_e_h2413
					txt2=document.getElementById("texte_e_h2"+c+""+i+""+j).value;
					xul_text=xul_text+'<menuitem label="'+ txt2+'" value="'+txt2+'"/>';
				}
				
			}
		xul_text=xul_text+'</menupopup></menulist></vbox>';
		}
	}	
	//alert(xul_text);
	return(xul_text);
}

