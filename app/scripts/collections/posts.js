/*global MyBlogBackbone, Backbone*/

MyBlogBackbone.Collections = MyBlogBackbone.Collections || {};

(function () {
    'use strict';

    MyBlogBackbone.Collections.Posts = Backbone.Collection.extend({

        model: MyBlogBackbone.Models.Posts

    });

})();
