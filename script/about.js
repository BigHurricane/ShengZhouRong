
    var box = document.getElementsByClassName("sliderBox")[0];
    var imgs = document.getElementsByTagName("img");
    var ulBox = document.getElementsByClassName("ulBox")[0];
    var prevs = document.getElementsByClassName("left")[0];
    var nexts  = document.getElementsByClassName("right")[0];
    var pointer = document.getElementsByClassName("pointerBox")[0].getElementsByTagName("li");
    var score = 0;
    var timer = null;

    var changes = function() {
        for(var i = 0; i < pointer.length; i++){
            (function(item){
                pointer[i].onmouseenter = function() {
                    ulBox.style.left = -1903*(item % 2) + "px";
                    for (var j = 0; j < pointer.length ; j++) {
                        pointer[j].className = 'commentStyle' + (j===(item % 2) ? ' on' : ' ');
                    }
                }
            })(i);
        }
    };
    setInterval(changes,2000);
    function autoPlays() {
        timer = setInterval(function () {
            score++;
            moveToIndex(ulBox, score);
        }, 2000)
    }
    function moveToIndex(dom, index) {
        dom.style.left = -1903*(index % 2) + "px";
        highLightPointer();
    }
    function bindEv(dom, type, fn) {
        dom['on' + type] = fn;
    }
    bindEv(box, 'mouseover', stopAutoPlay);
    bindEv(box, 'mouseout', autoPlays);
    bindEv(prevs, 'click', prev);
    bindEv(nexts, 'click', next);
    function prev() {
        score--;
        detect();
        moveToIndex(ulBox, score);
    }
    function next() {
        score++;
        moveToIndex(ulBox, score);
    }
    function stopAutoPlay() {
        clearInterval(timer);
    }
    function detect(){
        if(score < 0){
            score  = 2;
        }
    }
    function highLightPointer(){
        for (var j = 0; j < pointer.length ; j++) {
            pointer[j].className = 'commentStyle' + (j===(score % 2) ? ' on' : ' ');
        }
    }
    autoPlays();




    /*官方动态*/
    var timer1 = null;
    var score1 = 0;
    var newBox = document.getElementsByClassName("newsBox")[0];
    var upanimation = function() {
        score1++;
        score1 = score1 == 2?0:score1;
        newBox.style.top = -36*score1 + "px";
    };
    timer1 = setInterval(upanimation,2000);
    newBox.onmouseenter = function() {
         clearInterval(timer1);
    };
    newBox.onmouseleave = function() {
        timer1 = setInterval(upanimation,2000);
    };


   /*图片导航*/
   var timer2 = null;
   var score2 = 0;
   var a = 0;
   var ImgsArr = ['icon1.png', 'icon2.png', 'icon3.png', 'icon4.png', 'icon5.png'];
   var ImgsArr1 = ['icon2-2.png', 'icon3-3.png', 'icon102.png', 'icon5-5.png', 'icon1-5.png'];
    var logoLiBox = document.getElementsByClassName("container")[0].getElementsByClassName("logoFirst");
   var logoImgs = document.getElementsByClassName("container")[0].getElementsByTagName("img");
   var spans = document.getElementsByClassName("container")[0].getElementsByTagName("span");
   var licomment_news = document.getElementsByClassName("liComment_news");

    for(var i = 0; i < logoLiBox.length; i++){
        (function (item) {
            logoLiBox[i].onclick = function() {
                logoImgs[item].src = '../images/first_images/' + ImgsArr[item];
                spans[item].style.color = '#2597ba';
            };
            logoLiBox[i].onmouseout = function() {
                timer2 = setInterval(changeLogoImg,3000);
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
    timer2 = setInterval(changeLogoImg,3000);


    /*导航*/
    var PClogo = document.getElementsByClassName("PClogo")[0];
    var header = document.getElementsByClassName("header")[0];
    var nav_a = document.getElementsByClassName("wrap")[0].getElementsByClassName("a1");

    /*右边导航*/
    var rightLogoArr1 = ['icon16.png','icon17.png','icon18.png','icon19.png'];
    var rightLogoArr2 = ['icon20dzf.png','icon21dzf.png','icon18dzf.png','icon23.png'];
    var containerRight1 = document.getElementsByClassName("container_right1")[0];
    var containerRight2 = document.getElementsByClassName("container_right2")[0];
    var containerRight3 = document.getElementsByClassName("container_right3")[0];
    var containerRight4 = document.getElementsByClassName("container_right4")[0];
    var bigBox = document.getElementsByClassName("bigBox")[0];

    containerRight1.onmouseenter = function() {
        this.getElementsByClassName("img1")[0].src = "../images/about_images/" + rightLogoArr2[0];
    };
    containerRight1.onmouseleave = function() {
        this.getElementsByClassName("img1")[0].src = "../images/about_images/" + rightLogoArr1[0];
    };

    containerRight2.onmouseenter = function() {
        this.getElementsByClassName("img2")[0].src = "../images/about_images/" + rightLogoArr2[1];
    };
    containerRight2.onmouseleave = function() {
        this.getElementsByClassName("img2")[0].src = "../images/about_images/" + rightLogoArr1[1];
    };

    containerRight3.onmouseenter = function() {
        this.getElementsByClassName("img3")[0].src = "../images/about_images/" + rightLogoArr2[2];
    };
    containerRight3.onmouseleave = function() {
        this.getElementsByClassName("img3")[0].src = "../images/about_images/" + rightLogoArr1[2];
    };

    containerRight4.onmouseenter = function() {
        this.getElementsByClassName("img4")[0].style.marginTop = "-7px";
        this.getElementsByClassName("img4")[0].src = "../images/first_images/" + rightLogoArr2[3];
    };
    containerRight4.onmouseleave = function() {
        this.getElementsByClassName("img4")[0].src = "../images/first_images/" + rightLogoArr1[3];
    };


    window.onscroll = function(e){
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(t);
        if(t>300){
            PClogo.src = "../images/first_images/iphone_logo.png";
            header.style.background= "#fff";
            for(var i = 0; i < nav_a.length; i++){
                nav_a[i].style.color = '#000';
                containerRight4.style.display = "block";
                containerRight4.onclick = function() {
                    window.scrollTo(0,0);
                }
            }
            header.style.borderBottom = "1px solid #ccc";
        }
        if(t<=300){
            PClogo.src = "../images/first_images/logo1.png";
            header.style.background= "";
            for(var i = 0; i < nav_a.length; i++){
                nav_a[i].style.color = '#fff';
                containerRight4.style.display = "none";
            }
            header.style.borderBottom = "";
        }
    };


