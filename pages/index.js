import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })




export default function Home() {



  return (
    <>
   
      <h1>Hello World</h1>

    </>
  )
}
