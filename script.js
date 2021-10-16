document.querySelector(".btn-1").addEventListener("click",function(){
    const a=document.querySelector("#nameid-1").value;
    document.querySelector("#imgchange-1").src=`https://joeschmoe.io/api/v1/male/${a}`
});
document.querySelector(".btn-2").addEventListener("click",function(){
    const b=document.querySelector("#nameid-2").value;
    document.querySelector("#imgchange-2").src=`https://joeschmoe.io/api/v1/female/  s ${b}`
});
/*
var y=document.createElement("h1");
y.innerHTML="i'm sachin";
document.body.appendChild(y);
*/