import Header from '@/components/Header/Header'
import './globals.css'
import {Poppins} from 'next/font/google'


const inter = Poppins({ subsets: ['latin'] , weight:"400"})

export const metadata = {
  title: 'Arslan Iqbal',
  description: 'Passionate',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Header/>
        {children}
      </body>
    </html>
  )
}
