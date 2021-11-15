const client = require('./index')
const accessKey = "s V1vG0umULB6GVUh2LpBTdgsx"
const baseUrl = "https://cad.onshape.com";
const secretKey = "s7DONVDETdzQxJc9F4QZhn9LIKPpPVhQXYww43jLeD7gZvk8"
const hey = new client({accessKey,baseUrl,secretKey})
const create = async ()=>{
    try{
        const response = await hey.createDocument({})
        console.log(response)
    }catch(e){
        console.log(e)
    }
    

}
create()