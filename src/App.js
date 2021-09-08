import ImageSlider from './comp/ImageSlider';
import SilderData from './comp/slider-data.json';


import './style/app.scss';

function App() {
  return (
    <div className="App">
        <h1>Nuvolum Slider</h1>
        <div className="app-sub-title">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis architecto neque illum eius error, totam mollitia reiciendis officiis quis magnam?
          </p>
      </div>
      <div className="app-context">
        <ImageSlider silderData={SilderData}/>
      </div>
    </div>
  );
}

export default App;
