lightbox.option({
    'resizeDFurastion': 200, // Image resizing aninmation takes 0.2 secondes
    'wrapAround': true,
    'fadeDuration': 300,
})
function searchFunction() {
    let searchText = document.getElementById("searchInput").value;

    if (searchText === "Sunlight" || "Bread") {
        alert("Thank you for shopping at Shoprite.");
    } else {
        alert("You searched for: " + searchText);
    }
}