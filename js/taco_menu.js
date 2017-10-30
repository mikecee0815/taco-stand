$(function() {

var menus;                                      // Declare global variable
  $.ajax({
    beforeSend: function(xhr) {                   // Before requesting data
      if (xhr.overrideMimeType) {                 // If supported
        xhr.overrideMimeType("application/json"); // set MIME to prevent errors
      }
    }
  });

  function loadMenu() {                    // Declare function
    $.getJSON('data/menus.json')              // Try to get JSON data
    .done( function(data){                      // If successful
      menus = data;                             // Store it in a variable
    }).fail( function() {                       // If a problem: show message
      $('#event').html('Sorry! We could not load the menu at the moment');
    });
  }

  loadMenu();

















	
});