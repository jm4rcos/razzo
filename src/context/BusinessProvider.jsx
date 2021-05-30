import React, { useState } from 'react'
import { BusinessContext } from './BusinessContext'

export default function BusinessProvider({children}){
  const [currentId, setCurrentId] = useState('')

  function getCurrentBusinessId(id){
    setCurrentId(id)
    console.log(currentId);
  }

  return (
    <BusinessContext.Provider value={{getCurrentBusinessId, currentId, setCurrentId}}>
      {children}
    </BusinessContext.Provider>
  )
}