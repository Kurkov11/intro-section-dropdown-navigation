//Colors
let almostBlack = 'hsl(0, 0%, 8%)';
let mediumGray = 'hsl(0, 0%, 41%)';


document.getElementById('menu-icon').onclick = function(){
    document.getElementById('nav-bar').style.display = 'flex';
    document.getElementById('black-box').style.display = 'block';
    document.getElementById('stop-scrolling').style.overflow = 'hidden';
}
document.getElementById('close-menu-icon').onclick = function(){
    document.getElementById('nav-bar').style.display = 'none';
    document.getElementById('black-box').style.display = 'none';
    document.getElementById('stop-scrolling').style.overflow = 'auto';
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

let desktopFeaturesExpanded = false;
document.getElementById('features-click-area-desktop').onclick = function(){
    if(desktopFeaturesExpanded){
        document.getElementById('features-menu-desktop').style.display = 'none';
        desktopFeaturesExpanded = false;
        document.getElementById("arrow-up-features-desktop").style.display = 'none';
        document.getElementById("arrow-up-black-features-desktop").style.display = 'none';
        document.getElementById("arrow-down-black-features-desktop").style.display = 'block';
    }else{
        document.getElementById('features-menu-desktop').style.display = 'flex';
        desktopFeaturesExpanded = true;
        document.getElementById("arrow-down-features-desktop").style.display = 'none';
        document.getElementById("arrow-down-black-features-desktop").style.display = 'none';
        document.getElementById("arrow-up-black-features-desktop").style.display = 'block';
    }
}

let desktopCompanyExpanded = false;
document.getElementById('company-click-area-desktop').onclick = function(){
    if(desktopCompanyExpanded){
        document.getElementById('company-menu-desktop').style.display = 'none';
        desktopCompanyExpanded = false;
        document.getElementById("arrow-up-company-desktop").style.display = 'none';
        document.getElementById("arrow-up-black-company-desktop").style.display = 'none';
        document.getElementById("arrow-down-black-company-desktop").style.display = 'block';
    }else{
        document.getElementById('company-menu-desktop').style.display = 'flex';
        desktopCompanyExpanded = true;
        document.getElementById("arrow-down-company-desktop").style.display = 'none';
        document.getElementById("arrow-down-black-company-desktop").style.display = 'none';
        document.getElementById("arrow-up-black-company-desktop").style.display = 'block';
    }
}

//Hover state for desktop versions of features
document.getElementById('features-click-area-desktop').onmouseover = function(){
    if(!desktopFeaturesExpanded){
        document.getElementById("arrow-down-features-desktop").style.display = 'none';
        document.getElementById('arrow-down-black-features-desktop').style.display = 'block';
    }
    if(desktopFeaturesExpanded){
        document.getElementById("arrow-up-features-desktop").style.display = 'none';
        document.getElementById('arrow-up-black-features-desktop').style.display = 'block';
    }

    document.getElementById('features-title').style.color = almostBlack;
}


document.getElementById('features-click-area-desktop').onmouseout = function(){
    if(!desktopFeaturesExpanded){
        document.getElementById("arrow-down-features-desktop").style.display = 'block';
        document.getElementById('arrow-down-black-features-desktop').style.display = 'none';
    }
    if(desktopFeaturesExpanded){
        document.getElementById("arrow-up-features-desktop").style.display = 'block';
        document.getElementById('arrow-up-black-features-desktop').style.display = 'none';
    }

    document.getElementById('features-title').style.color = mediumGray;
}

//Hover state for desktop versions of company
document.getElementById('company-click-area-desktop').onmouseover = function(){
    if(!desktopCompanyExpanded){
        document.getElementById("arrow-down-company-desktop").style.display = 'none';
        document.getElementById('arrow-down-black-company-desktop').style.display = 'block';
    }
    if(desktopCompanyExpanded){
        document.getElementById("arrow-up-company-desktop").style.display = 'none';
        document.getElementById('arrow-up-black-company-desktop').style.display = 'block';
    }

    document.getElementById('company-title').style.color = almostBlack;
}


document.getElementById('company-click-area-desktop').onmouseout = function(){
    if(!desktopCompanyExpanded){
        document.getElementById("arrow-down-company-desktop").style.display = 'block';
        document.getElementById('arrow-down-black-company-desktop').style.display = 'none';
    }
    if(desktopCompanyExpanded){
        document.getElementById("arrow-up-company-desktop").style.display = 'block';
        document.getElementById('arrow-up-black-company-desktop').style.display = 'none';
    }

    document.getElementById('company-title').style.color = mediumGray;
}
