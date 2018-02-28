var questions = [{
    question: "abc?",
    choices: ["1", "2", "3", "4", "5"]
    }, {
    question: "def?",
    choices: ["1", "2", "3", "4", "5"] 
    }, {
    question: "ghi?",
    choices: ["1", "2", "3", "4", "5"]
    }, {
    question: "ijk?",
    choices: ["1", "2", "3", "4", "5"]
    }, {
    question: "lmn?",
    choices: ["1", "2", "3", "4", "5"]
    }];

function showQuestion() {
    var questionGroups = $('#question-groups');

    for (var i = 0; i<questions.length; i++) {
        var questionGroup = $("<div>");
        questionGroup.attr("id", ('group' +i));
        questionGroup.addClass("question-group");
        var questionDiv = $("<div>");
        questionDiv.addClass("qdiv");
        questionDiv.data("q", i);
        questionDiv.html(questions[i].question);
        questionGroup.append(questionDiv);

        for (var j = 0; j < questions[i].choices.length; j++) {
            var choiceBtn = $("<button>");
            choiceBtn.addClass("btn btn-info");
            choiceBtn.data("questionId", i);
            choiceBtn.data("choice", j);
            choiceBtn.text(questions[i].choices[j]);
            questionGroup.append(choiceBtn);
        }

        questionGroups.append(questionGroup);
    }
}

function saveAnswer() {
    $("button").click(function (){
            var qId = parseInt($(this).data("questionId"));
            var qChoice = parseInt($(this).data("choice"));
            $(this).addClass("selected").siblings().removeClass("selected");
    })
}

// function compareAnswer() {
//     var scores = [];
//     $(".question-group").each(function() {
//         var selectedButton = $(this).children("button.selected");
//         var data = $(selectedButton).data();
//         var qId = data.questionId;
//         var choice = data.choice;


//     })  

// }



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

$(document).ready(showQuestion);