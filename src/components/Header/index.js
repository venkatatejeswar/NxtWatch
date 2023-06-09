import {FaMoon} from 'react-icons/fa'

import {GiHamburgerMenu} from 'react-icons/gi'

import {GrLogout} from 'react-icons/gr'

import {GoLightBulb} from 'react-icons/go'

import {Component} from 'react'

import {
  HeaderContainer,
  Navbar,
  Logo,
  MenuContainer,
  ThemeButton,
  MenuButton,
  LogoutButton,
  ProfileIcon,
  LogoutBtn,
} from './styledComponents'

class Header extends Component {
  state = {isDark: false}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const bgColor = isDark ? '#181818' : ' #f9f9f9'
    const logoColor = isDark ? ' #f9f9f9' : '#181818'
    const logo = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    return (
      <Navbar bgColor={bgColor}>
        <Logo src={logo} alt="logo" />
        <MenuContainer>
          <ThemeButton
            type="button"
            onClick={this.changeTheme}
            data-testid="theme"
          >
            {isDark ? (
              <GoLightBulb size={30} color={logoColor} />
            ) : (
              <FaMoon size={30} color={logoColor} />
            )}
          </ThemeButton>
          <MenuButton type="button">
            <GiHamburgerMenu size={30} color={logoColor} />
          </MenuButton>
          <LogoutButton type="button">
            <GrLogout size={30} color={logoColor} />
          </LogoutButton>
          <ProfileIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          <LogoutBtn>Logout</LogoutBtn>
        </MenuContainer>
      </Navbar>
    )
  }
}

export default Header
