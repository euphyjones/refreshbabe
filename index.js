

var randomNumber1 = Math.floor(Math.random() * 5) + 1; 
var randomLiellaImg = "liella" + randomNumber1 + ".png"; 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomLiellaImg);



