var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...THIS IS THE PLAYER VIEW</div>');
    }
   
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
