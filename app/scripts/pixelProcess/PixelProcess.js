define([
    'jquery', 
    'lodash', 
    'backbone',
    '../util'
], function(
    $, 
    _, 
    Backbone, 
    Util, 
){

    // Define our object that will contain our views
    var PixelProcess = {
        Models : {},
        Collections : {},
        Views : {}
    };

/********** PROCESS MODELS **********************/ 

    // Process Post
    PixelProcess.Models.Process = Backbone.Model.extend({});

/********** PROCESS COLLECTIONS *****************/     

    // Process Post
    PixelProcess.Collections.Process = Backbone.Collection.extend({

        model : PixelProcess.Models.Process,

        url : 'http://api.pixelcureinteractive.com/?json=1&post_type=footerQuotes',

        parse : function(res) {
            return res.posts
        }

    }); // End Process Post

/********* PROCESS VIEWS ************************/


    return PixelProcess;

});
