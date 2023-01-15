console.log("welcome to tictac toe");
let music =  new Audio("win.wav");
let audioTurn = new Audio("input.wav")
let gameover = new Audio("loss.wav");
let turn = "X";
let gameover1 = false;

const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

const checkWin = ()=>{
    let boxtext =document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,15],
        [6,7,8,5,25,0],
        [0,3,6,-5,5,90],
        [1,4,7,-10,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e =>{
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameover1 =  true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "400px"
            /*document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";*/

        }

    })

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameover1){
            document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
            }
        }

    })
})


reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    gameover1 = false
    document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    
})

