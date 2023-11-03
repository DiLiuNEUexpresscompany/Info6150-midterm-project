// 获取按钮和下拉菜单元素
const button = document.getElementById('dropdownInformationButton');
const dropdown = document.getElementById('dropdownInformation');

// 添加鼠标悬停事件监听器
button.addEventListener('mouseover', function() {
  dropdown.classList.remove('hidden');
});

dropdown.addEventListener('mouseover', function() {
  dropdown.classList.remove('hidden');
});

button.addEventListener('mouseout', function() {
  dropdown.classList.add('hidden');
});

dropdown.addEventListener('mouseout', function() {
  dropdown.classList.add('hidden');
});
