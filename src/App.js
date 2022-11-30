import './App.css'
import Links from './components/Links.js'
import photo from './img/eu.jpeg'
import './reset.css'

function App() {
  document.title = 'Links'
  return (
    <div className="App">
      <div className="home">
        <img className="photo" src={photo} alt="" />
        <h1 className="title">Fred</h1>
      </div>
      <Links />
    </div>
  );
}

export default App