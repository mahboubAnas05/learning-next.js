"use client"

import { useState } from "react"

export default function Counter(){
    const [varCount, setVerCount] = useState(0)

    function increCount(){
        setVerCount(varCount + 1)
    }

    function decreCount(){
        setVerCount(varCount - 1)
    }

    function resetCount(){
        setVerCount(0)
    }

    return(
        <div style={{
          background : "linear-gradient(120deg, #c973ff, #aebaf8,rgb(246, 233, 251))",
            }}>
            <div>
                <h1 className="text-4xl text-center mt-3 text-white">
                    Counter
                </h1>
                <div className="mt-3 p-3" style={{display : "flex", justifyContent : "center", alignItems: "center" }}>
                    <div className="text-6xl bg-white rounded p-3 px-6 shadow-lg shadow-gray-400">
                        {varCount}
                    </div>
                </div>
                <div className="mt-3 p-3" style={{display : "flex", justifyContent : "center", alignItems: "center" }}>
                    <button onClick={increCount} className="p-3 border rounded me-2 bg-violet-700 hover:bg-violet-500 hover:text-white hover:border-white text-white">increment</button>
                    <button onClick={decreCount} className="p-3 border rounded me-2 bg-violet-200 hover:bg-violet-500 hover:text-white hover:border-white text-gray">decrement</button>
                    <button onClick={resetCount} className="p-3 border-2 border-violet-500 rounded hover:bg-violet-500 hover:text-white hover:border-white me-2 text-violet-500">reset</button>
                </div>
            </div>
        </div>
    )
}