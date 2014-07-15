$(document).ready(function() {
  function createFilters(animals) {
    for ( i=0; i < animals.length; i++ ) {
      $('<div class="filter-button individual button active">')
        .attr('id',animals[i])
        .prepend(animals[i].toUpperCase())
        .appendTo('.filters');
    }
  }

  $.getJSON( "http://mks-frontend-gallery.herokuapp.com/", function( json ) {
      var ids = [];
      $.each( json, function ( key, val ) {
        // $('<div class="large-4 small-6 columns">')
        //   .addClass(val.animals[0])
        //   .addClass(val.animals[1])
        //   .prepend($('<img>').attr("src", val.url))
        //   .appendTo('.gallery');   
        ids.push(
          val.animals[0]
        );
        $.unique(ids);
      });
      createFilters(ids);
      for (var i in json) {
        $('.gallery').append("<div class='large-4 small-6 columns " + json[i].animals.join(" ") + "'><img src=" + json[i].url + "></div>");
        // ids.push(
        //   json[i].animals[0]
        // );
      }

  }).done(function(){
    $(".filter-button").click(function() {
        $(this).toggleClass('active');
        $('.' + this.id).fadeToggle();
        
      });
  });
});



