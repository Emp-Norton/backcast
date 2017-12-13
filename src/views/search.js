var SearchView = Backbone.View.extend({

  el: '.search',

  events: {
    'click button': 'performSearch',
  },

  performSearch: function() {
    var query = this.$('input').val();
    if (query) {
      this.collection.search(query);
    }
    this.$('input').val('');
  },
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')
});
