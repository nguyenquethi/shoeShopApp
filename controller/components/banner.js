function getBannerItem(){
    let arr = displayByQuantity(4)
    let content =''

    arr.forEach((item) =>{
        content += `<div class="row justify-content-center align-items-center">
        <div class="left col-lg-4">
            <h1>Nike New Collection!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Eum doloribus laudantium, nesciunt dolores <br> fugit sint ex minus minima laboriosam expedita.</p>
            <div class="btn_area">
                <button class="btn"><i class="fa fa-plus"></i></button>
                <span>add to bag</span>
            </div>
        </div>
        <div class="right col-lg-6">
          <img class="img-fluid w-100" src="${item.image}" alt="#">
        </div>
      </div>`

      document.querySelector('.bannerItems').innerHTML = content
    })
}

getBannerItem()