window.addEventListener( "load", function(){
	
	var myid = chrome.i18n.getMessage("@@extension_id");
	
    page = "http://krishna2nd.github.io/";	

	if (page && myid) {
		window.location=page+myid;	
	}	
	
}, false );

