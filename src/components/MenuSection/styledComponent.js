import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${props => props.bgColor};
  width: 20vw;
  min-height: 90vh;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MenuSection = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style-type: none;
  width: 100%;
`
export const MenuItem = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const MenuTitle = styled.button`
  font-size: 16px;
  color: ${props => props.color};
  font-weight: 500;
  padding: 10px;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`
export const ContactsTitle = styled.p`
  color: #1e293b;
  font-size: 18px;
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`
export const ContactDesc = styled.p`
  color: #475569;
  font-size: 16px;
  font-weight: 500;
`
