import React from 'react'

const NxtContext = React.createContext({
  isDark: false,
  savedVideosList: [],
  saveVideo: () => {},
  changeTheme: () => {},
})

export default NxtContext
