import * as React from "react";
import {AppLoading} from "expo";
import NavBar from "./shared/NavBar";
import Header from "./shared/Header";



export default class App extends React.Component {

  render() {
    return (
      <>
        <Header /> 
        <NavBar /> 
      </>
        
      
    );
  }
}


