var VideoListView = Backbone.View.extend({
    
  el: '.list',  
  
  initialize: function() {
    this.collection.on('sync', this.render, this); 
  },
  
  render: function() {
    this.$el.children().detach();
    this.collection.forEach(video => {
      var videoEntry = new VideoListEntryView({model: video});
      this.$el.append(videoEntry.render());  
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
