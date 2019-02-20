//最新动态
var titleItems = document.getElementsByClassName('left-Title')[0].getElementsByTagName('li');
var contentItems = document.getElementsByClassName('left-Info')[0].getElementsByTagName('ul');
console.log(titleItems);
titleItems[0].style.color = '#2597ba';
for (var i = 0; i < titleItems.length; i++) {
    titleItems[i].index = i;
    titleItems[i].onmousemove = function () {
        var num = parseInt(this.index);
        for (var j = 0; j < titleItems.length; j++) {
            contentItems[j].style.display = 'none';
            titleItems[j].style.color = '#535353'
        }
        contentItems[num].style.display = 'block';
        titleItems[num].style.color = '#2597ba';
    }
}