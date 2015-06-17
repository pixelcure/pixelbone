define([
    'jquery', 
    'lodash', 
    'backbone',
    '../util',
    '../pixelBase/PixelBase',
    'ldsh!./templates/heroTagline',
    'ldsh!./templates/heroCallout',
    'ldsh!./templates/heroBottomCallout',
    'ldsh!./templates/heroSliderItem',
    'ldsh!./templates/heroSkills'
], function(
    $, 
    _, 
    Backbone, 
    Util, 
    PixelBase,
    heroTaglineTemplate, 
    heroCalloutTemplate, 
    heroBottomCalloutTemplate, 
    heroSliderItemTemplate,
    heroInnerSkillsTemplate
){
    console.dir(PixelBase);
    // Define our object that will contain our views
    var PixelHero = {
        Models : {},
        Collections : {},
        Views : {}
    };

/********** HERO COLLECTIONS *****************/     

    // Hero Tagline
    PixelHero.Collections.Tagline = PixelBase.Collection.extend({
    
        postType : 'heroTagline'
    
    });

    // Hero Inner Callouts
    PixelHero.Collections.InnerCallouts = PixelBase.Collection.extend({
    
        postType : 'heroCallouts'
    
    });    

    // Hero Inner Skills
    PixelHero.Collections.InnerSkills = PixelBase.Collection.extend({
    
        postType : 'heroSkills'
    
    });

    // Hero Slider Images
    PixelHero.Collections.HeroImages = PixelBase.Collection.extend({
    
        postType : 'post&category=hero-slider'
    
    });
    
    // Hero Bottom Callouts
    PixelHero.Collections.BottomCallouts = PixelBase.Collection.extend({
    
        postType : 'pixelBottomCallout'
    
    });

/********* HERO VIEWS ************************/
    
    // Hero Tagline
    PixelHero.Views.Tagline = PixelBase.View.extend({
        
        // Pass In Template for Tagline
        template : heroTaglineTemplate
    
    }); // End Tagline    

    // Inner Callout
    PixelHero.Views.InnerCallout = PixelBase.View.extend({
        
        // Pass In Template for Callout
        template : heroCalloutTemplate,

    }); // End Inner Callout

    // Bottom Callout
    PixelHero.Views.BottomCallout = PixelBase.View.extend({
        
        // Pass In Template for Hero Bottom Callout
        template : heroBottomCalloutTemplate,

    }); // End Bottom Callout

    // Hero Slider Showpiece
    PixelHero.Views.HeroImage = PixelBase.View.extend({
        
        // Pass In Template for Slider Item
        template : heroSliderItemTemplate,

    }); // End Hero Slider Showpiece

    // Hero Skills
    PixelHero.Views.HeroInnerSkills = PixelBase.View.extend({
        
        // Pass In Template for Hero Skills
        template : heroInnerSkillsTemplate,

    }); // End Hero Skills


    return PixelHero;

});
