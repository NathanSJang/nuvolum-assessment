import ImageSlider from './comp/ImageSlider';
import SilderData from './comp/slider-data.json';


import './style/app.scss';

function App() {
  return (
    <div className="App">
      <ImageSlider silderData={SilderData}/>
    </div>
  );
}

export default App;
