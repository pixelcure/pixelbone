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
    var PixelContact = {
        Models : {},
        Collections : {},
        Views : {}
    };

/********** CONTACT MODELS **********************/ 

    // About Post
    PixelContact.Models.Post = Backbone.Model.extend({});

/********** CONTACT COLLECTIONS *****************/     

    // Contact Posts
    PixelContact.Collections.Posts = Backbone.Collection.extend({

        model : PixelContact.Models.Post,

        url : 'http://api.pixelcureinteractive.com/?json=1&post_type=footerQuotes',

        parse : function(res) {
            return res.posts
        }

    }); // End Contact Posts

/********* CONTACT VIEWS ************************/


    return PixelContact;

});
