// 找到回到顶部按钮元素
var backToTopButton = document.querySelector('.back-to-top');

// 添加点击事件监听器
backToTopButton.addEventListener('click', function() {
    // 滚动到页面顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动效果
    });
});
