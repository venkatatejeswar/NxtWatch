import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${props => props.bgColor};
  padding: 20px;
`

export const Navbar = styled.nav`
  width: 100vw;
  min-height: 10vh;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ThemeButton = styled.button`
  width: 60px;
  height: 40px;
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

export const NoVideosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const NovideoImage = styled.img`
  width: 50%;
`
export const NoVideoTitle = styled.h1`
  color: #1e293b;
  font-size: 32px;
  color: ${props => props.textColor};
`
export const NoVideoDesc = styled.p`
  color: #475569;
  font-size: 18px;
  font-weight: 600;
`
