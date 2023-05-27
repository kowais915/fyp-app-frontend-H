import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'


import { useEffect } from 'react';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })




export default function Home() {
  const router = useRouter();
  const signup = ()=>{
   
    router.push('/auth/signup')
  }
  const login = ()=>{
   
    router.push('/auth/login')
  }


  return (
    <>
      <div className={styles.container}>


          <h1>The Coolest Management App</h1>
          <p style={{display:"block"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ex nulla suscipit aliquam molestiae expedita asperiores minus? Repudiandae, quas quo!</p>

          <div className="buttons">
            <button  type="button" class="btn btn-primary" onClick={login}>Login</button>
    
            <button  type="button" class="btn btn-secondary" onClick={signup}>Register</button>
          </div>
      </div>

    </>
  )
}
