//Escopo local: 
(function(){
 'use strict'
  var changeMenu = document.getElementById('changeMenu'); 
  var menuContainer = document.getElementById('menuContainer');
  var itemMenu = document.getElementsByClassName('menu-items-link');
  var btn = document.getElementById('btnContact'); 
  var $ul = document.getElementById('contactBox'); 
  var pro = document.getElementById('projects'); 
  
  pro.addEventListener('click', function(){
    alert("Em breve todos os projetos estarão aqui. Por favor, por hora visualize no github"); 
  }) 
  
  //Função para aparecer e sumir menu: 
  changeMenu.addEventListener('click', function(){
    menuContainer.classList.toggle('toggleMenu'); 
     //trocar icones:
    changeMenu.classList.toggle('icon-hamburger_menu_navigation_navbar_icon');
    changeMenu.classList.toggle('icon-close_delete_remove_cancel_trash_icon');
  })

  //Função para mostrar contatos: 
  btn.addEventListener('click', function(){
    $ul.classList.toggle('toggle-contacts')
  })

  var x = 0;

  while(itemMenu[x]){
   itemMenu[x].addEventListener('click', function(){
     menuContainer.classList.remove('toggleMenu');
     //trocar icones:
     changeMenu.classList.toggle('icon-close_delete_remove_cancel_trash_icon');
     changeMenu.classList.toggle('icon-hamburger_menu_navigation_navbar_icon');
   })
   x++
 }
})()