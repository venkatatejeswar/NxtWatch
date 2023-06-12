import {AiFillHome, AiFillFire, AiFillSave} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'
import NxtContext from '../../context/NxtContext'
import MenuItems from '../MenuItem'
import {
  MenuContainer,
  MenuItem,
  MenuTitle,
  MenuSection,
  ContactsTitle,
  LogoContainer,
  Logo,
  ContactDesc,
} from './styledComponent'

const menuContent = [
  {
    id: 'home',
    title: 'Home',
    icon: <AiFillHome size={20} color="#606060" />,
    path: '/',
  },
  {
    id: 'trending',
    title: 'Trending',
    icon: <AiFillFire size={20} color="#606060" />,
    path: '/trending',
  },
  {
    id: 'gaming',
    title: 'Gaming',
    icon: <SiYoutubegaming size={20} color="#606060" />,
    path: '/gaming',
  },
  {
    id: 'saved',
    title: 'Saved Videos',
    icon: <AiFillSave size={20} color="#606060" />,
    path: '/saved-videos',
  },
]

const Menu = () => (
  <NxtContext.Consumer>
    {value => {
      const {isDark, onChangeActive, activeItem} = value
      const bgColor = isDark ? '#181818' : ' #f9f9f9'
      const color = isDark ? ' #f9f9f9' : ' #475569'
      return (
        <MenuContainer bgColor={bgColor}>
          <MenuSection>
            {menuContent.map(each => (
              <MenuItems key={each.id} menu={each} />
            ))}
          </MenuSection>
          <MenuSection>
            <ContactsTitle>CONTACT US</ContactsTitle>
            <LogoContainer>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </LogoContainer>
            <ContactDesc>
              Enjoy! Now to see your channels and recommendations!
            </ContactDesc>
          </MenuSection>
        </MenuContainer>
      )
    }}
  </NxtContext.Consumer>
)
export default Menu
