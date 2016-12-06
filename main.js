
$(document).ready(function() {


  $('#submitBtn').on('click', function(){
    $('#searchResults').empty();

    let searchText = $('#searchBox').val();
    let $query = $.getJSON('http://www.omdbapi.com/?s=' + searchText);

    $query.done((data) => {
      if ($query.status !== 200) {
          return;
      }
      // console.log(data);
      let results = data.Search;

      // Function to take JSON object and populate the HTML DOM
      breakDownSearchResults(results)
    })
    $query.fail(function(err) {
      console.log(err);
    });
  })

  const breakDownSearchResults = function(array) {

    array.forEach( (result) => {
      let newResult = document.createElement( "div" )
      $(newResult).addClass("result")
      $("#searchResults").append( populateResultDivs(result, newResult))
      // console.log(result);
    })
  }

// Populate result div with result specific info
  const populateResultDivs = function (obj, containerDiv) { // obj = data.Search[0].Title
    let title = obj.Title;      //Batman Begins
    let poster = obj.Poster;    //....jpg


    $(containerDiv).append("<h5>" + title + "</h5>");
    $(containerDiv).append("<img class='poster' src='" + poster + "' alt='title' />");
    return containerDiv
  }

});
