"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const Header = () => {
  const router = useRouter()
  const handleSearch = e => {
    const searchValue = e.target.value
    router.push(`/hadith/${searchValue}`)
}
  return (
    <div className='bg-green-800 flex items-center justify-between pl-16'>
      <Link href="/">
          <h3 className='text-2xl font-semibold p-5 text-center text-white'>Mutawatir Hadith</h3>
      </Link>
      <form className="max-w-sm">
          <div className="md:w-2/3">
            <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500" placeholder='Search by Id...' id="search" type="text" 
            onChange={handleSearch}
            />
          </div>
      </form>
    </div>
  )
}

export default Header