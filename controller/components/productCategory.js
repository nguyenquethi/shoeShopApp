
function getCategories(){
    let arr = displayCategoty(5)
    
    var arrTitle = document.querySelectorAll('#category')

    for(i = 0; i < arr.length; i++){
        arrTitle[i].innerHTML = arr[i].category
    }
}

getCategories()