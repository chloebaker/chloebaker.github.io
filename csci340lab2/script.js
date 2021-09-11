$(document).ready(function() {
  $('#romance').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=romance",
      success: function(results) {
        document.getElementById("poster").innerHTML = "";
        document.getElementById("animeTitle").innerHTML = "";
        document.getElementById("animeDescription").innerHTML = "";
        var randomNum = Math.floor(Math.random() * (results["attributes"].length - 1));
        var anime =  results["attributes"][randomNum];
        $("<img>").attr("src", anime["posterImage"]["medium"]).appendTo("#poster");
        $("<h2>").text(anime["canonicalTitle"]).appendTo("#animeTitle");
        $("<p>").text(anime["synopsis"]).appendTo("#animeDescription");
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });

  $('#magicalGirl').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=magical%20girl",
      success: function(results) {
        document.getElementById("poster").innerHTML = "";
        document.getElementById("animeTitle").innerHTML = "";
        document.getElementById("animeDescription").innerHTML = "";
        var randomNum = Math.floor(Math.random() * (results["attributes"].length - 1));
        var anime =  results["attributes"][randomNum];
        $("<img>").attr("src", anime["posterImage"]["medium"]).appendTo("#poster");
        $("<h2>").text(anime["canonicalTitle"]).appendTo("#animeTitle");
        $("<p>").text(anime["synopsis"]).appendTo("#animeDescription");
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});
