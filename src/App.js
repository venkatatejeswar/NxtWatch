import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import NxtContext from './context/NxtContext'
import './App.css'

const hamburgerItems = {
  home: 'home',
  trending: 'trending',
  saved: 'saved',
  gaming: 'gaming',
}

class App extends Component {
  state = {savedVideosList: [], isDark: false, activeItem: ''}

  saveVideo = video => {
    const {savedVideosList} = this.state
    const idList = savedVideosList.map(vid => vid.id)
    if (!idList.includes(video.id)) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, video],
      }))
    } else {
      this.setState(prevState => ({
        savedVideosList: prevState.savedVideosList.filter(
          each => each.id !== video.id,
        ),
      }))
    }
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  changeActiveItem = id => {
    console.log(hamburgerItems[id])
    this.setState({activeItem: hamburgerItems[id]})
  }

  render() {
    const {savedVideosList, isDark, activeItem} = this.state
    return (
      <NxtContext.Provider
        value={{
          isDark,
          savedVideosList,
          activeItem,
          saveVideo: this.saveVideo,
          changeTheme: this.changeTheme,
          onChangeActive: this.changeActiveItem,
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
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtContext.Provider>
    )
  }
}

export default App
