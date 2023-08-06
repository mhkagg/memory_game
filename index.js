

var color=["bear", "mouse" ,"cat", "deer"];
var gameP= [];
var userP=[];
var level= 0;
var start= false;

$("#lev").click(function(){
    $("h1").hide();
    $(".cont").removeClass("hide");
    if (!start) {
        $("#lev").text("Level "+ level);
        random();
        started = true;
    }
})


$(".btn").click(function(){
    var userCH = $(this).attr('id');
    console.log(userCH);
    userP.push(userCH);
    console.log(userP);
    
    sound(userCH);
    animate(userCH);
    
    checkans(userP.length-1);
})

function restart(){
    gameP= [];
    level= 0;
    start= false;
}

function checkans(level){
    if(userP[level] === gameP[level]){
        console.log("success");
        if(userP.length === gameP.length){
            setTimeout(function(){
                random();
            }, 1000);
        }
    } else{
        console.log("failure");
        $("body").addClass("fail");
        var audio = new Audio("wrong.mp3");
        audio.play();
        setTimeout(function() {
            $("body").removeClass("fail");
        }, 200);
        $("#lev").text("Click to Start Game Again");
        restart();
    }
}


function random(){
    userP= [];

    var randomNO= Math.round(Math.random()*3);
    console.log(randomNO);
    var randomAN= color[randomNO];
    console.log(randomAN);
    gameP.push(randomAN);

    $("#"+randomAN).fadeIn(100).fadeOut(100).fadeIn(100);
    sound(randomAN)

    level = level +1;
    $("#lev").text("level "+ level);

}

function sound(name){
    var audio = new Audio(name + ".mp3");
    audio.play();
}

function animate(name){
    $("#"+name).addClass("pressed");

    setTimeout(function() {
        $("#"+name).removeClass("pressed");
    }, 1000);
}








