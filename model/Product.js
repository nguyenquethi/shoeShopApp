class Product{
    constructor(){
        this.id = 0,
        this.name ='',
        this.alias='',
        this.price =0,
        this.description='',
        this.size=[],
        this.shortDescription=''
        this.deleted = false,
        this.categories=[],
        this.relatedProducts=[],
        this.feature = true,
        this.image = ''
    }

    getId(){
        return this.id
    }

    getName(){
        return this.name
    }

    getAlias(){
        return this.alias
    }

    getPrice(){
        return this.price
    }

    getDescription(){
        return this.description
    }

    getSize(){
        return this.size
    }

    getShortDescription(){
        return this.shortDescription
    }

    getDeleted(){
        return this.deleted
    }

    getCategories(){
        return this.categories
    }

    getRelativeProduct(){
        return this.relatedProducts
    }

    getFeature(){
        return this.feature
    }

    getImage(){
        return this.image
    }

    setId(id){
        this.id = id
    }

    setName(name){
        this.name = name
    }

    setAlias(alias){
        this.alias = alias
    }

    setPrice(price){
        this.price = price
    }

    setDescription(description){
        this.description = description
    }

    setSize(size){
        this.size = size
    }

    setShortDescription(short){
        this.shortDescription = short
    }

    setDeleted(deleted){
        this.deleted = deleted
    }

    setCategories(categories){
        this.categories = categories
    }

    setRelativeProduct(relative){
        this.relatedProducts = relative
    }

    setFeature(feature){
        this.feature = feature
    }

    setImage(imgUrl){
        this.image = imgUrl
    }
}