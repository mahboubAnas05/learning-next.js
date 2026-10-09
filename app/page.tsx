"use client"
import { useState } from "react";
import Navbar from "../components/navbar";

export default function Home() {

    const [c, setC] = useState(false)
    const [counter, setCounter] = useState(0)
  
    const countInc = () =>{
      setCounter(counter + 1)
    }
  
    const countDec = ()=>{
      setCounter(counter - 1)
    }
  
    const handelClick = () =>{
      setC(!c)
      setCounter(0)
    }
    
    return (
      <>
        <div className="mx-3 p-3" style={{display : "flex", justifyContent : "space-between", alignItems: "center", borderBottom : "1px solid black"}}>
          <Navbar />
          <div>
            <button onClick={handelClick} className={`text-white border rounded p-3 ${c ? 'bg-green-700' : 'bg-red-500'} `}>
              {
                c ? 
                "start"
                :
                "stop & reset"
              }
            </button>
            <button onClick={countInc} className="text-white p-3 border rounded bg-blue-700">increment</button>
            <button onClick={countDec} className="text-white p-3 border rounded bg-gray-600">decrement</button>
          </div>
  
        </div>
          <div className={`m-3`}>
            {
              c ? 
              <div className="text-white rounded shadow text-4xl bg-green-500 p-3">
                stoped
              </div> : 
              <div className="text-white rounded shadow text-4xl bg-red-500 p-3">
                started
              </div>
            }
          </div>
          <div className={`m-3 p-3 rounded text-white text-4xl ${counter > 0 ? "bg-green-600" : "bg-red-700" }`}>
            {
              counter
            }
          </div>
      </>
    );
}