define([
    'jquery', 
    'lodash', 
    'backbone',
    '../util',
    '../pixelFooter/PixelFooter',
    '../navMenu/navDots.main'
], function( $, _, Backbone, Util, PixelFooter, blueDots ){

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
                
                // remove blue dots
                $nav.find('svg').remove();

                // remove open class
                $icon.removeClass('open');
                
                // open nav class
                $navList.removeClass('open');
                
                // animate content in <main> over to left    
                $('main').css({
                    transform : 'translateX(0)',
                    mozTransform : 'translateX(0)',
                    msTransform : 'translateX(0)'
                });

                // enable side scroll
                $(document.body).removeClass('overflow-hidden-x');
            
            } else {
                
                // add blue d3 dots
                blueDots.init();
                
                // add class open
                $icon.addClass('open');

                // navlist width, sets X value of translate
                var $navWidth = $navList.width();

                // add class open
                $navList.addClass('open');

                // animate content in <main> over to right
                $('main').css({
                    transform : 'translateX(' + $navWidth + 'px)',
                    mozTransform : 'translateX(' + $navWidth + 'px)',
                    msTransform : 'translateX(' + $navWidth + 'px)'
                });
                
                // kill side scroll
                $(document.body).addClass('overflow-hidden-x');                
            }

        }); // end nav on click

    }( $('nav'), $('#hidden-menu-icon'), $('nav div.inner-nav'), $('#closeNav') );

    pixelGlobal.slideScenes = function(scene){
        document.addEventListener('scroll', function(e){
            
        });
    };

    // pixelGlobal.footer = function(footer, footerInner){
        
    //     // Define new Quote, Quotes Collection, and Quote View
    //     var footerQuote = new PixelFooter.Models.Quote(),
    //         footerQuoteCol = new PixelFooter.Collections.Quotes(),
    //         footerQuoteView = new PixelFooter.Views.Quotes({
    //             el : footerInner,
    //             collection : footerQuoteCol
    //         });

    //     // Fetch Quotes
    //     footerQuoteCol.fetch({
    //         success : function(){
                
    //             // show footer after success
    //             $(footer).fadeIn( 100 );
            
    //         }
    //     }); // End Fetch

    // }( $('footer'), $('footer .illustration') );

    // Scroll Up Button
    // pixelGlobal.scrollUp = function(target){

    //     // on click
    //     $(target).on('click', function(){
    //         $('body, html').animate({ scrollTop : '0' }, 400)
    //     });

    // }( $('.scroll-top') ); // End Scroll Up


    return pixelGlobal;

});