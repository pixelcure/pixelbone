define([
    'jquery', 
    'lodash', 
    'backbone',
    '../util',
    '../pixelFooter/PixelFooter'
], function( $, _, Backbone, Util, PixelFooter ){

    // Global Methods, All Auto Init
    var pixelGlobal = pixelGlobal || {};

    // Nav Menu
    pixelGlobal.nav = function(nav, icon, navList, closeNav){
        
        var $nav = $(nav),
            $icon = $(icon),
            $navList = $(navList),
            $closeNav = $(closeNav);

        // set click event and on click hide/show
        $nav.on('click', function(e){
            
            // if open, remove it, if not, close it
            if( $icon.hasClass('open') ){
                console.log('close nave');
                // remove open class
                $icon.removeClass('open');
                
                // open nav class
                $navList.removeClass('open');
                
                // animate content in <main> over to left    
                $('main').css({
                    transform : 'translateX(0)',
                    mozTransform : 'translateX(0)'
                });

                // enable side scroll
                $(document.body).removeClass('overflow-hidden-x');
            
            } else {
                console.log('open nav');
                // add class open
                $icon.addClass('open');

                // add class open
                $navList.addClass('open');
                
                // animate content in <main> over to right
                $('main').css({
                    transform : 'translateX(' + $navList.width() + 'px)',
                    mozTransform : 'translateX(' + $navList.width() + 'px)'
                });
                
                // kill side scroll
                $(document.body).addClass('overflow-hidden-x');                
            }

        }); // end nav on click

    }( $('nav'), $('#hidden-menu-icon'), $('nav ul.nav-list'), $('#closeNav') );

    pixelGlobal.footer = function(footer, footerInner){
        
        // Define new Quote, Quotes Collection, and Quote View
        var footerQuote = new PixelFooter.Models.Quote(),
            footerQuoteCol = new PixelFooter.Collections.Quotes(),
            footerQuoteView = new PixelFooter.Views.Quotes({
                el : footerInner,
                collection : footerQuoteCol
            });

        // Fetch Quotes
        footerQuoteCol.fetch({
            success : function(){
                
                // show footer after success
                $(footer).fadeIn( 100 );
            
            }
        }); // End Fetch

    }( $('footer'), $('footer .illustration') );

    // Scroll Up Button
    pixelGlobal.scrollUp = function(target){

        // on click
        $(target).on('click', function(){
            $('body, html').animate({ scrollTop : '0' }, 400)
        });

    }( $('.scroll-top') ); // End Scroll Up


    return pixelGlobal;

});