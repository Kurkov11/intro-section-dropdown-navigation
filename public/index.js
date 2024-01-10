document.getElementById('menu-icon').onclick = function(){
    document.getElementById('nav-bar').style.display = 'flex';
    document.getElementById('black-box').style.display = 'block';
}
document.getElementById('close-menu-icon').onclick = function(){
    document.getElementById('nav-bar').style.display = 'none';
    document.getElementById('black-box').style.display = 'none';
}

let featuresExpanded = false;
document.getElementById('features-click-area').onclick = function(){
    if(featuresExpanded){
        document.getElementById('todolist').style.display = 'none';
        document.getElementById('reminders').style.display = 'none';
        document.getElementById('callendar').style.display = 'none';
        document.getElementById('planning').style.display = 'none';
        featuresExpanded = false;
    }else{
        document.getElementById('todolist').style.display = 'block';
        document.getElementById('reminders').style.display = 'block';
        document.getElementById('callendar').style.display = 'block';
        document.getElementById('planning').style.display = 'block';
        featuresExpanded = true;
    }
}

let companyExpanded = false;
document.getElementById('company-click-area').onclick = function(){
    if(companyExpanded){
        document.getElementById('history').style.display = 'none';
        document.getElementById('our-team').style.display = 'none';
        document.getElementById('blog').style.display = 'none';
        companyExpanded = false;
    }else{
        document.getElementById('history').style.display = 'block';
        document.getElementById('our-team').style.display = 'block';
        document.getElementById('blog').style.display = 'block';
        companyExpanded = true;
    }
}
