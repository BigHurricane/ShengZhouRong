/*右边导航*/
var rightLogoArr1 = ['icon16.png','icon17.png','icon18.png','icon19.png'];
var rightLogoArr2 = ['icon20dzf.png','icon21dzf.png','icon18dzf.png','icon23.png'];
var containerRight1 = document.getElementsByClassName("container_right1")[0];
var containerRight2 = document.getElementsByClassName("container_right2")[0];
var containerRight3 = document.getElementsByClassName("container_right3")[0];
var containerRight4 = document.getElementsByClassName("container_right4")[0];


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
    this.getElementsByClassName("img4")[0].src = "../images/first_images/" + rightLogoArr2[3];
};
containerRight4.onmouseleave = function() {
    this.getElementsByClassName("img4")[0].src = "../images/first_images/" + rightLogoArr1[3];
    this.getElementsByClassName("img4")[0].style.marginTop = "-5px";
};

window.onscroll = function(e){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if(t > 400) {
        containerRight4.style.display = "block";
    }
    if(t <= 400){
        containerRight4.style.display = "none";
    }
};