$("#submit").on("click", function(event) {
    event.preventDefault();

    // validateInput();
    // validateClick();
    //saveAnswer();
    //if (validateInput() && validateClick()) {

        var newFriend = {
            friendName: $("#name-input").val().trim(),
            photoLink: $("#photo-link").val().trim(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val()
            ]
        };

    console.log(newFriend);
    postReq(newFriend);

    //}
})



function saveAnswer() {
    $("button").click(function (){
            $(this).addClass("selected").siblings().removeClass("selected");
    })
}


function compareAnswer() {
    $(".btn.btn-success").each(function() {
        var selectedButton = $(this).children("button.selected");

        

    })  
}





function postReq(friendData) {
    $.post("/api/friends", friendData, function(data) {
        if (data) {
            for (var i = 0; i < friendData.length; i++) {
                var result = $("<div>");
                result.attr("id", "friend-result-" + i + 1);
                $("#myModal").append(result);
            }
        } 
    });
}


// function runSearch() {
//     var currentURL = window.location.origin;

//     $.ajax({
//         url: currentURL + "/api/friends",
//         method: "GET"
//     }).then(function(friendData) {
//         console.log(friendData);
//         for (var i = 0; i < friendData.length; i++) {
//             var result = $("<div>");
//             result.attr("id", "friend-result-" + i + 1);
//             $("#myModal").append(result);
//         }
//     });
// }

// runSearch();

function validateInput() {
    var isValid = true;
    $(".form-control").each(function() {
        if ($(this).val() === "") {
            isValid = false;
        }
    });
    return isValid;
}

function validateClick() {
    var isValid = true;
    $(".btn-toolbar").each(function() {
        if ($(this).val() === "") {
            isValid = false;
        }
    })
    return isValid;
}