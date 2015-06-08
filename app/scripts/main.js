//************************
// Main JS File
//************************
'use strict';

require([
    'jquery',
    'lodash',
    'backbone',
    'util',
    'pixelHero/PixelHero'
], function ($, _, Backbone, Util, PixelHero) {

	var pixelCure = pixelCure || {};

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
			heroSliderCol.fetch();

			/** TAGLINE **/
			// Define new Tagline, Tagline Collection, and Tagline View
		    var heroTagline = new PixelHero.Models.Tagline(),
		        heroTaglineCol = new PixelHero.Collections.Tagline(),
		        heroTaglineView = new PixelHero.Views.Tagline({ 
		            el : hero,
		            collection : heroTaglineCol,
		            foo : 'bar'
		        });

		    // Fetch Tagline
		    heroTaglineCol.fetch();

		    /** HERO INNER CALLOUTS **/
		    // Define new Inner Callout, Inner Callouts Collection, and Inner Callout View
		    var heroInnerCallout = new PixelHero.Models.InnerCallout(),
		    	heroInnerCalloutCol = new PixelHero.Collections.InnerCallouts(),
		    	heroInnerCalloutView = new PixelHero.Views.InnerCallout({
		    		el : hero,
		    		collection : heroInnerCalloutCol
		    	});

			// Fetch Inner Callouts
			heroInnerCalloutCol.fetch();

			/** HERO BOTTOM CALLOUTS **/
		    // Define new Inner Callout, Inner Callouts Collection, and Inner Callout View
		    var heroBottomCallout = new PixelHero.Models.BottomCallout(),
		    	heroBottomCalloutCol = new PixelHero.Collections.BottomCallouts(),
		    	heroBottomCalloutView = new PixelHero.Views.BottomCallout({
		    		el : hero,
		    		collection : heroBottomCalloutCol
		    	});

			// Fetch Bottom Callouts
			heroBottomCalloutCol.fetch({
				success : function() {
					$('#heroLoader').hide();
					$('.hide').delay(100).removeClass('.hide');
				}
			});			

			
		}
	} // End Hero

	// Init Hero, This is the homepage
	pixelCure.hero.init();

});