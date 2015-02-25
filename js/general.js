var $listfield = $('.list-field');
var $form = $('.form');
var $input = $('#the-list');

$form.on('submit', function (eventObject) {  
    eventObject.preventDefault();

    var $theli = $('<h1>');
    $theli.html($input.val());

    $listfield.append($theli);
    
    $input.val('');
});