$(document).ready(function() {

  var clearPage = function() {
    document.getElementById("poster").innerHTML = "";
    document.getElementById("animeTitle").innerHTML = "";
    document.getElementById("animeDescription").innerHTML = "";
    document.getElementById("nekoss").innerHTML = "";
    document.getElementById("nekoButton").innerHTML = "";
  };

  var findAnime = function(category) {
    $.ajax({
      dataType: "json",
      url: "https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=" + category,
      success: function(results) {
        console.log("good");
        clearPage();
        var numAnime = results["data"].length;
        var randomNum = Math.floor(Math.random() * (numAnime - 1));
        var anime =  results["data"][randomNum]["attributes"];
        $("<img>").attr("src", anime["posterImage"]["medium"]).appendTo("#poster");
        $("<h2>").text(anime["canonicalTitle"]).appendTo("#animeTitle");
        $("<p>").text(anime["synopsis"]).appendTo("#animeDescription");
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  };

  $('#romance').click(function() {
    findAnime("romance");
  });

  $('#magicalGirl').click(function() {
    findAnime("magical%20girl");
  });

  $('#supernatural').click(function() {
    findAnime("supernatural");
  });

  $('#friendship').click(function() {
    findAnime("friendship");
  });

  $('#nekos').click(function() {
    $("<button>").addClass("btn btn-primary").html("Give me a neko!").attr("id", "nekoImage").appendTo("#nekoButton");
  })

  $('#nekoImage').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://nekos.best/api/v1/nekos",
      success: function(results) {
        console.log("good");
        $("<img>").attr("src", results["url"]).appendTo("#nekoss");
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  })

});
