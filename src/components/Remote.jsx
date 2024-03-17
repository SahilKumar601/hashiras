import React, { useEffect, useState } from 'react'

function Remote({device}) {

  const [data,setData]=useState('');
  const [value,setValue]=useState(0);

  useEffect(()=>{
    setData(device);
    setValue(device.value)
  },)
  const handleClick=()=>{
    data.value-=1;
  }
  const increaseValue=()=>{
    data.value+=1;
  }
  console.log(data);
  return (
    <div className='px-5 py-10 flex flex-col items-center'>
        <div>
            <span className='text-3xl'>{device.device}</span>
        </div>
        <div className='h-[250px] mt-3 overflow-hidden'>
            <img src={data.icon} alt="" />
        </div>
        <div className="mt-10 w-[200px] h-[200px] border-2 bg-blue-500 rounded-full flex items-center justify-center text-5xl">
        {data.device !== 'AC' ? value : null}
        </div>
        <div className='flex gap-36'>
            <div className="my-10 w-12 h-12 border-2 bg-white rounded-full flex items-center justify-center text-black font-semibold text-3xl hover:cursor-pointer">-</div>
            <div className="my-10 w-12 h-12 border-2 bg-white rounded-full flex items-center justify-center text-black text-3xl font-semibold hover:cursor-pointer">+</div>
        </div>
    </div>
  )
}

export default Remote