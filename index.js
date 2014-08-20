
$( "#click" ).click(function() {
  $( "" ).submit();
});

$(function() {
    $( "input[type=submit], a, button" )
      .button()
      .click(function( event ) {
        event.preventDefault();
      });
  });

$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });

var arrayPokemon = ["600px-001Bulbasaur.png",
"600px-004Charmander.png",
"600px-007Squirtle.png",
"600px-152Chikorita.png",
"600px-155Cyndaquil.png",
"600px-158Totodile.png",
"600px-252Treecko",
"600px-255Torchic.png",
"600px-258Mudkip.png",
"600px-387Turtwig.png",
"600px-390Chimchar.png",
"600px-393Piplup.png",
"600px-495Snivy.png",
"600px-498Tepig.png",
"600px-501Oshawott.png",
"600px-650Chespin.png",
"600px-653Fennekin.png",
"600px-656Froakie.png"];
