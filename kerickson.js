function selectTab(tab) {
	//Hide Unselected Tabs
	document.getElementById("Resume").style.display="block";
	document.getElementById("Projects").style.display="block";
	document.getElementById("Research").style.display="block";
	document.getElementById("Contact").style.document="block";

	//Show the Selected Tab
	document.getElementById(tab).style.display="block"

}