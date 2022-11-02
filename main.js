
var photosList =[]
var myhttp = new XMLHttpRequest()
myhttp.open("GET","https://jsonplaceholder.typicode.com/photos")
myhttp.send()
myhttp.addEventListener("readystatechange",function(){
    if(myhttp.readyState==4 && myhttp.status == 200){        
        photosList = JSON.parse(myhttp.response)
        console.log(photosList);
        display()
    }
})
 
function display(){
    var temp ="";
    for(var i=0 ; i<8 ; i++){
        temp+=`   
      
        <div class="card">
        <div class="header-card">
          <img src="${photosList[i].thumbnailUrl}" alt="avatar">
          <p>${photosList[i].id}</p> 
        </div> 
      
        <div class="main-card">
            <img src="${photosList[i].thumbnailUrl}" alt="photo">
      </div>
      
      <div class="footer-card">
          <div class="footer-header">
              <h2>${photosList[i].id}</h2>
        <div class="all-likes">
          <i class="fa-regular fa-heart"></i>
          <div class="likes">
              <div class="conter">0</div>
              <p>likes</p> 
             </div>
        </div>
          </div>
          </div>
          
          

          <p>${photosList[i].title}</p>   
      </div>`

    }
    document.getElementById("card").innerHTML=temp 
}


presslove()
function presslove(){
    
    document.getElementById("conter").innerHTML = 
    localStorage.conter ; 

if (localStorage.conter){
    localStorage.conter = 
    Number(localStorage.conter)+1 ; 
}
else{
    localStorage.conter=1 ; 
}
}



function dellocal(){
    const element = document.getElementById('card');
    element.remove();
    
}













/**
presslove()

function presslove(){
    
    var love = document.querySelectorAll('.conter')
    for(let i = 0 ;i<500;i++){
       
       localStorage.conter = love[i].innerHTML;  
        ++localStorage.conter ; 
        love[i].innerHTML =localStorage.conter; 
    }
}
     */
     
