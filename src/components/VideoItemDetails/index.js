import {FaSearch} from 'react-icons/fa'
import {AiOutlineLike, AiOutlineDislike, AiOutlineSave} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import Menu from '../MenuSection'
import NxtContext from '../../context/NxtContext'

import {
  HomeContainer,
  VideosSection,
  VideosContainer,
  AppContainer,
  VideoPlayer,
  VideoTitle,
  VideoDetailsContainer,
  ViewsContainer,
  ReactionsContainer,
  LikeBtn,
  DislikeBtn,
  SaveBtn,
  HorizontalRule,
  ProfileCont,
  ProfileIcon,
  ProfileDetailsCont,
  ProfileName,
  Subscribers,
  Description,
  NoVideosContainer,
  NovideoImage,
  NoVideoTitle,
  NoVideoDesc,
  RetryBtn,
} from './styledComponent'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiConstants.initial,
    Like: false,
    Dislike: false,
  }

  componentDidMount() {
    this.renderVideos()
  }

  renderVideos = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const videoDetails = {
        id: data.video_details.id,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
        description: data.video_details.description,
      }
      this.setState({videoDetails, apiStatus: apiConstants.success})
    } else {
      this.setState({
        apiStatus: apiConstants.failure,
      })
    }
  }

  onRetry = () => {
    this.renderVideos()
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
          Oops! Something Went Wrong
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
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onLikeReaction = () => {
    this.setState({
      Like: true,
      Dislike: false,
    })
  }

  onDislikeReaction = () => {
    this.setState({Like: false, Dislike: true})
  }

  renderVideosList = (isDark, saveVideo, savedVideosList) => {
    const {videoDetails, Like, Dislike} = this.state
    const bgColor = isDark ? '#000000' : '#f1f1f160'
    const textColor = isDark ? '#ffffff' : '#424242'
    const {
      id,
      channel,
      publishedAt,
      thumbnailUrl,
      title,
      viewCount,
      videoUrl,
      description,
    } = videoDetails
    const isSaved = savedVideosList.map(each => each.id).includes(id)
    const saveStyle = isSaved ? '#2563eb ' : ' #64748b '
    const likeStyle = Like ? '#2563eb ' : ' #64748b '
    const dislikeStyle = Dislike ? '#2563eb ' : ' #64748b '
    const saveText = isSaved ? 'Saved' : 'Save'
    const date = new Date(publishedAt)
    const formattedDate = formatDistanceToNow(date)
    const onSaveVideo = () => {
      saveVideo(videoDetails)
    }
    return (
      <VideosContainer bgColor={bgColor}>
        <VideoPlayer>
          <ReactPlayer url={videoUrl} controls width="95%" />
        </VideoPlayer>
        <VideoTitle titleColor={textColor}>{title}</VideoTitle>
        <VideoDetailsContainer>
          <ViewsContainer>{viewCount} views .</ViewsContainer>
          <ViewsContainer>{formattedDate.slice(6)} ago</ViewsContainer>
          <ReactionsContainer>
            <LikeBtn onClick={this.onLikeReaction} likeStyle={likeStyle}>
              <AiOutlineLike size={25} /> Like
            </LikeBtn>
            <DislikeBtn
              onClick={this.onDislikeReaction}
              dislikeStyle={dislikeStyle}
            >
              <AiOutlineDislike size={25} /> Dislike
            </DislikeBtn>
            <SaveBtn onClick={onSaveVideo} saveStyle={saveStyle}>
              <AiOutlineSave size={25} /> {saveText}
            </SaveBtn>
          </ReactionsContainer>
        </VideoDetailsContainer>
        <HorizontalRule />
        <ProfileCont>
          <ProfileIcon src={channel.profileImageUrl} alt="channel logo" />
          <ProfileDetailsCont>
            <ProfileName textColor={textColor}>{channel.name}</ProfileName>
            <Subscribers>{channel.subscriberCount} subscribers</Subscribers>
            <Description>{description}</Description>
          </ProfileDetailsCont>
        </ProfileCont>
      </VideosContainer>
    )
  }

  renderViews = (isDark, saveVideo, savedVideosList) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderVideosList(isDark, saveVideo, savedVideosList)
      case apiConstants.failure:
        return this.renderFailureView(isDark)
      case apiConstants.loading:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {isLoading} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark, saveVideo, savedVideosList} = value
          const bgColor = isDark ? '#0f0f0f' : '#f9f9f9 '
          const logo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <AppContainer bgColor={bgColor} data-testid="videoItemDetails">
              <Header />
              <HomeContainer bgColor={bgColor}>
                <Menu />
                <VideosSection bgColor={bgColor}>
                  {this.renderViews(isDark, saveVideo, savedVideosList)}
                </VideosSection>
              </HomeContainer>
            </AppContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default VideoItemDetails
