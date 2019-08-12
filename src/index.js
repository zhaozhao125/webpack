
// import Content from './content.js'
// import Header from './header.js'
// import SideBar from './content.js'
import pic from './1.png'
import createImg from './createImg.js'
import style from './index.scss'
createImg()
var img = new Image()
img.src = pic
// 单独引入class
img.classList.add(style.imgs)
var root  = document.getElementById('root')
root.append(img)
// new Content();
// new Header();
// new SideBar()



