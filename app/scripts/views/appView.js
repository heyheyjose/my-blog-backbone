/*global MyBlogBackbone, Backbone, JST*/

MyBlogBackbone.Views = MyBlogBackbone.Views || {};

(function () {
    'use strict';

    MyBlogBackbone.Views.Appview = Backbone.View.extend({

        template: JST['app/scripts/templates/appView.ejs'],

        el: $('.maing'),

        events: {
            'click input.preview-button': 'onSubmit'
        },

        onSubmit: function (event) {
            event.preventDefault();
            var blogTitle = $('.title-field');
            var blogPost = $('.post-field');
            var blogOutput = new MyBlogBackbone.Models.Post({
                title: blogTitle.val(),
                postBody: blogPost.val()
            });
            blogOutput.save();
            blogTitle.val('');
            blogPost.val('');
            MyBlogBackbone.Posts.add(blogOutput);
        },

        initialize: function () {
            this.listenTo(MyBlogBackbone.Posts, 'add', this.addOne);
            this.listenTo(MyBlogBackbone.Posts, 'reset', this.addAll);
            this.render();
            MyBlogBackbone.Posts.fetch({reset: true});
        },

        addOne: function (blogOutput) {
            var postView = new MyBlogBackbone.Views.Post(blogOutput);
            $('.post-target').html(postView.render().el); // i think this is where i need html instead of append
        },

        addAll: function (arg) {
            _.each(arg.models.reverse(), this.addOne);
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
