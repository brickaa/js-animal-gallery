// Add your code here
$('.filter-button').on('click', function(e) {
  $(this).toggleClass('active');
  // if ($(this).attr('id') === 'monkey') {
  //   $('.monkey').toggle();
  // } else if ($(this).attr('id') === 'dog'){
  //   $('.dog').toggle();
  // } else {
  //   $('.cat').toggle();
  // }
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