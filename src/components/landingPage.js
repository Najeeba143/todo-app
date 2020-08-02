import React, {Component} from "react";
import {Link} from "react-router-dom";
// import home from './components/home';


export default class LandingPage extends Component {
render(){
    return(
        <div class="header1">
        <a href="#default" class="logo">CompanyLogo</a>
        <div class="header-right">
          <a class="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>         


    )
  }
}   
//     render() {
//         return (
//             <div>
//                 <Link to={"/register"}>
//                     <button  >
//                         Register
//                     </button>
//                 </Link>
//             </div>
//         )
//     }
// }