function getName() {
    let name = prompt("Please enter your name:");
    document.write(name);
}
function wantsCoffee() {
    let coffee = prompt("Would you like a cup?");
    if (coffee.toLowerCase() == "yes"){
        document.write('<img src="https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"/>');
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