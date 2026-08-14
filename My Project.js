var img = [
    "Images/My Project 1.webp",
    "Images/My Project 2.webp",
    "Images/My Project 3.webp",
    "Images/My Project 4.webp",
    "Images/My Project 5.webp",
    "Images/My Project 6.webp"
];


// =========================
// SLIDER TEXT - ENGLISH
// =========================

var p_en = [
    "Where Great Food Meets a Warm Welcome.",
    "Crafted with Passion by Our Expert Chefs.",
    "Juicy Burgers, Unforgettable Flavor.",
    "Freshly Baked, Perfectly Delicious.",
    "Golden Crispy Chicken, Full of Flavor.",
    "Sweet Moments to End Every Meal."
];


// =========================
// SLIDER TEXT - ARABIC
// =========================

var p_ar = [
    "حيث يلتقي الطعام الرائع بالترحيب الدافئ.",
    "أطباق مصنوعة بشغف على يد طهاتنا المحترفين.",
    "برجر شهي، ونكهة لا تُنسى.",
    "مخبوزات طازجة ولذيذة بشكل مثالي.",
    "دجاج مقرمش ذهبي، مليء بالنكهة.",
    "لحظات حلوة لنختتم بها كل وجبة."
];


var count = [
    "1 / 6",
    "2 / 6",
    "3 / 6",
    "4 / 6",
    "5 / 6",
    "6 / 6"
];

var x = 0;


// =========================
// NEXT IMAGE
// =========================

function next_img() {

    x++;

    if (x == img.length) {
        x = 0;
    }

    document.getElementById("img_1").src = img[x];

    document.getElementById("h1_1").innerHTML = count[x];


    if (currentLanguage === "ar") {

        document.getElementById("h2_1").innerHTML = p_ar[x];

    }

    else {

        document.getElementById("h2_1").innerHTML = p_en[x];

    }

}


// =========================
// PREVIOUS IMAGE
// =========================

function prev_img() {

    x--;

    if (x < 0) {
        x = img.length - 1;
    }

    document.getElementById("img_1").src = img[x];

    document.getElementById("h1_1").innerHTML = count[x];


    if (currentLanguage === "ar") {

        document.getElementById("h2_1").innerHTML = p_ar[x];

    }

    else {

        document.getElementById("h2_1").innerHTML = p_en[x];

    }

}


// =========================
// SEND MESSAGE
// =========================

function send_message() {

    var message = document.getElementById("text_message").value;

    if (message == "") {

        window.alert("Please Write a Message!");

    }

    else {

        window.alert("Your message has been sent successfully!");

    }

}


// =========================
// LANGUAGE
// =========================

var languageBtn = document.getElementById("languageBtn");

var currentLanguage = localStorage.getItem("language") || "en";


// =========================
// CHANGE LANGUAGE
// =========================

languageBtn.addEventListener("click", function () {

    var elements = document.querySelectorAll("[data-en][data-ar]");


    if (currentLanguage === "en") {

        // =========================
        // ENGLISH -> ARABIC
        // =========================

        elements.forEach(function (element) {

            element.innerHTML =
                element.getAttribute("data-ar");

        });

        currentLanguage = "ar";

        localStorage.setItem("language", "ar");

        document.documentElement.lang = "ar";

        document.documentElement.dir = "rtl";

        languageBtn.innerHTML = "English";


        // Change Slider

        document.getElementById("h2_1").innerHTML =
            p_ar[x];

    }

    else {

        // =========================
        // ARABIC -> ENGLISH
        // =========================

        elements.forEach(function (element) {

            element.innerHTML =
                element.getAttribute("data-en");

        });

        currentLanguage = "en";

        localStorage.setItem("language", "en");

        document.documentElement.lang = "en";

        document.documentElement.dir = "ltr";

        languageBtn.innerHTML = "العربية";


        // Change Slider

        document.getElementById("h2_1").innerHTML =
            p_en[x];

    }

});


// =========================
// LOAD SAVED LANGUAGE
// =========================

window.addEventListener("load", function () {

    var elements = document.querySelectorAll("[data-en][data-ar]");


    if (currentLanguage === "ar") {

        elements.forEach(function (element) {

            element.innerHTML =
                element.getAttribute("data-ar");

        });

        document.documentElement.lang = "ar";

        document.documentElement.dir = "rtl";

        languageBtn.innerHTML = "English";


        // Change Slider

        document.getElementById("h2_1").innerHTML =
            p_ar[x];

    }

});
