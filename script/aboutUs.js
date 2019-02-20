
var companyIntroduce=document.getElementsByClassName('companyIntroduce')[0];
var companyPartner=document.getElementsByClassName('companyPartner')[0];
var companyIntro=document.getElementsByClassName('companyIntroduction')[0];
var partners=document.getElementsByClassName('partners')[0];
companyIntroduce.onmouseenter=function () {
    companyIntro.style.display='block';
    partners.style.display='none';
};
companyPartner.onmouseenter=function () {
    companyIntro.style.display='none';
    partners.style.display='block';
};


//导航
var rightLogoArr1 = ['icon16.png','icon17.png','icon18.png','icon19.png'];
var rightLogoArr2 = ['icon20dzf.png','icon21dzf.png','icon18dzf.png','icon23.png'];
var containerRight1 = document.getElementsByClassName("container_right1")[0];
var containerRight2 = document.getElementsByClassName("container_right2")[0];
var containerRight3 = document.getElementsByClassName("container_right3")[0];
var containerRight4 = document.getElementsByClassName("container_right4")[0];


containerRight1.onmouseenter = function() {
    this.getElementsByClassName("img1")[0].src = "../images/about_images/" + rightLogoArr2[0];
    // this.getElementsByClassName("img1")[0].src
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
var PClogo = document.getElementsByClassName("PClogo")[0];
var header = document.getElementsByClassName("header")[0];
var nav_a = document.getElementsByClassName("wrap")[0].getElementsByClassName("header-nav-item");
window.onscroll = function(e){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(t);
    if(t>300){
        PClogo.src = "../images/first_images/iphone_logo.png";
        header.style.background= "#fff";
        header.style.borderBottom = '1px solid #ccc';
        for(var i = 0; i < nav_a.length; i++){
            nav_a[i].style.color = '#000';
        }
        containerRight4.style.display = "block";
    }
    if(t<=300){
        PClogo.src = "../images/first_images/logo1.png";
        header.style.background= "";
        header.style.borderBottom = '';
        for(var i = 0; i < nav_a.length; i++){
            nav_a[i].style.color = '#fff';
        }
        containerRight4.style.display = "none";
    }
};