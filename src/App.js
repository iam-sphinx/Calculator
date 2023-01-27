import React from "react";
import Output from "./components/Output";

function App() {
  const [prev_val, setPrev_val] = React.useState('')
  const [final_val, setFinal_val] = React.useState('')
  const operations = ['+', '-', '/', '*', '%','.']

  const handleClick = (event)=> {
    const check = event.target.value
    if((operations.includes(check) && prev_val==='' ) || (operations.includes(check) && operations.includes(prev_val.slice(-1))))
    return;
    setPrev_val(prev_val + check)
    if(prev_val === '' && check === 'C')
    setFinal_val('0')
    if(check === 'C')
    {
    setPrev_val(prev_val.slice(0,-1))
    }
    else if(check === '±')
    setPrev_val(prev_val*(-1))
    else if(check === '=')
    {setFinal_val(eval(prev_val))
    setPrev_val(prev_val)}
  }

  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#F9655B] to-[#EE821A]">
      <div className="text-5xl flex justify-center items-center py-2 mb-16 text-white">
        Calculator
      </div>
      <div className="flex justify-center">
        <div className="h-[500px] w-[325px] bg-[#00425A] rounded-lg drop-shadow-2xl shadow-black">
          <Output prev_val={prev_val} final_val={final_val}/>
        <div className="grid grid-cols-4 gap-2 px-2 py-2">
          <button onClick={handleClick} value = 'C' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">C</button>
          <button onClick={handleClick} value = '±' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">±</button>
          <button onClick={handleClick} value = '%' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">%</button>
          <button onClick={handleClick} value = '+' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">+</button>
          <button onClick={handleClick} value = '7' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">7</button>
          <button onClick={handleClick} value = '8' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">8</button>
          <button onClick={handleClick} value = '9' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">9</button>
          <button onClick={handleClick} value = '-' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">-</button>
          <button onClick={handleClick} value = '4' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">4</button>
          <button onClick={handleClick} value = '5' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">5</button>
          <button onClick={handleClick} value = '6' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">6</button>
          <button onClick={handleClick} value = '*' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">*</button>
          <button onClick={handleClick} value = '1' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">1</button>
          <button onClick={handleClick} value = '2' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">2</button>
          <button onClick={handleClick} value = '3' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">3</button>
          <button onClick={handleClick} value = '/' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">/</button>
          <button onClick={handleClick} value = '0' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">0</button>
          <button onClick={handleClick} value = 'C' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white">.</button>
          <button onClick={handleClick} value = '=' className="text-3xl h-[70px] w-full rounded-lg bg-gray-400 hover:bg-gray-700 cursor-pointer flex justify-center items-center hover:text-white col-span-2">=</button>
        </div>
      <div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default App;
