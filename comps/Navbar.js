import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (  
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    
                    <Link class="navbar-brand"  href="/">FYP Guru</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        
                        <Link class="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" href="/about">About</Link>
                        </li>

                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" href="/auth/login">Login</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" href="/auth/signup">Signup</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>       
        </>
    );
}
 
export default Navbar;