let count=document.getElementById("total-count");

let num=0;

count.innerHTML=num;


btn_up.onclick=function(){

num++; count.innerHTML=num;

}


btn_down.onclick=function(){

    num--; count.innerHTML=num;
    
    }



