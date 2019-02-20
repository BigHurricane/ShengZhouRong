// 客户案例
var sliderContainer = document.getElementsByClassName('slider--container')[0];
var sliderImages = document.getElementsByClassName('slider--images')[0];
var sliderPrev = document.getElementsByClassName('slider--prev')[0];
var sliderNext = document.getElementsByClassName('slider--next')[0];
var sliderPointerItem = document.getElementsByClassName('slider--pointer__item');
var i = 0;
var timer12 = null;

    function autoPlay1() {
        timer12 = setInterval(function () {
            i++;
            moveToIndex1(sliderImages, i);
        }, 2000)
    }
    function moveToIndex1(dom, index) {
        dom.style.left = -1200 * (index % 3) + "px";
        highLightPointer1();
    }
    function bindEv1(dom, type, fn) {
        dom['on' + type] = fn;
    }
    bindEv1(sliderContainer, 'mouseover', stopAutoPlay1);
    bindEv1(sliderContainer, 'mouseout', autoPlay1);
    bindEv1(sliderPrev, 'click', prev);
    bindEv1(sliderNext, 'click', next);
    function prev() {
        i--;
        detect();
        moveToIndex1(sliderImages, i);
    }
    function next() {
        i++;
        moveToIndex1(sliderImages, i);
    }
    function stopAutoPlay1() {
        clearInterval(timer12);
    }
    function detect(){
        if(i < 0){
            i  = 3;
        }
    }
    function highLightPointer1(){
        for (var j = 0; j < sliderPointerItem.length ; j++) {
            sliderPointerItem[j].className = 'slider--pointer__item' + (j===(i % 3) ? ' highLight' : ' ');
        }
    }
    autoPlay1();




