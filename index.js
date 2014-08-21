$(function() {

  var $1 = $('#one'),
  $2 = $('#two'),
  $3 = $('#three'),
  $4 = $('#four'),
  $5 = $('#five'),
  $6 = $('#six');

  var $arrayNumber = [$1,$2,$3,$4,$5,$6]

  $('.sortable').html('');
  $('.sortable').append($2);
  $('.sortable').append($1);
  $('.sortable').append($4);
  $('.sortable').append($6);
  $('.sortable').append($5);
  $('.sortable').append($3);


  function bubbleSort(arrayNumber) {
    var swapped;
    do {
      swapped = false;
      for (var i=0; i < arrayNumber.length-1; i++) {
        var current = parseInt($(arrayNumber[i]).data("number"), 10);
        var next = parseInt($(arrayNumber[i+1]).data("number"), 10);
        if (current > next) {
          var bucket = arrayNumber[i];
          arrayNumber[i] = arrayNumber[i+1];
          arrayNumber[i+1] = bucket;
          swapped = true;
            $("body").html(arrayNumber);
        }
      }
    } while (swapped);
  };

  $( "#click" ).on('click', function(){
    bubbleSort($arrayNumber);
  });
});
