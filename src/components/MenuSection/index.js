import {Component} from 'react'
import {AiFillHome, AiFillFire, AiFillSave} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'

import {MenuContainer, MenuItem, MenuTitle} from './styledComponent'

class Menu extends Component {
  state = {isDark: false}

  render() {
    const {isDark} = this.state
    const bgColor = isDark ? '#181818' : ' #f9f9f9'
    const color = isDark ? ' #f9f9f9' : ' #475569'
    return (
      <MenuContainer bgColor={bgColor}>
        <MenuItem>
          <AiFillHome size={20} color="#606060" />
          <MenuTitle color={color}>Home</MenuTitle>
        </MenuItem>
        <MenuItem>
          <AiFillFire size={20} color="#606060" />
          <MenuTitle color={color}>Trending</MenuTitle>
        </MenuItem>
        <MenuItem>
          <SiYoutubegaming size={20} color="#606060" />
          <MenuTitle color={color}>Gaming</MenuTitle>
        </MenuItem>
        <MenuItem>
          <AiFillSave size={20} color="#606060" />
          <MenuTitle color={color}>Saved Videos</MenuTitle>
        </MenuItem>
      </MenuContainer>
    )
  }
}

export default Menu
