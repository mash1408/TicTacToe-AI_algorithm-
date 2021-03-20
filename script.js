// Function called whenever user tab on any box 
var board=[2,2,2,2,2,2,2,2,2]
var turn=1
userFlag=0
let x
function checkBox(){
 x=document.getElementById("playerChoice").checked
 console.log(x)
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
       var rand=[1,3,5,7]
       while(board[rand[random]]!=2)
        random=Math.floor(Math.random() * 4)

        return rand[random]
    }
}
function mul(a,b,c){
    return a*b*c
}
function posswin(p){

	var i
	for(i=0;i<9;i++)
	{
		if(board[i]===2)
		{
			//row1 - 012
if(mul(board[0],board[1],board[2])===p*p*2)
{
	for(i=0;i<3;i++)
	{
		if(board[i]==2)
			return i;
	}
}
//row2 - 345
if(mul(board[3],board[4],board[5])===p*p*2)
{
	for(i=3;i<6;i++)
	{
		if(board[i]==2)
			return i;
	}
}
//row3 - 678
if(mul(board[6],board[7],board[8])===p*p*2)
{
	for(i=6;i<9;i++)
	{
		if(board[i]==2)
			return i;
	}
}
//col1 - 036
if(mul(board[0],board[3],board[6])===p*p*2)
{
	for(i=0;i<7;i+=3)
	{
		if(board[i]==2)
			return i;
	}
}
//col2 - 147
if(mul(board[1],board[4],board[7])===p*p*2)
{
	for(i=1;i<8;i+=3)
	{
		if(board[i]==2)
			return i;
	}
}
//col3 - 258
if(mul(board[2],board[5],board[8])===p*p*2)
{
	for(i=2;i<9;i+=3)
	{
		if(board[i]==2)
			return i;
	}
}
//d1 - 048
if(mul(board[0],board[4],board[8])===p*p*2)
{
	for(i=0;i<9;i+=4)
	{
		if(board[i]==2)
			return i;
	}
}
//d2 - 246
if(mul(board[2],board[4],board[6])===p*p*2)
{
	for(i=2;i<7;i+=4)
	{
		if(board[i]==2)
			return i;
	}
}
		}

	}

	return 0;

}
function checkwin(p){
    if(board[0]==p && board[1]==p && board[2]==p)
{
	return p;
}
//row2 - 345
if(board[3]==p && board[4]==p && board[5]==p)
{
	return p;
}
//row3 - 678
if(board[6]==p && board[7]==p && board[8]==p)
{
	return p;
}
//col1 - 036
if(board[0]==p && board[3]==p && board[6]==p)
{
	return p;
}
//col2 - 147
if(board[1]==p && board[4]==p && board[7]==p)
{
	return p;
}
//col3 - 258
if(board[2]==p && board[5]==p && board[8]==p)
{
	return p;
}
//d1 - 048
if(board[0]==p && board[4]==p && board[8]==p)
{
	return p;
}
//d2 - 246
if(board[2]==p && board[4]==p && board[6]==p)
{
	return p;
}

	return 0;
}

function play(){
 
    if(x){
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
        if(board[i]==3){
        boardChars[i]="X"
        }
        else if(board[i]==5){
        boardChars[i]="O"
        }
        else {
        boardChars[i]=" "
        }
    }
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
    Go(1)
    }
    if(turn === 3){
        if(board[8]===2){
            Go(9)
        }
        else{
        Go(3)
        }
    }
    if (turn === 5){
        if(posswin(3)!=0){
            Go(posswin(3)+1)
        }
        else if(posswin(5)!=0){
            Go(posswin(5)+1)

        }
        else if(board[6]===2){
            Go(7)
        }
        else{
            Go(3)
        }
    }

    if(turn===7 || turn === 9){
        if(posswin(3)!=0){
            Go(posswin(3)+1)
        }
        else if(posswin(5)!=0){
            Go(posswin(5)+1)
        }
        else{
            Go(anywhereBlank())
        }
    }

    if(checkwin(3)===0)
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
    if(posswin(3)!=0)    
        Go(posswin(3)+1)
    else
        Go(make2())
    }
if(turn=== 6){
    if(posswin(5)!=0)
     Go(posswin(5)+1)
    else if(posswin(3)!=0)
     Go(posswin(3)+1)
    else
     Go(make2())
}
if( turn === 8){
    if(posswin(5)!=0)
     Go(posswin(5)+1)
    else if(posswin(3)!=0)
     Go(posswin(3)+1)
    else
     Go(anywhereBlank())
    
}

if(checkwin(5)===0)
    return
    else{
    window.alert("MACHINE WON");
    myfunc_2()
    }
}

function anywhereBlank(){
    var random=Math.floor(Math.random() * 9)
    var rand=[1,2,3,4,5,6,7,8]
    while(board[rand[random]]!=2)
     random=Math.floor(Math.random() * 9)

     return rand[random] 
}
function Go(n){
    if(turn%2==1){
        board[n-1]=3;
    }
    else {
        board[n-1]=5;
    }
    turn++;
}

function user(Id){
    var checkWin
    console.log(userFlag)
    if(userFlag===1){

        if(Id==="b1"){
           
            Go(1)
        }
        else if(Id==="b2"){
        
            Go(2)
        }
        else if(Id==="b3"){
            Go(3)
        }
        else if(Id==="b4"){
            Go(4)
        }
        else if(Id==="b5"){
            Go(5)
        }
        else if(Id==="b6"){
            Go(6)
        }
        else if(Id==="b7"){
            Go(7)
        }
        else if(Id==="b8"){
            Go(8)
        }
        else if(Id==="b9"){
            Go(9)
        }
    refreshBoard()
    userFlag=0
    if(checkwin(3)===0 && turn%2===1 || checkwin(5)===0 && turn%2===0)
    play()
    else{
    window.alert("USER WON")
    myfunc_2()
    }
}
}

