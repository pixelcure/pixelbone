define([
    'jquery', 
    'lodash', 
    'backbone',
    '../util',
    'ldsh!./templates/heroTagline',
    'ldsh!./templates/heroCallout',
    'ldsh!./templates/heroBottomCallout',
    'ldsh!./templates/heroSliderItem'
], function(
    $, 
    _, 
    Backbone, 
    Util, 
    heroTaglineTemplate, 
    heroCalloutTemplate, 
    heroBottomCalloutTemplate, 
    heroSliderItemTemplate
){

    // Define our object that will contain our views
    var PixelHero = {
        Models : {},
        Collections : {},
        Views : {}
    };

/********** HERO MODELS **********************/ 

    // Hero Tagline
    PixelHero.Models.Tagline = Backbone.Model.extend({});

    // Hero Inner Callouts
    PixelHero.Models.InnerCallout = Backbone.Model.extend({});   

    // Hero Bottom Callouts
    PixelHero.Models.BottomCallout = Backbone.Model.extend({});

    // Hero Image
    PixelHero.Models.HeroImage = Backbone.Model.extend({});

/********** HERO COLLECTIONS *****************/     

    // Hero Tagline
    PixelHero.Collections.Tagline = Backbone.Collection.extend({

        model : PixelHero.Models.Tagline,

        url : 'http://pixelcureinteractive.com/?json=1&post_type=pixelHeroBlurb',

        parse : function(res) {
            return res.posts
        }

    });

    // Hero Inner Callouts
    PixelHero.Collections.InnerCallouts = Backbone.Collection.extend({
        
        model : PixelHero.Models.InnerCallout,
        
        url : 'http://pixelcureinteractive.com/?json=1&post_type=pixelHeroCallout',
        
        parse : function(res) {
            return res.posts
        }
   
    });

    // Hero Slider Images
    PixelHero.Collections.HeroImages = Backbone.Collection.extend({
        
        model : PixelHero.Models.HeroImage,
        
        url : 'http://pixelcureinteractive.com/?json=1&post_type=post&category=hero-images',
        
        parse : function(res) {
            return res.posts
        }
   
    });
    
    // Hero Bottom Callouts
    PixelHero.Collections.BottomCallouts = Backbone.Collection.extend({
        
        model : PixelHero.Models.BottomCallout,
        
        url : 'http://pixelcureinteractive.com/?json=1&post_type=pixelBottomCallout',
        
        parse : function(res) {
            return res.posts
        }
    
    });

/********* HERO VIEWS ************************/

    // Tagline
    PixelHero.Views.Tagline = Backbone.View.extend({
        template : heroTaglineTemplate,

        initialize : function () {
            
            // on change, render
            this.listenTo(this.collection, 'change', this.render)
            
            // on reset, render
            this.listenTo(this.collection, 'reset', this.render)
            
            // on sync, render
            this.listenTo(this.collection, 'sync', this.render);
            
        },

        render : function() {
            
            // hero tagline
            var tagline = this.collection.toJSON();
            
            // compile template
            _.template( this.template );

            // pass the data into the template
            var data = this.template({
                tagline : tagline
            });

            // apend data to $el
            this.$el.append( data );

            return this;
        }

    }); // End Tagline

    // Inner Callout
    PixelHero.Views.InnerCallout = Backbone.View.extend({
        template : heroCalloutTemplate,

        initialize : function () {
            
            // on change, render
            this.listenTo(this.collection, 'change', this.render)
            
            // on reset, render
            this.listenTo(this.collection, 'reset', this.render)
            
            // on sync, render
            this.listenTo(this.collection, 'sync', this.render);
            
        },

        render : function() {
            
            // hero callouts collection
            var callouts = this.collection.toJSON();
            
            // compile template
            _.template( this.template );

            // pass the data into the template
            var data = this.template({
                callouts : callouts
            });

            // append data to $el
            this.$el.append( data );

            return this;
        }
    }) // End Inner Callout

    // Bottom Callout
    PixelHero.Views.BottomCallout = Backbone.View.extend({
        template : heroBottomCalloutTemplate,

        initialize : function () {
            
            // on change, render
            this.listenTo(this.collection, 'change', this.render)
            
            // on reset, render
            this.listenTo(this.collection, 'reset', this.render)
            
            // on sync, render
            this.listenTo(this.collection, 'sync', this.render);
            
        },

        render : function() {
            
            // hero callouts collection
            var callouts = this.collection.toJSON();
            
            // compile template
            _.template( this.template );

            // pass the data into the template
            var data = this.template({
                callouts : callouts
            });

            // append data to $el
            this.$el.append( data );

            return this;
        }
    }) // End Bottom Callout

    // Hero Slider Showpiece
    PixelHero.Views.HeroImage = Backbone.View.extend({
        template : heroSliderItemTemplate,

        initialize : function () {
            
            // on change, render
            this.listenTo(this.collection, 'change', this.render)
            
            // on reset, render
            this.listenTo(this.collection, 'reset', this.render)
            
            // on sync, render
            this.listenTo(this.collection, 'sync', this.render);
            
        },

        render : function() {

            // hero callouts collection
            var items = this.collection.toJSON();
            
            // compile template
            _.template( this.template );

            // pass the data into the template
            var data = this.template({
                items : items
            });

            // append data to $el
            this.$el.append( data );

            return this;
        }
    }) // End Bottom Callout

    return PixelHero;

});
