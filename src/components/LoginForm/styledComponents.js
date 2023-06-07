import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgcolor};
`
export const FormContainer = styled.form`
  width: 360px;
  min-height: 400px;
  border-radius: 20px;
  box-shadow: 0px 0px 6px 6px ${props => props.bgcolor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
  background-color: ${props => props.bgcolor};
`

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Logo = styled.img`
  width: 140px;
  margin: 20px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 5px;
`
export const Label = styled.label`
  font-size: 14px;
  color: #94a3b890;
  font-weight: bold;
`
export const Input = styled.input`
  width: 95%;
  height: 30px;
  margin-top: 15px;
  margin-bottom: 30px;
  margin-left: 5px;
  font-weight: 400;
`

export const CheckBoxCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const CheckBox = styled.input`
  width: 20px;
`
export const CheckLabel = styled.label`
  font-size: 14px;
  color: ${props => props.colour};
  font-weight: 600;
`
export const LoginBtnContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginBtn = styled.button`
  background-color: #4f46e5;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  outline: none;
  width: 80%;
  padding: 10px;
  color: #ffffff;
  font-size: 16px;
  margin-top: 10px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 16px;
  font-weight: 500;
`
