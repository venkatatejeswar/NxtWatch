import styled from 'styled-components'

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
export const VideosSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const PremiumSubContainer = styled.div`
  background-color: #f1f1f1;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  margin-top: 15px;
`
export const PremiumLogoContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cbd5e1;
`
export const PremiumTitle = styled.p`
  color: #212121;
  font-size: 22px;
  font-weight: 700;
  margin-left: 20px;
`
export const GetNowBtn = styled.button`
  padding: 10px;
  border: 1px solid #1e293b;
  background-color: transparent;
  color: #475569;
  font-weight: 600;
`
export const HomeContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 25px;
`

export const HomeSearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const HomeSearch = styled.input`
  width: 70%;
  max-width: 460px;
  height: 30px;
`
export const SearchIconBtn = styled.button`
  width: 40px;
  height: 30px;
`

export const VideosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f1f1f160;
`
