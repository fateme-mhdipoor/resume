// import "./App.css";

// function App() {

//   let greeting = name => <h1>hello {name} :D</h1>
//   return [
//     <div className="red" tabIndex="1">
//       {greeting ('fateme')}
//     </div>,
//     <div className="box" style={{backgroundColor: 'red'}}/>

//   ];
// }

// export default App;

// import React, {Component} from "react"
// const FistComponent = () => <h1>سلام</h1>
// export default FistComponent

// import React, { Component } from "react";
// import Welcome from "./Component/welcome"

// class Name2 extends Component {
//   render(){
//     return <h2> fadat :D </h2>;
//   }
// }

// class FistComponet extends Component {
//   render() {
//     const Name = "fateme";
//     return (
//       <div className="red">
//         <h1> hello {Name} </h1>
//         <Name2 />
//         <Welcome name="joojoo" IQ={150} />
//         <Welcome name="nanas" IQ={100} />
//       </div>
//     );
//   }
// }
// export default FistComponet;

// import React, { Component } from "react";

// class FirstComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: new Date(),
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.tick(), 1000);
//   }

//   tick() {
//     this.setState({
//       time: new Date(),
//     });
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   toggleWatch() {
//     if (this.state.pause) {
//       this.interval = setInterval(() => this.tick(), 1000);
//       this.setState({
//         pause: false,
//       });
//     } else {
//       clearInterval(this.interval);
//       this.setState({
//         pause: true,
//       });
//     }
//   }

//   render() {
//     return (
//       <div onClick={() => this.toggleWatch()}  className="red">
//         <h1>time is : {this.state.time.toLocaleTimeString()} :)</h1>
//       </div>
//     );
//   }
// }

// export default FirstComponent;

import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import "./App.css";
import data from "./data.json";
import Fullpage from "./Component/fullpage";
import TitleAndIcons from "./sections/titleandicons";
import AboutSection from "./sections/aboutsection";
import SkillSection from "./sections/skillsection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation" />
        <TitleAndIcons />
        <AboutSection />
        <SkillSection />
      </div>
    );
  }
}
export default App;
