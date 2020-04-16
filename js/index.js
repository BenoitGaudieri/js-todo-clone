$(document).ready(function () {
    var todoItems = [
        "Buy groceries",
        "Cook meal",
        "Eat",
        "Complete code",
        "Watch tutorials",
        "Code some more",
    ];
    var todoList = $(".todo");

    // Populating the todo ul with prewritter todoItems arr
    for (let i = 0; i < todoItems.length; i++) {
        // Clone template from html
        let elementList = $(".template li").clone();
        elementList.attr("data-element", i);

        // Modify text and prepend to mantain <i>
        elementList.prepend(todoItems[i]);
        todoList.append(elementList);
    }

    // Remove todo item from body so it can remove even after adding
    $("body").on("click", ".todo li i", function () {
        $(this).parent().remove();
    });

    // Add element
    var newInput = $(".add-element");

    newInput.keyup(function (e) {
        if (e.which == 13 || e.keyCode == 13) {
            var text = newInput.val().trim();
            console.log(text);

            // if not empty append
            if (text !== "") {
                var elementNew = $(".template li").clone();
                elementNew.prepend(text);
                todoList.append(elementNew);
            }

            // empty input val
            newInput.val("");
        }
    });

    // strikethrough
    $("body").on("click", ".todo li", function () {
        $(this).toggleClass("completed");
    });
}); // end Doc ready
