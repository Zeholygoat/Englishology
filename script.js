async function checkResult(){
const id=document.getElementById("candidateId").value;
const res=await fetch("results.json");
const data=await res.json();
const user=data.find(u=>u.id===id);
const out=document.getElementById("resultOutput");
if(user){
out.innerHTML=`<h3>${user.name}</h3><p>${user.score} (${user.level})</p>`;
}else{
out.innerHTML="No record found";
}
}

function addResult(){
const id=document.getElementById("aid").value;
const name=document.getElementById("aname").value;
const score=document.getElementById("ascore").value;
const level=document.getElementById("alevel").value;

let data=JSON.parse(localStorage.getItem("results")||"[]");
data.push({id,name,score,level});
localStorage.setItem("results",JSON.stringify(data));
alert("Saved locally (demo)");
}
