var n=2;
var m=0;
function checkPrime(x){
    //kiem tra co phai so nguyen to khong
    if(x<2){
        return false;
    }else if (x==2 || x==3){
        return true;
    }else {
        for (var i=2;i<=x/2;i++){
            if(x%i==0){
                return false;
            }
        }
        return true;
    }
}
function nextPrime(x){
    for(var i=x+1;true;i++){
        if(checkPrime(i)){
            return i;
        }
    }
}
function run(){
    var xyz =document.getElementById("snt")
    xyz.innerText +=" "+n;
    n= nextPrime(n);
    m++;
    if (m>=10){
        clearInterval(si);
    }
}
var si = setInterval(run,2000);