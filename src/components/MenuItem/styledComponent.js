import styled from 'styled-components'

export const MenuItem = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
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
