define([
    'jquery', 
    'lodash', 
    'backbone',
    '../util'
], function( $, _, Backbone, Util ){

    // Global Methods
    var pixelGlobal = pixelGlobal || {};

    // Scroll Up Button
    pixelGlobal.scrollUp = function(target){
        $(target).on('click', function(){
            $('body, html').animate({ scrollTop : '0' }, 400)
        });
    }

    // Navigation
    pixelGlobal.nav = function(nav, icon){
        var $nav = $(nav),
            $icon = $(icon);

        // set click event and on click hide/show
        $nav.on('click', function(){

            // if open, remove it, if not, close it
            if( $icon.hasClass('open') ){
                $icon.removeClass('open');
            } else {
                $icon.addClass('open');
            }

        });
    }

    // Invoke Methods
    pixelGlobal.init = function(){

        // invoke scroll up button
        pixelGlobal.scrollUp($('.scroll-top'));

        // invoke nav
        pixelGlobal.nav($('nav'), $('#hidden-menu-icon'));


    } // end init

    return pixelGlobal;

});