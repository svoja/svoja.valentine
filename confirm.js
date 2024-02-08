document.getElementById("confirmbutton").addEventListener("click", function() {
    var checkbox = document.getElementById("agree-checkbox")
    if (!checkbox.checked) {
        alert("Please agree to the terms and conditions to proceed.");
        return;
    }

    var overlay = document.querySelector('.transition-overlay');
    overlay.classList.add('fade-out');

    setTimeout(function() {
        window.location.href = "subpage.html";
    }, 500); 
});