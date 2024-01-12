function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    var dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
  }
  
  // Cerrar menús desplegables al hacer clic fuera de ellos
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === 'block') {
          openDropdown.style.display = 'none';
        }
      }
    }
  }
  