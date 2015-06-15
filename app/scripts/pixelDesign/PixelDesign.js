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
    var PixelDesign = {
        Models : {},
        Collections : {},
        Views : {}
    };

/********** DESIGN MODELS **********************/ 

    // Design Post
    PixelDesign.Models.Post = Backbone.Model.extend({});

/********** DESIGN COLLECTIONS *****************/     

    // Design Posts
    PixelDesign.Collections.Posts = Backbone.Collection.extend({

        model : PixelDesign.Models.Post,

        url : 'http://api.pixelcureinteractive.com/?json=1&post_type=footerQuotes',

        parse : function(res) {
            return res.posts
        }

    }); // End Design Posts

/********* ABOUT VIEWS ************************/


    return PixelDesign;

});
