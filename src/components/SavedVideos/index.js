import {AiFillSave} from 'react-icons/ai'

import {Component} from 'react'
import Header from '../Header'
import Menu from '../MenuSection'
import TrendingVideoItem from '../TrendingVideoItem'
import NxtContext from '../../context/NxtContext'

import {
  AppContainer,
  HomeContainer,
  VideosSection,
  PremiumSubContainer,
  PremiumLogoContainer,
  PremiumTitle,
  VideosContainer,
  NoVideosContainer,
  NovideoImage,
  NoVideoTitle,
  NoVideoDesc,
} from './styledComponent'

class SavedVideos extends Component {
  renderPremiumImg = isDark => {
    const bgColor = isDark ? '#212121' : '#f1f1f1'
    const titleColor = isDark ? '#f1f1f1' : '#212121'
    return (
      <PremiumSubContainer bgColor={bgColor} data-testid="banner">
        <PremiumLogoContainer>
          <AiFillSave size={40} color=" #ff0b37" />
        </PremiumLogoContainer>
        <PremiumTitle titleColor={titleColor}>Saved Videos</PremiumTitle>
      </PremiumSubContainer>
    )
  }

  renderVideosList = (isDark, savedVideosList) => {
    const bgColor = isDark ? '#000000' : '#f1f1f160'
    return (
      <VideosContainer bgColor={bgColor}>
        {savedVideosList.map(video => (
          <TrendingVideoItem
            videoDet={video}
            key={video.id}
            isTrending="true"
          />
        ))}
      </VideosContainer>
    )
  }

  renderNoVideosView = isDark => {
    const bgColor = isDark ? '#181818' : ' #f9f9f9'
    const textColor = isDark ? '#ffffff' : '#424242'
    return (
      <NoVideosContainer bgColor={bgColor}>
        <NovideoImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
        <NoVideoTitle textColor={textColor}>No saved videos found</NoVideoTitle>
        <NoVideoDesc>You can save your videos while watching them</NoVideoDesc>
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
          return (
            <AppContainer data-testid="savedVideos" bgColor={bgColor}>
              <Header />
              <HomeContainer bgColor={bgColor}>
                <Menu />
                {isNoSaved ? (
                  this.renderNoVideosView(isDark)
                ) : (
                  <VideosSection>
                    {this.renderPremiumImg(isDark)}
                    {this.renderVideosList(isDark, savedVideosList)}
                  </VideosSection>
                )}
              </HomeContainer>
            </AppContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default SavedVideos
