import React from "react"
import { useState, useEffect } from "react"

export const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight])
  
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }
  
    useEffect(() => {
      window.addEventListener('resize', handleResize)
  
      return () => window.removeEventListener('resize', handleResize)
    }, [size])
  
    return size;
}