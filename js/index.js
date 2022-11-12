

//获取元素节点
let hotworld = document.querySelector('.hot-word');
let list = document.querySelector('.list');


//搜索表单关键字轮训
(function () {
    //切换输入框的关键字
    let hotWords = ['家用电器', '苹果电脑', '华为手机', "女鞋", '男装']
    let index = 0
    setInterval(function () {

        index++
        if (index > hotWords.length - 1) {
            index = 0
        }
        hotworld.placeholder = hotWords[index]
    }, 3000)
})();



//模糊查询  oninput当内容发生改变触发 onchange当内容确定改变， 失去焦点或回车时触发
let listarr = ['苹果手机', '华为手机', '魅族手机', '小米手机', '三星手机', '苹果13', '苹果12', '苹果promax', '苹果手表', '华为手表']
hotworld.oninput = function(){
    list.innerHTML = '';
    let value = hotworld.value;
    //和数组元素对比
    for (let i = 0; i < listarr.length; i++) {
        if(listarr[i].indexOf(value) !== -1){
            list.innerHTML += `<p>${listarr[i]}</p>`;
            list.style.display ='block';
        }
    }
}

hotworld.onblur = function(){
    list.style.display ='none';
}




