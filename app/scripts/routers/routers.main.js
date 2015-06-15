define([
    'jquery', 
    'lodash', 
    'backbone',
    '../util'
], function( $, _, Backbone, Util ){

    // Pixel Cure Routers Object
    var PixelRouters = PixelRouters || {};


    PixelRouters.Router = Backbone.Router.extend({

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
            '*path' : 'notFound'

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

        notFound : function() {
            console.log('page not found');
        }

    });


    return PixelRouters;

});