import './globals.css'
import { Roboto } from 'next/font/google'
import Header from '../components/Header';

const inter = Roboto({ subsets: ['latin'] , weight:"400"})

export const metadata = {
  title: 'Arslan Iqbal',
  description: 'Passionate',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
