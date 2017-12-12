var Videos = Backbone.Collection.extend({
  model: Video,

  search: function() {
  }, 


  fetch: function(query) { 
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {'maxResults': '25',
        part: 'snippet',
        q: query,
        type: ''}
    });
  }  

  

});
