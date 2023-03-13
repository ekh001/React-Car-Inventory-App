import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from './Button'

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
        <nav className='flex items-center justify-between flex-wrap bg-black p-5'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'>Home</Link>
            </div>
            {/* <div className="block"> */}
                <button
                    onClick={dropDown}
                    className='flex items-center px-3 py-2 text-emerald-200 border rounded border-teal-400 hover:text-white'>
                    
                        <i className="fa-solid fa-bars"></i>
                </button>
                { isVisible ? ( 
                    <div className='w-full flex'>
                        <div className='text-sm flex-grow'>
                            <Button className="p-3 m-5 bg-green-500 justify-center rounded-full">
                                <div>
                                    <Link to='/' onClick={ clicked } className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                    text-green-100 hover:text-black mr-4 ml-4">
                                        Home
                                    </Link>
                                </div>
                            </Button>
                            <Button className="p-3 m-5 bg-green-500 justify-center rounded-full">
                                <div>
                                    <Link to='/about' onClick={ clicked } className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                    text-green-100 hover:text-black mr-4 ml-4">
                                        About
                                    </Link>
                                </div>
                            </Button>

                            {
                                !auth.currentUser ?
                                <>

                                <Button className="p-3 m-5 bg-green-500 justify-center rounded-full">
                                    <div>
                                        <Link to="/" onClick={ () => { signInOnClick()}} className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                    text-green-100 hover:text-black mr-4 ml-4">
                                            Login
                                        </Link>
                                    </div>
                                </Button>
                                </>
                                :
                                <>
                                <Button className="p-3 m-5 bg-green-500 justify-center rounded-full">
                                <div>
                                    <Link to='/dashboard' onClick={ clicked } className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                    text-green-100 hover:text-black mr-4 ml-4">
                                        Dashboard
                                    </Link>
                                </div>
                                </Button>
                                

                                <Button className="p-3 m-5 bg-green-500 justify-center rounded-full">
                                    <div>
                                        <Link to="/" onClick={ () => { signOutOnClick()}} className="flex-items-center mt-4 lg:inline-block lg:mt-0
                                    text-green-100 hover:text-black mr-4 ml-4">
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
