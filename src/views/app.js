var AppView = Backbone.View.extend({

  el: '#app', 

  initialize: function() {
    if (window.videos) {
      this.videos = new Videos(window.videos);
      this.render();
    } else {
      this.videos = new Videos(window.exampleVideoData);
      this.render();
    }
  },


  render: function() {
    this.$el.html(this.template());

    var videoListView = new VideoListView({collection: this.videos});
    videoListView.render();
    
    var searchView = new SearchView({collection: this.videos});
    searchView.render();
    
    var videoPlayer = new VideoPlayerView({collection: this.videos});
    videoPlayer.render();
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});


/// YTAPIK AIzaSyBoTNkyEbmnCYBgT4ZhCtlIz445CAeaBRo