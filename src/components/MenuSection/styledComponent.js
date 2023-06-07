import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => props.bgColor};
  width: 20vw;
  height: 100vh;
  padding: 25px;
  padding-top: 40px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MenuItem = styled.div`
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
