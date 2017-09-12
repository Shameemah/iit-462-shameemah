$(".comment-input input[type='button']").on("click", function(){
  var $newP = $("<p>"),
      comment_text = $(".comment-input input[type='text']").val();
  $newP.text(comment_text);
  $(".comments").append($newP);
});
$(document).ready();
