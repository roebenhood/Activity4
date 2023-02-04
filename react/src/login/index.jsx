import {LoginAPI} from '../Utils/fetch';
function Login() {

    try{
        const isUserLoggedIn = JSON.parse(localStorage.getItem('user'))
        if(isUserLoggedIn && isUserLoggedIn.id){
            window.location.href = 'http://localhost:3000/'
        }
    }catch(error){
    }
    
    const login = ()=>{
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        console.log('username: ', username)
        console.log('password: ', password)
        LoginAPI(username, password)
        .then((result)=>{
            return result.json()
        })
        .then((result)=>{
            console.log('result: ', result)
            console.log('localStorage: ', localStorage)
            if(result.success){
                //go to dashboard / home
                localStorage.setItem('user', JSON.stringify(result.userData))
                window.location.href = 'http://localhost:3000/'
            }else{
                // alert user that credentials is invalid
            }
        })
        .catch(error=>{
            console.log('error: ', error)
        })
    }
    return (
        <>
           <div>
              <h1>Please Login now</h1>
              <input style={{color: 'red'}} type="text" id="username" placeholder="username" />
              <br />
              <input style={{color: 'red'}} type="password" id="password" placeholder="password" />
              <button onClick={login}>Login</button>
           </div>
        </>
    );
}

export default Login;