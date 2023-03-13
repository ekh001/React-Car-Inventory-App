import Background from '../assets/images/background-waves.svg'

import { fontFamily } from '@mui/system'
import landingPageSource from '../assets/images/landing-page-undraw-2.svg'



function Home() {
  return (

    <div 
    style={{ backgroundImage: `url(${ Background })`}}
    className="flex-row justify-center mx-auto bg-cover bg-fixed"
    >
      

      <div className="grid grid-cols-2 gap-4 p-3 pb-10 place-items-center h-screen">
      <h1 style={{ fontFamily: 'Tilt+Warp' }}
      className='p-10 bg-white bg-opacity-10 
        text-green-600 text-6xl text-center font-extrabold 
        rounded-full backdrop-blur-sm'
        >
          Store All Your Cars in a Virtual Space
          </h1>
          <div className="p-5">
          <img src={landingPageSource} alt="" className="" />
          </div>



      </div>
      
       


    </div>


    

  )
}


export default Home

