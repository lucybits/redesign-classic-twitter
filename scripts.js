setTimeout(function() {
    document.body.style.backgroundColor = "#111010";
    document.body.classList.add("show-main");
    document.getElementById('main-interface').classList.remove('hidden');
  }, 3000);

  var sidebar = document.getElementById('sidebar');
  var menuIcon = document.getElementById('menu-icon');
  
  menuIcon.addEventListener('click', function() {
    sidebar.classList.toggle('show');
    menuIcon.classList.toggle('active');
  });
