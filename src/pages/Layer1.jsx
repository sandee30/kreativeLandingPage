import React, { useEffect, useRef } from 'react'
import Scene from '../components/Scene'
// import Loadingpage from './Loadingpage'



const Layer1 = () => {


  return (
    <>
     {/* <Loadingpage /> */}
    <div className='layer1'>
     
        <div className='absolute z-30'>
        <div className="w-[40vw] mt-[72vh] mx-[30vw] text-3xl text-center max-sm:text-xl max-sm:w-[350px] max-sm:mx-auto max-sm:mt-[56vh]">
            <p>Fueling Your Brand's Digital Journey.</p>
            <p className='italic font-light text-lg text-slate-300 max-sm:text-sm'>Innovative strategies for limitless growth.</p>
        </div>

        </div>
            <Scene />
            


    </div>
    </>
  )
}

export default Layer1