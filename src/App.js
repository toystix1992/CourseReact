import './App.css';
import Settings from './components/Main/Settings/Settings';
import Music from './components/Main/Music/Music';
import News from './components/Main/News/News';
import Dialogs from './components/Main/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Main/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrpper">
        <Header />
        <Nav />
        <div className="app-wrpper-content">
          <Route path='/Profile' component={Profile} />
          <Route path='/Dialogs' component={Dialogs} />
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
