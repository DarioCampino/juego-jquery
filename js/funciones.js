$( function() {
  $( ".widget input[type=submit], .widget a, .widget button" ).button();
  $( "button, input, a" ).on( "click", function( event ) {
    event.preventDefault();
  } );
} );

$( function() {
  $( "#sortable" ).sortable();
} );

$( function() {
  $( "#draggable" ).draggable();
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "" )
          .html( "Hecho!" );
    }
  });
} );

$( function() {
  $( "#draggable1" ).draggable();
  $( "#droppable1" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Hecho!" );
    }
  });
} );


$( function() {
  $( "#draggable2" ).draggable();
  $( "#droppable2" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Hecho!" );
    }
  });
} );

$( function() {
  $( "#draggable3" ).draggable();
  $( "#droppable3" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Hecho!" );
    }
  });
} );

$( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );
//esta es la funcion que muestra la informacion de cada juego
$( function() {
  $( "#button" ).on( "click", function() {
    $( "#effect" ).addClass( "newClass", 1000, callback );
  });

  function callback() {
    setTimeout(function() {
      $( "#effect" ).removeClass( "newClass" );
    }, 1500 );
  }
} );