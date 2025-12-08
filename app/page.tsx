"use client"
import React, { useState } from 'react'
import { useEffect } from 'react'
const page = () => {
  const[data,setData]=useState(0);
  useEffect(()=>{
    async function fetchdata(){
      const res= await fetch('http://localhost:3000/api/hello');
      const data=await res.json();
      setData(data);
    }
    fetchdata();
  },[])
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default page