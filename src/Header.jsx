import React from 'react'
// import { headertexture as bgheader } from './assets/headertexture.png'
// import Home from './Home.jsx'
// import Discover from './Discover.jsx'
// import Signup from './Signup.jsx'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white/85 font-semibold text-2xl'>
            <ul className='flex flex-row justify-evenly py-5'>
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/schedule">Show Timing</Link></li> */}
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>

            </ul >
        </div >
    )
}

// function DisplayModal(props){
//     if(props.displayis){
//         return(
//             <div>
//                 <div>Hello</div>
//                 <button onClick={props.displayis=false}></button>
//             </div>
//         );
//     }else{

//     } 
// }
export default Header