// 获取导航栏元素
const navbar = document.getElementById('navbar');

// 监听窗口的滚动事件
window.addEventListener('scroll', () => {
  // 获取滚动距离
  const scrollY = window.scrollY;
  // 添加或移除过渡类
  if (scrollY > 700) {
    navbar.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'transition-navbar');
  } else {
    navbar.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'transition-navbar');
  }
});
