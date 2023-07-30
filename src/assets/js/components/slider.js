var splide = new Splide( '.splide', {
  type   : 'loop',
  arrows : false,
  classes: {
		pagination: 'splide__pagination dinner-pagination',
		page      : 'splide__pagination__page dinner-page',
  },
} );


splide.on( 'pagination:mounted', function ( data ) {
  // You can add your class to the UL element
  data.list.classList.add( 'splide__pagination--custom' );

  // `items` contains all dot items
  data.items.forEach( function ( item ) {
    item.button.textContent = String( item.page + 1 );
  } );
} );

splide.mount();

