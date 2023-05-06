
import './App.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ParticlesBg from 'particles-bg'
import 'tachyons'
function App() {
  return (
    <div className="App">
      <ParticlesBg className='' type="cobweb" bg={true} />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      {/* <ImageLinkForm/>
      <FaceRecognition/> */}
    </div>
  );
}

export default App;
