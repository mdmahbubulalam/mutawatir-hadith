
import Header from '@components/Header';
import '@styles/globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Mutawatir Hadith',
  description: 'A Collection of Mutawatir (Mass transmitted) Hadith (prophetic traditions)',
  icons: {
    icon: {
      url: './favicon.ico',
    },
  },
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={roboto.className}>
      <body className='bg-gray-100'>
        <main >
          <Header/>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
