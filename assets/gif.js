//starting button topics
var topics = ["Iron Man", "Black Widow", "Hulk", "Thor", "Wolverine", "Ant Man"]
//giphy url
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "+super+heroes&api_key=dc6zaTOxFJmzC&limit=10"

//method, url
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      //div to hold gif
      var gifDiv = $("<div class='gifs'>");
      //storing the rating
      var rating = response.Rated;
      //element to displauy rating
      var rate = $("<p>").text("Rating: " + rating);
      //display rating
      gifDiv.append(rate);
      //retrieving url for gif?
      
      //element to hold gif?
      //appendgif?


  });







function renderButtons() {
    //prevengts repeat buttons
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
    topics.push(userInput);
    // $('#searchTags').html('');
    renderButtons();
});

renderButtons();

//pausing gifs
$(".gif").on("click", function() {
    var state = $(this).attr("data-state");
      console.log(state);

if (state === "still"){
    var animatedUrl = $(this).attr("data-animate");
    $(this).attr('src', animatedUrl);
    $(this).attr("data-state", "animate");
  } else if ( state === "animate"){
    var stillUrl = $(this).attr("data-still");
    $(this).attr('src', stillUrl);
    $(this).attr("data-state", "still");
  } else {
    alert("this should never happen");
  }
});