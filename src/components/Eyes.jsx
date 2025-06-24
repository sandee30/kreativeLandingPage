import React, { useEffect, useState } from 'react'



const Eyes = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
      window.addEventListener("mousemove", (e)=> {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let deltaX = mouseX - window.innerWidth/2;
        let deltaY = mouseY - window.innerHeight/2;

        var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
        setRotate(angle - 180);
      })
    
    
    })
    

  return (
    <div>
      <div className='container w-full h-screen flex justify-center items-center'>

        <div className="w-[680px] h-[400px] backdrop-blur shadow-inner border-2 border-white rounded-2xl flex justify-center items-center">
           <div className="flex gap-8">
                <div className="w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center">
                    <div className="w-[10vw] h-[10vw] bg-black rounded-full relative">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line h-10 w-full rotate-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-10 h-10 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
                <div className="w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center">
                    <div className="w-[10vw] h-[10vw] bg-black rounded-full relative">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line h-10 w-full rotate-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-10 h-10 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes