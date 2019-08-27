
// // import Content from './content.js'
// // import Header from './header.js'
// // import SideBar from './content.js'
// import pic from './1.png'
// import createImg from './createImg.js'
// import style from './index.scss'
// createImg()
// var img = new Image()
// img.src = pic
// // 单独引入class
// img.classList.add(style.imgs)
// var root  = document.getElementById('root')
// root.append(img)
// console.log(123456)
// // new Content();
// // new Header();
// // new SideBar()

// 热更新测试
// import './append.css'
// var btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.body.append(btn)
// btn.onclick = function() {
//     var div = document.createElement('div')
//     div.innerHTML = "div"
//     document.body.append(div)
// }
console.log(123)

// import "@babel/polyfill";  // 解决低版本浏览器不支持es6语法

// Tree Shaking 支支持es module的引入  （摇树）
import { add }  from './math'
add(1,2)