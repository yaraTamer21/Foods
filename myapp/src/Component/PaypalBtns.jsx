import React  , {useState , useEffect}from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { toast } from 'react-toastify'

const PaypalBtns = ({data}) => {

const [paid,setpaid]=useState(false)
const [price,setprice]=useState(0)

const [error,seterror]=useState("")

 useEffect(()=>{
    Getprice()

 },[data])
const Getprice=()=>{
    let total=0
data.map((i)=>{
 total+=i.price * i.qty
 console.log(total)
})
setprice(total)

}

    const onHandleApprove=(orderID)=>{
      if(orderID){
        setpaid(true)
      }
      else{
        setpaid(false)
      }

    }

    if(paid){
         toast.success("you paid successful")
    }
    // else{
    //   alert(error)
    // }
  return (
  <>
  
  {price !==0 ?  <>
    <PayPalButtons
    
    style={{
        color: 'gold',
        shape: 'pill',
        label: 'pay',
        height: 40,
        layout: "horizontal"

    }}

    // onClick={(data,action)=>{
    //     let Alreadyexists= false;
    //     if(Alreadyexists){
    //      alert("you have alreadyAccount")
    //      action.reject()
    //     }
    //     else{
    //         action.resolve()
    //     }
      
    // }}
    
    
    createOrder={(data,action)=>{
       return action.order.create({
        purchase_units:[
            {
                description:"price of all products",
                amount:{
                    value:price
                }
            }
        ]
       })
    }}

    onApprove={async(data,action)=>{
        let order = await action.order.capture()
        console.log("oreder",order)
        onHandleApprove(data.orderID)
    }}
    
    onError={(err)=>{
        seterror(err)
    }}
    
    />
    
    
    
    </>:""}
  
  </>
  )
}

export default PaypalBtns