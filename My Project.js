var img = [ "Images/My Project 1.webp" , "Images/My Project 2.webp" , "Images/My Project 3.webp" , "Images/My Project 4.webp" , "Images/My Project 5.webp" , "Images/My Project 6.webp" ];
var p = [ "Where Great Food Meets a Warm Welcome." , "Crafted with Passion by Our Expert Chefs." , "Juicy Burgers, Unforgettable Flavor." , "Freshly Baked, Perfectly Delicious." , "Golden Crispy Chicken, Full of Flavor.", "Sweet Moments to End Every Meal." ];
var count = [ "1 / 6" , "2 / 6" ,"3 / 6" , "4 / 6" , "5 / 6" , "6 / 6"]
var x = 0;
function next_img ()
{
    x++;
    if ( x == img.length )
    {
        x = 0;
    }
    document.getElementById("img_1").src = img[ x ];
    if ( x == count.length )
    {
        x = 0;
    }
    document.getElementById("h1_1").innerHTML = count[ x ];
    if ( x == p.length )
    {
        x = 0;
    }
    document.getElementById("h2_1").innerHTML = p[ x ];
}
function prev_img ()
{
    x--;
    if ( x < 0 )
    {
        x = img.length-1;
    }
    document.getElementById("img_1").src = img[ x ];
    if ( x < 0 )
    {
        x = count.length-1;
    }
    document.getElementById("h1_1").innerHTML = count[ x ];
    if ( x < 0 )
    {
        x = p.length-1;
    }
    document.getElementById("h2_1").innerHTML = p[ x ];
}
function send_message ()
{
    var message = document.getElementById("text_message").value;
    if ( message == "" )
    {
        window.alert("Please Write a Message!");
    }
    else
    {
        window.alert("Your message has been sent successfully!");
    }
}
var languageBtn = document.getElementById("languageBtn");

languageBtn.addEventListener("click", function () {

    var elements = document.querySelectorAll("[data-en][data-ar]");

    elements.forEach(function (element) {

        if (document.documentElement.lang === "en") {

            element.innerHTML = element.getAttribute("data-ar");

        } else {

            element.innerHTML = element.getAttribute("data-en");

        }

    });


    if (document.documentElement.lang === "en") {

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        languageBtn.innerHTML = "English";

    } else {

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        languageBtn.innerHTML = "العربية";

    }

});
