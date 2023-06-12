import {Link} from 'react-router-dom'
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
        return (
          <Link to={path} style={{textDecoration: 'none'}}>
            <MenuItem onClick={ChangeActive} color={activeColor}>
              {icon}
              <MenuTitle color={activeColor}>{title}</MenuTitle>
            </MenuItem>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default MenuItems
