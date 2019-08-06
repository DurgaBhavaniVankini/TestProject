var Andromeda = {

	showPage : function(path, targetDiv) {
		var jqxhr = jQuery.post(path, function(data) {
			jQuery("#" + targetDiv).html(data);
		});
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

	
};