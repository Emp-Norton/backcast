var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  render: function() {
    this.$el.html('<div class="loading">Please wait...THIS IS THE PLAYER VIEW</div>'); // select video somehow?
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
