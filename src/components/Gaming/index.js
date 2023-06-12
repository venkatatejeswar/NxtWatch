import {FaSearch} from 'react-icons/fa'

import {GrFormClose} from 'react-icons/gr'
import {AiFillFire} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
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
  FailureVideosContainer,
  FailureVideoImage,
  FailureVideoTitle,
  FailureVideoDesc,
  RetryBtn,
  LoaderContainer,
} from './styledComponent'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Gaming extends Component {
  state = {videosList: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.renderVideos()
  }

  renderVideos = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      this.setState({videosList, apiStatus: apiConstants.success})
    } else {
      this.setState({
        apiStatus: apiConstants.failure,
      })
    }
  }

  onRetry = () => {
    this.renderVideos()
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

  renderFailureView = isDark => {
    const bgColor = isDark ? '#181818' : ' #f9f9f9'
    const textColor = isDark ? '#ffffff' : '#424242'
    const image = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureVideosContainer bgColor={bgColor}>
        <FailureVideoImage src={image} alt="failure view" />
        <FailureVideoTitle textColor={textColor}>
          Oops! Something Went Wrong
        </FailureVideoTitle>
        <FailureVideoDesc>
          We are having some trouble to complete your request.
          <br />
          Please try again
        </FailureVideoDesc>
        <RetryBtn onClick={this.onRetry}>Retry</RetryBtn>
      </FailureVideosContainer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#1e293b" height="50" width="50" />
    </LoaderContainer>
  )

  renderViews = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderVideosList(isDark)
      case apiConstants.failure:
        return this.renderFailureView(isDark)
      case apiConstants.loading:
        return this.renderLoadingView()
      default:
        return null
    }
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

export default Gaming
