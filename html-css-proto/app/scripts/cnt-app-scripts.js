// jquery javascript

$( document ).ready(function() {
 
    // Your code here.
    $("#overlay").hide();
    
    $("#overlay").children().hide();
    
    $("#centro-storico.neighborhood").click(function() {
    		$("#overlay").show();
    		$("#overlay .location.centro-storico").show();
    });
    
    $("#dom.venue").click(function() {
    		$("#overlay").show();
    		$("#overlay .location.dom").show();
    });
    
    $("#urbinati.venue").click(function() {
    		$("#overlay").show();
    		$("#overlay .location.laura-urbinati").show();
    });
    
    $("#roscioli.venue").click(function() {
    		$("#overlay").show();
    		$("#overlay .location.roscioli").show();
    });
    
    $("#dar-filettaro.venue").click(function() {
    		$("#overlay").show();
    		$("#overlay .location.dar-filettaro").show();
    });
    
    $("#overlay").click(function() {
    		$(this).hide();
    		$(this).children().hide();
    });
 
});