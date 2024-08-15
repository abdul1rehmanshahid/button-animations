var color=["white","palevioletred","paleturquoise","khaki"];
var color1=["black","red","peru","forestgreen"];
var text=["Wolverine","Deadpool","juggernaut","Magneto","Professor.X"];
var theme="white";
$("#color").click(function(){
if(theme==="white")
{
    $("h1").text("You have Changed my Color");
    $("#color").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var randomColor=color1[Math.floor(Math.random()*4)];
    $("h1").css("color",randomColor);
}
else
if(theme==="black")
{
    $("h1").text("You have Changed my Color");
    $("#color").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var randomColor=color[Math.floor(Math.random()*4)];
    $("h1").css("color",randomColor);
}
});

$("#theme").click(function(){
  if(theme==="white")
  {
        $("h1").text("You have Changed the theme");
        $("h1").css("color","palevioletred");
        $("#theme").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);  
        $("body").css("background-color","black");
        theme="black";
    
   
  }
  else
  if(theme==="black")
  {
        $("h1").text("You have Changed the theme");
        $("h1").css("color","palevioletred");
        $("#theme").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);  
        $("body").css("background-color","white");
        theme="white";
   
  }
 
});


$("#toggle").hover(function(){
    $("h1").text("You are going to hide me");
    $("h1").css("font-size","1em");

},function(){
    $("h1").text("Play with me");
});

$("#toggle").click(function(){
    $("h1").toggle();
});

$("#size").click(function(){
    var size=Math.floor(Math.random()*4+1);
    $("h1").css("font-size",size+"em");
});

$("#text").click(function(){
   var Characters=text[Math.floor(Math.random()*6)];
   $("h1").text(Characters);

});