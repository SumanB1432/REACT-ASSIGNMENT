import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
class Logo extends React.Component{
  render(){
    return <div className='logo'>
    <img src='https://pngimg.com/uploads/google/google_PNG19636.png' width={300} height={95}></img>
    </div>
    
  }
}
class Wordbox extends React.Component{
  render(){
    return <div className='box'>
      <div className='mick-logo'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/1200px-Google_mic.svg.png' height={20}></img>
      </div>
    </div>
  }
}
class Button extends React.Component{
  render(){
    return <div className='button'>
      <button type='button'>Google Search</button>
    </div>
  }
}
class LuckeyButton extends React.Component{
  render(){
    return <div className='Luckeybutton'>
      <button type='button'>I'm Feeling Luckey</button>
    </div>
  }
}
class LanguageNote extends React.Component{
  render(){

    return <div className='Language'>
      <h4>Google.ca offerd in:Francais</h4>
    </div>
  }
}
root.render(
  <React.StrictMode>
    <Logo/>
    <Wordbox/>
    <Button/>
    <LuckeyButton/>
    <LanguageNote/>
  </React.StrictMode>
);


