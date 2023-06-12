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
  ViewsContainer,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {videoDet, isDark} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = videoDet
  const date = new Date(publishedAt)
  const FormatTime = formatDistanceToNow(date).slice(-7)
  const fontColor = isDark ? '#ffffff' : '#383838'
  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
      <VideoItemContainer>
        <ThumbNail src={thumbnailUrl} alt="video thumbnail" />
        <ProfileCont>
          <TitleContainer>
            <Title fontColor={fontColor}>{title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <ViewsContainer>
              <ViewsContent>{viewCount} views .</ViewsContent>
              <ViewsContent>{publishedAt}</ViewsContent>
            </ViewsContainer>
          </TitleContainer>
        </ProfileCont>
      </VideoItemContainer>
    </Link>
  )
}

export default TrendingVideoItem
