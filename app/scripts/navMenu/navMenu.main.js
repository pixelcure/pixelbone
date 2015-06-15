define([
    'jquery', 
    'lodash', 
    'backbone',
    '../util',
    'ldsh!./templates/nav'
], function( $, _, Backbone, Util, navTemplate ){

    // Nav Menu Object
    var PixelNav = PixelNav || {};


    PixelNav.View = Backbone.View.extend({
        
        template : navTemplate,
        
        render : function() {

            // compile template
            _.template( this.template );

            // pass in data
            var data = this.template({
                route : this.options.router.routes
            });

            // append data
            this.$el.append( data );

        } // End Render
        
    }); // End Pixel Nav


    return PixelNav;

});