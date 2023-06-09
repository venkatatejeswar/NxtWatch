import {FaSearch} from 'react-icons/fa'
import {AiOutlineLike, AiOutlineDislike, AiOutlineSave} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import ReactPlayer from 'react-player'
import {Loader} from 'react-loader-spinner'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import Menu from '../MenuSection'

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
  ReactionBtn,
  HorizontalRule,
  ProfileCont,
  ProfileIcon,
  ProfileDetailsCont,
  ProfileName,
  Subscribers,
  Description,
} from './styledComponent'

class VideoItemDetails extends Component {
  state = {isDark: false, videoDetails: {}, isLoading: true}

  componentDidMount() {
    this.renderVideos()
  }

  renderVideos = async () => {
    this.setState({isLoading: true})
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
    const data = await response.json()
    console.log(data)
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
    this.setState({videoDetails, isLoading: false})
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderVideosList = () => {
    const {videoDetails} = this.state
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
    const date = new Date(publishedAt)
    console.log(thumbnailUrl)
    const formattedDate = formatDistanceToNow(date)
    return (
      <VideosContainer>
        <VideoPlayer>
          <ReactPlayer url={videoUrl} controls width="95%" />
        </VideoPlayer>
        <VideoTitle>{title}</VideoTitle>
        <VideoDetailsContainer>
          <ViewsContainer>
            {viewCount} views . {formattedDate.slice(6)} ago
          </ViewsContainer>
          <ReactionsContainer>
            <ReactionBtn>
              <AiOutlineLike size={25} /> Like
            </ReactionBtn>
            <ReactionBtn>
              <AiOutlineDislike size={25} /> Dislike
            </ReactionBtn>
            <ReactionBtn>
              <AiOutlineSave size={25} /> Save
            </ReactionBtn>
          </ReactionsContainer>
        </VideoDetailsContainer>
        <HorizontalRule />
        <ProfileCont>
          <ProfileIcon src={channel.profileImageUrl} alt="profile" />
          <ProfileDetailsCont>
            <ProfileName>{channel.name}</ProfileName>
            <Subscribers>{channel.subscriberCount} subscribers</Subscribers>
            <Description>{description}</Description>
          </ProfileDetailsCont>
        </ProfileCont>
      </VideosContainer>
    )
  }

  render() {
    const {isDark, isLoading} = this.state
    const bgColor = isDark ? '#181818' : ' #f9f9f9'
    const logo = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    return (
      <AppContainer bgColor={bgColor}>
        <Header />
        <HomeContainer bgColor={bgColor}>
          <Menu />
          <VideosSection bgColor={bgColor}>
            {isLoading ? this.renderLoadingView : this.renderVideosList()}
          </VideosSection>
        </HomeContainer>
      </AppContainer>
    )
  }
}

export default VideoItemDetails
