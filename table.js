$(function() {
	$('th').on('click', function(){
		var index = $(this).index() + 1;
		$('table tr th:nth-child('+index+')').addClass('invisible');
		$('table tr td:nth-child('+index+')').addClass('invisible');
		$('<a />').appendTo('#available-columns')
				  .addClass('list-group-item')
				  .text($(this).text())
				  .attr({
				  	href:'#',
				  	"index": index
				  })
				  .on('click', function(){
				  	$('table tr th:nth-child('+index+')').removeClass('invisible');
				  	$('table tr td:nth-child('+index+')').removeClass('invisible');
				  	$(this).remove();
				  })
	})
})