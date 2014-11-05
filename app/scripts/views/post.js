/*global MyBlogBackbone, Backbone, JST*/

MyBlogBackbone.Views = MyBlogBackbone.Views || {};

(function () {
    'use strict';

    MyBlogBackbone.Views.Post = Backbone.View.extend({

        template: JST['app/scripts/templates/post.ejs'],

        tagName: 'div',

        id: '',

        className: 'send',

        events: {
            'click .send': 'sendPost'
        },

        sendPost: function (event) {
            console.log('I clicked on button!', event);
        },

        initialize: function (model) {
            this.model = model;
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            console.log('blog entry posted');
            return this;
        }

    });

})();
