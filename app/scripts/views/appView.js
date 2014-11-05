/*global MyBlogBackbone, Backbone, JST*/

MyBlogBackbone.Views = MyBlogBackbone.Views || {};

(function () {
    'use strict';

    MyBlogBackbone.Views.Appview = Backbone.View.extend({

        template: JST['app/scripts/templates/appView.ejs'],

        el: $('.blog-container'),

        events: {
            'click input.send': 'onSubmit'
        },

        onSubmit: function (event) {
            event.preventDefault();
            var blogTitle = $('#title');
            var blogPost = $('#post');
            var blogOutput = new MyBlogBackbone.Models.Post({
                title: blogTitle.val(),
                postBody: blogPost.val()
            });
            blogOutput.save();
            blogTitle.val('');
            blogPost.val('');
        },

        initialize: function () {
            this.listenTo(MyBlogBackbone.Posts, 'add', this.addOne);
            this.listenTo(MyBlogBackbone.Posts, 'reset', this.addAll);
            this.render();
            MyBlogBackbone.Posts.fetch();
        },

        addOne: function (blogOutput) {
            var postView = new MyBlogBackbone.Views.Post(blogOutput);
            $('.blog-output').append(postView.render().el); // i think this is where i need html instead of append
        },

        addAll: function () {},

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
