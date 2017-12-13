var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.listenTo(this.videos, 'sync', this.playFirst);
    this.videos.search('Christmas');
    this.render();
  },

  playFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },
  
  render: function() {
    this.$el.html(this.template());

    var searchView = new SearchView({
      collection: this.videos
    });

    var videoListView = new VideoListView({
      collection: this.videos,
    });

    var videoPlayerView = new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
    });

    searchView.render();
    videoListView.render();
    videoPlayerView.render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
