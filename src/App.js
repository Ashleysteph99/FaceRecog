import React, {Component} from 'react';
import Particles from 'react-particles-js';
import FaceDisplay from './Components/FaceRecog/FaceDisplay.js';

import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import Clarifai from 'clarifai';
import './App.css';

const particleparams = {

      "particles": {
          "number": {
              "value": 100,
              "density": 12
          },
          "size": {
              "value": 3
          }
      },
      
      
}


const app = new Clarifai.App(
{
  apiKey:'b76ca5e7db1a44f1bd1ef9afc525975b'
})

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      input:'',
      imageUrl:'',
      box:{},
    }
  }

  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions.map( (box) => { return box.region_info.bounding_box})
    //const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log("Height: ",height,"  Width: ",width)
    
      const box = clarifaiFace.map((face) => {
 return {
 leftCol: face.left_col * width,
 topRow: face.top_row * height,
 rightCol: width - (face.right_col * width),
 bottomRow: height - (face.bottom_row * height)
 }
 
 }
 
 );
 return box;
  }

  displayFacebox = (box) =>{
    console.log(box);
    this.setState({box:box});
  }
  onInputChange = (event) =>{
    this.setState({input:event.target.value});
    
    this.setState({imageUrl:this.state.input});
    
  }

  onButtonSubmit = () => {
    console.log('click');
    this.setState({imageUrl:this.state.input});
    console.log("Image URL",this.state.imageUrl);
  
 
    app.models
      .predict(
        'f76196b43bbd45c99b4f3cd8e8b40a8a',
        this.state.imageUrl
      )
      .then(response => this.displayFacebox(this.calculateFaceLocation(response)) )
       /* console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );*/
      
      .catch(err => console.log(err));
       
  }

  render() {

  return (
   <div className="app">
   <Particles 
     className="particles"
     params={particleparams} />
     
     
     <Rank />
     <ImageLinkForm 
       onInputChange={this.onInputChange} 
       onButtonSubmit={this.onButtonSubmit} />
     <FaceDisplay 
       box={this.state.box}
       input={this.state.input} />
   </div>
  );

  }
}

export default App;
