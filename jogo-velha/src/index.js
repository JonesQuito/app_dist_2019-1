import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';



ReactDOM.render(
    <App />,
    document.getElementById('root')
);










/*
class Board extends React.Component{
    renderSquare(i){
      return <Square value={i}/>
    }
  }
  
  class Square extends React.Component{
    render(){
      return (
        <button className="square">
          {this.props.value}
        </button>
      )
    }
  }
*/