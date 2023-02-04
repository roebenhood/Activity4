import LeftNavBar from '../left-side-nav';
import { Outlet } from "react-router-dom";
import { useState } from 'react';

function Home() {
    const [currentLink, setCurrentLink] = useState('')
    try{
        const isUserLoggedIn = JSON.parse(localStorage.getItem('user'))
        if(isUserLoggedIn && isUserLoggedIn.id){
            // do nothing, continue lang
        }else{
            localStorage.clear();
            window.location.href = 'http://localhost:3000/login'
        }
    }catch(error){
        localStorage.clear();
        window.location.href = 'http://localhost:3000/login'
    }

    const renderOutlet = ()=>{
        if(currentLink === '/'){
            return(
                <>
                    <h2>Hi world</h2>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-regular fa-code-branch"></i>
                </>
            )
        }else{
            return (<Outlet/>)
        }
    }
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <LeftNavBar setCurrentLink={setCurrentLink} test={1}/>
                    {renderOutlet()}
                </div>
            </div>
        </>
    );
}

export default Home;