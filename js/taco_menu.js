$(function() {

  var menu;                                                 // Declare global variable
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


  $('#main').on('click', '#menu-set a', function(e){
    e.preventDefault()
    var menu = this.id.toUpperCase(); // Get value of id attr 
    var newContent="";
    for (var i = 0; i < menus[menu].length;  i++) {     // looping through menu
      // newContent+='<span>' + menus[menu][i].price + '</span>';
      newContent+= '<li class="list-item my-2">';
      newContent += '<a class="mr-4 mt-3 text-capitalize" href="details.html#';
      newContent += menus[menu][i].title.replace(/ /g, '-') + ' ">';
      newContent += menus[menu][i].title + ' </a></li>';
}
      $('#menu-display').html('<ul class="ul-list">' + newContent + '</ul>');
    });
    
    // console.log(newContent);

    // CLICK TO GET DETAILS FOR EACH SELECTION
  $('#menu-display').on('click','li a', function(e){
      e.preventDefault();
      var selection= this.href;
      console.log(selection);
      selection = selection.replace('#', ' #');
       $('#menu-details').load(selection).hide().fadeIn('slow'); 
       // $('#menu-display a.current').removeClass('current'); 
       // $(this).addClass('current');                                              // Update selected item
      
  // });

});
	
});