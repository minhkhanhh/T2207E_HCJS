var x;
x=10;
x="xin chào các bạn";
x="3.14";
var y=20;
var z=x+y;
x= "hello"
var k= x+y;
// hello + 10 -> hello10
// 10 + hello -> 10hello
//hello + world = helloworld
console.log(k);
var t = true;//false
for (var i=0;i<10;i++){
    console.log("i="+i);
}
var ar = [];
ar[0] = 1;
ar.push(10);
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
//duyệt mảng theo chỉ mục (index)
for (var i =0;i<ar.length;i++){
    console.log(ar[i]);
}
// duyệt mảng theo kiểu xét từng phần tử - foreach
ar.map(xyz=>{
    console.log(xyz);
});

function tinhtong(a,b){
    return a+b;
}
var tk = tinhtong(5,3);
var tk2 = tinhtong("hello",10);

console.log(tk);
console.log(tk2);

function demo(){
    console.log("hello everybody...");
}

//setTimeout(demo,3000);// độ trễ hàm demo (demo :callback function)
//setInterval(demo,3000);
console.log("ABCXYZ...");

var n =10;
function countdown(){
    var xyz = document.getElementById("head");  // ảnh hưởng lên html
    xyz.innerText = n;
    console.log(n);
    n--;
    if(n<0){
       // clearInterval(si);
    }
}

//var si = setInterval(countdown,1000);

//viết chương trình in ra số chẵn tăng dần theo thời gian tối đa 10 số
var chan=2;
var m=0;
function sochansau2s(){
    var qqq = document.getElementById("sochansau2s");
    qqq.innerText += " "+chan;
    console.log(chan);
    chan=chan+2;
    m++;
    if(m>=10){
        clearInterval(sochan1);
    }
}
var sochan1 = setInterval(sochansau2s,2000);
// viết chương trình cứ 2s in ra 1 số nguyên tố tăng dần theo thời gian