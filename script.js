//your JS code here. If required.
const div=document.getElementById("output");
let arr=[1,2,3,4];

function Manipulate(arr,delay){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(arr);
		},delay);
	})
}

Manipulate(arr ,3000)
.then((res)=>{
let filarr = res.filter(el => el % 2 == 0);
	return Manipulate(filarr,1000);
})
.then((res)=>{
	div.innerText=res;
let newArr = res.map(el => el * 2);
	return Manipulate(newArr,2000);
})
.then((res)=>{
	div.innerText=res;
})
