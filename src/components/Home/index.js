import {FaSearch} from 'react-icons/fa'

import {GrFormClose} from 'react-icons/gr'

import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Menu from '../MenuSection'
import VideoItem from '../VideoItem'

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
} from './styledComponents'

class Home extends Component {
  state = {isDark: false, searchVal: '', videosList: []}

  componentDidMount() {
    this.renderVideos()
  }

  renderVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {searchVal} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchVal}`
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
      channel: {
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
      },
      publishedAt: video.published_at,
      thumbnailUrl: video.thumbnail_url,
      title: video.title,
      viewCount: video.view_count,
    }))
    this.setState({videosList})
  }

  onSearchInput = event => {
    this.setState({searchVal: event.target.value}, this.renderVideos)
  }

  renderPremiumImg = () => (
    <PremiumSubContainer>
      <PremiumLogoContainer>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="logo"
        />
        <GrFormClose size={25} />
      </PremiumLogoContainer>
      <PremiumTitle>Buy Nxt Watch Premium Prepaid Plans with UPI</PremiumTitle>
      <GetNowBtn>GET IT NOW</GetNowBtn>
    </PremiumSubContainer>
  )

  renderHomeContent = () => (
    <HomeContentContainer>
      <HomeSearchContainer>
        <HomeSearch placeholder="Search" onChange={this.onSearchInput} />
        <SearchIconBtn>
          <FaSearch size={15} />
        </SearchIconBtn>
      </HomeSearchContainer>
    </HomeContentContainer>
  )

  renderVideosList = () => {
    const {videosList} = this.state
    return (
      <VideosContainer>
        {videosList.map(video => (
          <VideoItem videoDet={video} key={video.id} />
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
            {this.renderHomeContent()}
            {this.renderVideosList()}
          </VideosSection>
        </HomeContainer>
      </>
    )
  }
}

export default Home
