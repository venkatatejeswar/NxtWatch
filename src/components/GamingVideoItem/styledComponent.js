import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  max-width: 330px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    max-width: 220px;
  }
`
export const ThumbNail = styled.img`
  width: 95%;
  max-height: 300px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
export const ProfileCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 95%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
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

export const ViewsContent = styled.p`
  color: #7e858e;
  font-size: 14px;
  margin-top: 0px;
  font-weight: 600;
`
