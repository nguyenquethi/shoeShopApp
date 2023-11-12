function getDealItems(){
    let arr = displayByQuantity(9)
    let content =''

    arr.forEach((item) =>{
        content += `<div class="item col-lg-4 col-md-4 col-sm-6 d-flex">
        <img src="${item.image}" alt="">
        <div class="description">
            <a href="#"><span>black lace heels</span></a>
            <div class="price d-flex justify-content-between align-items-center">
                <div class="discount">${item.price}$</div>
                <div class="original">550$</div>
            </div>
        </div>
    </div>`

        document.querySelector('.dealItems').innerHTML = content
    })
}

getDealItems()