// import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      // <Scene>
      //   <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
      //   <Entity particle-system={{preset: 'snow'}}/>
      //   <Entity light={{type: 'point'}}/>
      //   <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
      //   <Entity text={{value: 'Hello, WebVR!'}}/>
      // </Scene>
      <a-scene>
  <a-assets>
    <audio id="click-sound" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>

    <img id="city" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg"/>
    <img id="city-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg"/>
    <img id="cubes" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg"/>
    <img id="cubes-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg"/>
    <img id="sechelt" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"/>
    <img id="sechelt-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg"/>
  </a-assets>

  <a-sky id="image-360" radius="10" src="#city"></a-sky>

  <a-entity class="link"></a-entity>

  <a-camera>
    <a-cursor
      id="cursor"
      animation__click="property: scale; from: 0.1 0.1 0.1; to: 1 1 1; easing: easeInCubic; dur: 150; startEvents: click"
      animation__clickreset="property: scale; to: 0.1 0.1 0.1; dur: 1; startEvents: animationcomplete__click"
      animation__fusing="property: scale; from: 1 1 1; to: 0.1 0.1 0.1; easing: easeInCubic; dur: 150; startEvents: fusing"></a-cursor>
  </a-camera>
</a-scene>
    </div>
  );
}

export default App;
