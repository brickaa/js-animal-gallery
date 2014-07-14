// Add your code here
$(document.body).on('click', '.filter-button' ,function(e){
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    showTheseImages($(this).attr('id'));
  } else {
    hideTheseImages($(this).attr('id'));
  }
  console.log($(this).attr('id'));
});

function hideTheseImages(imageClass) {
  $('.' + imageClass).fadeOut();
}

function showTheseImages(imageClass) {
  $('.' + imageClass).fadeIn();
}

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
      $('<div class="large-4 small-6 columns">')
        .addClass(val.animals[0])
        .addClass(val.animals[1])
        .prepend($('<img>').attr("src", val.url))
        .appendTo('.gallery');   
      ids.push(
        val.animals[0]
      );
      $.unique(ids);
    });
      console.log(ids);
      createFilters(ids);
});






