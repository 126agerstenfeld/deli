function wickedsignature () {
    window.location.href = "wickedsignature";
}
function wickedsandc () {
    window.location.href = "wickedsandc";
}

function custom () {
    window.location.href = "custom";
}


let cart = [];

function addCustomToCart () {
    let sandwich = {type: "Custom", customtoppings: []}
    if (document.getElementById("mw").checked)
        sandwich.customtoppings.push("Mini Wich");
    if (document.getElementById("bw").checked)
        sandwich.customtoppings.push("Big Wich");
    if (document.getElementById("ww").checked)
        sandwich.customtoppings.push("Wicked Wich");
    if (document.getElementById("toasted").checked)
        sandwich.customtoppings.push("toasted");
    if (document.getElementById("wholew").checked)
        sandwich.customtoppings.push("Whole Wheat");
    if (document.getElementById("chicken").checked)
        sandwich.customtoppings.push("Chicken");
    if (document.getElementById("onion").checked)
        sandwich.customtoppings.push("Onion");
    if (document.getElementById("tmto").checked)
        sandwich.customtoppings.push("Tomato");
    if (document.getElementById("ltc").checked)
        sandwich.customtoppings.push("Lettuce");
    if (document.getElementById("pckl").checked)
        sandwich.customtoppings.push("Pickles");
    if (document.getElementById("oil").checked)
        sandwich.customtoppings.push("Olive Oil");
    if (document.getElementById("vng").checked)
        sandwich.customtoppings.push("Vinegar");
    if (document.getElementById("cheese").checked)
        sandwich.customtoppings.push("Cheese");
    if (document.getElementById("ham").checked)
        sandwich.customtoppings.push("Ham");
    if (document.getElementById("turkey").checked)
        sandwich.customtoppings.push("Turkey");
    if (document.getElementById("chicken").checked)
        sandwich.customtoppings.push("Chicken");
    cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(sandwich);
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addWSToCart () {
    let sandwich = {type: "Wicked Signature"};
    cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(sandwich);
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addWSAndCToCart () {
    let sandwich = {type: "Wicked Steak and Cheese"};
    cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(sandwich);
    localStorage.setItem("cart", JSON.stringify(cart));
}


var carttext = "";
var customtext = "";
function getItemsInCart () {
    for (let i = 0; i < JSON.parse(localStorage.getItem("cart")).length; i++) {
        if (JSON.parse(localStorage.getItem("cart"))[i].type === "Custom") {
            customtext += "Custom: ";
            for (let y = 0; y < JSON.parse(localStorage.getItem("cart"))[i].customtoppings.length; y++) {
                customtext += JSON.parse(localStorage.getItem("cart"))[i].customtoppings[y] + ", ";
            }
            customtext = customtext.substring(0, customtext.length - 2)
            carttext += customtext + "<br>";
            customtext = "";
        }
        else {
            carttext += JSON.parse(localStorage.getItem("cart"))[i].type + "<br>";
        }
    }
    carttext = carttext.substring(0, carttext.length - 2);
    document.getElementById("cartlist").innerHTML = carttext;
}