import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './media.css';

class Media extends React.Component {
 constructor(props) {
   super(props);
    this.state = {
     input: '',
     items: [],
     total: 0
  };
   this.handleInputChange = this.handleInputChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
}
   handleInputChange = (event) => {
    this.setState({input: event.target.value})
   }
   handleSubmit = () => {
     axios.get(`https://api.github.com/search/repositories?q=tetris`,this.state.input)
       .then(res =>
        this.setState({items:res.data.items, total: res.data.total_count})
      ).catch(err => {
       alert('error')
    });
  }

// No necesitas usar el EVENT ya que no se trata de ningún formulario donde
// necesites detener el funcionamiento normal que es recargar la página
  render() {
   let itemsDOM = this.state.items.map((items)=> {
      <li key={items.id}>
         {items.name}
      </li>
   });
     return(
         <div className="App">
           <div className='form'>
              <input  value={this.state.input}
                      onChange={this.handleInputChange}/>
              <button className= "button"
                onClick = {this.handleSubmit}>
                Search
              </button>
          </div>
          <div className="results">
             <h5>Total: {this.state.total}</h5>
             <ul>{itemsDOM}</ul>
          </div>
        </div>
      )
    }
}
export default Media;