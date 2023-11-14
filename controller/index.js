
// API for sign up page - using POST method
function addDataUser() {
  event.preventDefault();
  var user = {};
  var arrValue = document.querySelectorAll("form input");
  console.log(arrValue);

  for (var i = 0; i < arrValue.length; i++) {
    var data = arrValue[i];
    console.log(data.id);
    user[data.id] = data.value;
  }
  console.log(user);

  var promise = axios({
    method: "POST",
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    data: user,
  });

  promise
    .then(function (result) {
      console.log(result);
      document.getElementById("signUpForm").reset();
      openToast("Sign Up successfully");
    })
    .catch(function (error) {
      console.log(error);
    });
}

function openToast(string) {
  document.querySelector(".toast-body").innerHTML = string;
  const toastLiveExample = document.getElementById("liveToast");
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastBootstrap.show();
}

var arrUser = [];
function getDataUser() {
    let id = ((window.location.href).split('='))[1]
  var promise = axios({
    method: "GET",
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    ResponseType: JSON,
  });
  promise
    .then(function (result) {
    //   console.log(result.data.content);
      arrUser = result.data;
      console.log(arrUser);
      renderDisplay2(result.data.content);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getDataUser();

function renderDisplay2(product) {
  var head = `
        <div class="row">
        <div class="col-lg-5 mt-5">
            <div class="card mb-3"><img src="${product.image}" alt=""></div>
        </div>
        <div class="col-lg-7 mt-5">
        <div class="card">
        <div class="card-body">
        <!-- Product Name -->
        <h1 class="h2">${product.name}</h1>
        <!-- Description -->
        <h6>Description:</h6>
        <p>${product.description}</p>

        <h6>Specification:</h6>
        <ul class="list-unstyled pb-3">
            <li>Lorem ipsum dolor sit</li>
            <li>Amet, consectetur</li>
            <li>Adipiscing elit,set</li>
            <li>Duis aute irure</li>
            <li>Ut enim ad minim</li>
            <li>Dolore magna aliqua</li>
            <li>Excepteur sint</li>
        </ul>

        <!-- Product Price -->
        <p class="h3 py-2">${product.price}</p>
        <p class="py-2">
            <i class="fa fa-star text-warning"></i>
            <i class="fa fa-star text-warning"></i>
            <i class="fa fa-star text-warning"></i>
            <i class="fa fa-star text-warning"></i>
            <i class="fa fa-star text-secondary"></i>
            <span class="list-inline-item text-dark">Rating 4.8 | 36 Comments</span>
        </p>
        <!-- Product Size -->
        <form action="" method="GET">
        <input type="hidden" name="product-title" value="Activewear">
        <div class="row">
        <div class="col-auto">
        <ul class="list-inline pb-3">
        <li class="list-inline-item">Size :
            <input type="hidden" name="product-size" id="product-size" value="S">
        </li>`;

  var tempMid = "";
  for (var i = 0; i < product.size.length; i++) {
    console.log(product.size[i]);
    tempMid += `<li class="list-inline-item"><span class="btn btn-success btn-size">${product.size[i]}</span></li>`;
  }

  var tail = `
  </ul>
    </div>
        <div class="col-auto">
            <ul class="list-inline pb-3">
                <li class="list-inline-item text-right">
                    Quantity
                    <input type="hidden" name="product-quanity" id="product-quanity" value="1">
                </li>
                <li class="list-inline-item"><span class="btn btn-success" id="btn-minus">-</span></li>
                <li class="list-inline-item"><span class="badge bg-secondary" id="var-value">1</span></li>
                <li class="list-inline-item"><span class="btn btn-success" id="btn-plus">+</span></li>
            </ul>
        </div>
        </div>
        <div class="row pb-3">
            <div class="col d-grid">
                <button type="submit" class="btn btn-light btn-lg" name="submit" value="buy">Add To Fvorite</button>
            </div>
            <div class="col d-grid">
                <button type="submit" class="btn btn-warning btn-lg" name="submit" value="addtocard">Add To Cart</button>
            </div>
        </div>
        </form>
        </div>
        </div>
    </div>
    </div>`;

    document.getElementById('bodyDetail').innerHTML = head + tempMid + tail;

    for (var i = 0; i < product.relatedProducts.length; i++){
      var relatePro = "";
      relatePro += `<div class="col-4 card" style="width: 20rem;">
      <img class="card-img-top" src="${product.relatedProducts[i].image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${product.relatedProducts[i].name}</h5>
        <p class="card-text">${product.relatedProducts[i].description}</p>
        <div class="row d-flex g-2">
        <a href="#" class="btn btn-warning">${product.relatedProducts[i].price}</a>
        <a href="#" class="btn btn-light">Buy Now</a>
        </div>
      </div>
    </div>
    
    <!-- card item -->
    <div class="col-4 card" style="width: 20rem;">
      <img class="card-img-top" src="${product.relatedProducts[i].image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${product.relatedProducts[i].name}</h5>
        <p class="card-text">${product.relatedProducts[i].description}</p>
        <div class="row d-flex g-2">
        <a href="#" class="btn btn-warning">${product.relatedProducts[i].price}</a>
        <a href="#" class="btn btn-light">Buy Now</a>
        </div>
      </div>
    </div>
    
    <div class="col-4 card" style="width: 20rem;">
      <img class="card-img-top" src="${product.relatedProducts[i].image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${product.relatedProducts[i].name}</h5>
        <p class="card-text">${product.relatedProducts[i].description}</p>
        <div class="row d-flex g-2">
        <a href="#" class="btn btn-warning">${product.relatedProducts[i].price}</a>
        <a href="#" class="btn btn-light">Buy Now</a>
        </div>
      </div>
    </div>`;
    }
  


document.getElementById('productBody').innerHTML = relatePro;
}

function addToLocalStorage(key, arr){
    localStorage.setItem(key,JSON.stringify(arr))
}

function getFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key))
}

function removeInLocalStorage(key){
    localStorage.removeItem(key)
}
var productArr = [
    'id' ,
    'name',
    'alias',
    'price',
    'description',
    'size',
    'shortDescription',
    'deleted',
    'categories',
    'relatedProducts',
    'feature',
    'image'
]

async function getFromApi(){
    await axios.get('https://shop.cyberlearn.vn/api/Product')
    .then((result) => {
        addToLocalStorage('productArr',result.data.content)
    }).catch((err) => {
        console.log(err)
    });
}

getFromApi()

async function getFromId(id){
    await axios.get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`)
    .then((result) => {
        
    }).catch((err) => {
        console.log(err)
    });
}

async function getAllCategoryFromApi(){
    await axios.get('https://shop.cyberlearn.vn/api/Product/getAllCategory')
    .then((result) => {
        addToLocalStorage('categoriesArr',result.data.content)
    }).catch((err) => {
        console.log(err)
    });
}

getAllCategoryFromApi()

function displayByQuantity(quantity, arr = []){
    let apiArray = getFromLocalStorage('productArr')
    for(i = 0; i < quantity;i++){
        arr.push(apiArray[i])
    }
    return arr
}

function displayCategoty(quantity, arr = []){
    let categoryApi = getFromLocalStorage('categoriesArr')
    for(i = 0; i < quantity;i++){
        arr.push(categoryApi[i])
    }
    return arr
}
