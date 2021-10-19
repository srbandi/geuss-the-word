questionturn = "player1";
answerturn = "player2";

player1name=localStorage.getItem("player1");
player2name=localStorage.getItem("player2");
player1score= 0 ;
player2score= 0 ;
document.getElementById("player1name").innerHTML=player1name;
document.getElementById("player2name").innerHTML=player2name;
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerquestion").innerHTML="question turn "+player1name;
document.getElementById("playeranswer").innerHTML="asnwer turn "+player2name;

function send(){
    word=document.getElementById("word").value;
    word=word.toLowerCase();
    a=word.charAt(1);
    mid=Math.floor(word.length/2);
    b=word.charAt(mid);
    l=word.length-1;
    c=word.charAt(l);
    ra=word.replace(a,"_");
    rb=ra.replace(b,"_");
    rc=rb.replace(c,'_');
    Qw="<h4 id='guss'>"+rc+"</h4>";
    inputbox="<input type='text' id='answer'>";
    button="<br><button class='btn btn-info' onclick='ck()'>check</button>";
    row=Qw+inputbox+button;
    document.getElementById("output").innerHTML=row;
}

function ck(){

    answer = document.getElementById("answer").value;
    answer= answer.toLowerCase();
    if (answer == word) {
        document.getElementById("output").innerHTML = "<h1>Good Job </h1>";

        
        if (answerturn == "player1") {
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML=player1score;
        } else {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML=player2score;   
        }

    } else{
        document.getElementById("output").innerHTML = "<h1>WORNG U PERSON (better luck next time )</h1>";
    }

    if(questionturn == "player1") {
        questionturn = "player2";
        document.getElementById("playerquestion").innerHTML =" question turn " + player2name;
    }
    else{

        questionturn = "player1";
        document.getElementById("playerquestion").innerHTML =" question turn " + player1name;

    }

    if(answerturn == "player1") {
        answerturn = "player2";
        document.getElementById("playeranswer").innerHTML ="answer turn " + player2name;
    }
    else{

        answerturn = "player1";
        document.getElementById("playeranswer").innerHTML ="answer turn " + player1name;

    }


}