import React, { useState } from 'react'

const App = () => {
    const [state, setState] = useState({
        count: 0,
        name: "Increment"
    });

    const { count, name } = state;
    const incrementHandler = () => {
        setState(prevData => {
            return { ...prevData, name: "Increment", count: prevData.count + 1 }
        })
    }
    const decrementHandler = () => {
        if (count <= 0) return 0;
        setState(prevData => {
            return { ...prevData, name: "Decrement", count: prevData.count - 1 }
        })
    }

    return (
        <div className=' flex flex-col justify-center items-center h-[100vh] bg-[#0e1e43] gap-y-3'>
            <h1 className='text-white font-bold text-[30px] uppercase m-3 tracking-[2px]'>
                {name}
            </h1>
            <div className='flex gap-x-7 items-center'>
                <button onClick={incrementHandler}
                    className=' bg-white px-5 text-black rounded-md hover:bg-slate-600 hover:text-white' >
                    <span className='text-[30px] font-bold'>+</span>
                </button>
                <p className='text-[30px] font-bold text-white'>{count}</p>

                <button onClick={decrementHandler}
                    className=' bg-white px-5 text-black rounded-md hover:bg-slate-600 hover:text-white' >
                    <span className='text-[30px] font-bold'>-</span>
                </button>
            </div>
        </div>
    )
}

export default App
