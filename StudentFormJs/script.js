// console.log("hello");
let inp1=document.querySelector("#one");
let inp2=document.querySelector("#two");
let inp3=document.querySelector("#three");
let inp4=document.querySelector("#four");
let btn=document.querySelector("button");
let div=document.querySelector(".add");
btn.addEventListener("click",AddData)
let arr=[];
function AddData(){
let obj={
    name:inp1.value,
    lname:inp2.value,
    age:inp3.value,
    score:inp4.value
}
arr.push(obj);
let div1="";
arr.map((ele)=>{
    div1+=`
    <div>
    <p>${ele.name}</p>
    <p>${ele.lname}</p>
    <p>${ele.age}</p>
    <p>${ele.score}</p>
    </div>`   
})
div.innerHTML=div1;
}
