import React, { Component } from 'react';
import './App.css';

class App extends Component{
  render(){
  
    return(
    
        <div>
            <nav>
              About
              Projects
              Contact
            </nav>
          <main>
            <h1>Heather Runyon </h1>
            <h2>Software Engineer</h2>
         
            <div>
              <h3>About me</h3>
              
              <p>I am currently a student at General Assembly taking the Software Engineering Immersive bootcamp.  I love learning about all the different languages and expanding my knowledge.  Previously I worked as a Hearing Instrument Specialist and decided I was ready for a change.  I also have a bachelor's degree from the University of Illinois at Urbana Champaign.  When I am not coding you can find me camping in the Rocky Mountains and going on all sorts of fun adventures in the wild.
              </p>
          
            </div>
            <div>
              <h3>Take a look at all my fun projects</h3>
                  <div class="grid">
                      {/* <img src="https://image.flaticon.com/icons/svg/1086/1086470.svg" alt="hammer icon"> */}
                      <p>Under Construction</p>
                      {/* <img src="https://image.flaticon.com/icons/svg/394/394574.svg" alt="hammer icon"> */}
                  </div>
            </div>
            <div id="contact">
              <h3>Do you want to get in touch?</h3>
              <p>Email me at <a href="mailto:hrocco25@gmail.com">hrocco25@gmail.com</a></p>
              {/* <a href="mailto:hrocco25@gmail.com"><img src = "https://image.flaticon.com/icons/svg/181/181535.svg" alt = 'email icon'></a> */}
              
              {/* <a href="https://github.com/hrocco25" target="_blank"><img src= "https://image.flaticon.com/icons/svg/25/25231.svg" alt= 'github icon'/></a> */}
              
              {/* <a href="https://www.linkedin.com/in/heather-runyon-97718750/" target="_blank"><img src="https://image.flaticon.com/icons/svg/1384/1384014.svg" alt="linkedin icon"></a> */}
          </div>
          </main>
                <footer>
                    <p>Heather Runyon © 2019</p>
                </footer>
  
            
        
            
         
        </div>
      
      
    )
  }
}



export default App;