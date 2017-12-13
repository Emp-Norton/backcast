var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    this.listenTo(this.collection, 'select', this.selectVideo);
  },

  selectVideo: function(selection) {
    this.model = selection;
    this.render();
  },
  
  render: function() {
    this.model ? this.$el.html(this.template(this.model.attributes)) : this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
