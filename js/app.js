$(document).ready(function() {
	$('#sections').pagepiling({
        direction: 'vertical',
        sectionsColor: ["#0000CD", "#00BFFF", "#9370DB", "#800080", "#00BFFF"]
	});


});

$("form").submit((e) =>{
		e.preventDefault()

		const sign = $("#sign").val()

		const day  = $("#day").val()

		const url = `https://aztro.sameerkumar.website?sign=${sign}&day=${day}`


		$.ajax({
          type:'POST',
          url: url,
          success:function(data){
          	console.log(data)
          $("#date_range").html(data.date_range)
          $("#description").html(data.description)
          $("#current_date").html(data.current_date)
     }
});

	})