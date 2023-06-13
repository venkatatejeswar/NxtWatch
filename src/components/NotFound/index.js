import {Component} from 'react'
import Header from '../Header'
import Menu from '../MenuSection'
import NxtContext from '../../context/NxtContext'

import {
  AppContainer,
  HomeContainer,
  NoVideosContainer,
  NovideoImage,
  NoVideoTitle,
  NoVideoDesc,
} from './styledComponent'

class NotFound extends Component {
  renderNotFoundView = isDark => {
    const bgColor = isDark ? '#181818' : ' #f9f9f9'
    const textColor = isDark ? '#ffffff' : '#424242'
    const image = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
    return (
      <NoVideosContainer bgColor={bgColor}>
        <NovideoImage src={image} alt="Not Found Image" />
        <NoVideoTitle textColor={textColor}>Page Not Found</NoVideoTitle>
        <NoVideoDesc>
          we are sorry, the page you requested could not be found.
        </NoVideoDesc>
      </NoVideosContainer>
    )
  }

  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark, savedVideosList} = value
          const bgColor = isDark ? '#0f0f0f' : ' #f9f9f9'
          const isNoSaved = savedVideosList.length === 0
          console.log(isNoSaved)
          return (
            <AppContainer data-testid="savedVideos" bgColor={bgColor}>
              <Header />
              <HomeContainer bgColor={bgColor}>
                <Menu />
                {this.renderNotFoundView(isDark)}
              </HomeContainer>
            </AppContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default NotFound
