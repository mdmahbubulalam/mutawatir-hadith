"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HadithList = () => {
    const [hadiths, setHadiths] = useState([]);
  
    const url = `https://odd-gray-bunny-hat.cyclic.app/allHadith`;
  
    useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data =>{
        setHadiths(data?.data);
      }) 
    },[])
  return (
        <section className="bg-gray-100">
          
          {
              hadiths?.map(hadith =>
                <section className='pl-16 pt-2 pb-2 pr-16'>
                  <Link href={`hadith/${hadith.id}`} className='flex border border-gray w-full gap-x-4 p-4 hover:bg-white duration-300 text-xl text-gray-700'>
                    <div>
                      <h3 className='flex justify-center items-center font-medium border-2 w-10 h-10 rounded border-lime-700 '>{hadith.id}</h3>
                    </div>
                    <div className='flex justify-center items-center'>
                      <h3 className="text-xl">{hadith.title}</h3>
                    </div>
                    <hr/>
                  </Link>
                </section>
              )    
            }
        </section>
  )
}

export default HadithList