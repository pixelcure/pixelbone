define([
    'jquery', 
    'lodash', 
    'backbone',
    '../util',
    'ldsh!./templates/quote'
], function(
    $, 
    _, 
    Backbone, 
    Util, 
    footerQuoteTemplate
){

    // Define our object that will contain our views
    var PixelFooter = {
        Models : {},
        Collections : {},
        Views : {}
    };

/********** FOOTER MODELS **********************/ 

    // Footer Quote
    PixelFooter.Models.Quote = Backbone.Model.extend({});

/********** FOOTER COLLECTIONS *****************/     

    // Footer Quote
    PixelFooter.Collections.Quotes = Backbone.Collection.extend({

        model : PixelFooter.Models.Quote,

        url : 'http://api.pixelcureinteractive.com/?json=1&post_type=footerQuotes',

        parse : function(res) {
            return res.posts
        }

    }); // End Footer Quote

/********* FOOTER VIEWS ************************/

    // Quote
    PixelFooter.Views.Quotes = Backbone.View.extend({
        template : footerQuoteTemplate,

        initialize : function () {
            
            // on change, render
            this.listenTo(this.collection, 'change', this.render)
            
            // on reset, render
            this.listenTo(this.collection, 'reset', this.render)
            
            // on sync, render
            this.listenTo(this.collection, 'sync', this.render);
            
        },

        render : function() {
            
            // generate random quote
            var rndNum = this.randomNumber( 0, this.collection.length );

            // footer quote
            var quote = this.collection.at( rndNum ).attributes;

            // compile template
            _.template( this.template );

            // pass the data into the template
            var data = this.template({
                content : quote.content,
                author : quote.custom_fields.Author
            });

            // apend data to $el
            this.$el.append( data );

            return this;
        },

        randomNumber : function(min, max){
            return Math.floor(Math.random() * (max - min)) + min;
        
        }

    }); // End Quote

    return PixelFooter;

});
