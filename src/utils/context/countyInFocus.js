import React from 'react'

export const CountyInFocus = React.createContext({
  countyInFocus: {
    name: '',
    number: 0
  },
  setCountyInFocus: () => {}
}) 