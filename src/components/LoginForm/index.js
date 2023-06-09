import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookie from 'js-cookie'
import NxtContext from '../../context/NxtContext'

import {
  LoginContainer,
  FormContainer,
  LogoContainer,
  Logo,
  InputContainer,
  Label,
  Input,
  CheckBox,
  CheckBoxCont,
  CheckLabel,
  LoginBtn,
  LoginBtnContainer,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onUsernameInput = e => {
    this.setState({username: e.target.value})
  }

  onPasswordInput = e => {
    this.setState({password: e.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookie.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrMsg: true, errorMsg})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showErrMsg, errorMsg, username, password} = this.state
    const jwtToken = Cookie.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value
          const {showPassword} = this.state
          const theme = isDark ? '#181818' : ' #f9f9f9'
          const formtheme = isDark ? '#0f0f0f' : '#f8fafc'
          const checkboxLabel = isDark ? '#ffffff' : '#181818'
          const passwordType = showPassword ? 'text' : 'password'
          return (
            <LoginContainer bgcolor={theme}>
              <FormContainer bgcolor={formtheme} onSubmit={this.onFormSubmit}>
                <LogoContainer>
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                </LogoContainer>
                <InputContainer>
                  <Label htmlFor="username">USERNAME</Label>
                  <Input
                    type="text"
                    placeholder="Username"
                    onChange={this.onUsernameInput}
                    id="username"
                    value={username}
                  />
                  <Label htmlFor="password">PASSWORD</Label>
                  <Input
                    type={passwordType}
                    placeholder="Password"
                    onChange={this.onPasswordInput}
                    id="password"
                    value={password}
                  />
                  <CheckBoxCont>
                    <CheckBox
                      type="checkbox"
                      onChange={this.onShowPassword}
                      id="checkbox"
                    />
                    <CheckLabel colour={checkboxLabel} htmlFor="checkbox">
                      Show Password
                    </CheckLabel>
                  </CheckBoxCont>
                  <LoginBtnContainer>
                    <LoginBtn type="submit">Login</LoginBtn>
                  </LoginBtnContainer>
                  {showErrMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </InputContainer>
              </FormContainer>
            </LoginContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default LoginForm
