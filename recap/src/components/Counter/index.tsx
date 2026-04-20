import React ,{useState, useEffect}from "react";
import "./style.css"

const  Counter: React.FC =  (props) =>{
    const [counter, setcounter] = useState(0);
    useEffect(()=>{
        console.log("Counter mounted");
        
    },[])  // when ever component mount once run

    useEffect(()=>{
        console.log("user updated counter",counter);
        
    },[counter])   // runs when ever the state updates of of given counter dep


    useEffect(()=>{
        console.log("user updated counter",counter);
        return ()=>{
            console.log("useeffect return counter",counter);
            
        }
    },[counter]) 


    useEffect(()=>{
        return function(){
            console.log("unmount of counter ");   // unmount   jab component u
            
        }
    },[])

    console.log("re-render again" , counter);
    const handleInc = ()=>{
        setcounter(counter +1)

    };
       const handleDec = ()=>{
        if(counter ===0) return;
        setcounter(counter -1)

    }
    
    return(
        <div className="counter-cont">
            <h1>
                {counter}
              
            </h1>
              <button className="inc" onClick={handleInc}>inc</button>
                <button className="dec" onClick={handleDec}>dec</button>

        </div>
    )
}

export default Counter;