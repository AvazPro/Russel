var elMorePages = document.querySelector('.h__morepages');
var elMorePagesShow = document.querySelector('.h__morepages-b');


var elMorePagesAbout = document.querySelector('.h__morepages-about');
var elMorePagesAboutShow = document.querySelector('.h__morepages-b-about');

var elNav2 = document.querySelector('.h__nav2');
var elNav3 = document.querySelector('.a__about');
var elMain = document.querySelector('.main');
var elModal = document.querySelector('.morepages-btn-close');

var elNavLink = document.querySelector('.h__navlinks');
var elNavLink2 = document.querySelector('.linkscroll'); 

var elMorePagesIcon = document.querySelector('.morepages-i-c')



elMorePages.addEventListener('click', function(){
    if(elMorePagesShow.classList.contains('h__morepages-show') || elMorePagesShow.classList.contains('h__morepages-show-about') || elMorePagesIcon.classList.contains('morepages-icon-color') || elMenu.classList.contains('modal')){
        elMorePagesShow.classList.remove('h__morepages-show');
        elMorePagesShow.classList.remove('h__morepages-show-about');
        elMorePagesIcon.classList.remove('morepages-icon-color');
        elMain.classList.remove('modal');    
    } else {
        elMorePagesShow.classList.add('h__morepages-show');
        elMorePagesShow.classList.add('h__morepages-show-about');
        elMorePagesIcon.classList.add('morepages-icon-color');
        elModal.classList.add('modal');
    }
});


// ekranni hoxlagan joyidan bosganda morepages yo'qolishi

elModal.addEventListener('click', function(evt){
    if(evt.target.classList.contains('modal')){
        elMorePagesShow.classList.remove('h__morepages-show-about');
        elMorePagesShow.classList.remove('h__morepages-show');
        elMorePagesIcon.classList.remove('morepages-icon-color');   
        elModal.classList.remove('modal');   
    }
})

// Esc knopkani bosganda morepages yopilishi
window.addEventListener('keyup', function(evt){
    if(evt.keyCode === 27){
        elMorePagesShow.classList.remove('h__morepages-show-about');
        elMorePagesShow.classList.remove('h__morepages-show');
        elMorePagesIcon.classList.remove('morepages-icon-color');   
        elModal.classList.remove('modal');
    }
})

// background img ni harakatlantirish
var elNav = document.querySelector('.h__nav');

var debounce = (func, wait, immediate) => {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

var f = function(){
    console.log(window.scrollY);
    if(window.scrollY > 150){
        elNav.classList.add('h__navscroll');
    } else if(window.scrollY < 250) {
        elNav.classList.remove('h__navscroll');
    }
}

window.addEventListener('scroll', debounce(f, 30));



// linkni positionini qotirish 

var showMenu = function(){
    elNavLink.classList.add('h__navlinks2');
}

var removeMenu = function(){
    elNavLink.classList.remove('h__navlinks2');
}
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(window.scrollY > 452 ){
        showMenu();
    } else {
        removeMenu();
    }
});

var elMenu = document.querySelector('.menu-btn');
var elUl = document.querySelector('.h__list')


var show = function(){
    elUl.classList.add('h__list-show');
    elMenu.querySelector('i').className = 'fa-solid fa-times';
    elUl.removeEventListener('animationend', remove);
}
var hide = function(){
    elUl.classList.add('h__list-hide');
    elMenu.querySelector('i').className = 'fa-solid fa-bars';
    elUl.addEventListener('animationend', remove);
}
var remove = function(){
    elUl.classList.remove('h__list-hide', 'h__list-show');
}
elMenu.addEventListener('click', function(){
    if(elUl.classList.contains('h__list-show')){
        hide();
    } else {
        show();
    }
});