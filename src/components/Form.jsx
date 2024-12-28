import React, { useEffect, useRef, useState } from 'react'

const Form = () => {
    const [email,setEmial] = useState("");
    const [name, setName] = useState("");
    const [website, setWebsite] = useState("");
    const [dataArr,setDataArr] = useState([])

    const addContet = (e) => {
        e.preventDefault();
        const newArr = {
            name:name,
            email:email,
            website:website
        }
        setDataArr([...dataArr, newArr])
        console.log([...dataArr, newArr])
    }

  return (
    <div className='flex flex-col justify-center items-center h-[80vh]'>
      <form className='flex flex-col gap-3 shadow-lg p-10' onSubmit={addContet}>
        <input type='text' placeholder='Email' className='border border-black px-4 py-2' onChange={(e)=>setEmial(e.target.value)}/>
        <input type='text' placeholder='Username' className='border border-black px-4 py-2' onChange={(e)=>setName(e.target.value)}/>
        <input type='text' placeholder='Website' className='border border-black px-4 py-2'onChange={(e) => setWebsite(e.target.value)}/>
        <button className='border border-white bg-black text-white px-4 py-2 hover:bg-yellow-500 hover:text-black'>Submit</button>
      </form>
      <div className='mt-10 flex flex-wrap m-16 ml-20 overflow-y-scroll'>
        {dataArr.map((E,index) => (
          <div key={index} className='border border-black p-2 m-2'>
            <h1>{E.name}</h1>
            <h1>{E.email}</h1>
            <h1>{E.website}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Form