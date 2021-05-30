import { createContext } from 'react'

const BusinessContextData = {
  currentId: []
}

const BusinessContext = createContext(BusinessContextData)

export {BusinessContext}