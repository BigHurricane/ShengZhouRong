

window.onload = function() {
    ///////////////////////// 右边导航//////////////////////
    var rightLogoArr1 = ['icon16.png', 'icon17.png', 'icon18.png', 'icon19.png'];
    var rightLogoArr2 = ['icon20dzf.png', 'icon21dzf.png', 'icon18dzf.png', 'icon23.png'];
    var containerRight1 = document.getElementsByClassName("container_right1")[0];
    var containerRight2 = document.getElementsByClassName("container_right2")[0];
    var containerRight3 = document.getElementsByClassName("container_right3")[0];
    var containerRight4 = document.getElementsByClassName("container_right4")[0];


    containerRight1.onmouseenter = function () {
        this.getElementsByClassName("img1")[0].src = "../images/about_images/" + rightLogoArr2[0];
    };
    containerRight1.onmouseleave = function () {
        this.getElementsByClassName("img1")[0].src = "../images/about_images/" + rightLogoArr1[0];
    };

    containerRight2.onmouseenter = function () {
        this.getElementsByClassName("img2")[0].src = "../images/about_images/" + rightLogoArr2[1];
    };
    containerRight2.onmouseleave = function () {
        this.getElementsByClassName("img2")[0].src = "../images/about_images/" + rightLogoArr1[1];
    };

    containerRight3.onmouseenter = function () {
        this.getElementsByClassName("img3")[0].src = "../images/about_images/" + rightLogoArr2[2];
    };
    containerRight3.onmouseleave = function () {
        this.getElementsByClassName("img3")[0].src = "../images/about_images/" + rightLogoArr1[2];
    };

    containerRight4.onmouseenter = function () {
        this.getElementsByClassName("img4")[0].style.marginTop = "-7px";
        this.getElementsByClassName("img4")[0].src = "../images/first_images/" + rightLogoArr2[3];
    };
    containerRight4.onmouseleave = function () {
        this.getElementsByClassName("img4")[0].src = "../images/first_images/" + rightLogoArr1[3];

    };
    var PClogo = document.getElementsByClassName("PClogo")[0];
    var header = document.getElementsByClassName("header")[0];
    var nav_a = document.getElementsByClassName("wrap")[0].getElementsByClassName("a1");
    window.onscroll = function (e) {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(t);
        if (t > 300) {
            PClogo.src = "../images/first_images/iphone_logo.png";
            header.style.background = "#fff";
            header.style.borderBottom = '1px solid #ccc';
            for (var i = 0; i < nav_a.length; i++) {
                nav_a[i].style.color = '#000';
            }
            containerRight4.style.display = "block";
            containerRight4.onclick = function () {
                window.scrollTo(0, 0);
            }


        }
        if (t <= 300) {
            PClogo.src = "../images/first_images/logo1.png";
            header.style.background = "";
            header.style.borderBottom = '';
            for (var i = 0; i < nav_a.length; i++) {
                nav_a[i].style.color = '#fff';
            }
            containerRight4.style.display = "none";
        }
    }
    };

var tryOut = document.getElementsByClassName('a1')[4];
var cancel = document.getElementsByClassName('submit--item__text2')[0];
var __tryOut = document.getElementsByClassName('min-table-btn')[0];
var mask = document.getElementsByClassName('container--mask')[0];



__tryOut.onclick = function(){
  mask.style.display = 'block';
  return false;
};
tryOut.onclick = function () {
    mask.style.display = 'block';
    return false;
};
cancel.onclick = function () {
    mask.style.display = 'none';
};
