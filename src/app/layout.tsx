import Header from '@/app/components/header/Header'
import Footer from '@/app/components/footer/Footer'

import './globals.css'
import { Mulish } from 'next/font/google'

 
const roboto = Mulish({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body style={{background:'#FAFAFA'}} className={roboto.className}>
           <Header />
        {children}
        
         <Footer />
        </body>
    </html>
  )
}
