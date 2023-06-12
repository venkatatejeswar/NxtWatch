import {AiFillHome, AiFillFire, AiFillSave} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'
import NxtContext from '../../context/NxtContext'
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

const Menu = () => (
  <NxtContext.Consumer>
    {value => {
      const {isDark} = value
      const bgColor = isDark ? '#181818' : ' #f9f9f9'
      const color = isDark ? ' #f9f9f9' : ' #475569'
      return (
        <MenuContainer bgColor={bgColor}>
          <MenuSection>
            <MenuItem key="home">
              <AiFillHome size={20} color="#606060" />
              <Link to="/">
                <MenuTitle color={color}>Home</MenuTitle>
              </Link>
            </MenuItem>
            <MenuItem key="trending">
              <AiFillFire size={20} color="#606060" />
              <Link to="/trending">
                <MenuTitle color={color}>Trending</MenuTitle>
              </Link>
            </MenuItem>
            <MenuItem key="gaming">
              <SiYoutubegaming size={20} color="#606060" />
              <Link to="/gaming">
                <MenuTitle color={color}>Gaming</MenuTitle>
              </Link>
            </MenuItem>
            <MenuItem key="saved videos">
              <AiFillSave size={20} color="#606060" />

              <Link to="/saved-videos">
                <MenuTitle color={color}>Saved Videos</MenuTitle>
              </Link>
            </MenuItem>
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
