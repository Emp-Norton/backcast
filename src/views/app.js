var AppView = Backbone.View.extend({

  el: '#app', 

  initialize: function() {
    window.videos = new Videos(exampleVideoData);
    window.videoListView = new VideoListView({collection: videos});
    videoListView.render();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
