show()
cross2=document.getElementById("cross2")
cross3=document.getElementById("cross3")
cross2.addEventListener('click', function(){	alert=document.getElementById('alert')
alert.style.display="none";
})
cross3.addEventListener('click', function () {
				alert2=document.getElementById("alert2")
				alert2.style.display="none";
})
function showmenu(){
				ul=document.getElementById("ul")
				navv=document.getElementById("navv")
				navv.style.display="none";
				ul.style.display='flex'
}
function exitmenu(){
		cross=document.getElementById("ul")
		navv=document.getElementById("navv")
		navv.style.display="block";
		ul.style.display='none';
}
title=document.getElementById("title")
description=document.getElementById("description")
btn=document.getElementById("btn1")
let HTML=""
var note=[];
btn.addEventListener('click', function addnote(e){
e.preventDefault();
n=localStorage.getItem("notes")
if(n==null){
				note=[]
				}
else{
				note=JSON.parse(n)
}
note.push({"title":title.value,"desc": description.value})
localStorage.setItem("notes",JSON.stringify(note))
if(title.value!="") {				document.getElementById('alert').style.display="flex";
document.getElementById('alert2').style.display="none"
}
else{
document.getElementById('alert').style.display="none";	document.getElementById("alert2").style.display="flex";
}
setTimeout(()=>{
			document.getElementById('alert').style.display="none";	document.getElementById("alert2").style.display="none";
},2000)
title.value="";
description.value="";
show()
})
function show(){
				let html=""
				let obj=[]
				if (localStorage.getItem("notes")==null) {
								obj=[]
				}
				else{
		 obj=JSON.parse(localStorage.getItem("notes"))
				obj.forEach(function(element,index){
				if (element.title!="")
				{
				
				html +=`
				<div class="shownote" id="sn">
				<h3 class="h13">${element.title}</h3>
														<p class="desc">${element.desc}</p>
														<button type="submit" id=${index} onclick="deletenow(this.id)" class="btn" >Delete Note</button>
				</div>`}})
				if (html!="") {
				document.getElementById("yn").innerHTML=html
}
else {
html=`<h3 class="dummy">Nothing to show here.Please start adding some notes.</h3>`
}
document.getElementById("yn").innerHTML=html
}
}
function deletenow(index){
				n=localStorage.getItem("notes")
if(n==null){
				note=[]
				}
else{
				note=JSON.parse(n)
}
note.splice(index,1)
localStorage.setItem("notes", JSON.stringify(note))
show()
}
con=document.getElementById('con')
con.addEventListener('click', function(){
			modalbg=document.getElementById('modb')
			modalbg.classList.add('modalact')
})
document.getElementById('modcross').addEventListener('click',function(){
				modalbg=document.getElementById('modb')
			modalbg.classList.remove('modalact')
			document.getElementById('modalt').style.display='none'
})
document.getElementById('modsub').addEventListener('click', function(){
				document.getElementById('name').value=""
				document.getElementById('email').value=""
				document.getElementById('query').value=""
				document.getElementById('modalt').style.display='block'
})


