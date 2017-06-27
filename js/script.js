$(function(){
	$('#contact button').click(function(event) {
		/* Act on the event */
		$.post('/path/to/file', {param1: 'value1'}, function(data, textStatus, xhr) {
			/*optional stuff to do after success */
		});
	});    
});