const scrollToTopButton = document.getElementById('scrollToTopButton');

window.addEventListener('scroll', () => {
  // 获取滚动距离
  const scrollY = window.scrollY;
  
  // 检查滚动距离是否大于200，如果是则显示按钮，否则隐藏按钮
  if (scrollY > 200) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

scrollToTopButton.addEventListener('click', () => {
  // 使用平滑滚动将页面滚动到顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});