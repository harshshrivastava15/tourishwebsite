document.getElementById("menuButton").addEventListener("click", function() {
    var menu = document.getElementById("menublock");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

