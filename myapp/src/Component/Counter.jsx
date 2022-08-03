import React, { useEffect ,useState} from 'react'

const Counter = () => {



    let [count1,setcount1]=useState(0)
    let [count2,setcount2]=useState(2)
    let [count3,setcount3]=useState(0)
    let [count4,setcount4]=useState(0)

    
  useEffect(()=>{
    window.addEventListener("scroll", function(){
      
         if (window.scrollY > 1620){
            const interval =setInterval(()=>{
 
                setcount1((prevstate)=> prevstate>=25? prevstate=25:prevstate+1)
                setcount2((prevstate)=> prevstate>=100? prevstate=100:prevstate+4)
                setcount3((prevstate)=> prevstate>=2450? prevstate=2450:prevstate+98)
                setcount4((prevstate)=> prevstate>=350? prevstate=350:prevstate+14)
        
                
        
              },500)
              return () => clearInterval(interval);
        
         }
    })

    

    
  },[])

  return (
    <>
     <div className="counter">
        <div className="container-fluid">
            <div className="row ">
                <div className="col-md-3">
                    <div className="items ">
                        <h1>{count1}+</h1>
                        <h5>Burgers At Hours</h5>
                    </div>
                </div>


                <div className="col-md-3">
                    <div className="items">
                        <h1 >{count2}+</h1>
                        <h5>Skilled Professional</h5>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="items">
                        <h1> {count3}+</h1>
                        <h5>Orders Everydays</h5>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="items">
                        <h1>{count4}+</h1>
                        <h5>Cups Of Coffes</h5>
                    </div>
                </div>
            </div>
        </div>
     </div>
    
    </>
  )
}

export default Counter