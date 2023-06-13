import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import {
  VideoItemContainer,
  ThumbNail,
  ProfileCont,
  ProfileImg,
  Title,
  ChannelName,
  TitleContainer,
  ViewsContent,
  ViewsCont,
} from './styledComponents'

const VideoItem = props => {
  const {videoDet, themeMode} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = videoDet
  const date = new Date(publishedAt)
  const FormatTime = formatDistanceToNow(date)
  const fontColor = themeMode ? '#ffffff' : '#383838'
  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
      <VideoItemContainer>
        <ThumbNail src={thumbnailUrl} alt="video thumbnail" />
        <ProfileCont>
          <ProfileImg src={channel.profileImageUrl} alt="channel logo" />
          <TitleContainer>
            <Title fontCol={fontColor}>{title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <ViewsCont>
              <ViewsContent>{viewCount} views .</ViewsContent>
              <ViewsContent>{publishedAt}</ViewsContent>
            </ViewsCont>
          </TitleContainer>
        </ProfileCont>
      </VideoItemContainer>
    </Link>
  )
}

export default VideoItem
