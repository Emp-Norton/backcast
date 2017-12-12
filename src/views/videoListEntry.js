var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    var model = this.model;
    this.$el.on('click', function(e) {
      model.select(model); 
    });
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
