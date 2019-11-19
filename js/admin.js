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

text1 = "Random quality - " + Math.random() + "<br>";
document.writeln(text1);
text2 = "\nRandom quality from 1 to 10 - " + Math.floor(Math.random() * 11);
document.writeln(text2);