let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
let move=document.querySelector("#move");

let userscorepara=document.querySelector("#userscore");
let compscorepara=document.querySelector("#compscore");

function gencompchoice(){
    choose=["rock","paper","scissor"];
    randidx=Math.floor(Math.random() * 3);
    return choose[randidx];
}

const playgame = (userchoice)=>{
   console.log("your choice is : ",userchoice);
   //prints user choices
   const compchoice= gencompchoice();
   

   if (userchoice===compchoice){
    
     move.innerText=`Draw Play Again! you both chosen ${userchoice}`;
  

     
       move.style.backgroundColor="aquamarine";
   }

   else if(userchoice ==="paper" && compchoice==="rock" ||
    userchoice ==="scissor" && compchoice==="paper"   ||
    userchoice ==="rock" && compchoice==="scissor"
   ){
    console.log("you won");
    move.innerText=`You Won! , your ${userchoice} beats computers ${compchoice}`;
    move.style.backgroundColor="green";
    
    
     userscore++;
     userscorepara.innerText=userscore;
   }
   else{
    console.log("ahhh! you lose");
     move.innerText=`You lose! , ${compchoice} beats your ${userchoice}`;
     compscore++;
    compscorepara.innerText=compscore;
        move.style.backgroundColor="red";
    
   }; 
}

choices.forEach((choice) => {
    
    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id");
        
        playgame(userchoice);
    })
});


