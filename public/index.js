document.getElementById('menu-icon').onclick = function(){
    document.getElementById('nav-bar').style.display = 'flex';
    document.getElementById('black-box').style.display = 'block';
    document.getElementById('stop-scrolling').style.overflow = 'hidden';
}
document.getElementById('close-menu-icon').onclick = function(){
    document.getElementById('nav-bar').style.display = 'none';
    document.getElementById('black-box').style.display = 'none';
    document.getElementById('stop-scrolling').style.overflow = 'visible';
}
