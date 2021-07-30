const search = document.querySelector("#search")
const li = document.querySelectorAll("li")
for(let i = 0;i < li.length;i++){

li[i].addEventListener('click',fud)
       
function fud(){
    li[i].style.display = "none"
}    
}

search.addEventListener("keyup",show)

function show(){
   for(let i = 0;i < li.length;i++){
       var each = li[i].textContent

       
       if(each.indexOf(search.value.toLowerCase()) > -1){
           li[i].style.cssText = 'display: ;'
       }else{
           li[i].style.cssText = 'display:none'
       }
      
   }
}

