import React, { useEffect, useState } from 'react'

const Time = () => {
    let[input,setinput]=useState(0)
    let [min,setmin]=useState(0)
    let [sec,setsec]=useState(0)
    let [hour,sethour]=useState(0)
    let [start,setstart]=useState(false)
    
    useEffect(()=>{
        if(start){
            sethour(Math.floor(input/60))
            setmin((input-Math.floor(input/60)*60)-1)
            setsec(59)
        }
    },[start])

  return (
    <div>
        
        <input type="text" value={input}  onChange={(e)=>setinput(e.target.value)}/><br></br>
        <hr></hr>
        <h2>Hour : {hour}  minutes : {min}   second : {sec}</h2>
        <button onClick={()=>setstart(true)}>start</button>
        <button onClick={()=>setstart(false)}>stop</button>
    </div>
  )
}

export default Time