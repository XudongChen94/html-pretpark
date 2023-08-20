const data= [
    {
        id : 0,
        img : './images/achtbaan.png',
        name : 'Achtbaan1',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 1,
        img : './images/achtbaan.png',
        name : 'Achtbaan2',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 2,
        img : './images/achtbaan.png',
        name : 'Achtbaan3',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 3,
        img : './images/achtbaan.png',
        name : 'Achtbaan4',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 4,
        img : './images/wildwaterbaan.png',
        name : 'Wildwaterbaan1',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 5,
        img : './images/wildwaterbaan.png',
        name : 'Wildwaterbaan2',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 6,
        img : './images/wildwaterbaan.png',
        name : 'Wildwaterbaan3',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 7,
        img : './images/wildwaterbaan.png',
        name : 'Wildwaterbaan4',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 8,
        img : './images/reuzenrad.png',
        name : 'Reuzenrad1',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 9,
        img : './images/reuzenrad.png',
        name : 'Reuzenrad2',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 10,
        img : './images/reuzenrad.png',
        name : 'Reuzenrad3',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 11,
        img : './images/reuzenrad.png',
        name : 'Reuzenrad4',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 12,
        img : './images/glijbaan.png',
        name : 'Glijbaan1',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 13,
        img : './images/glijbaan.png',
        name : 'Glijbaan2',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 14,
        img : './images/glijbaan.png',
        name : 'Glijbaan3',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 15,
        img : './images/glijbaan.png',
        name : 'Glijbaan4',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 16,
        img : './images/spookhuis.png',
        name : 'Spookhuis1',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 17,
        img : './images/spookhuis.png',
        name : 'Spookhuis2',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 18,
        img : './images/spookhuis.png',
        name : 'Spookhuis3',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
    {
        id : 19,
        img : './images/spookhuis.png',
        name : 'Spookhuis4',
        price : 4,
        save : 1,
       bezorging : 'Direct per e-mail',
        itemInCart: false
    },
];

let cartList=[]; 

var i;
var detail =document.getElementsByClassName('card-item');
var detailsImg = document.getElementById('details-img')
var detailTitle = document.getElementById('detail-title')
var detailPrice = document.getElementById('detail-price')
var youSave = document.getElementById('you-save');
var detailsPage = document.getElementById('details-page');
var back = document.getElementById('buy')
back.addEventListener('click',refreshPage)
var addToCarts = document.querySelectorAll('#add-to-cart')
var cart = document.getElementById('cart');

cart.addEventListener('click',displayCart)

var carts = document.getElementById('carts');

carts.addEventListener('click',()=>addToCart(getId))

var home = document.getElementById('logo');

document.addEventListener('click',function (e){
    if(e.target.id=='remove'){
        var itemId = e.target.parentNode.id
        removeFromCart(itemId)
    }
})

for(i=0;i<data.length;i++){
    detail[i].addEventListener('click',handleDetail)
}

var getId;

addToCarts.forEach(val=>val.addEventListener('click',()=>addToCart(val.parentNode.id)));

function handleDetail(e){
    detailsPage.style.display = 'block'
    getId= this.parentNode.id;
    detailsImg.src= data[getId].img;
    detailTitle.innerHTML=   data[getId].name;
    detailPrice.innerHTML= 'Prijs : $ ' +data[getId].price;
    youSave.innerHTML= 'U bespaart : ($ ' + data[getId].save + ')';
}

function addToCart(id) {
    if(!data[id].itemInCart){
        cartList= [...cartList,data[id]];
        addItem()
        
        alert('De foto is toegevoegd aan uw winkelwagen')

    }
    else{
        alert('Deze foto is al toegevoegd aan uw winkelwagen')
    }
    data[id].itemInCart= true
}

function refreshPage(){
    detailsPage.style.display = 'none'
}

function hideCart(){
    document.getElementById('main').style.display= "block";
    document.getElementById('cart-container').style.display= "none";
}

function displayCart(){
    document.getElementById('main').style.display= "none";
    document.getElementById('details-page').style.display= "none";
    document.getElementById('cart-container').style.display= "block";
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
    else{
        document.getElementById('empty-cart').style.display= "none";
        document.getElementById('cart-with-items').style.display= "block";
        
    }
}

var totalAmount;
var totalItems;
var totalSaving;

function addItem(){
    totalAmount=0;
    totalItems = 0;
    totalSaving=0
    var clrNode=document.getElementById('item-body');
        clrNode.innerHTML= '';
        console.log(clrNode.childNodes)
        cartList.map((cart)=>
        {
            var cartCont = document.getElementById('item-body');
            totalAmount = totalAmount + cart.price;
            totalSaving = totalSaving + cart.save;
            totalItems = totalItems + 1;

            var tempCart = document.createElement('div')
            tempCart.setAttribute('class','cart-list');
            tempCart.setAttribute('id',cart.id);

            var listImg = document.createElement('img');
            listImg.setAttribute('id','list-img');
            listImg.src = cart.img
            tempCart.appendChild(listImg)

            var listName = document.createElement('h3');
            listName.setAttribute('class','list-name');
            listName.innerHTML = cart.name;
            tempCart.appendChild(listName)

            var listPay = document.createElement('h3');
            listPay.setAttribute('class','pay');
            listPay.innerHTML = cart.price;
            tempCart.appendChild(listPay);

            var listQuantity = document.createElement('h3');
            listQuantity.setAttribute('class','quantity');
            listQuantity.innerHTML = '1';
            tempCart.appendChild(listQuantity);

            var listTrash = document.createElement('i');
            listTrash.setAttribute('class','fa fa-trash ');
            listTrash.setAttribute('id','remove');
            tempCart.appendChild(listTrash);

            cartCont.appendChild(tempCart)
            
        })
        document.getElementById('total-amount').innerHTML = "Totaal bedrag : $ " + totalAmount;
        document.getElementById('total-items').innerHTML = "Aantal foto's : " + totalItems;
        document.getElementById('you-saved').innerHTML = "U bespaart : $ " + totalSaving;
        document.getElementById('total').style.display= "block";
}

function removeFromCart(itemId){
    data[itemId].itemInCart = false
    cartList = cartList.filter((list)=>list.id!=itemId);
    addItem()
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
}
