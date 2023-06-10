import {FaSearch} from 'react-icons/fa'

import {GrFormClose} from 'react-icons/gr'
import {AiFillSave} from 'react-icons/ai'

import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Menu from '../MenuSection'
import TrendingVideoItem from '../TrendingVideoItem'
import NxtContext from '../../context/NxtContext'

import {
  AppContainer,
  HomeContainer,
  Logo,
  VideosSection,
  PremiumSubContainer,
  PremiumLogoContainer,
  PremiumTitle,
  GetNowBtn,
  HomeContentContainer,
  HomeSearch,
  HomeSearchContainer,
  SearchIconBtn,
  VideosContainer,
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
        <PremiumTitle titleColor={titleColor}> Saved Videos </PremiumTitle>
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

  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark, savedVideosList} = value
          const bgColor = isDark ? '#0f0f0f' : ' #f9f9f9'
          const logo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <AppContainer data-testid="savedVideos" bgColor={bgColor}>
              <Header />
              <HomeContainer bgColor={bgColor}>
                <Menu />
                <VideosSection>
                  {this.renderPremiumImg(isDark)}
                  {this.renderVideosList(isDark, savedVideosList)}
                </VideosSection>
              </HomeContainer>
            </AppContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default SavedVideos
