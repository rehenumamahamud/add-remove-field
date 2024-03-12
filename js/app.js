$(document).ready(function() {
    var $container = $('#container');
  
    var $add = $('#add');
    $add.click(function() {
      var $field = $('<div class="field"><input type="text" class="input-field"><button class="remove">Remove</button></div>');
      $container.append($field);
    });
  
    $container.on('click', '.remove', function() {
      $(this).parent('.field').remove();
    });
  });