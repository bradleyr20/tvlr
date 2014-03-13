// jquery javascript

$( document ).ready(function() {
 
    // Your code here.
    $("#overlay").hide();
    
    $("#centro-storico.neighborhood").click(function() {
    		$("#overlay").show();
    });
    
    $("#overlay").click(function() {
    		$(this).hide();
    });
 
});