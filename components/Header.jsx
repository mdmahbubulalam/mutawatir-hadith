"use client"
import Image from 'next/image';
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
    <header className='bg-green-800 flex items-center md:justify-between sm:justify-evenly pl-16 pt-2 pb-2 pr-16'>
      <Link href="/">
        <Image src={'/assets/logo.png'} alt="logo" width={250} height={100}/>
      </Link>
      <form>
        <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500" placeholder='Search by Id...' id="search" type="text" 
            onChange={handleSearch}
          />
      </form>
    </header>
  )
}

export default Header