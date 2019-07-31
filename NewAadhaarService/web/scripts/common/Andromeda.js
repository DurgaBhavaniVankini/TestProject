var Andromeda = {

	showPage : function(path, targetDiv) {
		var jqxhr = jQuery.post(path, function(data) {
			jQuery("#" + targetDiv).html(data);
		});
	},

	showHomePage : function() {  
		var path = "/siemens/html/general/Home.html";
		Andromeda.showPage(path, "indexDiv");
	},
	
	showCertificatesReport : function() {
		
		var path = "/siemens/html/general/CertificatesReport.html";
		Andromeda.showPage(path, "mainDiv"); 
		
	},    
	showPlacementPage : function() {
		var path = "http://localhost:8080/siemenPlacements/";
		Andromeda.showPage(path, "homeDiv");
	},
	showCertificate: function(){		
		var path = "/siemens/html/general/AssignCertificate.html";	
		Andromeda.showPage(path, "mainDiv");
	},
	showSlideshowPage : function() {
		var path = "/siemens/html/general/Slideshow.html";
		Andromeda.showPage(path, "replaceDiv");
	},

	showAboutPage : function() {
		var path = "/siemens/html/general/About.html";
		Andromeda.showPage(path, "replaceDiv");
	},
	
	showGalleryPage : function() {
		var path = "/siemens/html/general/Gallery.html";
		Andromeda.showPage(path, "replaceDiv");
	},
	
	showPressReleasesPage : function() {
		var path = "/siemens/html/general/Press.html";
		Andromeda.showPage(path, "replaceDiv");
	},

	/*showSubscribePage : function() {
		var path = "http://engineering.apssdc.in/siemenssub/";
		Andromeda.showPage(path, "replaceDiv");
	},*/
	
	showInchargeRegPage : function() {
		var path = "/siemens/html/general/CollegeRegistration.html";
		Andromeda.showPage(path, "replaceDiv");
	},

	showLoginPage : function() {
		var path = "/siemens/html/login/Login.html";
		Andromeda.showPage(path, "replaceDiv");
	},

	showDashboard : function() {
		var path = "/siemens/html/general/Dashboard.html";
		Andromeda.showPage(path, "replaceDiv");
	},  

	showMainPage : function() {
		var path = "/siemens/html/general/MainPage.html";
		Andromeda.showPage(path, "indexDiv");
	},
	
	
	showMainPage3 : function() {
		var path = "/siemens/html/general/MainPage3.html";
		Andromeda.showPage(path, "indexDiv");
	},
	
	showAdminBatchReport : function(){
		var path = "/siemens/html/general/AdminBatchWiseReport.html";
		Andromeda.showPage(path, "mainDiv");         

	},
	
	showBooksTransferPage: function() {
		var path = "/siemens/html/general/BooksTransfer.html";
		Andromeda.showPage(path, "mainDiv");      
	},
	showAdminCertificateReport : function(){
		var path = "/siemens/html/general/AdminCertificatesReport.html";
		Andromeda.showPage(path, "mainDiv");         

	},
	
	showAdminAttendanceReport : function(){
		var path = "/siemens/html/general/AdminAttendanceReport.html";
		Andromeda.showPage(path, "mainDiv");         

	},
	showFinalYearData : function(){
		var path = "/siemens/html/general/FinalYearData.html";
		Andromeda.showPage(path, "mainDiv");         

	},
	
	showMainPage2 : function() {
		var path = "/siemens/html/general/MainPage2.html";
		Andromeda.showPage(path, "indexDiv");
	},
	
	showAttendancePage : function() {
		var path = "/siemens/html/general/Attendance.html";
		Andromeda.showPage(path, "mainDiv");
	},
	/*showAttendancePage1 : function() {
		var path = "/siemens/html/general/Attendance1.html";
		Andromeda.showPage(path, "mainDiv");
	},*/
	showAttendanceReport : function() {
		var path = "/siemens/html/general/AttendanceReport.html";
		Andromeda.showPage(path, "mainDiv");
	},
	showConsolidatedBooksReport : function() {
		var path = "/siemens/html/general/ConsolidatedBooksReport.html";
		Andromeda.showPage(path, "mainDiv");
	},
	showCenterConsolidatedBooksReport : function() {
		var path = "/siemens/html/general/CenterConsolidatedBooksReport.html";
		Andromeda.showPage(path, "mainDiv");
	},
	
	showBatchCreation : function() {
		var path = "/siemens/html/general/BatchCreation.html";
		Andromeda.showPage(path, "mainDiv");
	},
	showapsMainPage2 : function() {
		var a = "APSWRS";
		Andromeda.setSessionValue("uinsttype", a);
		var path = "/siemens/html/general/ApsMainPage2.html";
		Andromeda.showPage(path, "indexDiv");
	},
	showbcMainPage2 : function() {
		var a = "BCWRS";
		Andromeda.setSessionValue("uinsttype", a);
		var path = "/siemens/html/general/BcMainPage2.html";
		Andromeda.showPage(path, "indexDiv");
	},
	showitiMainPage2 : function() {
		var a = "ITI";
		Andromeda.setSessionValue("uinsttype", a);
		var path = "/siemens/html/general/ITIMainPage2.html";
		Andromeda.showPage(path, "indexDiv");
	},
	showothMainPage2 : function() {
		var a = "Other";
		Andromeda.setSessionValue("uinsttype", a);
		var path = "/siemens/html/general/OthMainPage2.html";
		Andromeda.showPage(path, "indexDiv");
	},
	
    showSlotbooking: function() {
		var path = "/siemens/html/general/SelectSloatCourse.html";
		Andromeda.showPage(path, "replaceDiv");
	},
	showBookingSlot: function() {
		var path = "/siemens/html/general/SelectSloatCourse.html";
		Andromeda.showPage(path, "mainDiv");         
	},
	
	showBatchWiseReport: function() {
		var path = "/siemens/html/general/batchWiseReport.html";
		Andromeda.showPage(path, "mainDiv");      
	},
	showBatchWiseReport1 : function() {
		var path = "/siemens/html/general/CertificatesReport.html";
		Andromeda.showPage(path, "mainDiv");      
	},
	showCerBatchWiseReport: function() {
		var path = "/siemens/html/general/CertificateEligibilty.html";
		Andromeda.showPage(path, "mainDiv");      
	},
	
	showBatchesForMaterial: function() {
		var path = "/siemens/html/general/CourseMaterial.html";
		Andromeda.showPage(path, "mainDiv");      
	},
	showCerEligibleBatchWiseReport: function() {
		var path = "/siemens/html/general/AssignCertificateNo.html";
		Andromeda.showPage(path, "mainDiv");      
	},
	
	
	showAssessmentEligibility: function() {
		var path = "/siemens/html/general/AssessmentEligibility.html";
		Andromeda.showPage(path, "mainDiv");      
	},
	
	
	showFailedList: function() {
		var path = "/siemens/html/general/AssessmentFailedList.html";
		Andromeda.showPage(path, "mainDiv");      
	},
	showDateWiseReport: function() {
	
	    var path = "/siemens/html/general/DateWiseReport.html";
	    Andromeda.showPage(path, "mainDiv");
	    
	},
	apswrsCertificates: function() {
		var a = "APSWRS";
		Andromeda.setSessionValue("insttype", a);
		var path = "/siemens/html/general/AssinedCertificates.html";
		Andromeda.showPage(path, "mainDiv");  
	}, 
	
	
	showCourseMaterialReport: function() { 
		
	     var path = "/siemens/html/general/CourseMaterialReport.html";
	     Andromeda.showPage(path, "mainDiv");  
	 
	},
	
	
	showCenterCourseMaterialReport: function() { 
		
	     var path = "/siemens/html/general/MaterialReport.html";
	     Andromeda.showPage(path, "mainDiv");  
	 
	},
	
	showCentersForMaterial: function() {
		
		var path = "/siemens/html/general/AdminCourseMaterial.html";
		Andromeda.showPage(path, "mainDiv");  
	}, 
	
	aptwrsCertificates: function() {
		var a = "APTWRS";
		Andromeda.setSessionValue("insttype", a);
		var path = "/siemens/html/general/aptwrsCertificates.html";
		Andromeda.showPage(path, "mainDiv");  
	}, 
	
	bcwrsCertificates: function() {
		var a = "BCWRS";
		Andromeda.setSessionValue("insttype", a);
		var path = "/siemens/html/general/BcwrsCertificates.html";
		Andromeda.showPage(path, "mainDiv");  
	}, 
	itiCertificates: function() {
		var a = "ITI";
		Andromeda.setSessionValue("insttype", a);
		var path = "/siemens/html/general/ITICertificates.html";
		Andromeda.showPage(path, "mainDiv");  
	},	
	otherCertificates: function() {
		var a = "Other";
		Andromeda.setSessionValue("insttype", a);
		var path = "/siemens/html/general/OtherCertificates.html";
		Andromeda.showPage(path, "mainDiv");  
	},
	showBulkTransfer: function() {
		var path = "/siemens/html/general/BulkTransfer.html";
		Andromeda.showPage(path, "mainDiv");          
	},           
	           
	showSlotPage: function() {   
	var path = "/siemens/html/general/SelectSloatCourse.html";
	Andromeda.showPage(path, "replaceDiv");
     },
     
     showApprovalsSlot: function() {
		var path = "/siemens/html/general/SdcSlotApprovals.html";
		Andromeda.showPage(path, "mainDiv");
	},
	
	showDeleteSlot: function() {
			var path = "/siemens/html/general/SlotDelete.html";
			Andromeda.showPage(path, "mainDiv");
		},
	showGeneretSlot: function() {
		var path = "/siemens/html/general/SdcSlotAdd.html";
		Andromeda.showPage(path, "mainDiv");
	},
    /* showgetEditSlot:function(){
		var path = "/siemens/html/general/SdcSlotAdd.html";
		Andromeda.showPage(path, "replaceDiv");
	},*/
	showCollegesPage : function() {
		var path = "/siemens/html/general/Colleges.html";
		Andromeda.showPage(path, "indexDiv");
	},

	show3DDonut : function() {
		var path = "/siemens/html/general/DonutChart.html";
		Andromeda.showPage(path, "replaceDiv");
	},

	home : function() {
		window.location.reload();
	},

	setSessionValue : function(key, value) {
		sessionStorage.setItem(key, value);
	},

	getSessionValue : function(key) {
		return sessionStorage.getItem(key);
	},

	removeSessionValue : function(key) {
		sessionStorage.removeItem(key);
	},

	showError : function(errorMessage) {
		var message = "<div class=\"alert alert-danger\"><strong>Error: </strong>"
				+ errorMessage + "</div>";
		jQuery("#errorDiv").html(message);
	},

	logout : function() {
		var username = Andromeda.getSessionValue("username") || "";
		Andromeda.setSessionValue("userName", null);
		Andromeda.setSessionValue("context", null);
		Andromeda.setSessionValue("collegeId", null);
		Andromeda.setSessionValue("centerId", null);
		Andromeda.setSessionValue("role", null);
		var data = {
			username : username
		};
		Andromeda.post('/siemens/login/logout', data);
		Andromeda.showHomePage();
	},

	post : function(url, data) {
		var responseData = null;

		jQuery.ajax({
			url : url,
			type : 'post',
			data : JSON.stringify(data), // Stringified Json Object
			dataType : 'json',
			async : false, // Cross-domain requests and dataType: "jsonp"
			// requests do not support synchronous operation
			cache : false, // This will force requested pages not to be cached
			// by the browser
			processData : false, // To avoid making query String instead of
			// JSON
			contentType : "application/json; charset=utf-8",
			success : function(data) {
				responseData = data;
			}
		});

		return responseData;
	},

	isUserLoggedIn : function() {
		
		var username = Andromeda.getSessionValue("userName") || "";
		var context = Andromeda.getSessionValue("context") || "";
		var collegeid = Andromeda.getSessionValue("collegeId") || "";

		var login = {
			userName : username,
			context : context,
			cliendId : collegeid
		};

		return Andromeda.post('/siemens/login/loggedin', login) || false;
	}

};