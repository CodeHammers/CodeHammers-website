$(function(){
	$('#contact button').click(function(event) {
		/* Act on the event */
		if($('#subject').val()!=""&& $('#name').val()!=""&& $('#email').val()!=""&& $('#message').val()!=""){
			
		//$.post('/path/to/file', {param1: 'value1'}, function(data) {
			/*optional stuff to do after success */
		//});
		}
		else{
			$('#errors').removeClass('invisible');
		}
	});    
});