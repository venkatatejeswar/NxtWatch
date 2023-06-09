import {FaSearch} from 'react-icons/fa'

import {GrFormClose} from 'react-icons/gr'
import {AiFillFire} from 'react-icons/ai'

import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Menu from '../MenuSection'
import GamingVideoItem from '../GamingVideoItem'

import {
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
  state = {isDark: false, searchVal: '', videosList: []}

  componentDidMount() {
    this.renderVideos()
  }

  renderVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {searchVal} = this.state
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

  renderPremiumImg = () => (
    <PremiumSubContainer>
      <PremiumLogoContainer>
        <AiFillFire size={40} color=" #ff0b37" />
      </PremiumLogoContainer>
      <PremiumTitle> Gaming </PremiumTitle>
    </PremiumSubContainer>
  )

  renderVideosList = () => {
    const {videosList} = this.state
    return (
      <VideosContainer>
        {videosList.map(video => (
          <GamingVideoItem videoDet={video} key={video.id} />
        ))}
      </VideosContainer>
    )
  }

  render() {
    const {isDark} = this.state
    const bgColor = isDark ? '#181818' : ' #f9f9f9'
    const logo = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    return (
      <>
        <Header />
        <HomeContainer bgColor={bgColor}>
          <Menu />
          <VideosSection>
            {this.renderPremiumImg()}
            {this.renderVideosList()}
          </VideosSection>
        </HomeContainer>
      </>
    )
  }
}

export default Gaming
