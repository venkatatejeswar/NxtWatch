import React from 'react'

const NxtContext = React.createContext({
  isDark: false,
  savedVideosList: [],
  saveVideo: () => {},
  changeTheme: () => {},
  activeItem: 'HOME',
  onChangeActive: () => {},
})

export default NxtContext
