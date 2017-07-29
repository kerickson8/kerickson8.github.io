function selectTab(tab) {

	var tabLinks = new Array();
	var contentDivs = new Array();
	//Hide Unselected Tabs
	document.getElementById("tab_1").style.display="hidden";
	document.getElementById("tab_2").style.display="hidden";
	document.getElementById("tab_3").style.display="hidden";
	document.getElementById("tab_4").style.display="hidden";

	//Show the Selected Tab
	document.getElementById(tab).style.display="block";

}