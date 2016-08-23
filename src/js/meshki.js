var meshki = {
  openNav: function() {
    var sidenav = document.getElementsByClassName("sidenav")[0],
        content = document.getElementsByClassName("content")[0],
        isSidenavPush = (sidenav.className.split(' ').indexOf('push') > -1);

    sidenav.style.width = "250px";
    if (window.innerWidth > 768 && isSidenavPush)
      content.style.marginLeft = "250px";
    content.style.opacity = 0.3;
  },
  closeNav: function() {
    var sidenav = document.getElementsByClassName("sidenav")[0],
        content = document.getElementsByClassName("content")[0],
        isSidenavPush = (sidenav.className.split(' ').indexOf('push') > -1);
    sidenav.style.width = "0";
    if (window.innerWidth > 768 && isSidenavPush)
      content.style.marginLeft = "0";
    content.style.opacity = 1;
  }
};