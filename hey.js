const client = require('./index')
const accessKey = "SqZ6tRaTzStpYE7lw7XRDgNZ"
const wid = "594253eb956f8b0d1de668bb"
const did = "3d76e5ff6476e05d3318a9f4"    
const baseUrl = "https://cad.onshape.com";
const secretKey = "SafJMKkhM6rCkgskNzr2Sh7fJEuAXjCBGBfvEJdkdgOlMLlH"
const hey = new client({accessKey,baseUrl,secretKey})
const create = async ()=>{
    try{
        const response = await hey.createDocument({
        })
        console.log(response)
    }catch(e){
        console.log(e)
    }
    

}
create()