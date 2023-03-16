import aboutBackground from '../assets/images/datatable-bg2.svg'
import makeModelSource from '../assets/images/makemodel.jpg'
import colorSource from '../assets/images/color.jpg'
import nicknameSource from '../assets/images/nickname.jpg'


function About() {

  return <>
    <div style={{ backgroundImage: `url(${ aboutBackground })`,
    height: 'calc(100vh) !important' }}
    className="flex-row justify-center mx-auto bg-cover bg-fixed">

      <div className='flex justify-center place-items-center'>
        <h3 style={{ fontFamily: 'Tilt+Warp' }}
        className="p-5 bg-white bg-opacity-80 text-emerald-600 text-4xl text-center font-extrabold rounded">
          About the Virtual Garage
        </h3>
      </div>
        <h2 className="p-5 bg-white bg-opacity-80 text-emerald-600 text-xl text-center">
          So how does this work? 
          <ul>
            Well, hop on over to that nav button and login
            with Google. 
          </ul>
          <ul>
            Then, navigate on over to the Dashboard and click 
            the drop-down menu to bear witness to the nonsense that's been
            entered into the car inventory thus far. 
          </ul>
          <ul>
            Add your own ideas to the chaos.
          </ul>
          <ul>
            Profit.
          </ul>
        </h2>
        <h3 style={{ fontFamily: 'Tilt+Warp' }}
        className="p-5 bg-white bg-opacity-80 text-emerald-600 text-4xl text-center font-extrabold rounded">
          Here's what you can find:
        </h3>

      <div className="grid grid-cols-3 gap-4 p-3 pb-10 transition ease-linear duration-1000">
        <div className="p-5 bg-green-100 border-black border-2 drop-shadow-md bg-opacity-80 items-center justify-center"
        >
          <img src={makeModelSource} alt="" className=''/>
          <h2 style={{ fontFamily: 'Josefin Sans' }}
          className=" text-emerald-600 
          text-3xl text-center font-serif font-bold"
          >
          make and model
          </h2>        
          <p 
          className="p-5 text-emerald-600 
          text-center font-mono font-bold"
          >
          Ah, yes. The standard. Remember, the
          make and model of your imaginary car is a 
          direct reflection of who you are, as
          a person, at your core, so choose wisely. 
          </p> 
        </div>

        <div className="p-5 bg-green-100 border-black border-2 drop-shadow-md bg-opacity-80 items-center justify-center"
        >
          <img src={colorSource} alt="" className=''/>
          <h2 style={{ fontFamily: 'Josefin Sans' }}
          className=" text-emerald-600 
          text-3xl text-center font-serif font-bold"
          >
          color
          </h2>        
          <p 
          className="p-5 text-emerald-600 
          text-center font-mono font-bold"
          >
          What color is this fictional vehicle of yours?
          Is it Power Gray? How about Drunk-Tank Pink? 
          Feel free to pull up any one of the 
          (surprisingly high) number of articles about weird
          paint color names, and choose your favorite. 

          </p> 
        </div>

        <div className="p-5 bg-green-100 border-black border-2 drop-shadow-md bg-opacity-80 items-center justify-center"
        >
          <img src={nicknameSource} alt="" className=''/>
          <h2 style={{ fontFamily: 'Josefin Sans' }}
          className=" text-emerald-600 
          text-3xl text-center font-serif font-bold"
          >
          nickname
          </h2>        
          <p 
          className="p-5 text-emerald-600 
          text-center font-mono font-bold"
          >
          Could this database include more helpful
          information, like mileage, a VIN,
          or literally any other category? Sure.
          Will I be creating a new 
          database just to be less silly? Nah.
          </p> 
        </div>
        
       
    </div>
    </div>


    </>
  
}

export default About
