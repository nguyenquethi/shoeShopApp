let cart = []


function getListFeature(){
    let arr = displayByQuantity(8)
    let content = ''

    arr.forEach((item) =>{
        content += `<div class="item col-lg-3 col-md-6">
        <img src="${item.image}" alt="#">
        <div class="product_description">
          <h3>${item.name}</h3>
          <div class="price d-flex align-items-center">
            <p class="discount_price">${item.price.toLocaleString('it-IT',{style: 'currency',currency: 'USD'})}</p>
            <p class="original_price mx-4">550 USD</p>
          </div>
          <div class="btn_group">
            <a type="button" href="#url" id="shoppingCart" onclick="addToCart(${item.id})"><i class="fa fa-shopping-cart"></i><span>add to bag</span></a>
            <a href="#url"><i class="fa fa-heart"></i><span>wishlist</span></a>
            <a href="#url"><i class="fa fa-rotate"></i><span>compare</span></a>
            <a href="#url"><i class="fa fa-up-down-left-right"></i><span>view more</span></a>
          </div>
        </div>
      </div>`
    })

    document.querySelector('.feature_items').innerHTML = content
    document.querySelector('.comming_products').innerHTML = content
}

getListFeature()


function addToCart(id){
    cart.push(id)
    addToLocalStorage('cart',cart)
}


