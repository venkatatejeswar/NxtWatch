import {Component} from 'react'
import {AiFillHome, AiFillFire, AiFillSave} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'
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

class Menu extends Component {
  state = {isDark: false}

  render() {
    const {isDark} = this.state
    const bgColor = isDark ? '#181818' : ' #f9f9f9'
    const color = isDark ? ' #f9f9f9' : ' #475569'
    return (
      <MenuContainer bgColor={bgColor}>
        <MenuSection>
          <MenuItem>
            <AiFillHome size={20} color="#606060" />
            <Link to="/">
              <MenuTitle color={color}>Home</MenuTitle>
            </Link>
          </MenuItem>
          <MenuItem>
            <AiFillFire size={20} color="#606060" />
            <Link to="/trending">
              <MenuTitle color={color}>Trending</MenuTitle>
            </Link>
          </MenuItem>
          <MenuItem>
            <SiYoutubegaming size={20} color="#606060" />
            <Link to="/gaming">
              <MenuTitle color={color}>Gaming</MenuTitle>
            </Link>
          </MenuItem>
          <MenuItem>
            <AiFillSave size={20} color="#606060" />

            <Link to="/saved">
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
  }
}

export default Menu
