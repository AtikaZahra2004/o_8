let num=[1,2,3];
let r=num.map(function(nums){
    return nums*2;
})
console.log(r)

let n=[1,2,3,4];
let s=n.filter(function(i){
    return i<=3;
})
console.log(s)

let nam=['at','ika','hj'];
nam.forEach(nn=>{
    console.log(nn)
})

// object

let stu={
    name:"atika",
    class:"mca",
    age:"23"
}
console.log(stu.name,stu.class,stu.age);
const stuu=new Object()
stuu.name="asnd";
stuu.class="bcs";
console.log(stuu);

// destructing
let color=['balck','white','green','pink'];
let [b,w,g,p]=color;
console.log(b,w,g,p);

// spread
let nu=[1,2,3];
let e=[...nu,4,5];
console.log(e)

// dom
document.getElementById("s").innerText="i am atika zahra";
// event listener
const d=document.getElementById("btn");
d.addEventListener("click",function(){
    alert("hello mera naam atika hai")
})
// event object
const f=document.getElementById("btn")
f.addEventListener("click",function(e){
    console.log(e)
    console.log(e.target)
    console.log(e.type)
})
// event caputring
const parent=document.getElementById("p");
const child=document.getElementById("c");
parent.addEventListener('click',function(){
      alert("parent clicked")
},true);
child.addEventListener("click",function(){
  
    alert("child clicked")
},true);

// event bubling
parent.addEventListener('click',function(){
        console.log("parent cick hua phle")
 
})
child.addEventListener("click",function(){
    console.log("childclick hua ad mai")
})