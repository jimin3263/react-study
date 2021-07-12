import './App.css';
import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";


/*
class Subject extends Component{
  render(){
    return(
        <header>
            <h1>WEB</h1>
            world wide web !
        </header>
    );
  }
}
*/

class Subject extends Component{
  render(){
    return(
        <header>
            <h1>{this.props.title}</h1>
            {this.props.sub}
        </header>
    );
  }
}


class App extends Component{
  //render보다 먼저 실행되면서 component를 초기화 시켜주는 코드
  constructor(props){
    super(props);
    this.state = {
      subject:{title:"WEB",sub:"world wode web!"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is HyperText .."},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc: "JavaScript is for interactive"}
      ]
    }
  }
  render(){
    return(
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub ={this.state.subject.sub}>
        </Subject>   
        <TOC data={this.state.contents}></TOC>
        <Content></Content>
      </div>
    );
  }
}


export default App;
