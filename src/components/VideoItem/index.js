import {
  VideoItemContainer,
  ThumbNail,
  ProfileCont,
  ProfileImg,
  Title,
  ChannelName,
  TitleContainer,
} from './styledComponents'

const VideoItem = props => {
  const {videoDet} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = videoDet
  console.log(videoDet)
  return (
    <VideoItemContainer>
      <ThumbNail src={thumbnailUrl} alt="thumbnail" />
      <ProfileCont>
        <ProfileImg src={channel.profileImageUrl} alt="profile" />
        <TitleContainer>
          <Title>{title}</Title>
          <ChannelName>{channel.name}</ChannelName>
        </TitleContainer>
      </ProfileCont>
    </VideoItemContainer>
  )
}

export default VideoItem
