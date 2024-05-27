import { socialLinks } from '@/libs/data/page'
import { BiLogoLinkedinSquare, BiLogoGithub } from "react-icons/bi";
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className={`w-full px-[20px] sm:px-[40px] md:px-[50px] lg:px-[60px] py-4 flex justify-between`}>
        <div className="credit">
            <h1 className='text-xl text-[--text-color]'>Developed by ~ <span className='text-[--primary-color]'>M-Arsalan-Aftab.</span></h1>
        </div>
        <div className="social-link flex gap-6 items-center">
            <Link href={socialLinks[0]?.url} target='_blank'>
                <BiLogoGithub className='text-2xl text-[--text-color] transtion hover:text-[--primary-color]'/>
            </Link>
            <Link href={socialLinks[1]?.url} target='_blank'>
                <BiLogoLinkedinSquare className='text-2xl text-[--text-color] transtion hover:text-[--primary-color]'/>
            </Link>
        </div>
    </div>
  )
}

export default Footer