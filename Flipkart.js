// function gowtham(){
//     var name=document.getElementById("name").value;
//     var pass=document.getElementById("password").value;
  
//     localStorage.setItem("name",name);
//     localStorage.setItem("password",pass);
//   }


// let div=document.getElementById("div")
// console.log(div);

// div.onclick = () =>  {
//     let form = document.getElementById("form")
    
//     let display = form.classList.toggle("true")
//     if(display){
//         form.style.display = "block"
//         // div.style.filter="blur(10px)"
//     }
//     else{
//         form.style.display = "none"
//     }
// }



let button = document.getElementById("button")
        console.log(button);
        
        button.onclick = () =>  {
            let form = document.getElementById("form")
            
            let display = form.classList.toggle("true")
            if(display){
                form.style.display = "block"
                // div.style.filter="blur(10px)"
            }
            else{
                form.style.display = "none"
            }
        }

        function readdata(){
  var entername=document.getElementById("name").value;
  var enterpass=document.getElementById("password").value;

  var getname=localStorage.getItem("name")
  var getpass=localStorage.getItem("password")
  if (entername==getname){
    if(enterpass==getpass){
      alert("logged in");
    }
    else{
      alert("wrong password");
    }
  }
  else{
    alert("invalid details")
  }
}


//   function readdata(){
//     var entername=document.getElementById("name").value;
//     var enterpass=document.getElementById("password").value;
  
//     var getname=localStorage.getItem("name")
//     var getpass=localStorage.getItem("password")
//     if (entername==getname){
//       if(enterpass==getpass){
//         alert("logged in");
//       }
//       else{
//         alert("wrong password");
//       }
//     }
//     else{
//       alert("invalid details")
//     }
//   }