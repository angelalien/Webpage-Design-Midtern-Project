// JavaScript Document

$(document).ready(function(){				
			
		$('[data-fancybox="gallery"]').fancybox({
			'beforeShow': function() {
                $('nav').hide();
        	},					
			'afterClose': function() {
                $('nav').show(); 
            }
		});						
		
	
});