/* //////////////////////////////////////////////////////

    Tilhr Technology - Color Picker
    Version: 1.0

    Origional Template DESIGNED & DEVELOPED by Webelite
    YouTube: https://www.youtube.com/watch?v=-55GRq-hUyE;

    Website:        https://tilhr.tech
    Email:          tilhr@tilhr.tech
    Twitter:        http://twitter.com/tilhr_tech
    GitHub:         https://github.com/tilhr/Tilhr-Technology

    Developer: Tyler Rodgers [https://tylerrodgers.space]
    Twitter:        http://twitter.com/tilhr
        
//////////////////////////////////////////////////////*/

var input = document.querySelectorAll("input");
    for(var i = 0; i < input.length; i++){
    input[i].addEventListener("input", function(){
        var red = document.getElementById("red").value,
            green = document.getElementById("green").value,
            blue = document.getElementById("blue").value;
            var display = document.getElementById("display");
        display.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
    });
}