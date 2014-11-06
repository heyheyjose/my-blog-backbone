/*global MyBlogBackbone, $*/


window.MyBlogBackbone = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    this.Posts = new MyBlogBackbone.Collections.Posts();
    new MyBlogBackbone.Views.Appview();
    }
};

$(document).ready(function () {
    'use strict';
    MyBlogBackbone.init();
});
