import Footer from './components/Footer/page'
import Nav from './components/Nav/page'
import { DM_Sans } from "next/font/google"
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
})

export const metadata = {
  title: 'M-Arsalan ~ Portfolio App',
  description: 'Created By Muhammad-Arsalan-Aftab',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>M-Arsalan ~ Portfolio App</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body className={`${dmSans.className} w-full bg-[--primary-black] relative`}>
        <Nav />
        <div>
          {children}
        </div>
        <footer className='hidden xl:block border-t border-[#555]'>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
