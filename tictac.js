  let boxs = document.querySelectorAll(".box");
  let reset = document.querySelector("#reset");
  let newe = document.querySelector("#new");
  let winner = document.querySelector(".winner");
  let msg = document.querySelector("#msg");
  let count = 0;
  let loss = document.querySelector(".loss");
  let turno = true; //playerx,player0
  const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const resetgame = () =>{
    turno = true;
    enableBoxs();
    winner.classList.add("hide");
    loss.innerText = "";
    count = 0;
  }

  boxs.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
      if(turno){
        box.innerText = "o";
        turno = false;
      } else{
        box.innerText = "x";
        turno = true; 
      }
      box.disabled = true;
      count = count + 1;
    
      console.log("xyz",count);
      checkwinner();
    });
  });
 


  const  showwinner = (_win) => {
      msg.innerText = "congratulations, winner is  " + _win;
      winner.classList.remove("hide");
      disableBoxs();    
  }

  const disableBoxs = () =>{
    for(let box of boxs){
      box.disabled = true;
    }
  }

  const enableBoxs = () =>{
    for(let box of boxs){
      box.disabled = false;
      box.innerText = "";
    }
  }

  const checkwinner = () => {
    for(let pattern of winpatterns){
     let  pos1valu= boxs[pattern[0]].innerText;
     let  pos2valu= boxs[pattern[1]].innerText;
     let  pos3valu= boxs[pattern[2]].innerText;
     if(pos1valu != "" && pos2valu != "" && pos3valu != ""){
           if(pos1valu === pos2valu && pos2valu === pos3valu){
            showwinner(pos1valu);
            
           } 
               
           }
     }
    }
  
  
  newe.addEventListener("click", resetgame);
  reset.addEventListener("click", resetgame);