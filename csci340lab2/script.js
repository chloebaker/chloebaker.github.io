$(document).ready(function() {

  var clearPage = function() {
    document.getElementById("poster").innerHTML = "";         // https://stackoverflow.com/questions/5744233/how-to-empty-the-content-of-a-div/5744262
    document.getElementById("animeTitle").innerHTML = "";
    document.getElementById("animeDescription").innerHTML = "";
  };

  var findAnime = function(category) {
    $.ajax({
      dataType: "json",
      url: "https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=" + category,
      success: function(results) {
        console.log("good");
        clearPage();
        document.getElementById("nekoImages").innerHTML = "";
        var numAnime = results["data"].length;
        var randomNum = Math.floor(Math.random() * (numAnime - 1));         // https://www.codegrepper.com/code-examples/javascript/jquery+random+number+between learned how to generate a random number, used it to generate a random index of results["data"] (the list of animes in that category)
        var anime =  results["data"][randomNum]["attributes"];
        if (anime["nsfw"]) {
          findAnime(category);
        } else {
          $("<img>").attr("src", anime["posterImage"]["medium"]).appendTo("#poster");
          $("<h2>").text(anime["canonicalTitle"]).appendTo("#animeTitle");
          $("<p>").text(anime["synopsis"]).appendTo("#animeDescription");
        }
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
    $.ajax({
      dataType: "json",
      url: "https://nekos.best/api/v1/nekos",
      success: function(results) {
        console.log(results["url"]);
        clearPage();
        $("<img>").attr("src", results["url"]).appendTo("#nekoImages");
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  })

});
