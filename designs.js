
$('#btn_generate').on('click',function(evt){
	$('#pixelCanvas').html('');
	var rows = $('input[name="width"]').val(),
	    cols = $('input[name="height"]').val();

	for (var i = 0; i < rows; i++){
		$('#pixelCanvas').append('<tr></tr>')
	}

	for (var t = 0; t < cols; t++){
		$('#pixelCanvas tr').each(function(){
			$(this).append('<td></td>')
		})
	}

	// Prevent the default behavior of submitting 
	evt.preventDefault(); 
});

$('#btn_clear').on('click',function(evt){
	$('pixelCanvas').remove();
});

$('#pixelCanvas').click(function(evt) {
		let color = $('#colorPicker').val();
		$(evt.target).css('background-color', color);
});

