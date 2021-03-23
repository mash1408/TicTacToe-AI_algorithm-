// Function called whenever user tab on any box 
const board=[8,3,4,1,5,9,6,7,2]
var x=[]
var o=[]
var turn=1
userFlag=0
let first
function checkBox(){
 first=document.getElementById("playerChoice").checked
 console.log(first)
}
// Function to reset game 
function myfunc_2() { 
	location.reload(); 
	document.getElementById('b1').value = ''; 
	document.getElementById("b2").value = ''; 
	document.getElementById("b3").value = ''; 
	document.getElementById("b4").value = ''; 
	document.getElementById("b5").value = ''; 
	document.getElementById("b6").value = ''; 
	document.getElementById("b7").value = ''; 
	document.getElementById("b8").value = ''; 
	document.getElementById("b9").value = ''; 

} 
function make2(){
    if(board[4]=== 2)
    return 5
    else {
       var random=Math.floor(Math.random() * 4)
       var rand=[3,1,7,9]
       while(!checkBlank(rand[random])){
        console.log('make2')
        random=Math.floor(Math.random() * 4)
       }
         console.log(rand[random])

        return rand[random]
    }
}
function abc(x,y){
    var k=Math.abs(15-(x+y))
    if(!board.includes(k))
        return
    if(x+y >15){
        return 0
    }
    else if(x+y<15){
        if(checkBlank(k)){
            return k
        }
        else 
        return 0
    }
}
function posswin(c){
let t
    if(c==='x')
        t=[...x]
    else
        t=[...o]
for(var i=0;i<t.length;i++){
    for(var j=i+1;j<t.length;j++){
        if(abc(t[i],t[j]))
            return abc(t[i],t[j])
    }


}
  return 0  
}

function checkwin(c){
    let t
    if(c==='x')
        t=[...x]
    else
        t=[...o]

    if(t.includes(board[0])&& t.includes(board[1])&&t.includes(board[2]))
        return 1
    else if(t.includes(board[3])&& t.includes(board[4])&&t.includes(board[5]))
        return 1
    else if(t.includes(board[6])&& t.includes(board[7])&&t.includes(board[8]))
        return 1
    else if(t.includes(board[0])&& t.includes(board[3])&&t.includes(board[6]))
        return 1
    else if(t.includes(board[1])&& t.includes(board[4])&&t.includes(board[7]))
        return 1
    else if(t.includes(board[2])&& t.includes(board[5])&&t.includes(board[8]))
        return 1
    else if(t.includes(board[0])&& t.includes(board[4])&&t.includes(board[8]))
        return 1
    else if(t.includes(board[2])&& t.includes(board[4])&&t.includes(board[6]))
        return 1
	return 0;
}

function play(){
 
    if(first){
        playO()
        refreshBoard()
        userFlag=1;
    }
    else{
    console.log('MACHINE TURN')
    playX()
    refreshBoard()
    userFlag=1;
    }
}
function refreshBoard(){
    let boardChars=[]
    for(var i=0;i<9;i++){
        if(checkBlank(board[i]))
            boardChars[i]=""
        else{
            if(x.includes(board[i]))
                boardChars[i]='x'
            else
                boardChars[i]='O'
        }
    }
console.log(o)
console.log(x)
console.log(boardChars)
document.getElementById("b1").value=boardChars[0]
document.getElementById("b2").value=boardChars[1]
document.getElementById("b3").value=boardChars[2]
document.getElementById("b4").value=boardChars[3]
document.getElementById("b5").value=boardChars[4]
document.getElementById("b6").value=boardChars[5]
document.getElementById("b7").value=boardChars[6]
document.getElementById("b8").value=boardChars[7]
document.getElementById("b9").value=boardChars[8]
}

function playX(){
    console.log(turn)
    if(turn===1){
    Go(8)
    }
    if(turn === 3){
        if(checkBlank(2)){
            Go(2)
        }
        else{
        Go(4)
        }
    }
    if (turn === 5){
        if(posswin('x')!=0){
            Go(posswin('x'))
        }
        else if(posswin('o')!=0){
            Go(posswin('o'))

        }
        else if(checkBlank(6)){
            Go(6)
        }
        else{
            Go(4)
        }
    }

    if(turn===7 || turn === 9){
        if(posswin('x')!=0){
            Go(posswin('x'))
        }
        else if(posswin('o')!=0){
            Go(posswin('o'))
        }
        else{
            Go(anywhereBlank())
        }
    }
    console.log('checkwin:',checkwin('x'))
    if(checkwin('x')===0)
    return
    else{
    window.alert("MACHINE WON");
    myfunc_2()
    }
    
}

function playO(){
if(turn === 2){
if(board[4]===2)    
    Go(5)
else
    Go(1)
}
if(turn === 4){
    if(posswin('x')!=0)    
        Go(posswin('x')+1)
    else
        Go(make2()+1)
    }
if(turn=== 6){
    if(posswin('o')!=0)
     Go(posswin('o')+1)
    else if(posswin('x')!=0)
     Go(posswin('x')+1)
    else
     Go(anywhereBlank()+1)
}
if( turn === 8){
    if(posswin('o')!=0)
     Go(posswin('o')+1)
    else if(posswin('x')!=0)
     Go(posswin('x')+1)
    else
     Go(anywhereBlank()+1)
    
}

if(checkwin('o')===0)
    return
    else{
    window.alert("MACHINE WON");
    myfunc_2()
    }
}
function checkBlank(n){
    if(x.includes(n))
        return false
    else if(o.includes(n))
        return false
    return true
}
function anywhereBlank(){
    var random=Math.floor(Math.random() * 9)
    while(!checkBlank(board[random]))
     random=Math.floor(Math.random() * 9)
     console.log('goanywhere')
     console.log(board[random])
     return board[random] 
}
function Go(n){
    if(turn%2==1){
        x.push(n)
    }
    else {
        o.push(n)
    }
    turn++;
}

function user(Id){
    if(userFlag===1){

        if(Id==="b1"){
           
            Go(8)
        }
        else if(Id==="b2"){
        
            Go(3)
        }
        else if(Id==="b3"){
            Go(4)
        }
        else if(Id==="b4"){
            Go(1)
        }
        else if(Id==="b5"){
            Go(5)
        }
        else if(Id==="b6"){
            Go(9)
        }
        else if(Id==="b7"){
            Go(6)
        }
        else if(Id==="b8"){
            Go(7)
        }
        else if(Id==="b9"){
            Go(2)
        }
    refreshBoard()
    userFlag=0
    if(checkwin('x')===0 && turn%2===0 || checkwin('o')===0 && turn%2===1)//turn is incremented above when Go method is implemented
    play()
    else{
    window.alert("USER WON")
    myfunc_2()
    }
}
}

