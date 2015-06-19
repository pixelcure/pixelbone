//************************
// Main JS File
//************************
'use strict';

require([
    'jquery',
    'lodash',
    'backbone',
    'util',
    'global/global',
    'navMenu/navMenu.main',
    'pixelBase/PixelBase',
    'pixelHero/PixelHero',
    'pixelFooter/PixelFooter'
], function ( $, _, Backbone, Util, pixelGlobal, PixelNav, PixelBase, PixelHero, PixelFooter ) {


	// Build Name Space for instiated conustructors
	var pixelCure = pixelCure || {};

    pixelCure.Router = Backbone.Router.extend({

        routes : {

            // Process of my Dev Workflow
            'process' : 'process',

            // Design and Art
            'design' : 'design',
            
            // About Me
            'about' : 'about',
            
            // Contact
            'contact' : 'contact',

            // Homepage
            '' : 'pixelRoot'
            
        },

        // Inits Process View
        process : function() {
            console.log('process');
        },

        // Inits Design View
        design : function() {
            console.log('design');
        },

        // Inits About View
        about : function() {
            console.log('about');
        },

        // Inits Contact View
        contact : function() {
            console.log('contact');
        },

        // inits Home View
        pixelRoot : function() {
        	// set $el
			var hero = $('section.hero');

		    // Define new Slider Item, Slider Items Collection, and Slider View
			var heroSliderCol = new PixelHero.Collections.HeroImages(),
		    	heroSliderView = new PixelHero.Views.HeroImage({
		    		el : hero,
		    		collection : heroSliderCol
		    	});
				
			// Define new Tagline, Tagline Collection, and Tagline View
			var heroTaglineCol = new PixelHero.Collections.Tagline(),
		        heroTaglineView = new PixelHero.Views.Tagline({
		            el : $('section.hero .tagline'),
		            collection : heroTaglineCol
		        });
		    
		    // Define new Inner Callout, Inner Callouts Collection, and Inner Callout View
			var heroInnerCalloutCol = new PixelHero.Collections.InnerCallouts(),
		    	heroInnerCalloutView = new PixelHero.Views.InnerCallout({
		    		el : $('section.hero .intro'),
		    		collection : heroInnerCalloutCol
		    	});
		    
		    // Define new Inner Skill, Inner Skills Collection, and Inner Skills View
			var heroInnerSkillCol = new PixelHero.Collections.InnerSkills(),
		    	heroInnerSkillView = new PixelHero.Views.HeroInnerSkills({
		    		el : $('section.hero ul.hero-skills'),
		    		collection : heroInnerSkillCol
		    	});

			// Fetch Slider
			// heroSliderCol.fetch({});

		    // Fetch Tagline
		    heroTaglineCol.fetch();

			// Fetch Inner Callouts
			heroInnerCalloutCol.fetch();		    

			// Fetch Inner Skills
			heroInnerSkillCol.fetch();		

			// Hide Preloader
			$('#heroLoader').delay( 1000 ).hide();

			// Show All Views
			$('.hide').removeClass('hide');
        
        } // End Pixel Root

    }); // End Router

	// New Rrouter instance
	pixelCure.router = new pixelCure.Router();

	// Pixel Cure Navigation Render
	pixelCure.pixelNavigation = function () {

		// Navigation
		var pixelNav = new PixelNav.View({
			el : $('#pixelNav'),
			footer : $('footer ul.nav-list'),
			router : pixelCure.router
		});

		// Render Nav
		pixelNav.render();

		// Document Ready
		$(function(){
			
			// for testing, checks to see if we're on a 
			// stage to set the route backbone history
			var winLocation = window.location.href;
			
			// Enable Push State and History Start (kicks off router)
			// If on stage, use pixelbone root, otherwise, use '/'
			if( winLocation.includes('bone') ){
				Backbone.history.start({ pushState : true, root : '/pixelbone' });
			} else {
				Backbone.history.start({ pushState : true });
			}

			// Click Hander to Navigate to Routers
			var $clickRoute = $( 'ul.nav-list li a' ),
				$view = $('.pixel-view');

				$clickRoute.on('click', function(e){
					
					// prevent default action
					e.preventDefault();

					// hide views
					$view.hide();

					// navigate
					pixelCure.router.navigate( $(this).attr('href'), { trigger : true } );

				}); // end click

		}); // End Doc Ready

	}() // End Pixel Cure Navigation		


}); // End Require