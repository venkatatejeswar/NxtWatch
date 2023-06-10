import {FaSearch} from 'react-icons/fa'

import {GrFormClose} from 'react-icons/gr'
import {AiFillFire} from 'react-icons/ai'

import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Menu from '../MenuSection'
import GamingVideoItem from '../GamingVideoItem'
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

class Gaming extends Component {
  state = {videosList: []}

  componentDidMount() {
    this.renderVideos()
  }

  renderVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const videosList = data.videos.map(video => ({
      id: video.id,
      thumbnailUrl: video.thumbnail_url,
      title: video.title,
      viewCount: video.view_count,
    }))
    this.setState({videosList})
  }

  renderPremiumImg = isDark => {
    const bgColor = isDark ? '#212121' : '#f1f1f1'
    const titleColor = isDark ? '#f1f1f1' : '#212121'
    return (
      <PremiumSubContainer bgColor={bgColor} data-testid="banner">
        <PremiumLogoContainer>
          <AiFillFire size={40} color=" #ff0b37" />
        </PremiumLogoContainer>
        <PremiumTitle titleColor={titleColor}> Gaming </PremiumTitle>
      </PremiumSubContainer>
    )
  }

  renderVideosList = isDark => {
    const {videosList} = this.state
    const bgColor = isDark ? '#000000' : '#f1f1f160'
    return (
      <VideosContainer bgColor={bgColor}>
        {videosList.map(video => (
          <GamingVideoItem videoDet={video} key={video.id} />
        ))}
      </VideosContainer>
    )
  }

  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? '#0f0f0f' : ' #f9f9f9'
          const logo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <AppContainer data-testid="gaming" bgColor={bgColor}>
              <Header />
              <HomeContainer bgColor={bgColor}>
                <Menu />
                <VideosSection>
                  {this.renderPremiumImg(isDark)}
                  {this.renderVideosList(isDark)}
                </VideosSection>
              </HomeContainer>
            </AppContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Gaming
