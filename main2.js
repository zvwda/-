function displayImage(event){
    let files = event.target.files ;
    let info = document.getElementById('info')
   /*info.innerHTML=""*/ 
      for(let i =0 ; i< File.length ; i++){
    var src = URL.createObjectURL(files[i])
    console.log(src)
    info.innerHTML+=`<img src="${src}">`
    
   }
}


/*const array = []

const addUser = () => {
  const person1 = {
    user: document.getElementById('name').value,
    description: document.getElementById('descreption').value,
    image:document.getElementById('info'),
  };

  array.push(person1)

  // sort = array.sort(function(a, b){
  //     if(a.user < b.user) { return -1; }
  //     if(a.user > b.user) { return 1; }
  //     return 0;
  // })

}

*/ 
let input = document.querySelector(".name-input") ; 
let descreption = document.querySelector(".descreption"); 
let image = document.querySelector(".info") ; 
let add = document.querySelector(".add-btn") ; 
let  contanercarddiv = document.querySelector(".contaner-card") ; 

//empty array to tore items 
let arrayoftasks =[]; 
//add task 
function Add(){
  if (input.value != "" ){
    addtaskstoarray(input.value , descreption.value , Image.src);
    input.value=""; 
    descreption.value="";
    }
};

function addtaskstoarray(taskinput , taskdescreption , taskimage ){
  const task ={
id:Date.now(),
username: taskinput,
userdescreption:taskdescreption,
userimage:taskimage, 
  };
//push task to array 
arrayoftasks.push(task); 
console.log(arrayoftasks);
}