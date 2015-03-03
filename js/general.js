var $listfield = $('.list-field');
var $form = $('.form');
var $input = $('#the-list');
var $items = $('.todoitems');

$form.on('submit', function (eventObject) {  
    eventObject.preventDefault();

    var $theli = $('<h1>');
    $theli.html($input.val());

    $listfield.append($theli);
    
    $input.val('');
});

$items.on('click', 'li', function () {
    $(this).toggleClass('js-highlight');
});