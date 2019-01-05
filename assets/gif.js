//starting button topics
var topics = ["Iron Man", "Black Widow", "Hulk", "Thor", "Wolverine", "Ant Man"]
//makes buttons
function renderButtons() {
    //prevents repeat buttons
    $('#searchTags').empty();
    //looping through array of gifs 
    for (var i = 0; i < topics.length; i++) {
        //generates button
        var newButton = $('<button>');
        //adds a class 
        newButton.addClass('search');
        //data-attribute, value of topics at index 
        newButton.attr("data-name", topics[i]);
        //button text with a value of the topic at i 
        newButton.text(topics[i]);
        //adding button to html 
        $('#searchTags').append(newButton);
    }
}

//adds to the topics array and then makes a button
$('#add-topic').on('click', function (event) {
    event.preventDefault();
    var userInput = $('#topic-input').val().trim();
    console.log(userInput);
    topics.push(userInput);
    // $('#searchTags').html('');
    renderButtons();
});

$(document).on("click", ".search", displayGifInfo);
function displayGifInfo() {
    $("#gif-view").empty();
    var gif = $(this).attr("data-name");
    //giphy url
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=10"

    //method, url
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        //div to hold gif
        var gifDiv = $("<div id= 'gifs'>");
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            // Storing the rating data
            var rating = results[i].rating;
            // Creating an element to have the rating displayed
            var rate = $("<p>").text("Rating: " + rating);
            // Displaying the rating
            gifDiv.prepend(rate);
            //div for gif
            var gifImage = $("<img>");
            //gifImage data attr
            gifImage.attr("src", results[i].images.fixed_height_still.url);
            gifImage.attr("data-animate", results[i].images.fixed_height.url);
            gifImage.attr("data-still", results[i].images.fixed_height_still.url);
            gifImage.attr("data-state", "still")
            gifImage.addClass("gif");

            gifDiv.prepend(gifImage);
            // gif above the previous gif
            $("#gif-view").prepend(gifDiv);
        }
    });
};


renderButtons();





        //pausing gifs
        //still need response data!!

        $(document).on("click", ".gif", action); 

        function action() {
            var state = $(this).attr("data-state");
            console.log(state);



            if (state === "still") {
                var animatedUrl = $(this).attr("data-animate");
                $(this).attr('src', animatedUrl);
                $(this).attr("data-state", "animate");
            }
            else if (state === "animate") {
                var stillUrl = $(this).attr("data-still");
                $(this).attr('src', stillUrl);
                $(this).attr("data-state", "still");
            }
            else {
                alert("this should never happen");
            }
        };





        