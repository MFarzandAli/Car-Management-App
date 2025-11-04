var fullUrl = window.location.href;
var queryString = fullUrl.split("?")[1];

if (!queryString) {
    alert("No car data found!");
} else {
    var parts = queryString.split("&");
    var brand = parts[0].split("=")[1];
    var model = parts[1].split("=")[1];
    var image = parts[2].split("=")[1];

    brand = decodeURIComponent(brand);
    model = decodeURIComponent(model);
    image = decodeURIComponent(image);

    document.getElementById("carName").innerHTML = brand + " " + model;
    document.getElementById("carImage").src = image;
}

function goBack() {
    window.location.href = "index.html";
}