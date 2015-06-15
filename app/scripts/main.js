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
    'routers/routers.main',
    'navMenu/navMenu.main',
    'pixelHero/PixelHero',
    'pixelFooter/PixelFooter'
], function ($, _, Backbone, Util, pixelGlobal, PixelRouters, PixelNav, PixelHero, PixelFooter) {


	// Build Name Space for instiated conustructors
	var pixelCure = pixelCure || {};

	// Router
	pixelCure.router = new PixelRouters.Router();
	
	// Enable Push State
	Backbone.history.start({ pushState : true });

	// Navigation
	pixelCure.nav = {

		init : function() {
		
			var pixelNav = new PixelNav.View({
				el : $('#pixelNav'),
				router : pixelCure.router
			});

			pixelNav.render();
		}
	};

	// Hero
	pixelCure.hero = {
		init : function () {

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


			/** HERO BOTTOM CALLOUTS **/
		    // Define new Inner Callout, Inner Callouts Collection, and Inner Callout View
		    var heroBottomCallout = new PixelHero.Models.BottomCallout(),
		    	heroBottomCalloutCol = new PixelHero.Collections.BottomCallouts(),
		    	heroBottomCalloutView = new PixelHero.Views.BottomCallout({
		    		el : hero,
		    		collection : heroBottomCalloutCol
		    	});
		    // Fetch Tagline
		    heroTaglineCol.fetch({
		    	success : function() {

		    	}
		    });
			// Fetch Inner Callouts
			heroInnerCalloutCol.fetch({
				success : function () {

				}
			});		    

			// Fetch Inner Skills
			heroInnerSkillCol.fetch({
				success : function() {
				}					
			});
			
			// Fetch Bottom Callouts
			// heroBottomCalloutCol.fetch();			

			$('#heroLoader').hide();
			$('.hide').removeClass('.hide');
			
		}
	}; // End Hero

	// Footer
	pixelCure.footer = {
		init : function() {
			var footer = $('footer .illustration');
			/** FOOTER QUOTES **/
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
					$('footer').fadeIn(100);
				}
			});		

		}
	}; // End Footer

	// Init Navigation
	pixelCure.nav.init();

	// Init Hero, This is the homepage
	pixelCure.hero.init();

	// Init Footer
	pixelCure.footer.init();

});