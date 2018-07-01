var mySwiper1 = new Swiper('.swiper-container1', {
    // autoplay: true,//可选选项，自动滑动
    slidesPerView: 'auto',
    loopedSlides: 2,
    freeMode : true,
});
var mySwiper = new Swiper('.swiper-container', {
    // autoplay: true,//可选选项，自动滑动
    // slidesPerView: 'auto',
    // loopedSlides: 2,
    pagination: {
        el: '.swiper-pagination',
    },
})

layui.use('element', function(){
    var $ = layui.jquery
        ,element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块
});

// 判断下拉高度，设置导航栏是否固定顶部
$(function () {
    // var nav=$("#layuiTab"); //得到导航对象
    // var navH = $("#layuiTab").offset().top ;
    // console.log(navH)
    // //绑定滚动条事件
    // $(window).bind("scroll", function () {
    //     var sTop = $(window).scrollTop();
    //     var sTop = parseInt(sTop);
    //     var layuiTab = document.getElementById("layuiTab");
    //     if (sTop >= navH) {
    //         // console.log("11111111");
    //         layuiTab.style.position = "fixed";
    //         layuiTab.style.top = "0";
    //         layuiTab.style.left = "0";
    //         // console.log("111111111aaa"+sTop)
    //     }
    //     else {
    //         // console.log("2222222");
    //         layuiTab.style.position = "absolute";
    //         layuiTab.style.top = "300px";
    //         // console.log("22222222aa"+sTop)
    //     }
    // });

    var nav=$(".layuiTab"); //得到导航对象
    var win=$(window); //得到窗口对象
    var sTop=$(document);//得到document文档对象
    var navHeight = $(".layuiTab").offset().top ;
    // console.log(navH)
    win.scroll(function() {
        if (sTop.scrollTop() >= navHeight) {
            nav.addClass("fixednav");
        } else {
            nav.removeClass("fixednav");
        }
    })
});