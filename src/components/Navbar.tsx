import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from './Button'
import navBarLogo from '../assets/images/logo3.png'

import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
        console.log(isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }
    
    return (
        <nav className='flex items-center justify-between flex-wrap bg-black' >
            <div className='flex items-center flex-shrink-0 text-white mr-6 h-32 w-32'>
                <Link to='/' className='tracking-tight rounded-full'><img src={navBarLogo} alt="Home"/></Link>
            </div>
            {/* <div className="block"> */}
                <button
                    onClick={dropDown}
                    className='flex items-center px-3 py-2 mr-6 text-emerald-200 border rounded border-teal-400 hover:text-white'>                    
                        <i className="fa-solid fa-bars"></i>
                </button>
                { isVisible ? ( 
                    <div className={`w-full flex`}>
                        <div className='text-sm flex-grow'>
                            <Button className="p-3 m-5 bg-green-500 border-green-300 border-2 justify-center rounded-full
                            text-white hover:text-black hover:bg-green-600 transition ease-linear duration-200">
                                <div>
                                    <Link to='/' onClick={ clicked } className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                    text-white mr-4 ml-4 hover:text-black transition ease-linear duration-200">
                                        Home
                                    </Link>
                                </div>
                            </Button>
                            <Button className="p-3 m-5 bg-green-500 border-green-300 border-2 justify-center rounded-full
                            text-white hover:text-black hover:bg-green-600 transition ease-linear duration-200">
                                <div>
                                    <Link to='/about' onClick={ clicked } className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                    text-white mr-4 ml-4 hover:text-black transition ease-linear duration-200">
                                        About
                                    </Link>
                                </div>
                            </Button>

                            {
                                !auth.currentUser ?
                                <>

                                <Button className="p-3 m-5 bg-green-500 border-green-300 border-2 justify-center rounded-full
                            text-white hover:text-black hover:bg-green-600 transition ease-linear duration-200">
                                    <div>
                                        <Link to="/" onClick={ () => { signInOnClick()}} className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                    text-white mr-4 ml-4 hover:text-black transition ease-linear duration-200">
                                            Login
                                        </Link>
                                    </div>
                                </Button>
                                </>
                                :
                                <>
                                <Button className="p-3 m-5 bg-green-500 border-green-300 border-2 justify-center rounded-full
                            text-white hover:text-black hover:bg-green-600 transition ease-linear duration-200">
                                <div>
                                    <Link to='/dashboard' onClick={ clicked } className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                    text-white mr-4 ml-4 hover:text-black transition ease-linear duration-200">
                                        Dashboard
                                    </Link>
                                </div>
                                </Button>
                                

                                <Button className="p-3 m-5 bg-green-500 border-green-300 border-2 justify-center rounded-full
                            text-white hover:text-black hover:bg-green-600 transition ease-linear duration-200">
                                    <div>
                                        <Link to="/" onClick={ () => { signOutOnClick()}} className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                    text-white mr-4 ml-4 hover:text-black transition ease-linear duration-200">
                                            Logout
                                        </Link>
                                    </div>
                                </Button>
                                </>
                            }
                        </div>
                    </div>
                    ) : ( 
                    <></> 
                )}
            {/* </div> */}
        </nav>
  )
}

export default Navbar
