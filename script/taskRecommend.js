//人物介绍
var peopleItems = document.getElementsByClassName('peoples')[0].getElementsByTagName('li');
var produceItems = document.getElementsByClassName('synopsis')[0].getElementsByTagName('li');
var span = document.getElementsByClassName('item__monicker');
var span2 = document.getElementsByClassName('item__position');
var span3 = document.getElementsByClassName('item__name');
var Img = document.getElementsByClassName('item__headPortrait');
var aaa = 0;
console.log(Img);
peopleItems[0].style.color = '#f19149';
for (var i = 0; i < peopleItems.length; i++) {
    peopleItems[i].index = i;
    peopleItems[i].onmousemove = function () {
        var num = parseInt(this.index);
        for (var j = 0; j < peopleItems.length; j++) {
            produceItems[j].style.display = 'none';
            peopleItems[j].style.color = '#ffffff';
            span[j].style.color = '#ffffff';
            span2[j].style.color = '#ffffff';
            span3[j].style.color = '#ffffff';
            Img[j].style.border = '4px solid transparent';
        }
        produceItems[num].style.display = 'block';
        Img[num].style.border = '4px solid #f19149';
        // peopleItems[num].style.color= '#f19149';
        span[num].style.color = '#f19149';
        span2[num].style.color = '#f19149';
        span3[num].style.color = '#f19149';
    }
}

function peopleItem() {
    if (aaa > 4) {
        aaa = 0;
    }
    peopleItems[aaa].onmousemove();
    aaa++;
}

var  timerTwo = setInterval(peopleItem,3000);



