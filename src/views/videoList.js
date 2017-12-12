var VideoListView = Backbone.View.extend({
    
  el: '.list', // added this
  
  initialize: function() {
    this.collection.on('change', this.render, this)
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.each(video => {
      $('.video-list').append(new VideoListEntryView({model: video}).el)
    })
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
