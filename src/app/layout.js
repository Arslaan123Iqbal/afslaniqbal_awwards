import Header from '@/components/Header/Header'
import './globals.css'
import {Poppins} from 'next/font/google'


const inter = Poppins({ subsets: ['latin'] , weight:"400"})

export const metadata = {
  title: 'Arslan Iqbal',
  description: 'I am a software engineer with a focus on full-stack development. I have experience working with a range of technologies, including React, JavaScript, Python, and Solidity. In my current role, I am responsible for designing and building robust, scalable web applications that deliver a seamless user experience. I am constantly striving to learn and improve my skills, and I am excited to continue growing and developing as a software engineer.',
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
