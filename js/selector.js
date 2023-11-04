function toggleSelection(element) {
    // 切换选中状态
    const radioButton = element.querySelector('input[type="radio"]');
    radioButton.checked = !radioButton.checked;
  
    // 更改样式
    if (element.classList.contains("borderingo")) {
      element.classList.remove("border", "borderingo");
      element.classList.add("border-2", "border-transparent");
    } else {
      element.classList.add("border", "borderingo");
      element.classList.remove("border-2", "border-transparent");
    }
  }
  