import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 90vw;
  max-width: 1000px;
  padding: 25px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const ThumbNail = styled.img`
  width: 50%;
  max-height: 300px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
export const ProfileCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
`
export const Title = styled.p`
  color: ${props => props.fontColor};
  font-size: 14px;
  font-weight: 600;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 20px;
`
export const ChannelName = styled.p`
  color: #7e858e;
  font-size: 15px;
  margin-top: 0px;
`
export const ViewsContent = styled.p`
  color: #7e858e;
  font-size: 14px;
  margin-top: 0px;
  font-weight: 600;
`
export const ViewsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
