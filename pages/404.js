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

        <div className='pic404'>
        
            
            <Image
                src="/404.jpeg"
                width={500}
                height={500}
                alt="Picture of the author"
            />

            
        </div>
    );
}
 
export default NotFound;