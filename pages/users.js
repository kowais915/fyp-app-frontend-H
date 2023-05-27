
import Link from 'next/link'


export const getStaticProps = async () => {
 
    const res = await fetch("http://localhost:3000/api/users")
    const data = await res.json()
    console.log(data)
    return {
        props: {users: data}
    }

    

}


const Home = ({users}) => {
    console.log(users)
    return ( 
    <div className='main'>
        <h1>Users</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        
            {users.map(user => {
                return (
                    <>
                    
                        {/* <h3>{user.name}</h3> */}

                            {/* <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action">{user.name}</a>
                            </div> */}

                            
                                
                                <div class="col">
                                    <div class="card h-100">
                                
                                    <div class="card-body">
                                        <h5 class="card-title">{user.name}</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    </div>
                                </div>

                         

                            
                    </>
                )
            })}
        
        </div>
    </div>
     );
}
 
export default Home;