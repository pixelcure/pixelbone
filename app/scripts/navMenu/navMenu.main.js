define([
    'jquery', 
    'lodash', 
    'backbone',
    '../util',
    'ldsh!./templates/nav'
], function( $, _, Backbone, Util, navTemplate ){

    // Nav Menu Object
    var PixelNav = PixelNav || {};

    // Pixel Nav View
    PixelNav.View = Backbone.View.extend({
        
        template : navTemplate,
        
        render : function() {
            
            // footer nav
            var $footer = $( this.options.footer );

            // routes
            var routes = this.options.router.routes;

            // compile template
            _.template( this.template );

            // pass in data
            var data = this.template({ data : routes });

            // append data
            this.$el.append( data );

            // append data to footer
            $footer.append( data );

        } // End Render
        
    }); // End Pixel Nav


    return PixelNav;

});