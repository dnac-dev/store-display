import { useParams } from 'react-router-dom';

import './App.css';

import Slider from './Slider';

import contentManifest from '../assets/images/content-manifest';

const App = () => {
  const { display } = useParams();

  return (
    <div className="App">
      <Slider contentSrc={contentManifest[display]} />
    </div>
  );
};

export default App;
