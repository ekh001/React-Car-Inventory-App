import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
    const navigate = useNavigate();
    // This checks if user is logged in. If so, it returns the children
    // which are passed as props. It's whatever component is either protected
    // or not. Otherwise, it will send the user to the login route.
    useEffect(() => {
        if (!auth.currentUser) {
            navigate("../")
            signInWithPopup(auth, Providers.google)
        }
    }, [])
  return (
    <>{children}</>
  )
}

export default AuthChecker
