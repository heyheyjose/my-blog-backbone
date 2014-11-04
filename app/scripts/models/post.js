/*global MyBlogBackbone, Backbone*/

MyBlogBackbone.Models = MyBlogBackbone.Models || {};

(function () {
    'use strict';

    MyBlogBackbone.Models.Post = Backbone.Model.extend({

        url: 'https://tiny-pizza-server.herokuapp.com/collections/jv-finally-damn',

        initialize: function() {
        },

        defaults: {
            title: '',
            postBody: ''
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
