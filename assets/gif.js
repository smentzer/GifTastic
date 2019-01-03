//starting button topics
var topics = ["Iron Man", "Black Widow", "Hulk", "Thor", "Wolverine", "Ant Man"]
//giphy url
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "+super+heroes&api_key=dc6zaTOxFJmzC&limit=10"

function renderButtons() {
    for (var i = 0; i < topics.length; i++) {
        var newButton = $('<button>');
        newButton.attr('id', 'button' + i);
        newButton.text(topics[i]);
        newButton.attr("data-name", topics[i]);
        newButton.addClass('search');
        $('#searchTags').append(newButton);
    }
}
renderButtons();
//adds to the topics array and then makes a button
$('#add-topic').on('click', function (event) {
    event.preventDefault();
    $('#searchTags').html('');
    var userInput = $('#topic-input').val();
    topics.push(userInput);
    renderButtons();
})
//on click function that grabs 10 gifs from giphy and creates divs and appends to them to put on the page
