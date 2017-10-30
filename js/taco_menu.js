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

  $('#main').on('click', 'a', function(e){
    e.preventDefault()
    var menuId = this.id.toUpperCase(); // Get value of id attr 
    var newContent="";
    for (var i = 0; i < menus[menuId].length; i++) {      // looping through menu
      // newContent+='<span>' + menus[menu][i].price + '</span>';
      newContent+= '<li class="list-item my-2">';
      newContent += '<a class="mr-4 mt-3 text-capitalize " href="details.html#';
      newContent += menus[menuId][i].title.replace(/ /g, '-') + ' ">';
      newContent += menus[menuId][i].title + ' </a></li>';
}
      $('#menu-display').html('<ul class="ul-list">' + newContent + '</ul>');
    
    // console.log(menuId);


  });

















	
});