//check off

$("ul").on("click", "li",function(){
    $(this).toggleClass("completed")
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();// this refers to LI and not span like previously
    }); // parents gives us the Li and not just span. 
    event.stopPropagation() // stops further event on parent elements
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val(); // grabbed the value of the entered string.
        // empty the textbox
        $(this).val("");
        //creating new li
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ todoText +"</li>")
    }
})

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle()
})