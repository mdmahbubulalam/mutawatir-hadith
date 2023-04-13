"use client"
import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const page = ({params}) => {
    const id = params.id;
    const [hadith, setHadith] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const url = `https://odd-gray-bunny-hat.cyclic.app/hadith/${id}`;
  
    useEffect(()=>{
      setLoading(true)
      fetch(url)
      .then(res => res.json())
      .then(data =>{
        setHadith(data);
        setLoading(false)
      }) 

    },[])
  return (
    <div>
      {
        loading ?
        <div className='h-screen flex items-center justify-center text-5xl'>
            <FaSpinner className='animate-spin'/>
        </div>
        :
        hadith.title?
        <div className='mr-20 ml-20 mt-5 p-5 bg-white rounded'>
          <h3 className='text-lg pb-3'><strong>{hadith.title}</strong></h3>
          <h3 className='text-lg text-gray-700 pb-3'>{hadith.hadith}</h3>
          <h4 className='text-sm'><strong>Hadith number in {hadith.book} [Arabic Only] - {hadith.hadithNumberArabic}</strong></h4>
        </div>
        :
        <div className='h-screen flex items-center justify-center text-xl'>
          <h3><strong>404</strong> | This page could not be found.</h3>
        </div>
      }
    </div>
  )
}

export default page