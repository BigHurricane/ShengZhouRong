/*导航*/
var PClogo = document.getElementsByClassName("logo")[0];
var header = document.getElementsByClassName("case-header")[0];
var nav_a = document.getElementsByClassName("wrap")[0].getElementsByClassName("header-list_a");
/*右边导航*/
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
window.onscroll = function (e) {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(t);
    if (t > 300) {
        PClogo.src = "../images/first_images/iphone_logo.png";
        header.style.background = "#fff";
        for (var i = 0; i < nav_a.length; i++) {
            nav_a[i].style.color = '#000';
            containerRight4.style.display = "block";
            containerRight4.onclick = function () {
                window.scrollTo(0, 0);
            }
        }
    }
    if (t <= 300) {
        PClogo.src = "../images/first_images/logo1.png";
        header.style.background = "";
        for (var i = 0; i < nav_a.length; i++) {
            nav_a[i].style.color = '#fff';
            containerRight4.style.display = "none";
        }
    }
};
/*mask*/
var mask = document.getElementsByClassName('container--mask')[0];
var del = document.getElementsByClassName('submit--item__text2')[0];
var footBtn = document.getElementsByClassName('foot_but')[0];
var apply = document.getElementsByClassName('apply')[0];
var _label = document.getElementsByClassName('input--label')[0];
var covBtn = document.getElementsByClassName('cover-list--btn')[0];
var cov = document.getElementsByClassName('cover-list')[0];
var covSpan = document.getElementsByClassName('cover-list--span');
var covDiv = document.getElementsByClassName('cover-list--div');
var serve = document.getElementsByClassName('input--four')[0];
var tis1 = document.getElementsByClassName('hint')[0];
var tis2 = document.getElementsByClassName('hint')[1];
var tis3 = document.getElementsByClassName('hint')[2];
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
apply.onclick = function () {
    mask.style.display = 'block';
    return false;
};
del.onclick = function () {
    mask.style.display = 'none';
};
_label.onclick = function () {
    res = "";
    for (var j = 0; j < covSpan.length; j++) {
        covDiv[j].style.color = '#858585';
        covSpan[j].style.backgroundColor = "#ffffff";
    }
    cov.style.display = 'block';
};
for (var i = 0; i < covSpan.length; i++) {
    (function (index) {
        covSpan[i].onclick = function () {
            item ? (item = false) : (item = true);
            if (item) {
                this.style.backgroundColor = "#ffffff";
                covDiv[index].style.color = '#858585';
            } else {
                this.style.backgroundColor = "#2597ba";
                covDiv[index].style.color = '#2597BA';
            }
            if (item !== true) {
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
    if (inputName.value === "") {
        tis1.innerText = "请输入您的姓名！";
    } else if (inputTel.value === "") {
        tis2.innerText = "请输入您的电话号码！";
    } else if (inputTel.value.replace(reg, "")) {
        tis2.innerText = "请输入正确的电话号码！";
    } else if (inputAdd.value === "") {
        tis3.innerText = "请输入您的公司名称！";
    } else {
        alert("提交成功");
        mask.style.display = 'none';
    }
};


