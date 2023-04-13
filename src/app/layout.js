import Header from './components/Header'
import './globals.css'
import { Roboto } from 'next/font/google';


const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Mutawatir hadith',
  description: 'A Collection of Mutawatir (Mass transmitted) Hadith (prophetic traditions)',
  icons: {
    icon:'./favicon.png',
},
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link rel='shortcut icon' href='./favicon.png' />
      </head>
      <body className='bg-gray-100'>
        <Header/>
        {children}
      </body>
    </html>
  )
}
