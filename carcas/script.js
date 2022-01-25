var sidebar = document.getElementById('sidebar');
var content = document.getElementById('content');
var arrow = document.getElementById('arrow-button');
var content = document.getElementById('content');
var content1 = document.getElementById('content1');
var content2 = document.getElementById('content2');
var wallBtn = document.getElementById('wall_menu_button');
var wallBtn1 = document.getElementById('wall_menu_button-1');
var proffBlock = document.getElementById('proffile');



function Slider(){//...........................................Function-opens-Sidebar-by-clicking-Sidebar-button.......................................//
    wallBtn.style.display = 'none';
    wallBtn1.style.display = 'inline-block';
    sidebar.style.transitionDuration = '0.7s';
    sidebar.style.transform='translateX(0%)';
    content.style.transitionDuration = '0.7s';
    content.style.transform='translateX(0%)';
    content1.style.transform = 'translateX(0%)';
    content1.style.transitionDuration = '0.7s';
    content2.style.transform = 'translateX(0%)';
    content2.style.transitionDuration = '0.7s';
}

function diSlider(){//........................................Function-closes-Sidebar-by-clicking-Left-arrow-button....................................//
    wallBtn1.style.display = 'none';
    wallBtn.style.display = 'inline-block';
    sidebar.style.transitionDuration = '0.7s';
    sidebar.style.transform='translateX(-125%)';
    content.style.transitionDuration = '0.7s'
    content.style.transform='translateX(-18.7%)';
    content1.style.transform = 'translateX(-18.7%)';
    content2.style.transform = 'translateX(-18.7%)';
}

function openCont(){//.........................................Function-opens-QA-content-by-clicking-QA-tab-button.....................................//
    wallBtn1.style.display = 'none';
    wallBtn.style.display = 'inline-block';
    content1.style.display = 'none';
    content2.style.display = 'none'
    content.style.display = 'block';
    sidebar.style.transitionDuration = '0s';
    sidebar.style.transform='translateX(-125%)';
    content.style.transitionDuration = '0s';
    content.style.transform='translateX(-18.7%)'
}
function openCont1(){//...................................Function-opens-Front-End-content-by-clicking-Front-End-tab-button............................//
    wallBtn1.style.display = 'none';
    wallBtn.style.display = 'inline-block';
    content.style.display = 'none';
    content2.style.display = 'none';
    content1.style.display = 'block';
    content1.style.transform = 'translateX(-18.7%)';
    sidebar.style.transitionDuration = '0s';
    sidebar.style.transform='translateX(-125%)';
    content1.style.transitionDuration = '0s';

};
function openCont2(){//...................................Function-opens-Back-End-content-by-clicking-Back-End-tab-button..............................//
    wallBtn1.style.display = 'none';
    wallBtn.style.display = 'inline-block';
    content2.style.display = 'block';
    content2.style.transform = 'translateX(-18.7%)'
    content1.style.display = 'none';
    content.style.display = 'none';
    sidebar.style.transitionDuration = '0s';
    sidebar.style.transform='translateX(-125%)';
    content2.style.transitionDuration = '0s';

}

function openProf(){

    proffBlock.style.transitionDuration = '0.5s';
    proffBlock.style.width = '300px';
    sidebar.style.transitionDuration = '0s';
    sidebar.style.transform='translateX(-125%)';
    content.style.transitionDuration = '0s'
    content.style.transform='translateX(-18.7%)';
    wallBtn1.style.display = 'none';
    wallBtn.style.display = 'inline-block';

    
    
}


