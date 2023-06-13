import {Link} from 'react-router-dom'

import {AiFillHome, AiFillFire, AiFillSave} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import NxtContext from '../../context/NxtContext'
import {MenuItem, MenuTitle} from './styledComponent'

const MenuItems = props => {
  const {menu} = props
  const {id, title, icon, path} = menu
  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark, onChangeActive, activeItem} = value
        const bgColor = isDark ? '#181818' : ' #f9f9f9'
        const icolor = isDark ? ' #f9f9f9' : ' #475569'
        const activeColor = activeItem === id ? '#ff0000' : icolor
        const ChangeActive = () => {
          onChangeActive(id)
        }
        const menuIcons = {
          home: <AiFillHome size={20} color={activeColor} />,
          trending: <AiFillFire size={20} color={activeColor} />,
          gaming: <SiYoutubegaming size={20} color={activeColor} />,
          saved: <AiFillSave size={20} color={activeColor} />,
        }
        return (
          <Link to={path} style={{textDecoration: 'none'}}>
            <MenuItem onClick={ChangeActive} color={activeColor}>
              {menuIcons[id]}
              <MenuTitle color={activeColor}>{title}</MenuTitle>
            </MenuItem>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default MenuItems
