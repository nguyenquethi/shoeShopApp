const getProductData = ()=>{
    try{
        axios({
            method: 'GET',
            url: 'https://shop.cyberlearn.vn/api/Product'
        }).then((result) =>{
            return result.data.content
        }).catch((err) =>{
            console.log(err)
        })
    }catch(err){
        console.log(err)
    }
}
