/* Make sure that the DOM is loaded before querying the DOM elements. Refer $( document ).ready() and $(function)*/
$(function(){

	/*Cache the variables on the top. 
	This will prevent querying the DOM again and again, which helps in performance.*/
 	var rows;
  	var cols;

    
    /* -- trigger generate button -- */
    $('#btn_generate').on('click',function(evt){
		$('#pixelCanvas').html('');
	    rows = $('input[name="height"]').val(),
	    cols = $('input[name="width"]').val();

		for (var i = 0; i < rows; i++){
			$('#pixelCanvas').append('<tr></tr>');
		};

	    for (var t = 0; t < cols; t++){
		   $('#pixelCanvas tr').each(function(){
			  $(this).append('<td></td>');
		   });
	    };
	    // Prevent the default behavior of submitting 
	     evt.preventDefault(); 
    });


    /* -- trigger clear button -- */
    $('#btn_clear').on('click',function(evt){
       console.log("dwedwd");
       // remove all the children tags,<tr><td>s, from the table
	   $('#pixelCanvas').empty();
   	   // set the mdl textfield to its initial state
       $('.is-dirty').removeClass('is-dirty');
        // clear the textfield values
       $('.mdl-textfield__input').val(null);
       evt.preventDefault();	  
     });

     /* -- click each grid on the canvas -- */
    $('#pixelCanvas').click(function(evt) {
	   let color = $('#colorPicker').val();
	   $(evt.target).css('background-color', color);
    });

});




