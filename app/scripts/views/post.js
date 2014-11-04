/*global MyBlogBackbone, Backbone, JST*/

MyBlogBackbone.Views = MyBlogBackbone.Views || {};

(function () {
    'use strict';

    MyBlogBackbone.Views.Post = Backbone.View.extend({

        template: JST['app/scripts/templates/post.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
