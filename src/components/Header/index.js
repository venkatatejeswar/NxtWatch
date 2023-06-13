import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrLogout, GrFormClose} from 'react-icons/gr'
import {FiLogOut} from 'react-icons/fi'
import {CgSun} from 'react-icons/cg'
import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import NxtContext from '../../context/NxtContext'
import MenuItems from '../MenuItem'

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
  MenuItemsContainer,
  CloseBtnContainer,
  Closebutton,
} from './styledComponents'

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
          <Link to="/">
            <Logo src={logo} alt="website logo" />
          </Link>
          <MenuContainer>
            <ThemeButton
              type="button"
              onClick={onChangeTheme}
              data-testid="theme"
            >
              {isDark ? (
                <CgSun size={30} color={logoColor} />
              ) : (
                <FaMoon size={30} color={logoColor} />
              )}
            </ThemeButton>

            <Popup
              modal
              trigger={
                <MenuButton type="button">
                  <GiHamburgerMenu size={30} color={logoColor} />
                </MenuButton>
              }
              contentStyle={{width: '95%', borderRadius: '10px'}}
            >
              {close => (
                <PopupContainer bgColor={bgColor}>
                  <CloseBtnContainer>
                    <Closebutton
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      <GrFormClose size={25} />
                    </Closebutton>
                  </CloseBtnContainer>
                  <MenuItemsContainer>
                    {menuContent.map(each => (
                      <MenuItems key={each.id} menu={each} />
                    ))}
                  </MenuItemsContainer>
                </PopupContainer>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <LogoutButton type="button">
                  <FiLogOut size={30} color={logoColor} />
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
                      Cancel
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
                      Cancel
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
