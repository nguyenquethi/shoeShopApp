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
  var promise = axios({
    method: "GET",
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=1`,
    ResponseType: JSON,
  });
  promise
    .then(function (result) {
      console.log(result.data.content);
      arrUser = result.data;
      console.log(arrUser);
      renderDisplay2(result.data.content);
    })
    .catch(function (error) {
      // console.log(error);
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

  var relatedPro = `
  <!-- title  -->
      <div class="service_title">
        <h2>RELATED PRODUCTS</h2>
      </div>

      <!-- content  -->
      <div class="service_content">
        <div class="my-carousel">
          <!-- item carousel  -->
          <div class="item_carousel">
            <div class="carousel_bg">
              <i class="fa-solid fa-memory"></i>
              <p>website <br> development</p>
            </div>
          </div>
          <!-- item carousel  -->
          <div class="item_carousel">
            <div class="carousel_bg">
              <i class="fa-solid fa-memory"></i>
              <p>website <br> development</p>
            </div>
          </div>
          <!-- item carousel  -->
          <div class="item_carousel">
            <div class="carousel_bg">
              <i class="fa-solid fa-memory"></i>
              <p>website <br> development</p>
            </div>
          </div>
          <!-- item carousel  -->
          <div class="item_carousel">
            <div class="carousel_bg">
              <i class="fa-solid fa-memory"></i>
              <p>website <br> development</p>
            </div>
          </div>
          <!-- item carousel  -->
          <div class="item_carousel">
            <div class="carousel_bg">
              <i class="fa-solid fa-memory"></i>
              <p>website <br> development</p>
            </div>
          </div>
          <!-- item carousel  -->
          <div class="item_carousel">
            <div class="carousel_bg">
              <i class="fa-solid fa-memory"></i>
              <p>website <br> development</p>
            </div>
          </div>
          <!-- item carousel  -->
          <div class="item_carousel">
            <div class="carousel_bg">
              <i class="fa-solid fa-memory"></i>
              <p>website <br> development</p>
            </div>
          </div>
        </div>
      </div>
  `
}
