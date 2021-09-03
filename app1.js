function getName() {
    let name = prompt("Please enter your name:");
    document.write(name);
}
function wantsCoffee() {
    let coffee = prompt("Would you like a cup?");
    if (coffee.toLowerCase() == "yes"){
        document.write('<img src="fahmi-fakhrudin-nzyzAUsbV0M-unsplash.jpg"/>');
    }
    else {
        document.write('<img src="https://via.placeholder.com/1400x300"/>')
    }
}
function likesCoffee() {
    let answer = prompt("Do you like coffee?");
    if (answer.toLowerCase() == "yes")  {
        alert("Very Good!")
    }
    else {
        alert("How tho?")
    }
}