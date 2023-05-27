import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
    
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (  

        <>
        
            <h1>Oopssssssss......</h1>
        </>
    );
}
 
export default NotFound;