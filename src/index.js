import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SideNav from './nav';
import Header from './header';
import Content from './content';
import Menu from './menu';
// import App from './App';
function Result(){
  return(
    <div>
      <SideNav/>
      <Header/>
      <Content/>
      <Menu/>
    </div>
  )
}
ReactDOM.render(<Result/>,document.getElementById("root"));