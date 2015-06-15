define([
    'jquery', 
    'lodash', 
    'backbone',
    '../util'
], function(
    $, 
    _, 
    Backbone, 
    Util
){

    // Define our object that will contain our views
    var PixelAbout = {
        Models : {},
        Collections : {},
        Views : {}
    };

/********** ABOUT MODELS **********************/ 

    // About Post
    PixelAbout.Models.Post = Backbone.Model.extend({});

/********** ABOUT COLLECTIONS *****************/     

    // About Post
    PixelFooter.Collections.Posts = Backbone.Collection.extend({

        model : PixelAbout.Models.Post,

        url : 'http://api.pixelcureinteractive.com/?json=1&post_type=footerQuotes',

        parse : function(res) {
            return res.posts
        }

    }); // End About Post

/********* ABOUT VIEWS ************************/


    return PixelAbout;

});
