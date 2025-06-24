import React, { useEffect, useRef } from 'react'

const Cursor = () => {

const cursorRef = useRef(null); // Reference for the custom cursor

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Function to update the cursor's position
    const moveCursor = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Move the custom cursor with smooth animation
      cursor.style.left = `${mouseX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${mouseY - cursor.offsetHeight / 2}px`;
    };
    
    // Listen to mousemove events to move the custom cursor
    window.addEventListener('mousemove', moveCursor);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);  

  return (
    <div>
         <div ref={cursorRef} className="custom-cursor"></div>
    </div>
  )
}

export default Cursor