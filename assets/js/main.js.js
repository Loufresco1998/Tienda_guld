
/*===== MENU SHOW =====*/

   const BtnMenu = document.querySelector('#nav-toggled');
   const Menu = document.querySelector('#nav-menu');
    BtnMenu.addEventListener("click" , function(){
      Menu.classList.toggle("mostrar");
});
