import styles from '@/styles/Login.module.css'

const Login = () => {
    return ( 

        <>
            

            <form className={styles.container}>
                <h1 style={{"max-width":"600px", "display":"flex", "justifyContent":"center", "margin": "60px"}}>Welcome Back!</h1>

                <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputPassword"/>
                        </div>
                </div>
                
                
                <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword"/>
                        </div>
                </div>

            </form>
        
        </>
     );
}
 
export default Login;