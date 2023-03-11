import Background from '../assets/images/hybe1.jpg'
import makeModelSource from '../assets/images/makemodel.jpg'
import colorSource from '../assets/images/color.jpg'
import nicknameSource from '../assets/images/nickname.jpg'
import { fontFamily } from '@mui/system'


function Home() {
  return (

    <div 
    style={{ backgroundImage: `url(${ Background })`}}
    className="flex-row justify-center mx-auto bg-cover bg-fixed"
    >
      
      <div className='flex justify-center place-items-center h-96 '>
        <h1 className='p-5 bg-white bg-opacity-80 
        text-emerald-600 text-4xl text-center font-mono font-extrabold 
        rounded-full '
        >
          Hitchiker's Guide to Your Ford Galaxy
          </h1>
      </div> 

      <div className='flex justify-center place-items-center h-96'>
        <h3 className="p-5 bg-white bg-opacity-80 text-emerald-600 text-4xl text-center font-mono font-extrabold rounded">
          Our car database allows you to:
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-4 p-3 pb-10">
        <div className="p-5 bg-white bg-opacity-80"
        >
          <img src={makeModelSource} alt="" className="" />
          <h2 style={{ fontFamily: 'Josefin Sans' }}
          className="p-5 text-emerald-600 
          text-2xl text-center font-serif font-bold"
          >
          store the make and model
          </h2>        
        </div>

        <div className="p-5 bg-white bg-opacity-80 text-emerald-600 
        text-4xl text-center font-mono font-extrabold"
        >
          <img src={colorSource} alt="" className="" />
          <h2 style={{ fontFamily: 'Josefin Sans' }}
          className="pt-5 text-emerald-600 
          text-2xl text-center font-serif font-bold"
          >
          store the car color
          </h2>  
        </div>

        <div className="p-5 bg-white bg-opacity-80 text-emerald-600 
        text-4xl text-center font-mono font-extrabold rounded"
        >
          <img src={nicknameSource} alt="" className="" />
          <h2 style={{ fontFamily: 'Josefin Sans' }}
          className="p-5 text-emerald-600 
          text-2xl text-center font-serif font-bold rounded"
          >
          make up a nickname
          </h2>  
        </div>
        
       
    </div>

    </div>


    

  )
}

function Features() {
  return (
    <div className="flex place-items-center h-screen bg-white">
      <h3 className="flex place-items-center">
      Our car database allows you to:
      </h3>
    </div>
  )
}

export default Home

