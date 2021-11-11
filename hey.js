import { OnshapeClient } from "./src/client/Onshape";



const client = new OnshapeClient();
const putilla = async function(){
   const response = await  client.createDocument({hey:'hey como estas'})
   console.log(response)
}
