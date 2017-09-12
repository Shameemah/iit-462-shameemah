var addCommentFromInputBox = function() {
  var $newComment = $("<p>"), $comment_text = $(".comment-input input[type='text']");

  if($comment_text.val() !== "") {
    $newComment.text($comment_text.val());
    $newComment.fadeIn(100);
    $(".comments").append($newComment);
    $comment_text.val("");
  }
}

$(".comment-input input[type='button']").on("click", function(){
  addCommentFromInputBox();
});

$(".comment-input input[type='button']").on("keypress", function(event){

  if(event.keyCode == 13) {
    addCommentFromInputBox();
  }
});
$(document).ready();
