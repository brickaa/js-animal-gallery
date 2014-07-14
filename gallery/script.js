// Add your code here
$('.filter-button').on('click', function(e) {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    showTheseImages($(this).attr('id'));
  } else {
    hideTheseImages($(this).attr('id'));
  }
  console.log($(this).attr('id'));
});

// $('#monkey').on('click', function() {
//   $('.monkey').toggle();
// });

// $('#dog').on('click', function() {
//   $('.dog').toggle();
// });

// $('#cat').on('click', function() {
//   $('.cat').toggle();
// });

function hideTheseImages(imageClass) {
  $('.' + imageClass).fadeOut();
}

function showTheseImages(imageClass) {
  $('.' + imageClass).fadeIn();
}

$.getJSON( "http://mks-frontend-gallery.herokuapp.com/", function( json ) {
    $.each( json, function ( key, val ) {
      $('<div class="large-4 small-6 columns">')
        .addClass(val.animals[0])
        .addClass(val.animals[1])
        .prepend($('<img>').attr("src", val.url))
        .appendTo('.gallery');
    });
});

