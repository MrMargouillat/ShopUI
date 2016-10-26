var navBtn  = document.querySelector('#btn_menu')
navBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log(document.querySelector('body'));
    document.querySelector('body').classList.toggle('with--sidebar--left');
    document.querySelector('body').classList.remove('with--sidebar--right');

});
var siteCache  = document.querySelector('.site-cache')
siteCache.addEventListener("click", function(e){
    e.preventDefault();
    console.log(document.querySelector('body'));
    document.querySelector('body').classList.remove('with--sidebar--left');
    document.querySelector('body').classList.remove('with--sidebar--right');
});

var userBtn  = document.querySelector('#btn_user')
userBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log(document.querySelector('body'));
    document.querySelector('body').classList.toggle('with--sidebar--right');
    document.querySelector('body').classList.remove('with--sidebar--left');
});