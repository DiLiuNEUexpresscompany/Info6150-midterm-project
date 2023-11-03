const scrollToTopButton = document.getElementById('scrollToTopButton');

// 监听窗口的滚动事件
window.addEventListener('scroll', () => {
  // 获取滚动距离
  const scrollY = window.scrollY;
  
  // 检查滚动距离是否大于某个值（例如500），如果是则显示按钮，否则隐藏按钮
  if (scrollY > 200) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

// 监听按钮的点击事件
scrollToTopButton.addEventListener('click', () => {
  // 使用平滑滚动将页面滚动到顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});