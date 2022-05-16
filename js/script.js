// init Isotope
var $grid = $('#portfolio-items').isotope({
    // options
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', '.portfolio-button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
});