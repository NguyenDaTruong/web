
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let addtocart = document.querySelector('.home-content');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
  addtocart.classList.add('kich-hoat');
})
closeShopping.addEventListener('click', ()=>{
    addtocart.classList.remove('kich-hoat');
})

let products = [
  //<button onclick="addToCard(0)">Add To Card</button> buttom 0 co Id la 1
    {
        id: 1,
        name:'Elden Ring',
        image:'/chi-tiet-game/img/elden-ring/elden-ring-2022.webp',
        price: 999000
    },
    {
        id: 2,
        name: '',
        image: '2.PNG',
        price: 120000
    },
    {
        id: 3,
        name: '',
        image: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: '',
        image: '4.PNG',
        price: 123000
    },
    {
        id: 5,
        name: '',
        image: '5.PNG',
        price: 320000
    },
    {
        id: 6,
        name: '',
        image: '6.PNG',
        price: 120000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="/chi-tiet-game/img/elden-ring/elden-ring-2022.webp"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
