//Initialize and add the map
function initMap() {
  // Your Location stored in a const binding
  const loc = { lat: 46.1066, lng: -64.8296 };
  
  //Center map on location chosen
  const map = new google.maps.Map(document.querySelector( '.map' )
  , {
    center: loc,
    zoom: 14
  });

  //Add marker to be positioned at the location
  const marker = new google.maps.Marker( { position: loc, map: map } );
}

//Sticky Menu Background Fading
window.addEventListener( 'scroll', function() {
  if ( window.scrollY > 150 ) {
    document.querySelector( '#navbar' ).style.opacity = 0.9;
  } else {
    document.querySelector( '#navbar' ).style.opacity = 1;
  }
});

//Smooth Scrolling using jQuery
$( '#navbar a, .btn' ).on( 'click', function(event){
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $( 'html, body' ).animate(
      {
        scrollTop: $( hash ).offset().top - 82
      },
      1000
    );
  }
});