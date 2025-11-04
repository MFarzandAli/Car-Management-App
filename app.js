var welcomeBox = document.getElementById("welcomeBox");
var formBox = document.getElementById("form-box");
var brand = document.getElementById("brand");
var model = document.getElementById("model");
var year = document.getElementById("year");
var carfound = false;

var carsDetails = [
    { brand: "Toyota", model: "Corolla", image: "https://i3.wp.com/images4.alphacoders.com/124/1242901.jpg?ssl=1" },
    { brand: "Toyota", model: "Supra", image: "https://cdn1.ozone.ru/s3/multimedia-b/6401883491.jpg" },
    { brand: "Toyota", model: "Fortuner", image: "https://i.pinimg.com/originals/a8/00/62/a80062e4853c0b17e1f7ae09178cd15b.jpg" },
    { brand: "Toyota", model: "Yaris", image: "https://perevozki-stolitsa.ru/wp-content/uploads/2020/12/Gonochnyj-Toyota-Yaris-Cup-Car.jpg" },
    { brand: "Honda", model: "City", image: "https://wallup.net/wp-content/uploads/2019/09/719226-honda-civic-em2-tuning-custom.jpg" },
    { brand: "Honda", model: "Civic", image: "https://c.wallhere.com/photos/84/b5/2017_Honda_Civic_Type_R_netcarshow_netcar_car_images_car_photo-405524.jpg!d" },
    { brand: "Hyundai", model: "Elantra", image: "https://images3.alphacoders.com/131/1312160.jpg" },
    { brand: "Hyundai", model: "Sonata", image: "https://www.zastavki.com/pictures/originals/2023/Auto___Hyundai_2024_Hyundai_Sonata_N_Line_front_view_165829_.jpg" },
    { brand: "Hyundai", model: "Tucson", image: "https://auto.today/media/res/9/5/2/1/7/95217.qgr650.1280.jpg" },
    { brand: "Suzuki", model: "Mehran", image: "https://i.ytimg.com/vi/YkD3qGIeRfQ/hqdefault.jpg" },
    { brand: "Suzuki", model: "Alto", image: "https://dnd.com.pk/wp-content/uploads/2022/12/suzuki-pakistan-raises-prices-by-up-to-rs0-12-million-1652119532-8993.jpg" },
    { brand: "Suzuki", model: "Swift", image: "https://i.servimg.com/u/f83/19/18/74/94/suzuki34.jpg" }
];

function showForm() {
    welcomeBox.style.display = "none";
    formBox.style.display = "block";
}

function findCar() {
    if (brand.value.trim() === "" || model.value.trim() === "") {
        alert("Please Fill the Information First!");
        return;
    }

    var foundCar = null;

    for (var i = 0; i < carsDetails.length; i++) {
        if (
            brand.value.toLowerCase() === carsDetails[i].brand.toLowerCase() &&
            model.value.toLowerCase() === carsDetails[i].model.toLowerCase()
        ) {
            foundCar = carsDetails[i];
            break;
        }
    }

    if (foundCar !== null) {
        // Pass car data to next page
        var url = "car.html?brand=" + encodeURIComponent(foundCar.brand) +
            "&model=" + encodeURIComponent(foundCar.model) +
            "&image=" + encodeURIComponent(foundCar.image);
        window.location.href = url;
    } else {
        alert("Sorry! This Car is not available.");
    }

    brand.value = "";
    model.value = "";
    year.value = "";
}

function info(event) {
    if (event.keyCode === 13) {
        findCar();
    }
}
