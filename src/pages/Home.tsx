import Background from '../assets/images/background-waves.svg'

import { fontFamily } from '@mui/system'
import landingPageSource from '../assets/images/landing-page-undraw-2.svg'
import arrowSource from '../assets/images/arrow.png'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React from 'react';



function Home() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // alternative way to style that I'm keeping as reference
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    color: 'white',
    border: '2px solid green',
    boxShadow: 24,
    p: 4,
  };

  
  return (

    <div 
    style={{ backgroundImage: `url(${ Background })`,
    height: 'calc(100vh) !important' }}
    className="justify-center bg-cover bg-fixed"
    >
      

      <div className="grid grid-cols-2 gap-x-4 p-2 place-items-center">
        <h1 style={{ fontFamily: 'Tilt+Warp' }}
        className='flex flex-col items-center m-10 p-10
          text-green-600 text-6xl text-center font-extrabold  hover:text-white transition ease-linear duration-1000'
          >
            Park All Your Cars in a Virtual Space
            <img src={arrowSource} alt="" className="mt-16 h-36" /> 
        </h1>   
        
        <div className="">
          <img src={landingPageSource} alt="" className="" />
        </div>
      </div>


      <div className="grid grid-cols-2 gap-4 pb-10 place-items-center">
        <button onClick={handleOpen} className='flex flex-col p-3 bg-green-200 rounded-full border-4 border-green-400 
        drop-shadow-md font-mono hover:bg-green-500 hover:text-white transition ease-linear duration-200'>
          <h1 className='text-4xl'>
            Get Started
            </h1>
        </button>


      <Modal
        open={open}
        onClose={handleClose}
      > 
        <Box sx={style}>
          <Typography variant="h6" component="h2" className='text-center'>
            Sorry, but if you want in, you're going to have to work for it. 
          </Typography>
          <Typography sx={{ mt: 2 }} className="text-justify">
            In a perfect world, everything is as easy as 
            using a "Get Started" button. However, the world
            isn't perfect, and neither is this website. 
          </Typography>
          <Typography sx={{ mt: 2 }} className="text-justify">
            Besides, if this "Get Started" button functioned as expected, you'd
            probably miss an "About" page, or some carefully curated
            nav button stylings that were made before coming up with the 
            modal login idea. 
          </Typography>
        </Box>
      </Modal>    
      </div>
       


    </div>


    

  )
}


export default Home

