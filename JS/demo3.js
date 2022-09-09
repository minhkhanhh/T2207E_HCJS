var obj={
  name: "Khánh",
  age: 19,
  tel: "0934649833",
  danhsach: ['khanh','Thanh','Hieu','Son','Nam'],
  hanhdong: function () {
      console.log(this.name+" đang chơi gái")
  }
};
console.log(obj.tel);
obj.hanhdong();
obj.name = "Huy";
obj.hanhdong();
var obj2 = {
  name: "Khánh",
  age: 19,
  tel: "0934649833",
  danhsach: ['khanh','Thanh','Hieu','Son','Nam'],
  hanhdong: function () {
    console.log(this.name+" đang chơi gái")
  }
};

var a = document.getElementById("abc");
console.log(a.innerText);
var x=15;
function changeText(){
//a.innerText = "xin chào các bạn";
//a.innerHTML = x+ "<i> xin chào các ông cháu</i>"
  a.style.fontSize = x+ "px";
  a.style.color = "pink";
  x++;
  a.classList.add("classnaodo");
  a.style.transform = "rotate("+x+"deg)";
}
setInterval(changeText,30);