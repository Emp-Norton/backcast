var VideoListView = Backbone.View.extend({
    
  el: '.list',  
  
  initialize: function() {
    this.collection.on('change', function() {
      console.log('change triggered');
      this.render(); 
    }, this); // changed from sync change
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
