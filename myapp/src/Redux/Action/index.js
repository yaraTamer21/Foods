

 export const AddTOCart=(product)=>{
    return({
        type:"Add",
        payload:product
    })
 }



 
 export const RemoveCart=(product)=>{
    return({
        type:"remove",
        payload:product
    })
 }
  
 export const Change=(product)=>{
    return({
        type:"Change",
        payload:product
    })
 }