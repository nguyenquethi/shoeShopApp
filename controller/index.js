// API for sign up page - using POST method
function addDataUser() {
    event.preventDefault();
    var user = {};
    var arrValue = document.querySelectorAll('form input');
    console.log(arrValue);

    for (var i = 0; i < arrValue.length; i++) {
        var data  = arrValue[i];
        console.log(data.id);
        user[data.id] = data.value;
    };
    console.log(user);

    var promise = axios ({
        method: 'POST',
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        data: user,
    });

    promise.then(function (result){
        console.log(result);
        document.getElementById('signUpForm').reset();
        openToast("Sign Up successfully");
    }).catch(function (error){
        console.log(error);
    })
}

function openToast(string) {
    document.querySelector('.toast-body').innerHTML = string;
    const toastLiveExample = document.getElementById('liveToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
}

function getDataUser() {
    
}