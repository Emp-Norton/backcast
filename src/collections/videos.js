var Videos = Backbone.Collection.extend({
  model: Video,

  search: function() {
  }, 


  fetch: function(query) { 
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {'maxResults': '5',
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        q: query,
        type: ''},
      success: function(data) {
        window.videos = data;
      },
      error: function(data) {
        console.error("Failed", data);
      } 
     
    });
  }  

  

});
