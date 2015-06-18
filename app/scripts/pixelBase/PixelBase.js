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

    // Define our object
    var PixelBase = {
        Model : {},
        Collection : {},
        View : {}
    };

    // Base Model
    PixelBase.Model = Backbone.Model.extend({});

    
    // Base Collection
    PixelBase.Collection = Backbone.Collection.extend({
        
        model : PixelBase.Model,

        url : function() { 
            return  'http://api.pixelcureinteractive.com/?json=1&post_type=' + this.postType
        },

        parse : function(res) {
            return res.posts
        }

    }); // End Base Collection

    
    // Base View
    PixelBase.View = Backbone.View.extend({

        initialize : function () {
            
            // on change, render
            this.listenTo(this.collection, 'change', this.render)
            
            // on reset, render
            this.listenTo(this.collection, 'reset', this.render)
            
            // on sync, render
            this.listenTo(this.collection, 'sync', this.render);
            
        },

        render : function() {
            
            // data collection
            var collection = this.collection.toJSON();
            
            // compile template
            _.template( this.template );

            // pass the data into the template
            var data = this.template({
                data : collection
            });

            // apend data to $el
            this.$el.append( data );

            return this;
        }

    }); // End Base View


    return PixelBase;

}); // End Require
