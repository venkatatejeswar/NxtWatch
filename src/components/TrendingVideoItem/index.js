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
} from './styledComponents'

const TrendingVideoItem = props => {
  const {videoDet} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = videoDet
  const date = new Date(publishedAt)
  const FormatTime = formatDistanceToNow(date)
  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
      <VideoItemContainer>
        <ThumbNail src={thumbnailUrl} alt="thumbnail" />
        <ProfileCont>
          <TitleContainer>
            <Title>{title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <ViewsContent>
              {viewCount} views . {FormatTime.slice(-7)}
            </ViewsContent>
          </TitleContainer>
        </ProfileCont>
      </VideoItemContainer>
    </Link>
  )
}

export default TrendingVideoItem
