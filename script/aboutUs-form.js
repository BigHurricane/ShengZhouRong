window.onload = function() {
    var minBtn = document.getElementsByClassName("min-table-btn")[0];
    var tryUse = document.getElementsByClassName("tryUse")[0];
    var dir = document.getElementsByClassName("direct")[0];
    var name1 = document.getElementsByClassName("name")[0];
    var num = document.getElementsByClassName("yourPhone")[0];
    var company = document.getElementsByClassName("company")[0];
    var need1 = document.getElementsByClassName("need")[0];
    var down1 = document.getElementsByClassName("down")[0];
    var mask1 = document.getElementsByClassName("mask")[0];
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
    var tryOut =document.getElementsByClassName('try-out')[0]
    var holder1 =document.getElementsByClassName('holder1')[0];
    minBtn.onclick=function(){
        holder1.style.display='block';
    };
    tryUse.onclick=function(){
        holder1.style.display='block';
        return false;
    };
    tryOut.onclick=function(){
        holder1.style.display='block';
    };
    dir.onclick = function () {
        holder1.style.display='none';
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