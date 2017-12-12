var VideoListView = Backbone.View.extend({
    
  el: '.list',  
  
  initialize: function() {
    this.collection.on('change', this.render, this) // need a click listener for video selection? Test seems to imply so.
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(video => {
      $('.video-list').append(new VideoListEntryView({model: video}).el)
    })
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
