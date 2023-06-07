import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 95%;
  max-width: 600px;
  margin: 25px;
  @media screen and (min-width: 768px) {
    max-width: 330px;
  }
`
export const ThumbNail = styled.img`
  width: 100%;
`
export const ProfileCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 20px;
`
export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
`
export const Title = styled.p`
  color: #383838;
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
export const ChannelName = styled.h1`
  color: #7e858e;
  font-size: 15px;
  margin-top: 0px;
`
