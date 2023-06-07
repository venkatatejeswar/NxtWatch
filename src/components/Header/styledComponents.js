import styled from 'styled-components'

export const HeaderContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.bgColor};
`

export const Navbar = styled.nav`
  width: 100vw;
  min-height: 10vh;
  padding: 10px;
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
