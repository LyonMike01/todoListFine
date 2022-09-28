
//check the clicked todo

$("ul").on("click", "li", function () {
  $(this).toggleClass("cmpt");
});

//click on c to delete  todo

$("ul").on("click", "span", function (evt) {
   evt.stopPropagation();
   $(this).parent().fadeOut(500, function () {
    $(this).remove();
   });
});

//gettiing the input values and add it to the list

$("input").on("keypress", function (evt) {
    var empt = $(this).val();
    if (evt.which === 13 && empt != "") {
    var name = $(this).val();
    $("ul").append("<li> <span> <i class='fa-solid fa-trash-can'></i></span>" + " " + name + "</li>");
    $(this).val("");
      
}
});

//toggling the input with the plus buttion

$(".fa-square-plus").on("click", function () {
    $("input").slideToggle(500);
});
