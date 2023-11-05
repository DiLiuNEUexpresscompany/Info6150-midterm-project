const addButton = document.getElementById('addcomment');
const commentText = document.getElementById('comment');
const addedText = document.getElementById('addedText');

addButton.addEventListener('click', function() {
  if (commentText.value !== '') { // 只有当文本框非空时才添加
    const newText = document.createElement('p');
    newText.textContent = commentText.value;
    addedText.appendChild(newText);
    commentText.value = ''; // 清空文本框
  }
});
