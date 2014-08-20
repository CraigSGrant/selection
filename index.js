$( "#click" ).click(function() {
  $( "" ).submit();
});

$(function() {

  var arrayPokemon = ["600px-001Bulbasaur.png", "600px-004Charmander.png", "600px-007Squirtle.png", "600px-152Chikorita.png", "600px-155Cyndaquil.png", "600px-158Totodile.png"];

  var $1 = $('#one'),
  $2 = $('#two'),
  $3 = $('#three'),
  $4 = $('#four'),
  $5 = $('#five'),
  $6 = $('#six');

  var arrayNumber = [$1,$2,$3,$4,$5,$6]

  // $('.sortable').eq( Math.floor(Math.random()*$( '.sortable' ).length) ).show();
  $('.sortable').html('');
  $('.sortable').append($2);
  $('.sortable').append($1);
  $('.sortable').append($4);
  $('.sortable').append($6);
  $('.sortable').append($5);
  $('.sortable').append($3);


});
