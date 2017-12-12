var VideoListView = Backbone.View.extend({
    
  //$el: '.list', // added this
  
  initialize: function() {
    this.collection.on('change', this.render, this);
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
