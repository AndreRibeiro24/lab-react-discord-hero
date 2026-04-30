// src/App.jsx
import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import backgroundImg from './assets/discord-background.png'



function App() {
  return (
    <>
    <div className="navbar">
      <img alt="discord-logo" src={discordLogo} className="logo"></img>
      <img alt="menuIcon" src={menuIcon} className="menu-icon"></img>
    </div>
    
    <div className="content">
      <h1 className="title">IMAGINE A PLACE...</h1>
      <p className="text">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
      <button className="macBtn"> Download for Mac</button>
      <button className="browserBtn"> Open Discord in your browser </button>
      <img alt="backgroundImg" src={backgroundImg} className = "background-img"></img>
    
    </div>
    
    </>
  );
  
  
}

export default App;