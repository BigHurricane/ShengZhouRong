/*********************头部开始**********************/
var navigation = document.getElementsByClassName('onmouseout')[0];
var guide = document.getElementsByClassName('guide')[0];
navigation.onmouseenter = function () {
    guide.style.display = 'block';
};
navigation.onmouseleave = function () {
    guide.style.display = 'none';
};
var navigationOne = document.getElementsByClassName('onmouseout')[2];
var guideOne = document.getElementsByClassName('guide')[1];
navigationOne.onmouseenter = function () {
    guideOne.style.display = 'block';
};
navigationOne.onmouseleave = function () {
    guideOne.style.display = 'none';
};
var navigationTwo = document.getElementsByClassName('onmouseout')[3];
var guideTwo = document.getElementsByClassName('guide')[2];
navigationTwo.onmouseenter = function () {
    guideTwo.style.display = 'block';
};
navigationTwo.onmouseleave = function () {
    guideTwo.style.display = 'none';
};



var navWordSer = document.getElementsByClassName("onmouseout")[0];
var ser = document.getElementsByClassName("guide")[0];
var navdy = document.getElementsByClassName("onmouseout")[2];
var dy = document.getElementsByClassName("guide")[1];
var navAbout = document.getElementsByClassName("onmouseout")[3];
var about = document.getElementsByClassName("guide")[2];
var nav = document.getElementsByClassName("wrap--head")[0];
var navAboutwarp = document.getElementsByClassName("onmouseout");
var navLeft = document.getElementsByClassName("head__navigation--left")[0];
var navTitle = document.getElementsByClassName("navTitle");




window.onscroll = function (ev) {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if(t>561){
        navLeft.innerHTML = " <img src=\"../images/first_images/iphone_logo.png\" height=\"45\" width=\"145\"/>";
        nav.style.backgroundColor = "#ffffff";
        for(var i = 0;i<navAboutwarp.length;i++){
            navAboutwarp[i].style.color = "#121213";
            navTitle[i].style.color = "#121213";
        }
    }
    if(t<=561){
        nav.style.backgroundColor = "";
        navLeft.innerHTML = " <img src=\"../images/first_images/logo1.png\" height=\"45\" width=\"145\"/>";
        for(var i = 0;i<navAboutwarp.length;i++){
            navAboutwarp[i].style.color = "#121213";
            navTitle[i].style.color = "#FFFFFF";
        }
    }

    console.log(t);
};
navWordSer.onmouseover = function () {
    ser.style.display = "block";
};
navWordSer.onmouseout = function () {
    ser.style.display = "none";
};
navdy.onmouseover = function () {
    dy.style.display = "block";
};
navdy.onmouseout = function () {
    dy.style.display = "none";
};
navAbout.onmouseover = function () {
    about.style.display = "block";
};
navAbout.onmouseout = function () {
    about.style.display = "none";
};

/*********************头部结束**********************/

/*******************************轮播*******************************/
var sliderImages = document.getElementsByClassName('banner__images')[0];
var warp = document.getElementsByClassName("wrap--banner")[0];
var sliderPrev = document.getElementsByClassName("banner__prev")[0];
var sliderNext = document.getElementsByClassName("banner__next")[0];
var pointer = document.getElementsByClassName("banner__pointer--item");
var i = 0;
var timer = null;
function autoPlay() {
    timer = setInterval(function () {
        i++;
        moveToIndex(sliderImages, i);
    },2000);
}
autoPlay();

function moveToIndex(dom,index) {
    dom.style.left = (-1903) * (index % 2) + 'px';
    highLightPointer();
}

function bindEv(dom, type, fn){
    dom['on' + type] = fn;
}

bindEv(warp, 'mouseover', stopAutoPlay);
bindEv(warp, 'mouseout', autoPlay);
bindEv(sliderPrev, 'click', prev);
bindEv(sliderNext, 'click', next);
function prev() {
    i --;
    detect();
    moveToIndex(sliderImages, i);
}
function next() {
    i ++;
    moveToIndex(sliderImages, i);
}
function stopAutoPlay(){
    clearInterval(timer);
}

function detect(){
    if(i < 0){
        i = 2;
    }
}
function highLightPointer(){
    for(var j = 0; j < pointer.length; j++){
        pointer[j].className = pointer[j].className = 'banner__pointer--item' + (j === (i % 2) ?  ' banner__pointer--active' :  '');
    }
}
/*******************************官方动态*******************************/
var timer1 = null;
var score = 0;
var newContent = document.getElementsByClassName("news__content")[0];
var ruroll = function () {
    timer1 = setInterval(function () {
        score++;
        roll(newContent, score);
    },2000)
};
ruroll();
function roll(dom,index) {
    dom.style.top = (-36) * (index % 2) + 'px';
}
bindEv(newContent, 'mouseover', stopruroll);
bindEv(newContent, 'mouseleave', ruroll);
function stopruroll(){
    clearInterval(timer1);
}

/********************************五大体系********************************/

/*var timer2 = null;
var a = 0;
var ImgsArr = ['icon1.png', 'icon2.png', 'icon3.png', 'icon4.png', 'icon5.png'];
var ImgsArr1 = ['icon2-2.png', 'icon3-3.png', 'icon102.png', 'icon5-5.png', 'icon1-5.png'];
var logoLiBox = document.getElementsByClassName("fiveSystem__Focus")[0].getElementsByClassName("service__item");
var logoImgs = document.getElementsByClassName("fiveSystem__Focus")[0].getElementsByTagName("img");
var spans = document.getElementsByClassName("fiveSystem__Focus")[0].getElementsByTagName("span");
var intro = document.getElementsByClassName("fiveSystem__FocusBd_content-item");
for(var i = 0; i < logoLiBox.length; i++){
    (function (item) {
        logoLiBox[i].onclick = function() {
            logoImgs[item].src = '../images/first_images/' + ImgsArr[item];
            spans[item].style.color = '#2597ba';
        };
        logoLiBox[i].onmouseout = function() {
            timer2 = setInterval(changeLogoImg,2000);
            logoImgs[item].src = '../images/first_images/' + ImgsArr1[item];
            spans[item].style.color = '#959595';
        }
    })(i);
}
for(var i = 0; i < logoLiBox.length; i++){
    (function (item) {
        logoLiBox[i].onmouseover = function() {
            clearInterval(timer2);
            logoImgs[item].src = '../images/first_images/' + ImgsArr[item];
            spans[item].style.color = '#2597ba';
            console.log(item);
            intro[item].style.display = "block";
            for(var j = 0; j < item; j++){
                logoImgs[j].src = '../images/first_images/' + ImgsArr1[j];
                spans[j].style.color = '#959595';
                intro[j].style.display = "none";
            }
            for(var k = item+1; k < 5;k++){
                logoImgs[k].src = '../images/first_images/' + ImgsArr1[k];
                spans[k].style.color = '#959595';
            }
            a = item+1;
        };

    })(i);
}
var changeLogoImg = function() {
    if(a>4){
        a = 0;
    }
    logoLiBox[a].onclick();

    for(var j = 0; j < a; j++){
        logoImgs[j].src = '../images/first_images/' + ImgsArr1[j];
        spans[j].style.color = '#959595';
        intro[j].style.display = "none";

    }
    for(var k = a+1; k <5;k++){
        logoImgs[k].src = '../images/first_images/' + ImgsArr1[k];
        spans[k].style.color = '#959595';
    }
    intro[a].style.display = "block";
    a++;
};
timer2 = setInterval(changeLogoImg,1000);*/
var timer2 = null;
var score2 = 0;
var a = 0;
var ImgsArr = ['icon1.png', 'icon2.png', 'icon3.png', 'icon4.png', 'icon5.png'];
var ImgsArr1 = ['icon2-2.png', 'icon3-3.png', 'icon102.png', 'icon5-5.png', 'icon1-5.png'];
var logoLiBox = document.getElementsByClassName("system--container")[0].getElementsByClassName("service__item");
var logoImgs = document.getElementsByClassName("system--container")[0].getElementsByTagName("img");
var spans = document.getElementsByClassName("system--container")[0].getElementsByTagName("span");
var licomment_news = document.getElementsByClassName("details__item");
for(var i = 0; i < logoLiBox.length; i++){
    (function (item) {
        logoLiBox[i].onclick = function() {
            logoImgs[item].src = '../images/first_images/' + ImgsArr[item];
            spans[item].style.color = '#2597ba';
        };
        logoLiBox[i].onmouseout = function() {
            timer2 = setInterval(changeLogoImg,2000);
            logoImgs[item].src = '../images/first_images/' + ImgsArr1[item];
            spans[item].style.color = '#959595';
        }
    })(i);
}
for(var i = 0; i < logoLiBox.length; i++){
    (function (item) {
        logoLiBox[i].onmouseover = function() {
            clearInterval(timer2);
            logoImgs[item].src = '../images/first_images/' + ImgsArr[item];
            spans[item].style.color = '#2597ba';
            console.log(item);
            licomment_news[item].style.display = "block";
            for(var j = 0; j < item; j++){
                logoImgs[j].src = '../images/first_images/' + ImgsArr1[j];
                spans[j].style.color = '#959595';
                licomment_news[j].style.display = "none";
            }
            for(var k = item+1; k < 5;k++){
                logoImgs[k].src = '../images/first_images/' + ImgsArr1[k];
                spans[k].style.color = '#959595';
            }
            a = item+1;
        };

    })(i);
}
var changeLogoImg = function() {
    if(a>4){
        a = 0;
    }
    logoLiBox[a].onclick();

    for(var j = 0; j < a; j++){
        logoImgs[j].src = '../images/first_images/' + ImgsArr1[j];
        spans[j].style.color = '#959595';
        licomment_news[j].style.display = "none";
    }
    for(var k = a+1; k < 5;k++){
        logoImgs[k].src = '../images/first_images/' + ImgsArr1[k];
        spans[k].style.color = '#959595';
    }
    licomment_news[a].style.display = "block";
    a++;
};
timer2 = setInterval(changeLogoImg,1000);


/*******************************客户案例*******************************/
var sliderContainer = document.getElementsByClassName('case_slider')[0];
var CaseImages = document.getElementsByClassName('slider--images')[0];
var CasePrev = document.getElementsByClassName('slider--prev')[0];
var CaseNext = document.getElementsByClassName('slider--next')[0];
var sliderPointerItem = document.getElementsByClassName('slider--pointer__item');
var casei = 0;
var casetimer = null;
function CaseautoPlay() {
    casetimer = setInterval(function () {
        casei++;
        CasemoveToIndex(CaseImages, casei);
    }, 2000)
}
CaseautoPlay();
function CasemoveToIndex(dom, index) {
    dom.style.left = -1200 * (index % 3) + "px";
    CasehighLightPointer();
}
bindEv(sliderContainer, 'mouseover', casestopAutoPlay);
bindEv(sliderContainer, 'mouseout', CaseautoPlay);
bindEv(CasePrev, 'click', caseprev);
bindEv(CaseNext, 'click', casenext);
function caseprev() {
    casei--;
    casedetect();
    CasemoveToIndex(CaseImages, casei);
}
function casenext() {
    casei++;
    CasemoveToIndex(CaseImages, casei);
}
function casestopAutoPlay() {
    clearInterval(casetimer);
}
function casedetect(){
    if(casei < 0){
        casei  = 3;
    }
}
function CasehighLightPointer(){
    for (var j = 0; j < sliderPointerItem.length ; j++) {
        sliderPointerItem[j].className = 'slider--pointer__item' + (j===(casei % 3) ? ' slider--pointer__item-highLight' : ' ');
    }
}
var imgCaseItem = document.getElementsByClassName("imgCase-item");
var avatarItem = document.getElementsByClassName('picFocus-hd')[0].getElementsByTagName('li');
var briefItem = document.getElementsByClassName('picFocus-bd')[0].getElementsByTagName('li');
var imgCaseI = 0;
var imgCasetimer = null;
function imgCaseautoPlay() {
    imgCasetimer = setInterval(function () {
        imgCaseI++;
        imgCasemoveToIndex(imgCaseItem, imgCaseI);
    }, 2000)
}
imgCaseautoPlay();
function imgCasemoveToIndex(dom, index) {

    CasehighLightPointer();
}
/*******************************人物简介*******************************/
var person = document.getElementsByClassName('picFocus-hd')[0].getElementsByTagName('li');
var presentation = document.getElementsByClassName('picFocus-bd')[0].getElementsByTagName('li');
var manImg = document.getElementsByClassName('item__headPortrait');
var company = document.getElementsByClassName('company');
var position = document.getElementsByClassName('position');
var manName = document.getElementsByClassName('manName');
var suffix = 0;
var  ManTimer;
console.log(manImg);
person[0].style.color = '##f19149';
for(var i = 0; i < person.length; i++){
    person[i].index = i;
    person[i].onmousemove = function () {
        var num = parseInt(this.index);
        for(var j = 0; j <person.length; j++){
            presentation[j].style.display='none';
            person[j].style.color='#ffffff';
            company[j].style.color='#ffffff';
            manName[j].style.color='#ffffff';
            position[j].style.color='#ffffff';
            manImg[j].style.border = '4px solid transparent';
        }
        presentation[num].style.display='block';
        manImg[num].style.border = '4px solid #f19149';
        company[num].style.color = '#f19149';
        position[num].style.color = '#f19149';
        manName[num].style.color = '#f19149';
        // clearInterval(ManTimer);
    };
   /* person[i].onclick = function(){
      clearInterval(ManTimer);
    };*/
    person[i].onmouseout = function () {
        ManTimer();
    };
    person[i].onmouseover = function () {
        clearInterval(ManTimer);
    };
    peopleItem();
}
peopleItem();
function peopleItem() {
    if(suffix>4){
        suffix = 0;
    }
    person[suffix].onmousemove();
    suffix++;
}
ManTimer = setInterval(peopleItem,2000);



/*******************************最新动态*******************************/
var titleItems = document.getElementsByClassName('dynamicTitle')[0].getElementsByTagName('li');
var contentItems = document.getElementsByClassName('messageInfo')[0].getElementsByTagName('ul');
console.log(titleItems);
titleItems[0].style.color='#2597ba';
for(var i=0;i< titleItems.length;i++){
    titleItems[i].index=i;
    titleItems[i].onmousemove=function(){
        var num=parseInt(this.index);
        for(var j = 0;j < titleItems.length;j++){
            contentItems[j].style.display='none';
            titleItems[j].style.color='#535353'
        }
        contentItems[num].style.display='block';
        titleItems[num].style.color='#2597ba';
    }
}

/*右侧咨询*/
var consult = document.getElementsByClassName('wrap--consult')[0];
var consultOne = document.getElementsByClassName('consultOne')[0];
var noColorPhone = document.getElementsByClassName('noColorPhone')[0];
var phoneInfo = document.getElementsByClassName('phoneInfo')[0];
var withColorPhone = document.getElementsByClassName('withColorPhone')[0];
var consultTwo = document.getElementsByClassName('consultTwo')[0];
var noColorWeiXin = document.getElementsByClassName('noColorWeiXin')[0];
var weiXinCode = document.getElementsByClassName('weiXinCode')[0];
var withColorWeiXin = document.getElementsByClassName('withColorWeiXin')[0];
var consultThree = document.getElementsByClassName('consultThree')[0];
var noColorQQ = document.getElementsByClassName('noColorQQ')[0];
var withColorQQ = document.getElementsByClassName('withColorQQ')[0];
var consultFour = document.getElementsByClassName('consultFour')[0];
var noColorArrow = document.getElementsByClassName('noColorArrow')[0];
var withColorArrow = document.getElementsByClassName('withColorArrow')[0];

consultOne.onmouseenter = function () {
    phoneInfo.style.display = 'block';
    noColorPhone.style.display = 'none';
    withColorPhone.style.display = 'block';
};
consultOne.onmouseleave = function () {
    phoneInfo.style.display = 'none';
    noColorPhone.style.display = 'block';
    withColorPhone.style.display = 'none';
};
consultTwo.onmouseenter = function () {
    noColorWeiXin.style.display = 'none';
    weiXinCode.style.display = 'block';
    withColorWeiXin.style.display = 'block';
};
consultTwo.onmouseleave = function () {
    noColorWeiXin.style.display = 'block';
    weiXinCode.style.display = 'none';
    withColorWeiXin.style.display = 'none';
};
consultThree.onmouseenter = function () {
    noColorQQ.style.display = 'none';
    withColorQQ.style.display = 'block';
};
consultThree.onmouseleave = function () {
    noColorQQ.style.display = 'block';
    withColorQQ.style.display = 'none';
};
consultFour.onmouseenter = function () {
    noColorArrow.style.display = 'none';
    withColorArrow.style.display = 'block';
};
consultFour.onmouseleave = function () {
    noColorArrow.style.display = 'block';
    withColorArrow.style.display = 'none';
};

/********************遮罩层js*********************/
var mask = document.getElementsByClassName('container--mask')[0];
var del = document.getElementsByClassName('submit--item__text2')[0];
var footBtn = document.getElementsByClassName('foot_but')[0];
var apply = document.getElementsByClassName('apply')[0];
var _label = document.getElementsByClassName('input--label')[0];
var covBtn = document.getElementsByClassName('coverlist--btn')[0];
var cov = document.getElementsByClassName('coverlist')[0];
var covSpan = document.getElementsByClassName('coverlist--span');
var covDiv = document.getElementsByClassName('coverlist--div');
var serve = document.getElementsByClassName('input--four')[0];
var tis1 = document.getElementsByClassName('tishi')[0];
var tis2 = document.getElementsByClassName('tishi')[1];
var tis3 = document.getElementsByClassName('tishi')[2];
var affirmBtn = document.getElementsByClassName('container--mask__submit__btn')[0];
var inputName = document.getElementsByClassName('input--one')[0];
var inputTel = document.getElementsByClassName('input--two')[0];
var inputAdd = document.getElementsByClassName('input--three')[0];
var item = true;
var res = "";
var reg = /^1[3456789][0123456789][0123456789][0123456789][0123456789][0123456789][0123456789][0123456789][0123456789][0123456789]$/;
footBtn.onclick = function () {
    mask.style.display = 'block';
};
apply.onclick = function(){
    mask.style.display = 'block';
};
del.onclick = function () {
    mask.style.display = 'none';
};
_label.onclick = function () {
    res = "";
    for (var j = 0; j < covSpan.length; j++){
        covDiv[j].style.color = '#858585';
        covSpan[j].style.backgroundColor = "#ffffff";
    }
    cov.style.display = 'block';
};

for (var i = 0; i < covSpan.length; i++) {
    (function (index) {
        covSpan[i].onclick = function () {
            item ? (item = false) : (item = true);
            if(item){
                this.style.backgroundColor = "#ffffff";
                covDiv[index].style.color = '#858585';
            }else {
                this.style.backgroundColor = "#2597ba";
                covDiv[index].style.color = '#2597BA';
            }
            if(item !== true){
                res += covDiv[index].innerText;
            }
        }
    })(i)
}
covBtn.onclick = function () {
    cov.style.display = 'none';
    serve.innerText = res;
};
affirmBtn.onclick = function () {
    tis1.innerText = "";
    if(inputName.value === ""){
        tis1.innerText = "请输入您的姓名！";
    }else if(inputTel.value === ""){
        tis2.innerText = "请输入您的电话号码！";
    }else if(inputTel.value.replace(reg,"")){
        tis2.innerText = "请输入正确的电话号码！";
    }else if(inputAdd.value === ""){
        tis3.innerText = "请输入您的公司名称！";
    }else {
        alert("提交成功");
        mask.style.display = 'none';
    }
};