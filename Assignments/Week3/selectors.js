var changeColor = function() {
  $(".relevant").each(function() {
    $(this).find("p:eq(0)").css('color', '#85144b');
    $(this).find("p:eq(1)").css('color', '#F012BE');
    $(this).find("p:eq(2)").css('color', '#B10DC9');
    $(this).find("p:eq(3)").css('color', '#39CCCC');
    $(this).find("p:eq(4)").css('color', '#3D9970');
    $(this).find("p:eq(5)").css('color', '#2ECC40');
    $(this).find("p:eq(6)").css('color', '#01FF70');
  });
}

$(document).ready(changeColor);
