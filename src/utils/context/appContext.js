import React from 'react'

export const AppContext = React.createContext({
  countyInFocus: { name: '', number: 0 },
  setCountyInFocus: () => {},
  openModal: false,
  setModalToOpen: () => {}
})