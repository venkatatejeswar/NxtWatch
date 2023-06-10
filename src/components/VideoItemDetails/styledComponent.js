import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`

export const HomeContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${props => props.bgColor};
`

export const VideosSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 90vh;
  background-color: ${props => props.bgColor};
  padding: 20px;
`

export const VideosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => props.bgColor};
  padding: 50px;
`
export const VideoPlayer = styled.div`
  width: 90%;
  margin-top: 30px;
  margin-bottom: 30px;
`
export const VideoTitle = styled.h1`
  color: ${props => props.titleColor};
  font-size: 18px;
  font-weight: 600;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 900px;
`
export const ViewsContainer = styled.p`
  color: #606060;
  font-size: 14px;
  font-weight: 600;
`
export const ReactionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const LikeBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.likeStyle};
`

export const DislikeBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #606060;
  color: ${props => props.dislikeStyle};
`
export const SaveBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.saveStyle};
  font-weight: 600;
`
export const HorizontalRule = styled.hr`
  color: #606060;
  width: 100%;
  margin-left: 0px;
`
export const ProfileCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  margin: 20px;
`
export const ProfileDetailsCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ProfileName = styled.h1`
  font-size: 16px;
  color: ${props => props.textColor};
`
export const Subscribers = styled.p`
  color: #606060;
  font-size: 13px;
  margin-top: 0px;
`
export const Description = styled.p`
  font-size: 16px;
  color: #606060;
  font-weight: 400;
`
