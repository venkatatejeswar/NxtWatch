import {Link} from 'react-router-dom'
import {
  VideoItemContainer,
  ThumbNail,
  ProfileCont,
  Title,
  TitleContainer,
  ViewsContent,
} from './styledComponent'

const GamingVideoItem = props => {
  const {videoDet} = props
  const {id, thumbnailUrl, title, viewCount} = videoDet
  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
      <VideoItemContainer>
        <ThumbNail src={thumbnailUrl} alt="thumbnail" />
        <ProfileCont>
          <TitleContainer>
            <Title>{title}</Title>
            <ViewsContent>{viewCount} Watching Worldwide</ViewsContent>
          </TitleContainer>
        </ProfileCont>
      </VideoItemContainer>
    </Link>
  )
}

export default GamingVideoItem
