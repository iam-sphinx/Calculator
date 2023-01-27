import React from 'react'

const Output = (props) => {
  const output = [
    {
      key : 1,
      style : "rounded-t-lg text-gray-900",
      output : props.prev_val 
    },
    {
      key : 2,
      style: "text-5xl text-gray-900",
      output : props.final_val
    }
  ]
  return (
    <>
      {output.map(({key, style, output})=>(
    <div key={key} className={`flex justify-end items-center pr-3 h-[50px] bg-slate-500 ${style}`}>{output}</div>
      ))}
    </>
      
  )
}

export default Output