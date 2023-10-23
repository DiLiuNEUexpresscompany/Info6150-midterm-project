 // 显示的图片下标
 let index = 0
              
 // 图片的数量
 let imageCount = document.querySelectorAll(
     ".carousel .container img"
 ).length

 const bottom = document.querySelector(".carousel .bottom")
 for (let i = 0; i < imageCount; i++) {
     // DOM 操作
     // 知识点：https://3yya.com/courseware/chapter/162

     // 创建底部按钮
     const indicator = document.createElement("div")
     indicator.classList.add("indicator")
     indicator.onclick = () => setIndex(i)

     bottom.append(indicator)
 }

 function createAuto() {
     return setInterval(() => {
         index++
         refresh()
     }, 3000)
 }

 // 自动滚动
 let autoTimer = createAuto()

 function refresh() {
     if (index < 0) {
         // 下标小于 0 时
         // 设置最右的图片
         index = imageCount - 1
     } else if (index >= imageCount) {
         // 下标超过上限时
         // 设置最左的图片
         index = 0
     }

     // 获取轮播框元素
     let carousel = document.querySelector(".carousel")

     //获取轮播框的宽度
     let width = getComputedStyle(carousel).width
     width = Number(width.slice(0, -2))

     carousel.querySelector(".container").style.left =
         index * width * -1 + "px"
 }

 let refreshWrapper = (func) => {
     // refresh 装饰器
     return function (...args) {
         let result = func(...args)
         refresh()

         // 重置自动滚动
         clearInterval(autoTimer)
         autoTimer = createAuto()
         return result
     }
 }

 let leftShift = refreshWrapper(() => {
     index--
 })
 let rightShift = refreshWrapper(() => {
     index++
 })

 let setIndex = refreshWrapper((idx) => {
     index = idx
 })

 refresh()