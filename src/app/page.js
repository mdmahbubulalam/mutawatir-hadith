import Link from 'next/link';

export default function Home({children}) {
  return (
    <main>
      <children/>
      <hr/>
      <div className='flex justify-center bg-gray-800 p-4'>
            <div className='text-center text-white'>
                <h3 className='text-3xl'>A Collection of Mutawatir (Mass transmitted) Hadith (prophetic traditions)</h3>
                <h4>Collected By</h4>
                <h4 className='text-1xl'>Ministry of Islamic Affairs, Endowments, Da‘wah and Guidance</h4>
                <h4 className='font-bold text-1xl'>Kingdom of Saudi Arabia</h4>
                {/* <Link href="http://web.archive.org/web/20061031015411/http://hadith.al-islam.com/bayan/Index.asp?Lang=ENG&Type=3" className="font-bold text-green-950">
                    Link
                </Link>  */}
            </div>
        </div>
        <div className='mr-20 ml-20 mt-5'>
            <p className='text-2xl'><strong>What is a Mutawatir Hadith and why this is distinct?</strong></p>
            <p className='text-lg text-gray-700'>
                ( َتوا ِتر A Mutawatir meaning "successive") Hadith is a report of such a large number of narrators (at different times) that their agreement upon an untruth is inconceivable thus being accepted as unquestionable in its veracity. A hadith is said to be mutawatir if it was reported by a significant, though unspecified, number of narrators at each level in the chain of narration, thus reaching the succeeding generation through multiple chains of narration leading back to its source.<br/><br/>This provides confirmation that the hadith is authentically attributed to its source at a level above reasonable doubt. This is due to its being beyond historical possibility that narrators could have conspired to forge a narration. In contrast, an ahaad hadith is a narration the chain of which has not reached a number sufficient to qualify as mutawatir.<br/><br/>There are only two types of texts in Islamic sharīʿah which are immutable (Qaati’) a) verses of Qura’n and b) Mutawatir Hadith. If someone denies a Mutawatir hadith he does Kufr.
            </p>
        </div>
        <div className='flex justify-center'>
        <Link href="/hadith" className='mr-5'>
          <button class="bg-green-800 font-semibold hover:bg-transparent text-white hover:text-black py-2 px-4 border border-black hover:bg-transparent border-green-800 rounded duration-300">
            Hadith Index
          </button>
        </Link>
        <Link href="/hadith/allHadith">
          <button class="bg-green-800 font-semibold hover:bg-transparent text-white hover:text-black py-2 px-4 border border-black hover:bg-transparent border-green-800 rounded duration-300">
            All Hadith
          </button>
        </Link>
        </div>
        
    </main>
  )
}
