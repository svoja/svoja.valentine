//Count 5000 miliseconds 

function redirectToNextPage() {
    setTimeout(function() {
        window.location.href = "agree.html";
    }, 4000); // 4000 miliseconds = 4 seconds
}

redirectToNextPage();