//Yes and No Evil Button Script and Redirect

document.getElementById("yesButton").addEventListener("click", function() {
    window.location.href = "terms.html";
});

document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("yesButton").classList.remove("bigger");
});

let fontSize = 16;
let paddingVertical = 10;
let paddingHorizontal = 20;

document.getElementById("noButton").addEventListener("click", function() {
    fontSize += 2;
    paddingVertical += 2;
    paddingHorizontal += 5;
    document.getElementById("yesButton").style.fontSize = fontSize + "px";
    document.getElementById("yesButton").style.padding = paddingVertical + "px " + paddingHorizontal + "px";
});
