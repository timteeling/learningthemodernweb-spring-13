(function($){
		
		//Strip extraneous p tags
		$('p > img, p > iframe').unwrap();
		
		//Zebra stripe tables ... compensated for CSS3 nth-child
		$('tr:odd').addClass('even');
		
		$('#tabs').tabs({
			fx: { opacity: 'toggle' }
		});
		
		$('#accordion').accordion({
			collapsible: true,
			autoHeight: false,
			active: false
		});
		
})(jQuery);