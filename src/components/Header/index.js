import {FaMoon} from 'react-icons/fa'

import {GiHamburgerMenu} from 'react-icons/gi'

import {GrLogout} from 'react-icons/gr'

import {GoLightBulb} from 'react-icons/go'

import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import NxtContext from '../../context/NxtContext'

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
  PopupContainer,
  Popupbutton,
  PopupBtnContainer,
  PopupLogoutbutton,
} from './styledComponents'

const Header = props => (
  <NxtContext.Consumer>
    {value => {
      const {isDark, changeTheme} = value
      const onChangeTheme = () => {
        changeTheme()
      }
      const bgColor = isDark ? '#181818' : ' #f9f9f9'
      const logoColor = isDark ? ' #f9f9f9' : '#181818'
      const logo = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      return (
        <Navbar bgColor={bgColor}>
          <Logo src={logo} alt="website logo" />
          <MenuContainer>
            <ThemeButton
              type="button"
              onClick={onChangeTheme}
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

            <Popup
              modal
              trigger={
                <LogoutButton type="button">
                  <GrLogout size={30} color={logoColor} />
                </LogoutButton>
              }
              contentStyle={{width: '340px', borderRadius: '10px'}}
            >
              {close => (
                <PopupContainer>
                  <div>
                    <p>Are you sure you want to logout?</p>
                  </div>
                  <PopupBtnContainer>
                    <Popupbutton
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      Close
                    </Popupbutton>
                    <PopupLogoutbutton
                      type="button"
                      className="trigger-button"
                      onClick={() => onClickLogout()}
                    >
                      Confirm
                    </PopupLogoutbutton>
                  </PopupBtnContainer>
                </PopupContainer>
              )}
            </Popup>

            <ProfileIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Popup
              modal
              trigger={<LogoutBtn type="button">Logout</LogoutBtn>}
              contentStyle={{width: '340px', borderRadius: '10px'}}
            >
              {close => (
                <PopupContainer>
                  <div>
                    <p>Are you sure you want to logout?</p>
                  </div>
                  <PopupBtnContainer>
                    <Popupbutton
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      Close
                    </Popupbutton>
                    <PopupLogoutbutton
                      type="button"
                      className="trigger-button"
                      onClick={() => onClickLogout()}
                    >
                      Confirm
                    </PopupLogoutbutton>
                  </PopupBtnContainer>
                </PopupContainer>
              )}
            </Popup>
          </MenuContainer>
        </Navbar>
      )
    }}
  </NxtContext.Consumer>
)
export default withRouter(Header)
