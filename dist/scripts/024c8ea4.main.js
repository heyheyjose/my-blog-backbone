window.MyBlogBackbone={Models:{},Collections:{},Views:{},Routers:{},init:function(){"use strict";console.log("Hello from Backbone!"),this.Posts=new MyBlogBackbone.Collections.Posts,new MyBlogBackbone.Views.Appview}},$(document).ready(function(){"use strict";MyBlogBackbone.init()}),this.JST=this.JST||{},this.JST["app/scripts/templates/appView.ejs"]=function(obj){obj||(obj={});{var __p="";_.escape}with(obj)__p+='<section class="user-input">\n	<img src="images/blog512.png">\n	<h1>Title:</h1>\n	<input type="text" class="title-field" name="title" placeholder="Enter your title here..." autofocus>\n	<h1>Post:</h1>\n	<textarea class="post-field" rows="12" cols="40" name="postBody" placeholder="Enter your post here..."></textarea>\n	<input type="submit" class="preview-button" value="Preview Your Post">\n</section>\n\n<section class="user-output">\n	<h1>Preview:</h1>\n	<div class="post-target"></div>\n	<input type="submit" class="publish-button" value="Publish Your Post">\n</section>\n';return __p},this.JST["app/scripts/templates/post.ejs"]=function(obj){obj||(obj={});{var __t,__p="";_.escape}with(obj)__p+="<div>\n	<h2>"+(null==(__t=title)?"":__t)+"</h2>\n	<p>"+(null==(__t=postBody)?"":__t)+"</p>\n	<date>"+(null==(__t=date)?"":__t)+"</date>\n	<hr>\n</div>\n";return __p},MyBlogBackbone.Models=MyBlogBackbone.Models||{},function(){"use strict";MyBlogBackbone.Models.Post=Backbone.Model.extend({url:"https://tiny-pizza-server.herokuapp.com/collections/jv-finally-damn",initialize:function(){},defaults:{title:"",postBody:"",date:new Date},validate:function(){},parse:function(a){return a}})}(),MyBlogBackbone.Collections=MyBlogBackbone.Collections||{},function(){"use strict";MyBlogBackbone.Collections.Posts=Backbone.Collection.extend({model:MyBlogBackbone.Models.Post,url:"https://tiny-pizza-server.herokuapp.com/collections/jv-finally-damn"})}(),MyBlogBackbone.Views=MyBlogBackbone.Views||{},function(){"use strict";MyBlogBackbone.Views.Appview=Backbone.View.extend({template:JST["app/scripts/templates/appView.ejs"],el:$(".maing"),events:{"click input.preview-button":"onSubmit"},onSubmit:function(a){a.preventDefault();var b=$(".title-field"),c=$(".post-field"),d=new MyBlogBackbone.Models.Post({title:b.val(),postBody:c.val()});d.save(),b.val(""),c.val(""),MyBlogBackbone.Posts.add(d)},initialize:function(){this.listenTo(MyBlogBackbone.Posts,"add",this.addOne),this.listenTo(MyBlogBackbone.Posts,"reset",this.addAll),this.render(),MyBlogBackbone.Posts.fetch({reset:!0})},addOne:function(a){var b=new MyBlogBackbone.Views.Post(a);$(".post-target").html(b.render().el)},addAll:function(a){_.each(a.models.reverse(),this.addOne)},render:function(){return this.$el.html(this.template()),this}})}(),MyBlogBackbone.Views=MyBlogBackbone.Views||{},function(){"use strict";MyBlogBackbone.Views.Post=Backbone.View.extend({template:JST["app/scripts/templates/post.ejs"],tagName:"div",id:"",className:"send",events:{"click .send":"sendPost"},sendPost:function(a){console.log("I clicked on button!",a)},initialize:function(a){this.model=a,this.listenTo(this.model,"change",this.render)},render:function(){return this.$el.html(this.template(this.model.toJSON())),console.log("blog entry posted"),this}})}();