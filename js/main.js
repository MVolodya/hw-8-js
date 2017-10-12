let arrayOfProducts = [];

function productItem(id, name, place, weigh, price, img) {
    this.id    = id;
    this.name  = name;
    this.place = place;
    this.weigh = weigh;
    this.price = price;
    this.img   = img;
}

function addProductItem(id, name, place, weigh, price, img) {
        var product = new productItem(id, name, place, weigh, price, img);
        arrayOfProducts.push(product);
    }

initProductItems();


function initProductItems() {
    addProductItem(1, "Apple",       "fruit",          244, 114, "img/favicon.ico");
    addProductItem(2, "Lemon",       "fruit",          244, 114, "img/favicon.ico");
    addProductItem(3, "Orange",      "fruit",          244, 114, "img/favicon.ico");
    addProductItem(4, "Eggplant",    "vegetables",     244, 114, "img/favicon.ico");
    addProductItem(5, "Onion",       "vegetables",     244, 114, "img/favicon.ico");
    addProductItem(6, "Green beans", "vegetables",     244, 114, "img/favicon.ico");
    addProductItem(7, "Milk",        "dairy products", 244, 114, "img/favicon.ico");
    addProductItem(8, "Cheese",      "dairy products", 244, 114, "img/favicon.ico");
    addProductItem(9, "Butter",      "dairy products", 244, 114, "img/favicon.ico");
    addProductItem(10, "Beef",       "meat",           244, 114, "img/favicon.ico");
    addProductItem(11, "Chicken",    "meat",           244, 114, "img/favicon.ico");
    addProductItem(12, "Pork",       "meat",           244, 114, "img/favicon.ico");
    addProductItem(13, "Cookie",     "baking",         244, 114, "img/favicon.ico");
    addProductItem(14, "Doughnut",   "baking",         244, 114, "img/favicon.ico");
    addProductItem(15, "Cake",       "baking",         244, 114, "img/favicon.ico");
}

renderProductItems();

function renderProductItems() {

    for (let i = 0; i < arrayOfProducts.length; i++) {
        let textName  = document.createTextNode(arrayOfProducts[i].name);
        let textWeigh = document.createTextNode("Weigh: " + arrayOfProducts[i].weigh);
        let textPrice = document.createTextNode("Price: " + arrayOfProducts[i].price);
        let textPlace = document.createTextNode(arrayOfProducts[i].place);
        let textImg   = arrayOfProducts[i].img;

        listOfItems(textName, textWeigh, textPrice, textPlace, textImg);
    }
}

function listOfItems(textName, textWeigh, textPrice, textPlace, textImg) {
    let content = document.getElementById('product-content');

    let div = document.createElement('div');
    let img = document.createElement('img');

    img.src = textImg

    div.setAttribute('class', 'item');

    let divName = document.createElement('div');
    let divWeigh = document.createElement('div');
    let divPrice = document.createElement('div');
    let divPlace = document.createElement('div');
    let divImg = document.createElement('div');

    divName.setAttribute('class', 'product-name');
    divWeigh.setAttribute('class', 'product-weight');
    divPrice.setAttribute('class', 'product-price');
    divPlace.setAttribute('class', 'product-place');
    divImg.setAttribute('class', 'product-img');

    divName.appendChild(textName);
    divWeigh.appendChild(textWeigh);
    divPrice.appendChild(textPrice);
    divPlace.appendChild(textPlace);
    divImg.appendChild(img);

    div.appendChild(divName);
    div.appendChild(divWeigh);
    div.appendChild(divPrice);
    div.appendChild(divPlace);
    div.appendChild(divImg);

    let buyButton = renderBuyButton();
    let weighButton = renderWeighButton();
    div.appendChild(buyButton);
    div.appendChild(weighButton);

    return content.appendChild(div);
}

function renderBuyButton() {
    let button = document.createElement('button');
    let buy = document.createTextNode('Buy');
    button.setAttribute('class', 'button-template buy-button');

    button.appendChild(buy);

    return button;
}

function renderWeighButton() {
    let button = document.createElement('button');
    let weigh = document.createTextNode('Weigh');
    button.setAttribute('class', 'button-template weigh-button');

    button.appendChild(weigh);

    return button;
}

//console.log(arrayOfProducts);
