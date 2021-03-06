import React, { Component } from 'react';
import './App.css';
import {Howl, } from 'howler';
import './play-button/css/style.css';


class App extends Component {
  state = {
      gong: 0,
      eq: 0
  }

  // sound = new Howl({
  //   src: ['gong.mp3','0477.mp3', ]
  // });
  gong = new Howl({
    src: ['gong.mp3'],
    autoplay: false,
    loop: false,
    volume: 1,
    onend: function() {
      console.log('Gong Finished!');
    }
  })

  yes = new Howl({
    src: ['Yes.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
      // volume  += 0.5;
    }
  });

  play =()=>{
    console.log('Play Click');
    this.gong.play();
      this.setState({ 
      gong: this.state.gong += 1,
      eq: this.state.eq +=1
    })
    console.log(this.state.eq);  
    if (this.state.eq > 4){
      if(this.yes.playing != true ){
      this.yes.play();
      this.yes.volume(1);
      } else {
        console.log('Yes Is Already Playing');
      }
   }
  }

  pause=()=>{
    console.log('Pause Click');
    this.yes.stop();
  }

  //  Play returns a unique Sound ID that can be passed
  // into any method on Howl to control that specific sound.
  // id1 = Howl.play();
  // id2 = Howl.play();
  
  // Fade out the first sound and speed up the second.
  // id1.fade(1, 0, 1000, id1);
  // id2.rate(1.5, id2);

  render() {
    return (
      <div className="App">
        <button className="play-btn" href="#" onClick={this.play} />
        <p>Would you Click Me? <br />
            I'd Click Me. </p>
        {this.state.gong}
        <footer>
          <button className="pause-btn" onClick={this.pause}>||</button>
        </footer>
      </div>
    );
  }
}

export default App;
