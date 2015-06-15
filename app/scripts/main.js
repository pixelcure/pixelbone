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
], function ($, _, Backbone, Util, pixelGlobal, PixelNav, PixelHero, PixelFooter) {


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

            // Not Found
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

			var hero = $('section.hero');

			/** HERO SLIDER **/

		    // Define new Slider Item, Slider Items Collection, and Slider View
		    var heroSlider = new PixelHero.Models.HeroImage(),
		    	heroSliderCol = new PixelHero.Collections.HeroImages(),
		    	heroSliderView = new PixelHero.Views.HeroImage({
		    		el : hero,
		    		collection : heroSliderCol
		    	});

			// Fetch Images
			//heroSliderCol.fetch({});

			/** TAGLINE **/
			
			// Define new Tagline, Tagline Collection, and Tagline View
		    var heroTagline = new PixelHero.Models.Tagline(),
		        heroTaglineCol = new PixelHero.Collections.Tagline(),
		        heroTaglineView = new PixelHero.Views.Tagline({ 
		            el : $('section.hero .tagline'),
		            collection : heroTaglineCol
		        });


		    /** HERO INNER CALLOUTS **/
		    
		    // Define new Inner Callout, Inner Callouts Collection, and Inner Callout View
		    var heroInnerCallout = new PixelHero.Models.InnerCallout(),
		    	heroInnerCalloutCol = new PixelHero.Collections.InnerCallouts(),
		    	heroInnerCalloutView = new PixelHero.Views.InnerCallout({
		    		el : $('section.hero .intro'),
		    		collection : heroInnerCalloutCol
		    	});


			/** HERO INNER SKILLS **/
		    
		    // Define new Inner Skill, Inner Skills Collection, and Inner Skills View
		    var heroInnerSkill = new PixelHero.Models.InnerSkill(),
		    	heroInnerSkillCol = new PixelHero.Collections.InnerSkills(),
		    	heroInnerSkillView = new PixelHero.Views.HeroInnerSkills({
		    		el : $('section.hero ul.hero-skills'),
		    		collection : heroInnerSkillCol
		    	});

		    // Fetch Tagline
		    heroTaglineCol.fetch();

			// Fetch Inner Callouts
			heroInnerCalloutCol.fetch();		    

			// Fetch Inner Skills
			heroInnerSkillCol.fetch();		

			// Hide Preloader
			$('#heroLoader').hide();

			// Show All Views
			$('.hide').removeClass('hide');
        
        } // End Pixel Root

    }); // End Router


	// New Rrouter instance
	pixelCure.router = new pixelCure.Router();
	
	// Enable Push State
	Backbone.history.start({ pushState : true, trigger : true });

	// Pixel Cure App Components (Nav, Footer, Footer)
	pixelCure.pixelComponents = {
		init : function() {

			// Navigation
			var pixelNav = new PixelNav.View({
				el : $('#pixelNav'),
				router : pixelCure.router
			});

			// Render Nav
			pixelNav.render();

			// Click Hander to Navigate to Routers
			var clickRoute = $('nav ul.nav-list li a');

			// On URL Click, Navigate to new router
			clickRoute.on('click', function( e ){
				
				// prevent default anchor behavior
				e.preventDefault();
				
				// hide views
				// $('.pixel-view').hide();

				// navigate
				pixelCure.router.navigate( $(this).attr('href'), { trigger : true } );
			
			}); // end click route


			// Footer
			var footer = $('footer .illustration');
		    
		    // Define new Quote, Quotes Collection, and Quote View
		    var footerQuote = new PixelFooter.Models.Quote(),
		    	footerQuoteCol = new PixelFooter.Collections.Quotes(),
		    	footerQuoteView = new PixelFooter.Views.Quotes({
		    		el : footer,
		    		collection : footerQuoteCol
		    	});

			// Fetch Quotes
			footerQuoteCol.fetch({
				success : function(){
					
					// show footer after success
					$('footer').fadeIn( 100 );
				
				}
			});	// End Fetch			

		} // end init
	} // End Pixel Nav

	// Init Pixel Cure App Components
	pixelCure.pixelComponents.init();

});