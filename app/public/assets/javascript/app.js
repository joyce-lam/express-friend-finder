//questions array
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

//function to render questions to html
function renderQuestion() {
    var questionGroups = $('#question-groups');

    for (var i = 0; i < questions.length; i++) {
        var questionGroup = $("<div>");
        questionGroup.attr("id", ('group' + i));
        questionGroup.addClass("question-group");
        var questionDiv = $("<div>");
        questionDiv.addClass("qdiv");
        questionDiv.data("q", i);
        questionDiv.html(questions[i].question);
        questionGroup.append(questionDiv);

        for (var j = 0; j < questions[i].choices.length; j++) {
            var choiceBtn = $("<button>");
            choiceBtn.addClass("btn btn-info");
            choiceBtn.data("questionId", (i + 1));
            choiceBtn.data("choice", (j + 1));
            choiceBtn.text(questions[i].choices[j]);
            questionGroup.append(choiceBtn);
        }

        questionGroups.append(questionGroup);
    }
    markSelection();
}

//function to mark down user's choice
function markSelection() {
    $(".btn.btn-info").click(function(event) {
        event.preventDefault();
        var qId = parseInt($(this).data("questionId"));
        var qChoice = parseInt($(this).data("choice"));
        $(this).addClass("selected").siblings().removeClass("selected");
        console.log(qId, qChoice);
    })
}

function listenEvents() {
    $("#submit").click(function(event) {
        event.preventDefault();
        //recordSelection();
        console.log("abc");
        validateInput();
        validateClick();
        var scores = [];


        // if (validateInput() && validateClick()) {

        //     $(".question-group").each(function() {
        //         var selectedButton = $(this).children("button.selected");
        //         var data = $(selectedButton).data();
        //         var qId = data.questionId;
        //         var choice = parseInt(data.choice);
        //         console.log(qId, choice);
        //         scores.push(choice);

        //     })
        //     var newFriend = {
        //         friendName: $("#name-input").val().trim(),
        //         photoLink: $("#photo-link").val().trim(),
        //         scores: scores
        //     };
        // console.log(newFriend);
        // postReq(newFriend);
        // }

        var newFriend = {
            friendName: 'asdf',
            photoLink: 'asdf',
            scores: [
                1, 2, 3, 4, 5
            ]
        };
        //postReq(newFriend);
        runQuery();

    });
}

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


// function postReq(friendData) {
//     $.post("/api/friends", friendData, function(data) {
//         console.log(data);
//         if (data) {
//             for (var i = 0; i < friendData.length; i++) {
//                 var result = $("<div>");
//             //     result.attr("id", "friend-result-" + i + 1);
//                 $("#myModal").append(result);
//             }
//         } 
//     });
// }

function runQuery() {
    var currentURL = window.location.origin;
    $.ajax({
        url: currentURL + "/api/friends",
        method: "GET"
    }).then(function(friendData) {
        console.log(friendData);
        renderModal(friendData);
    })
}

function renderModal(friendData) {
    // $(".modal-content").empty();
    for (var i = 0; i < friendData.length; i++) {
        var name = $("<h3>");
        name.text(friendData[i].name);

        var photo = $("<p>");
        photo.text(friendData[i].photo);

        $("#result").append(name, photo);
    }

}


$(document).ready(function() {
    renderQuestion();
    listenEvents();
});

