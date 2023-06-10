import {FaSearch} from 'react-icons/fa'

import {GrFormClose} from 'react-icons/gr'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Menu from '../MenuSection'
import VideoItem from '../VideoItem'
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
  NoVideosContainer,
  NovideoImage,
  NoVideoTitle,
  NoVideoDesc,
  RetryBtn,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  novideos: 'NOVIDEOS',
}

class Home extends Component {
  state = {
    searchVal: '',
    videosList: [],
    isPremActive: true,
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.renderVideos()
  }

  renderVideos = async () => {
    this.setState({apiStatus: apiConstants.loading})
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
    if (response.ok === true) {
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
      console.log(videosList.length)
      if (videosList.length === 0) {
        this.setState({videosList, apiStatus: apiConstants.novideos})
      } else {
        this.setState({videosList, apiStatus: apiConstants.success})
      }
    }
    if (response.status === 401) {
      this.setState({
        apiStatus: apiConstants.failure,
      })
    }
  }

  onSearchInput = event => {
    this.setState({searchVal: event.target.value}, this.renderVideos)
  }

  onSearchSubmit = () => {
    this.renderVideos()
  }

  onRetry = () => {
    this.setState({searchVal: ''}, this.renderVideos)
  }

  onClosePremium = () => {
    this.setState({isPremActive: false})
  }

  renderPremiumImg = () => (
    <PremiumSubContainer data-testid="banner">
      <PremiumLogoContainer>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <GrFormClose
          size={25}
          onClick={this.onClosePremium}
          data-testid="close"
        />
      </PremiumLogoContainer>
      <PremiumTitle>Buy Nxt Watch Premium Prepaid Plans with UPI</PremiumTitle>
      <GetNowBtn>GET IT NOW</GetNowBtn>
    </PremiumSubContainer>
  )

  renderHomeContent = isDark => {
    const {searchVal} = this.state
    const bgColor = isDark ? '#181818' : ' #f9f9f9'
    const iconColor = isDark ? ' #f9f9f9' : '#181818'
    return (
      <HomeContentContainer>
        <HomeSearchContainer bgColor={bgColor}>
          <HomeSearch
            placeholder="Search"
            onChange={this.onSearchInput}
            value={searchVal}
          />
          <SearchIconBtn
            iconcolor={iconColor}
            data-testid="searchButton"
            type="button"
            onSubmit={this.onSearchSubmit}
          >
            <FaSearch size={15} />
          </SearchIconBtn>
        </HomeSearchContainer>
      </HomeContentContainer>
    )
  }

  renderVideosList = isDark => {
    const {videosList} = this.state
    const bgColor = isDark ? '#181818' : ' #f9f9f9'
    return (
      <VideosContainer bgColor={bgColor}>
        {videosList.map(video => (
          <VideoItem videoDet={video} themeMode={isDark} key={video.id} />
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
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoVideoTitle textColor={textColor}>
          No Search results found
        </NoVideoTitle>
        <NoVideoDesc>
          Try different keywords or remove search filter
        </NoVideoDesc>
        <RetryBtn onClick={this.onRetry}>Retry</RetryBtn>
      </NoVideosContainer>
    )
  }

  renderFailureView = isDark => {
    const bgColor = isDark ? '#181818' : ' #f9f9f9'
    const textColor = isDark ? '#ffffff' : '#424242'
    const image = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <NoVideosContainer bgColor={bgColor}>
        <NovideoImage src={image} alt="failure view" />
        <NoVideoTitle textColor={textColor}>
          Oops!Something Went Wrong!
        </NoVideoTitle>
        <NoVideoDesc>
          We are having some trouble to complete your request.
          <br />
          Please try again
        </NoVideoDesc>
        <RetryBtn onClick={this.onRetry}>Retry</RetryBtn>
      </NoVideosContainer>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#1e293b" height="50" width="50" />
    </div>
  )

  renderViews = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderVideosList(isDark)
      case apiConstants.novideos:
        return this.renderNoVideosView(isDark)
      case apiConstants.failure:
        return this.renderFailureView(isDark)
      case apiConstants.loading:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {isPremActive} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? '#181818' : ' #f9f9f9'
          const logo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <AppContainer data-testid="home" bgColor={bgColor}>
              <Header />
              <HomeContainer bgColor={bgColor}>
                <Menu />
                <VideosSection bgColor={bgColor}>
                  {isPremActive && this.renderPremiumImg()}
                  {this.renderHomeContent(isDark)}
                  {this.renderViews(isDark)}
                </VideosSection>
              </HomeContainer>
            </AppContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Home
