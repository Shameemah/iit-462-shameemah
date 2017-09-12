$(".comment-input input[type='button']").on("click", function(){
  var $newComment = $("<p>"), $comment_text = $(".comment-input input[type='text']");

  if($comment_text.val() !== "") {
    $newComment.text($comment_text.val());
    $(".comments").append($newComment);
    $comment_text.val("");
  }
  
});
$(document).ready();
