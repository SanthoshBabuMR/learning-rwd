require.config({
    paths: {
        "knockout"            : "js/lib/knockout-3.1.0",
        "knockout-amd-helpers": "js/lib/knockout-amd-helpers",
        "text"                : "js/lib/text",
        "jquery"              : "js/lib/jquery-1.11.3",
        "jqm"                 : "js/lib/jquery.mobile.1.4.5",
        "prototype-app"       : "js/modules/prototype-app",
        "ajaxModule"          : "js/modules/ajaxModule"        
    },
    shim: {
        "jqm"                 : ["jquery"]
    }
});


/* http://stackoverflow.com/questions/13299816/jquery-jqueryui-jquerymobile-not-loading-fast-enough-in-backbone-js-app*/
require( ["jquery"],function($){

	$(document).on("mobileinit", function(){
  	$.mobile.ajaxEnabled = false;
   	$.mobile.autoInitializePage = false;
  	$.mobile.loadingMessage = false;
    $.mobile.ignoreContentEnabled = true;
  });

  require( ["knockout", "prototype-app", "knockout-amd-helpers","jqm"],function(ko, prototyeApp){
   	ko.bindingHandlers.module.baseDir = "modules";
	 	ko.amdTemplateEngine.defaultPath = "templates";
		ko.amdTemplateEngine.defaultSuffix = ".tmpl.html";		

	  if ( $.mobile.autoInitializePage == false){
   		$.mobile.initializePage();
  	}
    ko.applyBindings(prototyeApp, $("#targetApplication").get(0));	
  });	

});