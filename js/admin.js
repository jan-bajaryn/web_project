var counter = 0;

function addCount(element) {
    counter++;
    element.innerHTML = "Mouse here "+ counter + " times";
}

(function () {
    var name;
    name = prompt("Whats your name?");
    alert("hello, " + name)
}());

function resize_img() {
    let images = document.images;

    for (let i = 0; i < images.length; i++) {
        if (images.item(i).height > 250 && images.item(i).height > 250) {
            images.item(i).height = 250;
            images.item(i).width = 250;
        }


    }
}

function geek (event) {
    if (event.altKey) {
        alert ("Alt key is pressed.");
    }
    else {
        alert ("Alt key is not pressed.");
    }
}
function showChar(e){
    alert(
        "Нажата клавиша: " + String.fromCharCode(e.charCode) + "\n"
        + "keyCode: " + e.keyCode + "\n"
    );
}

function coord(event) {
    var getXCoord = event.clientX;
    var getYCoord = event.clientY;
    var result = "X coordinate: " + getXCoord + "; Y coordinate: " + getYCoord;
    document.getElementById("gfg").innerHTML = result;
}


text1 = "Random quality - " + Math.random() + "<br>";
document.writeln(text1);
text2 = "\nRandom quality from 1 to 10 - " + Math.floor(Math.random() * 11);
document.writeln(text2);