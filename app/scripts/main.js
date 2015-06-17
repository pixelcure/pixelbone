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
    'pixelHero/PixelHero',
    'pixelFooter/PixelFooter'
], function ( $, _, Backbone, Util, pixelGlobal, PixelNav, PixelHero, PixelFooter ) {

	console.dir(PixelHero);

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

        process : function() {
            console.log('process');
        },

        design : function() {
            console.log('design');
        },

        about : function() {
            console.log('about');
        },

        contact : function() {
            console.log('contact');
        },

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
			$('#heroLoader').delay(1000).hide();

			// Show All Views
			$('.hide').removeClass('hide');
        
        } // End Pixel Root

    }); // End Router

	// New Rrouter instance
	pixelCure.router = new pixelCure.Router();
	
	// Enable Push State
	Backbone.history.start({ pushState : true, trigger : true });

	// Pixel Cure Navigation
	pixelCure.pixelNavigation = function ( clickHandler ) {

			// Navigation
			var pixelNav = new PixelNav.View({
				el : $('#pixelNav'),
				router : pixelCure.router
			});

			// Render Nav
			pixelNav.render();

			// Click Hander to Navigate to Routers
			var clickRoute = $(clickHandler);

			// On URL Click, Navigate to new router
			clickRoute.on('click', function( e ){
				
				// prevent default anchor behavior
				e.preventDefault();
				
				// hide views
				$('.pixel-view').hide();

				// navigate
				pixelCure.router.navigate( $(this).attr('href'), { trigger : true } );
			
			}); // end click route			

	}( $('nav ul.nav-list li a') ) // End Pixel Cure Navigation

}); // End Require