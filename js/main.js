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
    addProductItem(1, "Apple",       "fruit",          100, 2.5, "img/favicon.ico");
    addProductItem(2, "Lemon",       "fruit",          100, 2.5, "img/favicon.ico");
    addProductItem(3, "Orange",      "fruit",          100, 2.5, "img/favicon.ico");
    addProductItem(4, "Eggplant",    "vegetables",     100, 2.5, "img/favicon.ico");
    addProductItem(5, "Onion",       "vegetables",     100, 2.5, "img/favicon.ico");
    addProductItem(6, "Green beans", "vegetables",     100, 2.5, "img/favicon.ico");
    addProductItem(7, "Milk",        "dairy products", 100, 2.5, "img/favicon.ico");
    addProductItem(8, "Cheese",      "dairy products", 100, 2.5, "img/favicon.ico");
    addProductItem(9, "Butter",      "dairy products", 100, 2.5, "img/favicon.ico");
    addProductItem(10, "Beef",       "meat",           100, 2.5, "img/favicon.ico");
    addProductItem(11, "Chicken",    "meat",           100, 2.5, "img/favicon.ico");
    addProductItem(12, "Pork",       "meat",           100, 2.5, "img/favicon.ico");
    addProductItem(13, "Cookie",     "baking",         100, 2.5, "img/favicon.ico");
    addProductItem(14, "Doughnut",   "baking",         100, 2.5, "img/favicon.ico");
    addProductItem(15, "Cake",       "baking",         100, 2.5, "img/favicon.ico");
}

renderProductItems();

function renderProductItems() {

    for (let i = 0; i < arrayOfProducts.length; i++) {
        let textId    = arrayOfProducts[i].id;
        let textWeigh = arrayOfProducts[i].weigh;
        let textImg   = arrayOfProducts[i].img;

        let textName  = document.createTextNode(arrayOfProducts[i].name);
        let textPrice = document.createTextNode(arrayOfProducts[i].price);
        let textPlace = document.createTextNode(arrayOfProducts[i].place);


        listOfItems(textId, textName, textWeigh, textPrice, textPlace, textImg);
    }
}

function listOfItems(textId, textName, textWeigh, textPrice, textPlace, textImg) {
    let content = document.getElementById('product-content');

    let div = document.createElement('div');
    let img = document.createElement('img');

    img.src = textImg

    div.setAttribute('id', textId);
    div.setAttribute('class', 'item');

    let divName = document.createElement('div');
    let divWeigh = document.createElement('div');
    let divPrice = document.createElement('div');
    let divPlace = document.createElement('div');
    let divImg = document.createElement('div');

    let inputTypeNumber = document.createElement('input');
    inputTypeNumber.setAttribute('type', 'number')
    inputTypeNumber.setAttribute('value', textWeigh)

    divName.setAttribute('class', 'product-name');
    divWeigh.setAttribute('class', 'product-weight');
    divPrice.setAttribute('class', 'product-price');
    divPlace.setAttribute('class', 'product-place');
    divImg.setAttribute('class', 'product-img');

    divName.appendChild(textName);
    divWeigh.appendChild(inputTypeNumber);
    divPrice.appendChild(textPrice);
    divPlace.appendChild(textPlace);
    divImg.appendChild(img);

    div.appendChild(divName);
    div.appendChild(divWeigh);
    div.appendChild(divPrice);
    div.appendChild(divPlace);
    div.appendChild(divImg);

    let buyButton = renderButton('Buy', 'buy-button')
    let weighButton = renderButton('Weigh', 'weigh-button')

    div.appendChild(buyButton);
    div.appendChild(weighButton);

    eventToClickBuyButton();

    return content.appendChild(div);
}

function renderButton(textNode, cssClassName) {
    let button = document.createElement('button');
    let text = document.createTextNode(textNode);
    button.setAttribute('class', 'button-template ' + cssClassName);

    button.appendChild(text);

    return button;
}

function eventToClickBuyButton() {
    let buttons = document.getElementsByClassName('buy-button')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = onBuyButtonClick;
    }
}


function onBuyButtonClick() {
    let button = this;
    let parent = button.parentElement;
    let child = parent.childNodes;
    let classSelectorPrice = 'product-price';
    let classSelectorWeigh = 'product-weight';

    let priceOfIdProduct = null;
    let weighOfIdProduct = null;

    for (let i = 0; i < child.length; i++) {
        if (child[i].className == classSelectorPrice) {
            priceOfIdProduct = parseFloat(child[i].textContent).toFixed(1);
        }
    }

    for (let i = 0; i < child.length; i++) {
        if (child[i].className == classSelectorWeigh) {
            weighOfIdProduct = parseFloat(child[i].firstChild.value).toFixed(1);
        }
    }

    alert(priceOfIdProduct * weighOfIdProduct)
}
