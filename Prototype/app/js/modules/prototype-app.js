define(['knockout'], function(ko) {
   var self = {};
   self.goToEnd = function() {
      $.mobile.changePage("#customerComplete");
   };
   self.goToStart = function() {
      $.mobile.changePage("#customerWelcome");
   };
   self.lukcyNumberPick = function() {
      var target = 'prototype-customer-number-pref';
      $("#targetApplication").on("click", "."+target, function(e) {
         if($(e.target).hasClass("lucky-number")) {
            $(e.currentTarget).find(".selected").removeClass("selected");
            $(e.target).addClass("selected");   
         }         
      })
   };
   self.lukcyNumberPick();
   return self;
});