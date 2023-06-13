import NxtContext from '../../context/NxtContext'
import MenuItems from '../MenuItem'
import {
  MenuContainer,
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
    path: '/',
  },
  {
    id: 'trending',
    title: 'Trending',
    path: '/trending',
  },
  {
    id: 'gaming',
    title: 'Gaming',
    path: '/gaming',
  },
  {
    id: 'saved',
    title: 'Saved Videos',
    path: '/saved-videos',
  },
]

const Menu = () => (
  <NxtContext.Consumer>
    {value => {
      const {isDark} = value
      const bgColor = isDark ? '#181818' : ' #f9f9f9'
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
