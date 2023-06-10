import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NxtContext from './context/NxtContext'
import './App.css'

class App extends Component {
  state = {savedVideosList: [], isDark: false}

  saveVideo = video => {
    const {savedVideosList} = this.state
    const idList = savedVideosList.map(vid => vid.id)
    if (!idList.includes(video.id)) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, video],
      }))
    }
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  render() {
    const {savedVideosList, isDark} = this.state
    return (
      <NxtContext.Provider
        value={{
          isDark,
          savedVideosList,
          saveVideo: this.saveVideo,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
        </Switch>
      </NxtContext.Provider>
    )
  }
}

export default App
