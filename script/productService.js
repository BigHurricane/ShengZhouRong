var Style;
var k = -1;
var list_Title = document.getElementsByClassName("credit--listTitle");
var sliderImg = document.getElementsByClassName('sliderBox--temp__body')[0];
var sliderCon = document.getElementsByClassName('middle--about__containerTwo-creditLeft--list')[0];
var sliderPrev = document.getElementsByClassName('prev')[0];
var sliderNext = document.getElementsByClassName('next')[0];
var sliderPointer = document.getElementsByClassName('credit--listTitle');
sliderPrev.onclick = function () {
    alert(12);
};
function Slider(config) {
    this.config = config;
    this.i = 0;
    this.timer = null;
    this.autoPlay();
    this.bindEvent();
}
Slider.prototype = {
    autoPlay : function () {
        var self = this;
        this.timer = setInterval(function () {
            self.i ++;
            self.moveToIndex(self.config.dom,self.i);
        },2000);
    },
    moveToIndex : function(dom,index){
        dom.style.left = -(this.config.width) * (index % this.config.length)+"px";
        this.linkage();
    },
    bindEvent : function(){
        var self = this;
        this.config.dom.onmouseover = function () {
            self.stopAutoPlay();
        };
        this.config.dom.onmouseout = function () {
            self.autoPlay();
        };
        this.config.prev.onclick = function () {
            self.prev();
        };
        this.config.next.onclick = function () {
            self.next();
        };

    },
    stopAutoPlay : function () {
        clearInterval(this.timer);
    },
    prev : function () {
        this.i --;
        this.derect();
        this.moveToIndex(this.config.dom,this.i);
    },
    next : function (){
        this.i ++;
        this.moveToIndex(this.config.dom,this.i);
    },
    derect : function () {
        if (this.i < 0){
            this.i = this.config.length-1;
        }
    },
    linkage: function () {
        for (var j = 0; j < this.config.listItem.length; j++) {
            this.config.listItem[j].style.backgroundColor = (j === (this.i % this.config.length)) ? '#2597ba' : 'white';
            this.config.direct[j].className = (j === (this.i % this.config.length)) ? 'credit--listTitle'+' on-' + j :'credit--listTitle'+' one' + j;
        }
    }
};
new Slider({
    dom : sliderImg,
    prev : sliderPrev,
    next : sliderNext,
    listWrap : sliderImg,
    listItem : sliderPointer,
    direct : list_Title,
    width : 1200,
    length : 3
});

var PClogo = document.getElementsByClassName('PClogo')[0];
var header = document.getElementsByClassName('header')[0];
var nav_a = document.getElementsByClassName('wrap')[0].getElementsByClassName('a1');
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
    }
    if(t<=300){
        PClogo.src = "../images/first_images/logo1.png";
        header.style.background= "";
        for(var i = 0; i < nav_a.length; i++){
            nav_a[i].style.color = '#fff';
            containerRight4.style.display = "none";
        }
    }
};


window.onload = function() {
    var con = document.getElementsByClassName("container")[0];
    var dir = document.getElementsByClassName("direct")[0];
    var name1 = document.getElementsByClassName("name")[0];
    var num = document.getElementsByClassName("phone")[0];
    var company = document.getElementsByClassName("company")[0];
    var need1 = document.getElementsByClassName("need")[0];
    var down1 = document.getElementsByClassName("middle--about__titleList--free")[0];
    var mask1 = document.getElementsByClassName("mask--con")[0];
    var btn1 = document.getElementsByClassName("submit1")[0];
    var hide1 = document.getElementsByClassName("hide1")[0];
    var hide2 = document.getElementsByClassName("hide2")[0];
    var hide3 = document.getElementsByClassName("hide3")[0];
    var checkout = document.getElementsByClassName("ck1");
    var checkout2 = document.getElementsByClassName("ck2");
    var btnn = document.getElementsByClassName("btn2")[0];
    var service1 = document.getElementsByClassName("service")[0];
    var nameReg = /[\u4e00-\u9fa5]{2,4}/;
    var numReg = /^[0-9]{11}$/;
    var comReg = /[\u4e00-\u9fa5]{2,}/g;
    var tryOut =document.getElementsByClassName('try-out')[0];
    console.log(tryOut);
    var holder1 =document.getElementsByClassName('holder1')[0];
    var changeMask = document.getElementsByClassName("changeMask")[0];
    var changeMask1 = document.getElementsByClassName("changeMask1")[0];
    changeMask.onclick = function() {
        mask1.style.display = "block";
        return false;
    };
    dir.onclick = function () {
       mask1.style.display = "none";
    };
    changeMask1.onclick = function() {
        mask1.style.display = "block";
        window.scrollTo(0,0);
    };
    function nul(obj) {
        obj.onfocus = function () {
            obj.value = '';
        };
        obj.onfocus = function () {
            obj.value = '';
        }
    }

    nul(name1);
    nul(num);
    nul(company);
    nul(need1);
    btn1.onclick = function () {
        if (name1.value === '') {
            hide1.style.display = 'block';
        } else if (num.value === '') {
            hide2.style.display = 'block';
        }else if (company.value === '') {
            hide3.style.display = 'block';
        } else if (!nameReg.test(name1.value)) {
            alert('请输入合法汉字名称');
        } else if (!numReg.test(num.value)) {
            alert('请输入正确格式的11位数电话')
        } else if (!comReg.test(company.value)) {
            alert('请输入正确格式的公司地址')
        }
        else{
            alert("提交成功");
        }
    };
    down1.onclick = function () {
        mask1.style.display = 'block';
    };

    btnn.onclick = function () {
        var str = '';
        for (var i = 0; i < checkout.length; i++) {
            if (checkout[i].checked === true) {
                str += checkout2[i].innerText;
            }
        }
        service1.value = str;
        mask1.style.display = 'none';
    }
};
