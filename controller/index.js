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


