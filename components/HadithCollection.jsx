"use client"
import React, { useEffect, useState } from 'react'

const HadithCollection = () => {
    const [allHadith, setAllHadithAll] = useState([])
    const url = `https://odd-gray-bunny-hat.cyclic.app/allHadith`;
    useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data =>{
        setAllHadithAll(data.data)
      }) 
    },[])
  return (
    <section>
      {
        allHadith?.map(hadith => 
          hadith.title ?
          <section className='ml-16 mt-3 mb-3 mr-16 p-4 bg-white rounded text-justify'>
            <h3 className='text-lg pb-3'><strong>{hadith.id}. {hadith.title}</strong></h3>
            <h3 className='text-lg text-gray-700 pb-3'>{hadith.hadith}</h3>
            <h4 className='text-sm'><strong>Hadith number in {hadith.book} [Arabic Only] - {hadith.hadithNumberArabic}</strong></h4>
          </section>
          :
          <section className='h-screen flex items-center justify-center text-xl'>
            <h3><strong>404</strong> | This page could not be found.</h3>
          </section>
          ) 
      }
    </section>
  )
}

export default HadithCollection