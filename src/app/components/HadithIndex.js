"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const HadithIndex = () => {
    const [hadiths, setHadiths] = useState([]);
    const [loading, setLoading] = useState(false)
  
    const url = `https://odd-gray-bunny-hat.cyclic.app/allHadith`;
  
    useEffect(()=>{
      setLoading(true)
      fetch(url)
      .then(res => res.json())
      .then(data =>{
        setHadiths(data?.data);
        setLoading(false);
      }) 
    },[])
  return (
        <div className="bg-gray-100">
          
          {
            loading ?
              <div className='h-screen flex items-center justify-center text-5xl'>
                <FaSpinner className='animate-spin text-green-800'/>
              </div>
              :
              hadiths?.map(hadith =>
                <div className='pr-20 pl-20 mt-5'>
                  <Link href={`hadith/${hadith.id}`} className='flex border w-full gap-x-4 p-4 hover:bg-white duration-300 text-xl text-gray-700'>
                    <div>
                      <h3 className='flex justify-center items-center font-medium border-2 w-10 h-10 rounded border-lime-700 '>{hadith.id}</h3>
                    </div>
                    <div className='flex justify-center items-center'>
                      <h3 className="text-xl">{hadith.title}</h3>
                    </div>
                    <hr/>
                  </Link>
                </div>
              )    
            }
        </div>
  )
}

export default HadithIndex