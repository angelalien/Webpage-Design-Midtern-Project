// JavaScript Document

$(document).ready(function(){	
	
		
		$('[data-fancybox="gallery1"]').fancybox({
			'beforeShow': function() {
                $('nav').hide();
        	},					
			'afterClose': function() {
                $('nav').show(); 
            }
		});	
		$('[data-fancybox="gallery2"]').fancybox({
			'beforeShow': function() {
                $('nav').hide();
        	},					
			'afterClose': function() {
                $('nav').show(); 
            }
		});		
		$('[data-fancybox="gallery3"]').fancybox({
			'beforeShow': function() {
                $('nav').hide();
        	},					
			'afterClose': function() {
                $('nav').show(); 
            }
		});				
	
	
	
});