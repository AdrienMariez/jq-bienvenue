// var first_name =  "#first_name";
// var last_name = "#last_name";
// var city = "#city";

var objekt218 = {
	first    : document.getElementById("first_name").value,
	last   : document.getElementById("last_name").value,
	city   : document.getElementById("city").value
};


	$('button').click(function(){ 
		var value_first = $("#first_name").val();
		var value_last = $("#last_name").val();
		var value_city = $("#city").val();

		var joliobjet = ('bienvenue à ' + value_first + ' ' + value_last  + ' de ' + value_city + ' . Prenez vos aises !');

		console.log(objekt218);

		$("#username").html(value_first+' '+value_last+' de '+value_city);

	});