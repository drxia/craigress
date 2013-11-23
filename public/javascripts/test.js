// $data=$(#minidata).value;
// document.getElementById('minidata').innerHTML = "<p>"+$data.data[0].title+"</p>"

$( document ).ready(function() {
 
    $( "#minidata" ).click(function( event ) {
 
        //alert( "Thanks for visiting!" );
 
    });
	$('#minidata').mouseover(function(){

		//$('#minidata').css('backgroundColor', 'grey');

	}).mouseout(function(){

		//$('#minidata').css('backgroundColor', 'white');

	});
	
	$("#rollButton").click(function() {
		var name=$('#rollText').val();
		$('#rollText').val('');
		$('#minidata').append( "<p>"+name+"</p>");
	});
	// $.ajax({
		// success: function(data) {
			// var obj=JSON.parse(data);
			// var mydata=obj.names;
			// $('#minidata').val( "<p>"+mydata[0]+"</p>");
			// //for(var i=0;i<names.length;i++) {
				
		// //}
		// }
	// })
});

// success: function(data) {
	// var obj=JSON.parse(data);
	// var mydata=obj.data;
	// document.getElementById('minidata').innerHTML = "<p>"+mydata[0].title+"</p>"
// }
//${#minidata}.text("<p>\
//    Hello, world!\
//</p>");