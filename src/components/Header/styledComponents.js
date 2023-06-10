import styled from 'styled-components'

export const HeaderContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.bgColor};
`

export const Navbar = styled.nav`
  max-width: 100vw;
  min-height: 80px;
  padding: 15px;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const Logo = styled.img`
  width: 140px;
  height: 40px;
`
export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;
`

export const ThemeButton = styled.button`
  width: 60px;
  height: 40px;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`
export const MenuButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ProfileIcon = styled.img`
  width: 37px;
  height: 37px;
  margin-left: 15px;
  margin-right: 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutBtn = styled.button`
  width: 80px;
  color: #3b82f6;
  border: 1px solid #3b82f6;
  padding: 10px;
  font-weight: 600;
  background-color: transparent;
  border-radius: 4px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #00306e;
  font-weight: 700;
`
export const Popupbutton = styled.button`
  width: 80px;
  padding: 8px;
  color: #7e858e;
  border: 1px solid #7e858e;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  border-radius: 2px;
`

export const PopupLogoutbutton = styled.button`
  width: 80px;
  padding: 8px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: #3b82f6;
  font-size: 14px;
  border-radius: 2px;
`

export const PopupBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin: 20px;
`
