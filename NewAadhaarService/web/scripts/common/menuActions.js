function showPage(path, targetDiv) {
	var jqxhr = jQuery.post(path, function(data) {
		jQuery("#" + targetDiv).html(data);
	}).done(function() {
		// alert("second success");
	}).fail(function() {
		// alert("error");
	}).always(function() {
		// alert("finished");
	});
}

function setSessionValue(key, value) {
	sessionStorage.setItem(key, value);
}

function getSessionValue(key) {
	return sessionStorage.getItem(key);
}

function addSdcSlot(){
	var path = "/siemens/html/general/SdcSlotAdd.html";
	/*$("#mainDiv").show();
	$("#contentDiv").hide();*/
	jQuery("#mainDiv").load(path);
}

function approveSdcSlot(){
	var path = "/siemens/html/general/SdcSlotApprovals.html";
	/*$("#angularContentDiv").show();
	$("#contentDiv").hide();*/
	jQuery("#mainDiv").load(path);
}

function showHomePage() {
	var path = "html/general/Home.html";
	showPage(path, "indexDiv");
}

function showErrorPage() {
	var path = "html/general/Error.html";
	showPage(path, "indexDiv");
}

/*function showSlotbooking() {
	var path = "/siemens/html/general/SelectSloatCourse.html";
	showPage(path, "clusterWiseDiv");
}*/
function checkStatus(){
	var urlParameter = getUrlParameter("q");
	Andromeda.setSessionValue("parameter", urlParameter);
	if(Andromeda.getSessionValue("status")== undefined){
		Andromeda.setSessionValue("status", Andromeda.getSessionValue("parameter"));
		return true;
	}
	else{
		if(Andromeda.getSessionValue("status") == Andromeda.getSessionValue("parameter")){
			return true;
		}
		else{
			return false;
		}
	}
};