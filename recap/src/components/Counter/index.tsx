import React ,{useState}from "react";
import "./style.css"

const  Counter: React.FC =  (props) =>{
    const [counter, setcounter] = useState(0);
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