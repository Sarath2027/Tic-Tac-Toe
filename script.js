let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector(".reset-btn");
let newbtn=document.querySelector(".new-game-btn");
let msgcontainer=document.querySelector(".msg_container");
let msg=document.querySelector(".msg");

let turno=true;
let count=0;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    count=0;
    turno=true;
    enableBox();
    msgcontainer.classList.add("hide");
}   

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turno===true){
            box.textContent="O";
            box.style.color="blue";
            turno=false;
        }
        else{
            box.textContent="X";
            box.style.color="#b0413e"
            turno=true;
        }
        box.disabled=true;
        box.style.backgroundColor="white";
        count++;
        checkWinner(); 
    });
    
});
const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
        box.style.backgroundColor="white"; 
    }
};

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.textContent="";
    }
};

const showWinner=(winner)=>{
    msg.textContent=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}
function checkWinner(){
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].textContent;
        let pos2=boxes[pattern[1]].textContent;
        let pos3=boxes[pattern[2]].textContent;
        if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            showWinner(pos1);
            disableBox();
        }
        else if(count==9){
            msg.textContent="Oops ! The Game was Draw";
            msgcontainer.classList.remove("hide");
        }
    }
    }
}
newbtn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);