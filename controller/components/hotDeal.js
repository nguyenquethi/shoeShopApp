
function getHotDealItems(){
    let arr = getFromLocalStorage('productArr')
    let content =''

    const hotDealProduct = arr.filter((item) => item.price <= 500)
    hotDealProduct.forEach((item) =>{
        content += `<div class="items">
            <a href="./view/html/components/detail.html" onclick = "location.href = this.href + '?id=' + ${item.id};return false;"><img src="${item.image}" alt="#"></a>
            <div class="description">
                <div class="price d-flex justify-content-center">
                    <div class="discount me-3">${item.price.toLocaleString('it-IT',{style: 'currency',currency: 'USD'})}</div>
                    <div class="original">600 USD</div>
                </div>
                <a href="./view/html/components/detail.html" onclick = "location.href = this.href + '?id=' + ${item.id};return false;"><h3>${item.name}</h3></a>
                <a type="button" href="#url" onclick="addToCart(${item.id})"><i class="fa fa-shopping-cart"></i><span>add to cart</span></a>
            </div>
        </div>`

        document.querySelector('.hot_deal_list').innerHTML = content
    })
}

getHotDealItems()