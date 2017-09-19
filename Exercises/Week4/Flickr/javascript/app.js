var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json&jsoncallback=?"

$.getJSON(url, function(flickrFeed) {
  var $handList = $("<ul>");

  flickrFeed.items.forEach(function (item) {
    var $image = $("<img>");
    $image.attr("src",  item.media.m);
    $image.fadeIn(100);
    $("main").append($image);
  });
});
