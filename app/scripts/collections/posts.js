/*global MyBlogBackbone, Backbone*/

MyBlogBackbone.Collections = MyBlogBackbone.Collections || {};

(function () {
    'use strict';

    MyBlogBackbone.Collections.Posts = Backbone.Collection.extend({

        model: MyBlogBackbone.Models.Post,

        url: 'https://tiny-pizza-server.herokuapp.com/collections/jv-finally-damn'

    });

})();
